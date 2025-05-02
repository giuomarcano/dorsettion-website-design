"use client"

import { useEffect, useState } from "react"
import { useParams, notFound, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import catalogData from "@/app/data/catalog.json"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.productId as string
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  // Efecto para desplazarse hacia arriba cuando cambia el productId
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  useEffect(() => {
    // Buscar el producto en todas las categorías
    const foundProduct = catalogData.categories
      .flatMap((category) => category.items)
      .find((item) => item.id === productId)

    if (foundProduct) {
      setProduct(foundProduct)
      // Asegurarse de que sizes existe y tiene elementos antes de seleccionar uno
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0])
      }
    }

    setLoading(false)
  }, [productId])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "51913552052"
    const message = encodeURIComponent(
      `¡Hola! Estoy interesada en el producto ${product.name}${selectedSize ? ` en talla ${selectedSize}` : ""}. ¿Podrían darme más información?`,
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <main className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/catalogo" className="flex items-center text-black hover:text-pink-400 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al catálogo
            </Link>
            <Image src="/logotipo.png" alt="Dorsettion" width={150} height={50} className="h-auto" />
          </div>
        </div>
      </header>

      <div className="flex-1 bg-gray-50 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {product.isOffer && <Badge className="bg-pink-500 hover:bg-pink-600">OFERTA</Badge>}
                  {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">NUEVO</Badge>}
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-medium">{product.name}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-2xl font-semibold">S/ {product.price.toFixed(2)}</span>
                  {product.isOffer && <Badge className="bg-pink-500 hover:bg-pink-600">OFERTA</Badge>}
                  {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">NUEVO</Badge>}
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Descripción</h3>
                  <p className="text-gray-600">
                    {product.description ||
                      "Prenda exclusiva de la colección Dorsettion, diseñada para la mujer moderna y sofisticada."}
                  </p>
                </div>

                {!product.soldOut && (
                  <>
                    {/* Solo mostrar la sección de tallas si hay tallas disponibles */}
                    {product.sizes && product.sizes.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-2">Talla</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size: string) => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-4 py-2 border rounded-md ${
                                selectedSize === size
                                  ? "border-pink-500 bg-pink-50 text-pink-700"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-8">
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md"
                      >
                        Consultar por WhatsApp
                      </Button>
                    </div>
                  </>
                )}

                {product.soldOut && (
                  <div className="mt-6 p-4 bg-gray-100 rounded-md">
                    <p className="text-center text-gray-600">Este producto está agotado actualmente.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-light mb-6">También te puede interesar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {catalogData.categories
                .flatMap((category) => category.items)
                .filter((item) => item.id !== productId && !item.soldOut)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/catalogo/${relatedProduct.id}`} className="block">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {relatedProduct.isNew && (
                          <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">NUEVO</Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{relatedProduct.name}</h3>
                        <p className="mt-1 font-semibold">S/ {relatedProduct.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
