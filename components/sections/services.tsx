"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Service = {
  index: string;
  label: string;
  description: string;
};

const services: Service[] = [
  {
    index: "01",
    label: "Presença Digital",
    description:
      "Site profissional e redes sociais com impacto visual imediato. Primeira impressão que converte visitantes em clientes.",
  },
  {
    index: "02",
    label: "Campanhas de Captação",
    description:
      "Estratégias de tráfego pago e orgânico com teses bem definidas para atrair leads ativos e passivos qualificados.",
  },
  {
    index: "03",
    label: "Produção de Vídeo",
    description:
      "Do roteiro à entrega final. Criamos vídeos com equipamentos de ponta que comunicam sua marca com profissionalismo.",
  },
  {
    index: "04",
    label: "Consultoria Estratégica",
    description:
      "Mergulhamos no seu negócio para entender onde você está e traçar o caminho mais direto até onde você quer chegar.",
  },
  {
    index: "05",
    label: "Tecnologia & Gestão",
    description:
      "Do site ao painel que mostra seu crescimento em tempo real. Identidade digital com visibilidade total do negócio.",
  },
  {
    index: "06",
    label: "Conexões Estratégicas",
    description:
      "Conectamos você com clientes e parceiros do ecossistema Connex para gerar oportunidades reais de negócio.",
  },
];

const categories = ["Marketing Digital", "Estratégia", "Tecnologia"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative overflow-hidden bg-[#161622] px-8 py-24 md:px-14 lg:px-20"
    >
      {/* Background decorative letter */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[5%] top-1/2 -translate-y-[55%] select-none font-bold leading-none text-transparent"
        style={{
          fontSize: "clamp(300px, 38vw, 620px)",
          WebkitTextStroke: "1.5px rgba(91,95,232,0.12)",
        }}
      >
        S
      </span>

      {/* Bottom watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 select-none whitespace-nowrap font-bold uppercase leading-none text-transparent"
        style={{
          fontSize: "clamp(64px, 13vw, 200px)",
          WebkitTextStroke: "1px rgba(91,95,232,0.07)",
          letterSpacing: "0.02em",
        }}
      >
        CONNEX MARKETING
      </span>

      {/* Left vertical category labels */}
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-12 lg:flex">
        {categories.map((cat) => (
          <span
            key={cat}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/20"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 lg:ml-10">
        {/* Section header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/40"
          >
            Serviços
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 h-px w-12 origin-left bg-primary"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-bold uppercase leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
          >
            O Que
            <br />
            Fazemos
          </motion.h2>
        </div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div variants={itemVariants} className="group flex flex-col gap-5">
      {/* Index */}
      <span className="text-xs font-bold tracking-[0.2em] text-primary/60">
        {service.index}
      </span>

      {/* Title + arrow */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-bold capitalize leading-tight text-white">
          {service.label}.
        </h3>
        <a
          href="#contato"
          aria-label={`Saiba mais sobre ${service.label}`}
          className="mt-1 shrink-0 text-white/0 transition-colors duration-200 group-hover:text-primary"
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-primary/40" />

      {/* Description */}
      <p className="text-[clamp(0.85rem,1.1vw,0.95rem)] leading-relaxed text-white/50">
        {service.description}
      </p>

      {/* Know more link */}
      <a
        href="#contato"
        className="group/link inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-white/40 transition-colors duration-200 hover:text-primary"
      >
        Saiba mais
        <span className="block h-px w-8 bg-current transition-all duration-300 group-hover/link:w-14" />
      </a>
    </motion.div>
  );
}
