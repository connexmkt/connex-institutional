"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cases } from "@/lib/cases";

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

export function CasesTeaserSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="clientes"
      className="relative overflow-hidden bg-[#161622] px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-28"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex max-w-xl flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Cases
            </span>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white text-balance sm:text-4xl">
              Os melhores já estão contando com a gente
            </h2>
            <p className="text-base leading-relaxed text-white/60 text-balance">
              Números e depoimentos de quem já trabalha com a Connex.
            </p>
            <Link
              href="/cases"
              className="mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-primary px-6 py-[15px] text-xs font-bold uppercase tracking-[0.1em] text-white transition-[filter] hover:brightness-110"
            >
              Ver todos os cases
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-shrink-0 items-center gap-4">
            {cases.map((item) =>
              item.logo ? (
                <div
                  key={item.id}
                  className="h-20 w-20 overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0A0A10] transition-transform duration-300 hover:-translate-y-1 sm:h-24 sm:w-24"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div
                  key={item.id}
                  className="flex h-20 w-20 items-center justify-center rounded-[20px] border border-dashed border-primary/45 bg-[#0A0A10] font-mono text-[10px] uppercase tracking-[0.1em] text-[#B6BEFF] sm:h-24 sm:w-24"
                >
                  logo
                </div>
              ),
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
