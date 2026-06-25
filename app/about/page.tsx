"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import {
  ArrowLeft,
  TrendingUp,
  Stethoscope,
  Code2,
  MapPin,
  Network,
  MessageCircle,
} from "lucide-react";

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

const pillars = [
  {
    icon: TrendingUp,
    area: "Marketing",
    description:
      "A sensibilidade para comunicar, posicionar e criar conexão genuína com o público — transformando presença em resultado.",
  },
  {
    icon: Stethoscope,
    area: "Founder",
    description:
      "O olhar diagnóstico para identificar o que realmente está travando um negócio antes de prescrever qualquer solução.",
  },
  {
    icon: Code2,
    area: "Engenharia de Software",
    description:
      "A precisão, a escalabilidade e o uso estratégico de tecnologia para automatizar, medir e otimizar cada etapa.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#161622] px-4 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <Button
              variant="ghost"
              size="sm"
              className="mb-8 gap-2 text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Voltar para o início
              </Link>
            </Button>

            <span className="text-sm font-medium text-primary uppercase tracking-widest block mb-6">
              Sobre nós
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
              Três perspectivas.{" "}
              <span className="text-primary">Uma agência.</span>
            </h1>
          </motion.div>
        </section>

        {/* Quem somos */}
        <Section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.span
              variants={fadeUp}
              className="text-sm font-medium text-primary uppercase tracking-widest block mb-6"
            >
              Quem somos
            </motion.span>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8"
            >
              A Connex nasceu da convergência improvável de três mentes com
              formações distintas e um objetivo comum: fazer o marketing
              trabalhar de verdade para quem empreende.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Um especialista em marketing, um médico com visão aguçada de
              negócios e um engenheiro de software perceberam que as agências
              tradicionais entregavam apenas uma parte do que uma empresa
              realmente precisa. Faltava estratégia clínica para diagnosticar
              problemas com precisão. Faltava tecnologia para escalar
              resultados. Faltava integração entre as partes.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg font-medium text-foreground leading-relaxed"
            >
              A Connex foi fundada em 2026 para preencher exatamente esse
              espaço.
            </motion.p>
          </div>
        </Section>

        {/* Propósito — fundo escuro */}
        <section className="py-24 bg-[#161622] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
          <Section className="relative z-10">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
              <motion.span
                variants={fadeUp}
                className="text-sm font-medium text-primary uppercase tracking-widest block mb-8"
              >
                Propósito
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Não somos uma agência de execução.
                <br />
                <span className="text-primary">
                  Somos parceiros de crescimento.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                A diferença está em como enxergamos cada cliente: não como um
                contrato, mas como um ecossistema de oportunidades a ser
                desenvolvido. Cada negócio tem uma lógica própria, um mercado
                específico e um potencial que ainda não foi totalmente
                explorado.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-lg font-medium text-white/80 leading-relaxed"
              >
                Nossa função é encontrar esse potencial — e construir o caminho
                até ele.
              </motion.p>
            </div>
          </Section>
        </section>

        {/* Método — 3 colunas */}
        <Section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <motion.span
                variants={fadeUp}
                className="text-sm font-medium text-primary uppercase tracking-widest block mb-4"
              >
                Método
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-5xl font-bold mb-6 text-balance"
              >
                A interseção que nos define
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                A interseção entre marketing e tecnologia não é um detalhe da
                nossa história. É o nosso método.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.area}
                  variants={fadeUp}
                  className="bg-card rounded-2xl p-8 border border-border/50 flex flex-col gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.area}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="text-center text-lg font-medium text-muted-foreground mt-14 max-w-2xl mx-auto"
            >
              O resultado é uma agência que{" "}
              <span className="text-foreground">pensa antes de executar</span> —
              e executa com consistência.
            </motion.p>
          </div>
        </Section>

        {/* Atuação — onde estamos */}
        <section className="py-24 bg-[#161622]">
          <Section className="relative z-10">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.span
                    variants={fadeUp}
                    className="text-sm font-medium text-primary uppercase tracking-widest block mb-4"
                  >
                    Atuação
                  </motion.span>
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                  >
                    Onde estamos
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="text-muted-foreground text-lg leading-relaxed mb-6"
                  >
                    Nascemos em Natal/RN, chegamos a Brasília/DF e atuamos onde
                    o seu negócio estiver.
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="text-muted-foreground text-lg leading-relaxed"
                  >
                    Atuamos de forma presencial ou remota, moldando a
                    profundidade do nosso trabalho à realidade de cada cliente.
                  </motion.p>
                </div>

                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  {[
                    { city: "Natal", state: "RN" },
                    { city: "Brasília", state: "DF" },
                  ].map((loc) => (
                    <div
                      key={loc.city}
                      className="flex items-center gap-4 bg-card/60 border border-border/50 rounded-2xl p-6"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">
                          {loc.city}/{loc.state}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </Section>
        </section>

        {/* Ecossistema */}
        <Section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="bg-card border border-border/50 rounded-3xl p-10 md:p-16">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <motion.div
                  variants={fadeUp}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <Network className="w-8 h-8 text-primary" />
                </motion.div>

                <div>
                  <motion.span
                    variants={fadeUp}
                    className="text-sm font-medium text-primary uppercase tracking-widest block mb-4"
                  >
                    Ecossistema
                  </motion.span>
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold mb-6 text-balance"
                  >
                    A Connex não conecta apenas marcas ao seu público.{" "}
                    <span className="text-primary">
                      Conecta clientes entre si.
                    </span>
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="text-muted-foreground text-lg leading-relaxed mb-4"
                  >
                    Acreditamos que os melhores negócios crescem juntos. Por
                    isso, construímos ativamente um ecossistema onde nossos
                    clientes trocam indicações, formam parcerias e geram
                    oportunidades uns para os outros.
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="text-muted-foreground text-lg leading-relaxed"
                  >
                    Quando um negócio dentro da nossa rede cresce, o ecossistema
                    inteiro se fortalece.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <section className="py-24 bg-[#161622] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent pointer-events-none" />
          <Section className="relative z-10">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
              <motion.div
                variants={fadeUp}
                className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8"
              >
                <MessageCircle className="w-7 h-7 text-primary" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance"
              >
                Se você chegou até aqui, provavelmente está buscando mais do que
                uma agência.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-lg leading-relaxed mb-10"
              >
                Está buscando um parceiro que entenda o seu negócio de verdade.
                <br />
                <span className="text-white font-medium">
                  É exatamente isso que fazemos.
                </span>
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="px-10 text-base" asChild>
                  <Link href="/#contato">Entre em contato</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 text-base"
                  asChild
                >
                  <Link href="/">Ver nossos serviços</Link>
                </Button>
              </motion.div>
            </div>
          </Section>
        </section>
      </main>
      <Footer />
    </>
  );
}
