"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, ShoppingBag, Repeat, TrendingUp } from "lucide-react";

const funnelSteps = [
  {
    icon: Users,
    title: "Atração",
    subtitle: "Leads",
    description:
      "Captação de potenciais clientes através de conteúdo e campanhas",
    accent: {
      icon: "text-indigo-300",
      blob: "from-indigo-400/20 to-blue-300/10",
      blobPosition: "-right-10 -bottom-10",
    },
  },
  {
    icon: Heart,
    title: "Retenção",
    subtitle: "Ecossistema",
    description: "Criação de conexão e engajamento com sua audiência",
    accent: {
      icon: "text-fuchsia-300",
      blob: "from-fuchsia-400/20 to-pink-300/10",
      blobPosition: "-left-10 -bottom-10",
    },
  },
  {
    icon: ShoppingBag,
    title: "Adesão",
    subtitle: "Compra por confiança",
    description: "Conversão através de relacionamento e autoridade construída",
    accent: {
      icon: "text-cyan-300",
      blob: "from-cyan-400/20 to-teal-300/10",
      blobPosition: "-right-10 -top-10",
    },
  },
  {
    icon: Repeat,
    title: "Recompra + Indicação",
    subtitle: "Fidelização",
    description: "Clientes satisfeitos que voltam e indicam sua marca",
    accent: {
      icon: "text-violet-300",
      blob: "from-violet-400/20 to-purple-300/10",
      blobPosition: "-left-10 -top-10",
    },
  },
  {
    icon: TrendingUp,
    title: "Aumento do Faturamento",
    subtitle: "Resultado",
    description: "Crescimento sustentável e escalável do seu negócio",
    accent: {
      icon: "text-emerald-300",
      blob: "from-emerald-400/20 to-green-300/10",
      blobPosition: "-right-10 -bottom-10",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Sua jornada com a Connex
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Do primeiro contato até a fidelização. Nosso funil de resultados
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {funnelSteps.map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden rounded-2xl p-6 md:p-8"
              >
                {/* Decorative gradient blob */}
                <div
                  className={`pointer-events-none absolute ${step.accent.blobPosition} h-64 w-64 rounded-full bg-gradient-to-tr ${step.accent.blob} blur-2xl`}
                />

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className={`h-5 w-5 ${step.accent.icon}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Subtitle badge */}
                <div className="mt-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground ring-1 ring-white/10">
                    {step.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
