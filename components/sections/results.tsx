"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Heart, ShoppingBag, Repeat, TrendingUp } from "lucide-react"

const funnelSteps = [
  {
    icon: Users,
    title: "Atração",
    subtitle: "Leads",
    description: "Captação de potenciais clientes através de conteúdo e campanhas",
    width: "100%",
  },
  {
    icon: Heart,
    title: "Retenção",
    subtitle: "Ecossistema",
    description: "Criação de conexão e engajamento com sua audiência",
    width: "85%",
  },
  {
    icon: ShoppingBag,
    title: "Adesão",
    subtitle: "Compra por confiança",
    description: "Conversão através de relacionamento e autoridade construída",
    width: "70%",
  },
  {
    icon: Repeat,
    title: "Recompra + Indicação",
    subtitle: "Fidelização",
    description: "Clientes satisfeitos que voltam e indicam sua marca",
    width: "55%",
  },
  {
    icon: TrendingUp,
    title: "Aumento do Faturamento",
    subtitle: "Resultado",
    description: "Crescimento sustentável e escalável do seu negócio",
    width: "40%",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="resultados" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Resultados
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              A jornada do seu cliente
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Do primeiro contato até a fidelização — nosso funil de resultados
            </p>
          </motion.div>

          {/* Funnel */}
          <div className="space-y-4">
            {funnelSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="flex justify-center"
              >
                <div
                  className="relative bg-card border border-border/50 rounded-xl p-4 md:p-5 flex items-center gap-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  style={{ width: step.width, minWidth: "280px" }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold">{step.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 hidden md:block">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  {index < funnelSteps.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 16l-6-6h12l-6 6z" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
