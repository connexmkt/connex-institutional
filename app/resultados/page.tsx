"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const cases = [
  {
    logo: "/icon-fitbrands-logo.jpg",
    alt: "Logo Icon Fitbrands",
    label: "Icon Fitbrands · E-commerce",
    stat: "3x",
    title: "Mais que triplicamos o faturamento da loja",
    description:
      "Estoque zerado nas primeiras 3 semanas de atuação, somente com tráfego orgânico.",
  },
  {
    logo: "/lba-advogados-logo.png",
    alt: "Logo LBA Advogados",
    label: "LBA Advogados · Jurídico",
    stat: "100",
    title: "leads gerados",
    description:
      "Resultado obtido via tráfego pago, com conteúdo posicionado para a demanda real de quem procura advogado.",
  },
  {
    logo: "/otocentro-logo.jpg",
    alt: "Logo Clínica Otocentro",
    label: "Clínica Otocentro · Saúde",
    stat: "4.7",
    statFrom: "3.3",
    title: "Avaliação no Google de 3.3 para 4.7",
    description:
      "Colocação no top 3 das pesquisas do Google no nicho de otorrinolaringologia.",
  },
] as const;

const whatsappUrl = `https://wa.me/558499757038?text=${encodeURIComponent(
  "Olá! Vi os cases no site e quero falar sobre o meu negócio.",
)}`;

export default function ResultadosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#161622] px-4 py-28 md:py-36 min-h-[68vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 container mx-auto px-0 md:px-6 max-w-4xl"
          >
            <Button
              variant="ghost"
              size="sm"
              className="mb-10 gap-2 text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Voltar para o início
              </Link>
            </Button>

            <span className="text-sm font-medium text-primary uppercase tracking-widest block mb-8">
              Cases
            </span>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight text-balance">
              Resultados que falam por nós
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Três clientes, três problemas diferentes, o mesmo método. Veja o
              que a Connex entregou.
            </p>
          </motion.div>
        </section>

        {/* Cases */}
        <Section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
              {cases.map((item) => (
                <motion.article
                  key={item.label}
                  variants={fadeUp}
                  className="h-full bg-card border border-border/50 rounded-2xl p-8 flex flex-col items-center gap-6 text-center"
                >
                  <div className="h-14 w-14 flex items-center justify-center shrink-0">
                    <div className="h-14 w-14 rounded-[10px] overflow-hidden">
                      <Image
                        src={item.logo}
                        alt={item.alt}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                    {item.label}
                  </span>

                  <div className="flex flex-col items-center gap-3.5 w-full">
                    {"statFrom" in item ? (
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-sans font-bold text-3xl leading-none tracking-tight text-muted-foreground">
                          {item.statFrom}
                        </span>
                        <span className="text-xl text-muted-foreground">→</span>
                        <span className="font-sans font-bold text-6xl leading-none tracking-tighter text-primary">
                          {item.stat}
                        </span>
                      </div>
                    ) : (
                      <span className="font-sans font-bold text-6xl leading-none tracking-tighter text-primary">
                        {item.stat}
                      </span>
                    )}

                    <h2 className="min-h-[3.5rem] flex items-center font-sans font-semibold text-xl leading-tight tracking-tight text-foreground text-balance">
                      {item.title}
                    </h2>
                  </div>

                  <p className="flex-1 text-base text-muted-foreground leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="pb-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto bg-card border border-border/50 rounded-3xl p-8 md:p-16 flex flex-wrap items-center justify-between gap-8">
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3.5 max-w-xl"
              >
                <h2 className="font-sans font-bold text-3xl md:text-4xl leading-tight tracking-tight text-foreground text-balance">
                  Cada dia parado é cliente no concorrente
                </h2>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Button size="lg" className="px-8 gap-2 text-base" asChild>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entrar em contato
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
