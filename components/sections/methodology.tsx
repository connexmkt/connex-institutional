"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Wrench, BarChart3 } from "lucide-react";

const effortStats = [
  { value: "+40h", label: "de produção por mês" },
  { value: "3x", label: "rodadas de revisão por peça" },
  { value: "Uma equipe especializada", label: "revisa cada entrega" },
  { value: "10+", label: "conteúdos produzidos mensalmente" },
];

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Briefing",
    description:
      "Imersão completa no seu negócio, concorrentes e público. Extraímos tudo que importa para não desperdiçar nem uma hora de produção.",
    metric: "≈ 2h de imersão no seu negócio",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estratégia",
    description:
      "Nossa equipe desenvolve o plano estratégico completo. Calendário, tom de voz, temas e formatos antes de produzir uma única peça.",
    metric: "30+ dias planejados com antecedência",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Produção",
    description:
      "Criação artesanal do SETUP completo: posicionamento, identidade digital e conteúdos. Cada peça passa por rodadas de revisão antes de ser publicada.",
    metric: "+40h de produção por mês",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Publicação & Análise",
    description:
      "Conteúdos vão ao ar no melhor horário para seu público. Monitoramos, otimizamos e entregamos relatório detalhado todo mês.",
    metric: "Relatório completo todo mês",
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

export function MethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Metodologia
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Como trabalhamos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um processo estruturado, com trabalho real por trás de cada entrega
            </p>
          </motion.div>

          {/* Effort Stats Strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row mb-16 rounded-2xl bg-primary/5 border border-primary/10 overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-primary/10"
          >
            {effortStats.map((stat) => (
              <div key={stat.value} className="flex-1 flex flex-col items-center justify-center text-center px-6 py-5">
                <p className="text-2xl font-bold text-primary leading-none">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-snug">{stat.label}</p>
              </div>
            ))}
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

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {step.metric}
                      </span>
                    </div>
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
  );
}