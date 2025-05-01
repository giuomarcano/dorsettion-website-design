"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import ReCAPTCHA from "react-google-recaptcha"

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  asunto: z.string().min(2, { message: "El asunto debe tener al menos 2 caracteres." }),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const router = useRouter()
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string>("")

  useEffect(() => {
    // Obtener la clave del sitio de reCAPTCHA
    fetch("/api/recaptcha-key")
      .then((response) => response.json())
      .then((data) => {
        setRecaptchaSiteKey(data.siteKey)
      })
      .catch((error) => {
        console.error("Error al obtener la clave del sitio de reCAPTCHA:", error)
      })
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!captchaValue) {
      alert("Por favor, completa el captcha")
      return
    }

    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append("nombre", values.nombre)
      formData.append("email", values.email)
      formData.append("asunto", values.asunto)
      formData.append("mensaje", values.mensaje)
      formData.append("captcha", captchaValue)

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario")
      }

      form.reset()
      router.push("/contacto?success=true")
    } catch (error) {
      console.error("Error:", error)
      router.push("/contacto?error=true")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu nombre"
                    {...field}
                    disabled={isLoading}
                    className="border-gray-300 focus:border-pink-300 focus:ring-pink-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    {...field}
                    disabled={isLoading}
                    className="border-gray-300 focus:border-pink-300 focus:ring-pink-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="asunto"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Asunto</FormLabel>
              <FormControl>
                <Input
                  placeholder="Asunto de tu mensaje"
                  {...field}
                  disabled={isLoading}
                  className="border-gray-300 focus:border-pink-300 focus:ring-pink-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mensaje"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escribe tu mensaje aquí..."
                  {...field}
                  disabled={isLoading}
                  className="min-h-[150px] border-gray-300 focus:border-pink-300 focus:ring-pink-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={(value) => setCaptchaValue(value)} />
        </div>

        <Button type="submit" className="bg-black hover:bg-gray-800 text-white w-full sm:w-auto" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar mensaje"
          )}
        </Button>
      </form>
    </Form>
  )
}
