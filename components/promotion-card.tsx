import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface PromotionCardProps {
  id: string
  name: string
  price: number
  image: string
  description: string
  savings?: number
}

export function PromotionCard({ id, name, price, image, description, savings }: PromotionCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[1/1] relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <Badge className="bg-pink-500 hover:bg-pink-600">S/ {price.toFixed(2)}</Badge>
        </div>
        {savings && (
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            <Badge className="bg-green-500 hover:bg-green-600">AHORRA S/ {savings}</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg truncate">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <Link
          href={`https://wa.me/51913552052?text=Hola%2C%20me%20interesa%20la%20promoción%20de%20${encodeURIComponent(name)}%20por%20S%2F%20${price}`}
          target="_blank"
        >
          <button className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
            Comprar ahora
          </button>
        </Link>
      </div>
    </div>
  )
}
