"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
      "Reunião de Kick-off",
    ],
  },
  {
    week: 2,
    title: "Definição",
    icon: Palette,
    items: [
      "Definição da linha editorial",
      "Aprovação da identidade visual",
      "Alinhamento estratégico",
    ],
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
  },
  {
    week: 4,
    title: "Lançamento",
    icon: Rocket,
    items: [
      "Posts e campanhas entram no ar",
      "Início do monitoramento",
      "Otimização contínua",
    ],
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
              Um roadmap claro do início até o lançamento das suas campanhas
            </p>
          </motion.div>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeks.map((week, index) => (
              <motion.div
                key={week.week}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative bg-card rounded-2xl p-6 border border-border/50 h-full hover:border-primary/50 transition-colors">
                  {/* Week badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      S{week.week}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Semana {week.week}
                      </span>
                      <h3 className="text-lg font-semibold">{week.title}</h3>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <week.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Items */}
                  <ul className="space-y-2">
                    {week.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}