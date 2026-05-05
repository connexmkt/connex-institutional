"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Dark background with noise texture */}
      <div className="absolute inset-0 bg-[#161622] noise" />
      
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Pronto para conectar sua marca ao{" "}
            <span className="text-primary">crescimento</span>?
          </h2>
          
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Entre em contato e descubra como podemos transformar sua presença digital em resultados reais.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 max-w-md mx-auto"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span>Obrigado! Entraremos em contato em breve.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="rounded-full px-6 gap-2"
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Entrar em contato
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
