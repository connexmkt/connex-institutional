"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Palette, Camera, Rocket } from "lucide-react";

const weeks = [
  {
    week: 1,
    title: "Início",
    icon: FileText,
    items: [
      "Assinatura do contrato",
      "Criação do grupo de trabalho",
      "Reunião de Onboarding",
    ],
    effort: "Diagnóstico completo do seu mercado",
    accent: {
      icon: "text-indigo-300",
      blob: "bg-indigo-500/10",
      blobPosition: "-left-24 -top-24",
      badge: "bg-indigo-500/15 text-indigo-300 ring-indigo-500/20",
    },
  },
  {
    week: 2,
    title: "Definição",
    icon: Palette,
    items: [
      "Definição da linha editorial",
      "Aprovação da identidade digital",
      "Alinhamento estratégico",
    ],
    effort: "Tom de voz, paleta e editorial definidos",
    accent: {
      icon: "text-cyan-300",
      blob: "bg-cyan-400/10",
      blobPosition: "-right-16 -top-16",
      badge: "bg-cyan-500/15 text-cyan-300 ring-cyan-500/20",
    },
  },
  {
    week: 3,
    title: "Produção",
    icon: Camera,
    items: [
      "Produção do primeiro lote de conteúdos",
      "Revisão e aprovação",
      "Ajustes finais",
    ],
    effort: "3 rodadas de revisão incluídas",
    accent: {
      icon: "text-fuchsia-300",
      blob: "bg-fuchsia-500/10",
      blobPosition: "-bottom-24 -right-24",
      badge: "bg-fuchsia-500/15 text-fuchsia-300 ring-fuchsia-500/20",
    },
  },
  {
    week: 4,
    title: "Lançamento",
    icon: Rocket,
    items: [
      "Posts entram no ar",
      "Início do monitoramento",
      "Otimização contínua",
    ],
    effort: "Primeiros resultados em 28 dias",
    accent: {
      icon: "text-violet-300",
      blob: "bg-violet-500/10",
      blobPosition: "-bottom-16 -left-16",
      badge: "bg-violet-500/15 text-violet-300 ring-violet-500/20",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cronograma" className="py-24 md:py-32 bg-secondary">
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
              Cronograma
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              4 semanas para transformar sua marca
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um roadmap claro, com trabalho real em cada etapa — do briefing ao primeiro resultado
            </p>
          </motion.div>

          {/* Timeline Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {weeks.map((week) => (
              <motion.article
                key={week.week}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm"
              >
                {/* Decorative blur blob */}
                <div
                  className={`pointer-events-none absolute ${week.accent.blobPosition} h-56 w-56 rounded-full ${week.accent.blob} blur-3xl`}
                />

                {/* Icon */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-white/5 ring-1 ring-white/15">
                      <week.icon className={`h-5 w-5 ${week.accent.icon}`} />
                    </div>
                    <div className="pointer-events-none absolute -inset-4 rounded-full border border-white/5" />
                  </div>
                </div>

                {/* Label + Title */}
                <div className="mt-6">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Semana {week.week}
                  </span>
                  <h3 className="mt-1 text-[22px] sm:text-[24px] font-semibold tracking-tight">
                    {week.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="mt-3 space-y-2">
                  {week.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Effort badge */}
                <div className="mt-5 pt-4 border-t border-white/8">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${week.accent.badge}`}
                  >
                    <span className="h-1 w-1 rounded-full bg-current opacity-70" />
                    {week.effort}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
