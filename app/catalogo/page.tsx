"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Download } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import catalogData from "@/app/data/catalog.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function CatalogoPage() {
  // Initialize activeCategory to "all" to show all products initially
  const [activeCategory, setActiveCategory] = useState("all");

  // Function to get ALL products by flattening all categories
  // This function is now only used for the "all" tab's content
  const getAllProducts = () => {
     return catalogData.categories.reduce((acc, category) => acc.concat(category.items), []);
  };

  const allProducts = getAllProducts(); // Get all products once for the "all" tab

  return (
    <main className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-black hover:text-pink-400 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al inicio
            </Link>
            <Image src="/logotipo.png" alt="Dorsettion" width={150} height={50} className="h-auto" />
          </div>
        </div>
      </header>

      <div className="flex-1 bg-gray-50 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-light mb-4">Catálogo Dorsettion</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lencería, ropa y pijamas artesanales para mujeres que buscan estilo, comodidad y actitud.
            </p>
            <div className="w-20 h-1 bg-pink-300 mx-auto mt-6"></div>
          </div>

          {/* Opción de descarga del PDF antes de las tarjetas de productos */}
          <div className="mb-10 text-center bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">¿Prefieres ver nuestro catálogo completo en PDF? Descárgalo aquí:</p>
            <Link
              href="/catalogo.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Descargar catálogo PDF
            </Link>
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* TabsList with "Ver todo" and category tabs */}
            <TabsList className="mb-4 flex w-full gap-2 overflow-x-auto sm:justify-center px-2 py-2 border-b border-gray-200">
              {/* "Ver todo" tab */}
              <TabsTrigger value="all">Ver todo</TabsTrigger>
              {/* Category tabs */}
              {catalogData.categories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name.toLowerCase()}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content for "Ver todo" tab - shows all products */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Map directly over the allProducts array */}
                {allProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    sizes={product.sizes}
                    image={product.image}
                    isOffer={product.isOffer}
                    isNew={product.isNew}
                    soldOut={product.soldOut}
                    description={product.description}
                    // If needed, you can pass the implied category name like this:
                    // category={product.category} // This property doesn't exist
                    // Or pass the category name from the structure if needed by ProductCard:
                    // impliedCategoryName="All" // Just an example if ProductCard needed context
                  />
                ))}
              </div>
            </TabsContent>

            {/* Content for individual category tabs */}
            {catalogData.categories.map((category) => (
              <TabsContent key={category.name} value={category.name.toLowerCase()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Map directly over the items array of the current category */}
                  {category.items.map((product) => ( // <--- Changed this line
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      sizes={product.sizes}
                      image={product.image}
                      isOffer={product.isOffer}
                      isNew={product.isNew}
                      soldOut={product.soldOut}
                      description={product.description}
                      // If needed by ProductCard, pass the actual category name
                      // category={category.name}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  )
}
