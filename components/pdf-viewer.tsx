"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Loader2 } from "lucide-react"

// Configuración necesaria para react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  pdfUrl: string
}

export function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [scale, setScale] = useState<number>(1.0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    if (pageNumber > 1) {
      changePage(-1)
    }
  }

  function nextPage() {
    if (numPages && pageNumber < numPages) {
      changePage(1)
    }
  }

  function zoomIn() {
    if (scale < 2.0) {
      setScale((prevScale) => prevScale + 0.1)
    }
  }

  function zoomOut() {
    if (scale > 0.5) {
      setScale((prevScale) => prevScale - 0.1)
    }
  }

  return (
    <div className="flex flex-col items-center">
      {loading && (
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-8 w-8 animate-spin text-pink-400" />
          <span className="ml-2">Cargando catálogo...</span>
        </div>
      )}

      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center h-96">
            <Loader2 className="h-8 w-8 animate-spin text-pink-400" />
            <span className="ml-2">Cargando catálogo...</span>
          </div>
        }
      >
        <Page
          pageNumber={pageNumber}
          scale={scale}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="shadow-md"
        />
      </Document>

      {!loading && (
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
            >
              -
            </button>
            <span>{Math.round(scale * 100)}%</span>
            <button
              onClick={zoomIn}
              disabled={scale >= 2.0}
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
            >
              +
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
            >
              Anterior
            </button>
            <span>
              Página {pageNumber} de {numPages}
            </span>
            <button
              onClick={nextPage}
              disabled={numPages !== null && pageNumber >= numPages}
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
