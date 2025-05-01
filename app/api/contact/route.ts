import { NextResponse } from "next/server"
import { Resend } from "resend"

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY)
const recipientEmail = process.env.RECIPIENT_EMAIL || "dorsettion@gmail.com"

// Función para verificar el captcha
async function verifyCaptcha(captchaValue: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  // Si no hay clave secreta configurada, omitimos la verificación en desarrollo
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY no está configurada, omitiendo verificación")
    return true
  }

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`,
    { method: "POST" },
  )

  const data = await response.json()
  return data.success
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const nombre = formData.get("nombre") as string
    const email = formData.get("email") as string
    const asunto = formData.get("asunto") as string
    const mensaje = formData.get("mensaje") as string
    const captcha = formData.get("captcha") as string

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
    }

    // Verificar captcha
    const isCaptchaValid = await verifyCaptcha(captcha)
    if (!isCaptchaValid) {
      return NextResponse.redirect(new URL("/contacto?error=true&message=captcha-invalid", request.url))
    }

    // Enviar correo
    await resend.emails.send({
      from: "Dorsettion Website <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `Formulario de contacto: ${asunto || "Sin asunto"}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto || "Sin asunto"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
      reply_to: email,
    })

    // Redireccionar a la página de contacto con un mensaje de éxito
    return NextResponse.redirect(new URL("/contacto?success=true", request.url))
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error)
    return NextResponse.redirect(new URL("/contacto?error=true", request.url))
  }
}
