"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowDownRight } from "lucide-react";

type FaqItem = {
  id: string;
  title: string;
  content: string;
};

const faqItems: FaqItem[] = [
  {
    id: "item-1",
    title: "O que é a Connex?",
    content:
      "A Connex é um um ecossistema de mídia que une tecnologia e marketing para gerar resultados reais para marcas e pessoas que desejam se destacar. Com sede em Natal (RN) e Brasília (DF), unimos criatividade e dados para gerar resultados reais.",
  },
  {
    id: "item-2",
    title: "Quais serviços a Connex oferece?",
    content:
      "Produção de conteúdo, branding, social media, SEO, visibilidade digital e integração com tecnologias de automação para tornar seu negócio mais eficiente.",
  },
  {
    id: "item-3",
    title: "Como funciona o processo de trabalho da Connex?",
    content:
      "Nosso processo começa com um diagnóstico aprofundado do seu negócio, seguido de planejamento estratégico, execução com acompanhamento semanal e relatórios de performance transparentes. Assim, você sabe exatamente o que está sendo feito e os resultados gerados.",
  },
  {
    id: "item-4",
    title: "Quanto tempo leva para ver resultados?",
    content:
      "A partir da quarta semana, você começa a ver resultados concretos no seu negócio.",
  },
  {
    id: "item-5",
    title: "A Connex atende qualquer segmento?",
    content:
      "Sim. Atendemos desde pequenas empresas e influenciadores digitais até grandes corporações. Nossa estrutura é preparada para conectar você com outros profissionais do ecossistema.",
  },
  {
    id: "item-6",
    title: "Como acompanho os resultados?",
    content:
      "Desde a primeira semana, nossa equipe começa a monitorar os resultados e a ajustar a estratégia conforme necessário. Após a segunda semana, você recebe um painel com os resultados e acompanhamento semanal.",
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

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<string | null>("item-1");

  const toggle = (id: string) => {
    setOpen((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#161622] px-6 py-24 sm:px-12 sm:py-28 lg:px-24 lg:py-32"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              FAQ
            </h2>
            <ArrowDownRight className="h-6 w-6 text-white" strokeWidth={1.8} />
          </div>

          <div className="flex flex-col">
            {faqItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} className="border-t border-white/[0.09]">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-baseline gap-4 px-1 py-[22px] text-left"
                  >
                    <span
                      className={`w-4 shrink-0 text-[22px] leading-none ${
                        isOpen ? "font-medium text-primary" : "font-normal text-white/65"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                    <span
                      className={`text-lg font-bold uppercase tracking-wide text-balance sm:text-xl ${
                        isOpen ? "text-primary" : "text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="max-w-[70ch] py-0 pb-[26px] pr-1 pl-[34px]"
                      >
                        <p className="text-sm leading-relaxed text-white/60">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="border-t border-white/[0.09]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
