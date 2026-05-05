"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Globe, Target } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Criação de Marca",
    description:
      "Desenvolvemos identidade visual, posicionamento estratégico e presença digital que fazem sua marca se destacar no mercado.",
  },
  {
    icon: Globe,
    title: "Presença Digital",
    description:
      "Site profissional e redes sociais com impacto visual imediato. Primeira impressão que converte visitantes em clientes.",
  },
  {
    icon: Target,
    title: "Campanhas de Captação",
    description:
      "Estratégias de tráfego pago e orgânico com teses bem definidas para atrair leads ativos e passivos qualificados.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary">
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
              Serviços
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              O que fazemos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções completas de marketing digital para impulsionar seu
              negócio
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}