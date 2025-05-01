import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

export default function PoliticaPrivacidad() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 border-b border-gray-200 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-black hover:text-pink-400 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver al inicio
            </Link>
            <Image src="/logotipo.png" alt="Dorsettion" width={150} height={50} className="h-auto" />
          </div>
        </div>
      </header>

      <div className="flex-1 py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4">Política de Privacidad</h1>
            <div className="w-20 h-1 bg-pink-300 mx-auto mt-6"></div>
          </div>

          <div className="prose max-w-none">
            <p>Última actualización: {new Date().toLocaleDateString()}</p>

            <h2>1. Información que recopilamos</h2>
            <p>
              En Dorsettion, recopilamos información personal cuando te suscribes a nuestro boletín, nos contactas a
              través del formulario de contacto o realizas una compra. Esta información puede incluir:
            </p>
            <ul>
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección postal (en caso de compras)</li>
            </ul>

            <h2>2. Cómo utilizamos tu información</h2>
            <p>Utilizamos la información que recopilamos para:</p>
            <ul>
              <li>Enviarte nuestro catálogo mensual y promociones exclusivas</li>
              <li>Responder a tus consultas y solicitudes</li>
              <li>Procesar y gestionar tus pedidos</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Personalizar tu experiencia en nuestra web</li>
            </ul>

            <h2>3. Protección de datos</h2>
            <p>
              Nos comprometemos a proteger la seguridad de tu información personal. Implementamos medidas técnicas y
              organizativas adecuadas para proteger tus datos contra el acceso no autorizado, la alteración, la
              divulgación o la destrucción.
            </p>

            <h2>4. Compartir información</h2>
            <p>
              No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento,
              excepto cuando sea necesario para cumplir con un servicio solicitado (como el envío de pedidos) o cuando
              sea requerido por ley.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Nuestra web utiliza cookies para mejorar tu experiencia de navegación. Puedes configurar tu navegador para
              rechazar todas las cookies o para que te avise cuando se envía una cookie. Sin embargo, si no aceptas
              cookies, es posible que no puedas utilizar algunas partes de nuestro sitio web.
            </p>

            <h2>6. Derechos del usuario</h2>
            <p>
              Tienes derecho a acceder, rectificar, limitar y eliminar tus datos personales. También puedes oponerte al
              procesamiento de tus datos o solicitar la portabilidad de los mismos. Para ejercer estos derechos, puedes
              contactarnos a través de dorsettion@gmail.com.
            </p>

            <h2>7. Cambios en la política de privacidad</h2>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio
              será publicado en esta página y, si son cambios significativos, te lo notificaremos a través de un correo
              electrónico.
            </p>

            <h2>8. Contacto</h2>
            <p>Si tienes alguna pregunta sobre esta política de privacidad, puedes contactarnos a través de:</p>
            <ul>
              <li>Email: dorsettion@gmail.com</li>
              <li>Teléfono: +51 913 552 052</li>
              <li>Dirección: Agustín Gamarra 1275, La Victoria – Stand SS-254 (Gama Moda Plaza)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
