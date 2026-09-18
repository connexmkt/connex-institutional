"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cases, type CaseStudy } from "@/lib/cases";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";

const whatsappUrl = `https://wa.me/558499757038?text=${encodeURIComponent(
  "Olá! Vi os cases no site e quero falar sobre o meu negócio.",
)}`;

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
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

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-[#161622] pt-20 text-white">
        <div className="relative px-6 py-24 sm:px-12 sm:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o início
            </Link>

            <div className="flex flex-col gap-16 sm:gap-[72px]">
              {/* Hero header */}
              <Reveal className="flex max-w-2xl flex-col gap-4">
                <motion.span
                  variants={fadeUp}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                >
                  Cases
                </motion.span>
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
                >
                  Resultado a gente mostra
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="max-w-xl text-base leading-relaxed text-white/60 text-balance sm:text-lg"
                >
                  Marcas que confiaram na Connex, os números que o trabalho
                  gerou e o que elas dizem sobre o processo.
                </motion.p>
              </Reveal>

              {/* Case list */}
              <Reveal className="flex flex-col gap-6">
                {cases.map((item) => (
                  <CaseCard key={item.id} item={item} />
                ))}
              </Reveal>

              {/* CTA banner */}
              <Reveal>
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col items-start gap-8 rounded-[22px] border border-primary/30 bg-[#14141A] px-6 py-8 shadow-[0_30px_70px_-40px_rgba(91,95,232,0.6)] sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-9"
                >
                  <div className="flex max-w-xl flex-col gap-2">
                    <h3 className="text-xl font-bold leading-tight tracking-tight text-balance sm:text-2xl">
                      Seu negócio pode ser o próximo case
                    </h3>
                    <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                      Conte o que você quer alcançar e montamos o plano.
                    </p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition-[filter] hover:brightness-110"
                  >
                    Fale com a Connex
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#14141A] transition-colors duration-300 hover:border-primary/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-24 h-[280px] w-[280px] rounded-full blur-[30px]"
        style={{
          background:
            "radial-gradient(circle, rgba(91,95,232,0.16), rgba(91,95,232,0) 70%)",
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_280px]">
        {/* Profile */}
        <div className="flex flex-col gap-5 border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r">
          {item.logo ? (
            <div className="h-[72px] w-[72px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0A0A10]">
              <Image
                src={item.logo}
                alt={item.name}
                width={72}
                height={72}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[18px] border border-dashed border-primary/45 bg-[#0A0A10] font-mono text-[10px] uppercase tracking-[0.1em] text-[#B6BEFF]">
              logo
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
              {item.name}
            </h3>
            <span className="text-sm text-white/50">{item.segment}</span>
          </div>
          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#B6BEFF] transition-colors hover:text-[#D6DBFF]"
            >
              Ver perfil
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        {/* Work + stats */}
        <div className="flex flex-col gap-6 border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
              O trabalho
            </span>
            <p className="max-w-[60ch] border-l-2 border-dashed border-primary/45 pl-3.5 text-sm leading-relaxed text-white/70">
              {item.work}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {item.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1.5 rounded-[14px] border border-dashed border-primary/45 bg-primary/[0.06] px-4 py-[18px] sm:px-5"
              >
                <span className="text-2xl font-extrabold tracking-tight sm:text-[32px]">
                  {stat.value ?? "+00%"}
                </span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#B6BEFF]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col gap-4 bg-white/[0.02] p-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
            Depoimento
          </span>
          <p className="text-sm leading-relaxed text-white/80 italic">
            “”
          </p>
          <div className="mt-auto flex flex-col gap-1">
            <span className="text-sm font-semibold">Nome</span>
            <span className="text-xs text-white/50">Cargo · {item.name}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
