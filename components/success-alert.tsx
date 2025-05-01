"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { CheckCircle2, XCircle, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface SuccessAlertProps {
  successMessage?: string
  errorMessage?: string
}

export function SuccessAlert({
  successMessage = "¡Operación completada con éxito!",
  errorMessage = "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
}: SuccessAlertProps) {
  const searchParams = useSearchParams()
  const [showAlert, setShowAlert] = useState(false)
  const [isSuccess, setIsSuccess] = useState(true)

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setIsSuccess(true)
      setShowAlert(true)
    } else if (searchParams.get("error") === "true") {
      setIsSuccess(false)
      setShowAlert(true)
    }

    const timer = setTimeout(() => setShowAlert(false), 5000)
    return () => clearTimeout(timer)
  }, [searchParams])

  if (!showAlert) return null

  return (
    <Alert className={`${isSuccess ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"} mb-6 relative`}>
      <div className="flex items-center">
        {isSuccess ? (
          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
        ) : (
          <XCircle className="h-4 w-4 text-red-600 mr-2" />
        )}
        <AlertDescription className={isSuccess ? "text-green-800" : "text-red-800"}>
          {isSuccess ? successMessage : errorMessage}
        </AlertDescription>
      </div>
      <button onClick={() => setShowAlert(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <X className="h-4 w-4" />
        <span className="sr-only">Cerrar</span>
      </button>
    </Alert>
  )
}
