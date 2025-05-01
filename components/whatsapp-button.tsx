"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar el botón después de 2 segundos para no distraer inmediatamente
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "51913552052" // Sin el + para el enlace
    const message = encodeURIComponent("¡Hola! Deseo más información sobre Dorsettion.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute -top-16 right-0 bg-white px-4 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        Contáctanos por WhatsApp
      </div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp.svg-1n3JOIaFhvTCdtpjxf3Q3g6INLtGVD.png"
        alt="WhatsApp"
        width={50}
        height={50}
        className="w-12 h-12 object-contain"
      />
    </button>
  )
}
