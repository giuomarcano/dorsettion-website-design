"use client"

import { useState, useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

// Importar react-pdf dinámicamente para evitar problemas de SSR
const PDFComponents = dynamic(
  () =>
    import("react-pdf").then((mod) => ({
      Document: mod.Document,
      Page: mod.Page,
      pdfjs: mod.pdfjs,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center my-8 py-16">
        <Loader2 className="animate-spin h-8 w-8 mb-4 text-pink-400" />
        <p className="text-gray-600">Cargando visor de PDF...</p>
      </div>
    ),
  },
)

interface PDFViewerProps {
  fileUrl: string
}

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [pdfReady, setPdfReady] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Configurar worker para PDF.js cuando los componentes estén cargados
  useEffect(() => {
    const setupPdf = async () => {
      try {
        const components = await PDFComponents
        if (components.pdfjs) {
          const pdfjs = components.pdfjs
          // Usar la misma versión que la API
          pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
          setPdfReady(true)
        }
      } catch (err) {
        console.error("Error setting up PDF.js:", err)
        setError("Error al cargar el visor de PDF.")
        setLoading(false)
      }
    }

    setupPdf()
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
    setError(null)
  }

  function onDocumentLoadError(error: Error) {
    console.error("Error loading PDF:", error)
    setLoading(false)
    setError("No se pudo cargar el PDF. Por favor, inténtalo de nuevo más tarde.")
  }

  const goToNextPage = () => {
    if (pageNumber < (numPages ?? 1)) {
      setPageNumber((prev) => prev + 1)
    }
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1)
    }
  }

  if (!pdfReady) {
    return (
      <div className="flex flex-col items-center justify-center my-8 py-16">
        <Loader2 className="animate-spin h-8 w-8 mb-4 text-pink-400" />
        <p className="text-gray-600">Inicializando visor de PDF...</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto p-4">
      {loading && (
        <div className="flex flex-col items-center justify-center my-8 py-16">
          <Loader2 className="animate-spin h-8 w-8 mb-4 text-pink-400" />
          <p className="text-gray-600">Cargando catálogo...</p>
        </div>
      )}

      {error && (
        <div className="text-center my-8 py-16 bg-red-50 rounded-lg p-4">
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-gray-600">
            Puedes descargar el catálogo directamente haciendo clic{" "}
            <a href={fileUrl} download className="text-pink-500 underline">
              aquí
            </a>
            .
          </p>
        </div>
      )}

      {!error && pdfReady && (
        <PDFComponents.Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<></>}
          className="pdf-document"
        >
          <PDFComponents.Page
            pageNumber={pageNumber}
            width={containerWidth > 0 ? containerWidth - 32 : undefined}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </PDFComponents.Document>
      )}

      {!loading && !error && numPages && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <button
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
          >
            Página anterior
          </button>

          <p className="text-gray-600">
            Página {pageNumber} de {numPages}
          </p>

          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
          >
            Página siguiente
          </button>
        </div>
      )}
    </div>
  )
}
