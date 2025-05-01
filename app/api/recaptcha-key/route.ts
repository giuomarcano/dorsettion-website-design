import { NextResponse } from "next/server"

export async function GET() {
  // Devolver la clave del sitio de reCAPTCHA usando la variable sin el prefijo NEXT_PUBLIC_
  return NextResponse.json({
    siteKey: process.env.RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", // Clave de prueba
  })
}
