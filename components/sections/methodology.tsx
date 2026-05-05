"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Lightbulb, Wrench, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Briefing",
    description:
      "Reunião de alinhamento para extrair todas as informações necessárias sobre seu negócio e objetivos.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estratégia",
    description:
      "Nossa equipe desenvolve o plano estratégico completo e envia para sua aprovação.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Produção",
    description:
      "Criação do SETUP completo: posicionamento, identidade visual e conteúdos de manutenção.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Publicação & Análise",
    description:
      "Conteúdos vão ao ar e monitoramos resultados para otimização contínua.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function MethodologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="metodologia" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Metodologia
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Como trabalhamos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um processo estruturado para garantir resultados consistentes
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line - desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Card */}
                  <div className="relative bg-card rounded-2xl p-6 border border-border/50 h-full">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-6 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector - visible between cards on desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 bg-background border border-border rounded-full items-center justify-center z-10 -translate-y-1/2">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
