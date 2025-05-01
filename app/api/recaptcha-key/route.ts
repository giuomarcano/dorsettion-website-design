import { NextResponse } from "next/server"

export async function GET() {
  // Obtener la clave del sitio de reCAPTCHA
  const siteKey = process.env.RECAPTCHA_SITE_KEY

  // Si no hay clave configurada, devolver un error
  if (!siteKey) {
    console.warn("RECAPTCHA_SITE_KEY no está configurada")
    return NextResponse.json({ error: "reCAPTCHA site key not configured" }, { status: 500 })
  }

  // Devolver la clave del sitio
  return NextResponse.json({
    siteKey: siteKey,
  })
}
