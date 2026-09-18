"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Imersão completa no seu negócio, concorrentes e público. Extraímos tudo que importa para não desperdiçar nem uma hora de produção.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Nossa equipe desenvolve o plano estratégico completo. Calendário, tom de voz, temas e formatos antes de produzir uma única peça.",
  },
  {
    number: "03",
    title: "Produção",
    description:
      "Criação artesanal do SETUP completo: posicionamento, identidade digital e conteúdos. Cada peça passa por rodadas de revisão antes de ser publicada.",
  },
  {
    number: "04",
    title: "Publicação & Análise",
    description:
      "Conteúdos vão ao ar no melhor horário para seu público. Monitoramos, otimizamos e entregamos relatório detalhado todo mês.",
  },
  {
    number: "05",
    title: "Tecnologia e IA aplicada ao seu negócio",
    description:
      "Conectamos CRM, automações e agentes de IA à sua operação: lead respondido na hora, follow-up sem depender de lembrete e histórico de cada conversa no mesmo lugar. A tecnologia cuida da repetição, o time cuida da decisão.",
  },
];

const CARDS_PER_PAGE = 3;
const AUTOPLAY_MS = 3000;

function buildPages(items: Step[], size: number) {
  const pages: Step[][] = [];
  for (let i = 0; i + size <= items.length; i += size - 1) {
    pages.push(items.slice(i, i + size));
  }
  const last = pages[pages.length - 1];
  if (!last || last[last.length - 1] !== items[items.length - 1]) {
    pages.push(items.slice(items.length - size));
  }
  return pages;
}

const pages = buildPages(steps, CARDS_PER_PAGE);

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
  const [page, setPage] = useState(0);

  const goTo = useCallback((next: number) => {
    setPage(((next % pages.length) + pages.length) % pages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((current) => (current + 1) % pages.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section
      id="metodologia"
      className="relative overflow-hidden bg-[#161622] px-6 py-24 sm:px-12 sm:py-28 lg:px-20 lg:py-32"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex max-w-xl flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Metodologia
              </span>
              <h2 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white text-balance sm:text-5xl">
                Como trabalhamos
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/60 text-balance lg:pt-9">
              Um processo estruturado, com trabalho real por trás de cada
              entrega — do primeiro briefing à tecnologia que sustenta o
              crescimento.
            </p>
          </div>

          {/* Cards */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {pages[page].map((step) => (
                  <StepCard key={step.number} step={step} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              {pages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir para a página ${index + 1}`}
                  className="h-1 w-8 rounded-full bg-white/15 transition-colors hover:bg-white/30"
                >
                  {index === page && (
                    <span className="block h-full w-full rounded-full bg-primary shadow-[0_0_12px_2px_rgba(91,95,232,0.7)]" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                aria-label="Etapa anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition-colors hover:border-primary/50 hover:bg-primary/15"
              >
                <ChevronLeft className="h-[18px] w-[18px]" />
              </button>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                aria-label="Próxima etapa"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition-colors hover:border-primary/50 hover:bg-primary/15"
              >
                <ChevronRight className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#14141A] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-[0_30px_70px_-30px_rgba(91,95,232,0.6)]">
      <div className="relative flex min-h-[190px] flex-col justify-end gap-4 border-b border-white/[0.07] bg-[#0A0A10] px-6 py-7">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 -top-16 h-60 w-60 rounded-full blur-[26px]"
          style={{
            background:
              "radial-gradient(circle, rgba(91,95,232,0.2), rgba(91,95,232,0) 70%)",
          }}
        />
        <span className="relative font-mono text-xs font-semibold tracking-[0.14em] text-white/45">
          {step.number}
        </span>
        <h3 className="relative text-2xl font-bold leading-tight tracking-tight text-white text-balance">
          {step.title}
        </h3>
      </div>
      <div className="flex-1 px-6 py-7">
        <p className="text-sm leading-relaxed text-white/70">
          {step.description}
        </p>
      </div>
    </article>
  );
}
