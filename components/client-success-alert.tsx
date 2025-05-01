"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Importar dinámicamente el componente SuccessAlert con la opción ssr: false
const SuccessAlert = dynamic(() => import("./success-alert").then((mod) => ({ default: mod.SuccessAlert })), {
  ssr: false,
})

interface ClientSuccessAlertProps {
  successMessage?: string
  errorMessage?: string
}

export function ClientSuccessAlert({ successMessage, errorMessage }: ClientSuccessAlertProps) {
  return (
    <Suspense fallback={<div className="h-[58px]"></div>}>
      <SuccessAlert successMessage={successMessage} errorMessage={errorMessage} />
    </Suspense>
  )
}
