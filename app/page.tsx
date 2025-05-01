import Image from "next/image"
import Link from "next/link"
import { Download, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter-form"
import { ClientSuccessAlert } from "@/components/client-success-alert"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full py-6 px-4 border-b border-gray-200 flex justify-center">
        <div className="container max-w-6xl">
          <div className="flex justify-center md:justify-between items-center">
            <Image src="/logotipo.png" alt="Dorsettion" width={240} height={80} className="h-auto" priority />
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-black hover:text-pink-400 transition-colors">
                Inicio
              </Link>
              <Link href="/catalogo" className="text-black hover:text-pink-400 transition-colors">
                Catálogo
              </Link>
              <Link href="/contacto" className="text-black hover:text-pink-400 transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="w-full container max-w-6xl mx-auto px-4 mt-4">
        <ClientSuccessAlert
          successMessage="¡Gracias por suscribirte! Pronto recibirás nuestras novedades."
          errorMessage="Ha ocurrido un error al procesar tu suscripción. Por favor, inténtalo de nuevo."
        />
      </div>

      <section className="w-full py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Elegancia en cada detalle</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Descubre nuestra colección exclusiva diseñada para la mujer moderna y sofisticada.
          </p>
          <Link href="/catalogo">
            <Button className="bg-black hover:bg-gray-800 text-white border-0">Ver Catálogo</Button>
          </Link>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Nuestra Colección</h2>
            <div className="w-20 h-1 bg-pink-300 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] bg-gray-100 mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Imagen de Catálogo</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Colección {item}</h3>
                <p className="text-gray-600 mb-4">Descubre nuestra selección de prendas exclusivas.</p>
                <Link href="/catalogo" className="text-pink-500 hover:text-pink-700 font-medium">
                  Ver más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Explora Nuestro Catálogo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Visualiza o descarga nuestro catálogo completo para conocer todas nuestras colecciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button className="bg-black hover:bg-gray-800 text-white">Ver Online</Button>
            </Link>
            <Link href="/catalogo.pdf" target="_blank" download>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                <Download className="mr-2 h-4 w-4" /> Descargar PDF
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light mb-4">Suscríbete a nuestro boletín</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recibe nuestro catálogo mensual, promociones exclusivas y las últimas novedades directamente en tu correo.
            </p>
            <div className="w-20 h-1 bg-pink-300 mx-auto mt-4"></div>
          </div>

          <NewsletterForm />

          <div className="text-center mt-4 text-sm text-gray-500">
            <p>
              Al suscribirte, aceptas nuestra{" "}
              <Link href="/politica-privacidad" className="text-pink-500 hover:underline">
                Política de Privacidad
              </Link>
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full py-8 px-4 bg-black text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logotipo.png"
                alt="Dorsettion"
                width={180}
                height={60}
                className="h-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">Elegancia y sofisticación para la mujer moderna.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-pink-300 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/catalogo" className="text-gray-400 hover:text-pink-300 transition-colors">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-400 hover:text-pink-300 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/politica-privacidad" className="text-gray-400 hover:text-pink-300 transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>dorsettion@gmail.com</li>
                <li>+51 913 552 052</li>
                <li>Agustín Gamarra 1275, La Victoria – Stand SS-254 (Gama Moda Plaza)</li>
              </ul>

              <div className="mt-6">
                <h4 className="text-sm font-medium mb-3">Síguenos en redes sociales</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/dorsettion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/dorsettion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@dorsettion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-300 transition-colors"
                    aria-label="TikTok"
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
                      className="h-5 w-5"
                    >
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                      <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                      <path d="M15 8v8a4 4 0 0 1-4 4" />
                      <line x1="15" y1="4" x2="15" y2="12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Dorsettion. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <WhatsappButton />
    </main>
  )
}
