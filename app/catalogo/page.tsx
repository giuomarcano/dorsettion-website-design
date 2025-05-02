"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import catalogData from "@/app/data/catalog.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState(catalogData.categories[0].name.toLowerCase())

  return (
    <main className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-black hover:text-pink-400 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1 bg-gray-50 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-light mb-4">Catálogo Dorsettion</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora nuestra colección exclusiva diseñada para la mujer moderna y sofisticada.
            </p>
            <div className="w-20 h-1 bg-pink-300 mx-auto mt-6"></div>
          </div>

          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {catalogData.categories.map((category) => (
                <TabsTrigger key={category.name} value={category.name.toLowerCase()} className="text-sm md:text-base">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {catalogData.categories.map((category) => (
              <TabsContent key={category.name} value={category.name.toLowerCase()}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      sizes={product.sizes}
                      image={product.image}
                      isOffer={product.isOffer}
                      soldOut={product.soldOut}
                      description={product.description}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">¿Prefieres ver nuestro catálogo completo en PDF? Descárgalo aquí:</p>
            <Link
              href="/catalogo.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Descargar catálogo PDF
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
