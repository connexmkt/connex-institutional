"use client";

import { Faqs, FaqItem } from "@/components/ui/faqs";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-16 md:py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto flex flex-col items-center"
      >
        <Faqs
          title="Perguntas Frequentes"
          description="Respondemos as dúvidas mais comuns sobre como a Connex pode ajudar o seu negócio a crescer."
          items={faqItems}
          supportText={
            <>
              Não encontrou o que procurava?{" "}
              <a href="#contato" className="text-primary hover:underline">
                Entre em contato com nosso time
              </a>
            </>
          }
        />
      </motion.div>
    </section>
  );
}
