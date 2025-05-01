import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { ClientSuccessAlert } from "@/components/client-success-alert"

export default function Contacto() {
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
          <ClientSuccessAlert
            successMessage="¡Gracias por tu mensaje! Te responderemos a la brevedad."
            errorMessage="Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo."
          />

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4">Contacto</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta sobre nuestros
              productos.
            </p>
            <div className="w-20 h-1 bg-pink-300 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-light mb-6">Información de contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-pink-400 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">dorsettion@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-pink-400 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-gray-600">
                      <a
                        href="https://wa.me/51913552052"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors"
                      >
                        +51 913 552 052
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-pink-400 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-gray-600">Agustín Gamarra 1275, La Victoria – Stand SS-254 (Gama Moda Plaza)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-light mb-4">Horario de atención</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Lunes a Jueves: 10:00 AM - 7:00 PM</p>
                  <p>Viernes, Sábado y Domingo: 9:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-light mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/dorsettion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-400 transition-colors flex items-center"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/dorsettion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-400 transition-colors flex items-center"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@dorsettion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-400 transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2"
                    >
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                      <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                      <path d="M15 8v8a4 4 0 0 1-4 4" />
                      <line x1="15" y1="4" x2="15" y2="12" />
                    </svg>
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
