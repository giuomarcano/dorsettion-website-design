"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Download, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Catalogo() {
  const [scale, setScale] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 6 // Ajusta esto según el número real de páginas de tu catálogo

  const zoomIn = () => {
    if (scale < 2) setScale((prev) => prev + 0.1)
  }

  const zoomOut = () => {
    if (scale > 0.5) setScale((prev) => prev - 0.1)
  }

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-black hover:text-pink-400 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al inicio
            </Link>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={zoomOut}
                disabled={scale <= 0.5}
                className="border-gray-200"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-500 w-16 text-center">{Math.round(scale * 100)}%</span>
              <Button variant="outline" size="icon" onClick={zoomIn} disabled={scale >= 2} className="border-gray-200">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Link href="/catalogo.pdf" target="_blank" download>
                <Button variant="outline" className="border-black text-black hover:bg-gray-100 ml-4">
                  <Download className="mr-2 h-4 w-4" /> Descargar PDF
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 bg-gray-100 py-8 px-4 overflow-auto">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-white shadow-md p-4 md:p-8 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl md:text-3xl font-light">Catálogo Dorsettion</h1>
              <div className="text-sm text-gray-500">
                Página {currentPage} de {totalPages}
              </div>
            </div>

            <div className="overflow-auto">
              <div
                className="min-h-[600px] bg-gray-50 flex items-center justify-center transition-transform duration-200 ease-in-out"
                style={{ transform: `scale(${scale})` }}
              >
                {/* Aquí se mostraría la página actual del PDF */}
                <div className="text-center p-8">
                  <p className="text-gray-400 mb-4">Vista previa del catálogo - Página {currentPage}</p>
                  <div className="aspect-[3/4] w-full max-w-md mx-auto bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Contenido del catálogo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <Button variant="outline" onClick={prevPage} disabled={currentPage <= 1} className="border-gray-200">
                Anterior
              </Button>
              <div className="flex space-x-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-full ${
                      currentPage === i + 1 ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={nextPage}
                disabled={currentPage >= totalPages}
                className="border-gray-200"
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
