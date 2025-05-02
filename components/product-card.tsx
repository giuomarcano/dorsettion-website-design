import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: string
  name: string
  price: number
  sizes?: string[] // Hacemos que sizes sea opcional
  image: string
  isOffer?: boolean
  isNew?: boolean
  soldOut?: boolean
  description?: string
}

export function ProductCard({
  id,
  name,
  price,
  sizes = [], // Valor predeterminado como array vacío
  image,
  isOffer,
  isNew,
  soldOut,
  description,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {isOffer && <Badge className="bg-pink-500 hover:bg-pink-600">OFERTA</Badge>}
          {isNew && <Badge className="bg-green-500 hover:bg-green-600">NUEVO</Badge>}
        </div>
        {soldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-medium text-lg">AGOTADO</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg truncate">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-semibold">S/ {price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">
            {sizes && sizes.length > 0 ? sizes.join(" · ") : ""}
            {description && sizes && sizes.length > 0 && " · "}
            {description && <span className="italic">{description.includes("AGOTADA") ? description : ""}</span>}
          </p>
        </div>
        {!soldOut && (
          <Link href={`/catalogo/${id}`}>
            <button className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
              Ver detalles
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
