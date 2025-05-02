"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Download } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import catalogData from "@/app/data/catalog.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? catalogData.categories.flatMap((cat) => cat.products)
      : catalogData.categories.find(
          (cat) => cat.name.toLowerCase() === activeCategory
        )?.products || []

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <header className="w-full py-4 px-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-black hover:text-pink-400 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al inicio
            </Link>
            <a
              href="/catalogo.pdf"
              download
              className="flex items-center text-sm text-black hover:text-pink-400 transition-colors"
            >
              <Download className="h-4 w-4 mr-1" />
              Descargar catálogo
            </a>
          </div>
        </div>
      </header>

      <section className="container max-w-6xl mx-auto px-4 py-6">
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
          {/* TabsList responsive */}
          <TabsList className="mb-6 flex w-full gap-2 overflow-x-auto sm:justify-center px-2 py-2 border-b border-gray-200 scrollbar-hide">
            <TabsTrigger value="all">Ver todo</TabsTrigger>
            {catalogData.categories.map((category) => (
              <TabsTrigger key={category.name} value={category.name.toLowerCase()}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Solo una TabsContent para evitar duplicación */}
          <TabsContent value={activeCategory} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
