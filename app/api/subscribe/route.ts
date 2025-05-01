import { NextResponse } from "next/server"
import { Resend } from "resend"

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY)
const recipientEmail = process.env.RECIPIENT_EMAIL || "dorsettion@gmail.com"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const email = formData.get("email") as string

    if (!email) {
      return NextResponse.json({ error: "El correo electrónico es obligatorio" }, { status: 400 })
    }

    // Enviar correo de notificación al administrador
    await resend.emails.send({
      from: "Dorsettion Website <onboarding@resend.dev>",
      to: recipientEmail,
      subject: "Nueva suscripción al boletín",
      html: `
        <h2>Nueva suscripción al boletín de Dorsettion</h2>
        <p>Email: ${email}</p>
        <p>Fecha: ${new Date().toLocaleString()}</p>
      `,
    })

    // Enviar correo de confirmación al suscriptor
    await resend.emails.send({
      from: "Dorsettion <onboarding@resend.dev>",
      to: email,
      subject: "¡Gracias por suscribirte a Dorsettion!",
      html: `
        <h2>¡Bienvenida a Dorsettion!</h2>
        <p>Gracias por suscribirte a nuestro boletín. Recibirás nuestro catálogo mensual y promociones exclusivas.</p>
        <p>Saludos,<br>Equipo Dorsettion</p>
      `,
    })

    // Redireccionar a la página principal con un mensaje de éxito
    return NextResponse.redirect(new URL("/?success=true", request.url))
  } catch (error) {
    console.error("Error al procesar la suscripción:", error)
    return NextResponse.redirect(new URL("/?error=true", request.url))
  }
}
