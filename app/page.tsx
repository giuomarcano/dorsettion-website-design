import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter-form"
import { ClientSuccessAlert } from "@/components/client-success-alert"
import { WhatsappButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"
import catalogData from "@/app/data/catalog.json"

export default function Home() {
  // Obtener productos destacados
  const featuredProductIds = catalogData.featuredProducts
  const featuredProducts = catalogData.categories
    .flatMap((category) => category.items)
    .filter((product) => featuredProductIds.includes(product.id))

  // Obtener productos nuevos (Cotton Candy)
  const newProducts = catalogData.categories.flatMap((category) => category.items).filter((product) => product.isNew)

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
          <h1 className="text-4xl md:text-5xl font-light mb-6">DORSETTION | Lencería & Hotwear Handmade</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Arte íntimo hecho a mano para mujeres que se atreven a destacar. 💋
          </p>
          <Link href="/catalogo">
            <Button className="bg-black hover:bg-gray-800 text-white border-0">Ver Catálogo</Button>
          </Link>
        </div>
      </section>

      {/* Nueva sección de promoción HOT BASICS */}
      <section className="w-full py-16 px-4 bg-pink-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4">
              PROMOCIÓN ESPECIAL
            </span>
            <h2 className="text-3xl font-light mb-4">HOT BASICS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aprovecha nuestra promoción especial en tops básicos de encaje. Disponibles en colores blanco, negro y
              rosa.
            </p>
            <div className="w-20 h-1 bg-pink-300 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paquete 1: 1 Hot Basic */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[1/1] relative">
                <Image
                  src="/images/hot-basics-promo-1.jpeg"
                  alt="1 Hot Basic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  S/ 35
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium mb-2">1 Hot Basic</h3>
                <p className="text-gray-600 mb-4">Elige tu top favorito en cualquier color disponible.</p>
                <Link
                  href="https://wa.me/51913552052?text=Hola%2C%20me%20interesa%20la%20promoción%20de%201%20Hot%20Basic%20por%20S%2F%2035"
                  target="_blank"
                >
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">Comprar ahora</Button>
                </Link>
              </div>
            </div>

            {/* Paquete 2: 2 Hot Basics */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[1/1] relative">
                <Image
                  src="/images/hot-basics-promo-2.jpeg"
                  alt="2 Hot Basics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  S/ 65
                </div>
                <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  AHORRA S/ 5
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium mb-2">2 Hot Basics</h3>
                <p className="text-gray-600 mb-4">Combina dos tops en los colores que prefieras.</p>
                <Link
                  href="https://wa.me/51913552052?text=Hola%2C%20me%20interesa%20la%20promoción%20de%202%20Hot%20Basics%20por%20S%2F%2065"
                  target="_blank"
                >
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">Comprar ahora</Button>
                </Link>
              </div>
            </div>

            {/* Paquete 3: 3 Hot Basics */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[1/1] relative">
                <Image
                  src="/images/hot-basics-promo-3.jpeg"
                  alt="3 Hot Basics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  S/ 90
                </div>
                <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  AHORRA S/ 15
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium mb-2">3 Hot Basics</h3>
                <p className="text-gray-600 mb-4">Lleva la colección completa en tus colores favoritos.</p>
                <Link
                  href="https://wa.me/51913552052?text=Hola%2C%20me%20interesa%20la%20promoción%20de%203%20Hot%20Basics%20por%20S%2F%2090"
                  target="_blank"
                >
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">Comprar ahora</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección para la colección Cotton Candy */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              NUEVA COLECCIÓN
            </span>
            <h2 className="text-3xl font-light mb-4">Cotton Candy Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra nueva colección Cotton Candy, diseñada para resaltar tu belleza con un toque dulce y
              sofisticado.
            </p>
            <div className="w-20 h-1 bg-pink-300 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                sizes={product.sizes}
                image={product.image}
                isOffer={product.isOffer}
                isNew={product.isNew}
                soldOut={product.soldOut}
                description={product.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/catalogo">
              <Button className="bg-black hover:bg-gray-800 text-white">Ver toda la colección</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Productos Destacados</h2>
            <div className="w-20 h-1 bg-pink-300 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                sizes={product.sizes}
                image={product.image}
                isOffer={product.isOffer}
                isNew={product.isNew}
                soldOut={product.soldOut}
                description={product.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/catalogo">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                Ver toda la colección
              </Button>
            </Link>
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/dorsettion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-300 transition-colors"
                    aria-label="Instagram"
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
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
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
