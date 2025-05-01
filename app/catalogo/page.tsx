"use client"
import Link from "next/link"
import { ChevronLeft, Download } from "lucide-react"
import PDFViewer from "@/components/pdf-viewer"
import { Button } from "@/components/ui/button"

export default function CatalogoPage() {
  const pdfUrl = "/catalogo.pdf" // asegúrate que esto exista en /public

  return (
    <main className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-black hover:text-pink-400 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al inicio
            </Link>
            <Link href={pdfUrl} download prefetch={false} className="flex items-center">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                <Download className="mr-2 h-4 w-4" /> Descargar PDF
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1 bg-gray-50 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden min-h-[500px]">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-light">Catálogo Dorsettion</h1>
              <p className="text-gray-500 mt-1">Explora nuestra colección exclusiva</p>
            </div>

            <PDFViewer fileUrl={pdfUrl} />
          </div>
        </div>
      </div>
    </main>
  )
}
