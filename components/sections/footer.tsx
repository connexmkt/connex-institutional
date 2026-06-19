"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Instagram, Mail, Phone, ArrowRight, ChevronUp } from "lucide-react";

const navColumns = [
  {
    title: "Fale Conosco",
    links: [
      { href: "mailto:agenciaconnex@gmail.com", label: "agenciaconnex@gmail.com" },
      { href: "https://wa.me/5584999999999", label: "Atendimento via WhatsApp" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { href: "#servicos", label: "Produção de Conteúdo" },
      { href: "#servicos", label: "Branding" },
      { href: "#servicos", label: "Social Media" },
      { href: "#servicos", label: "SEO" },
      { href: "#servicos", label: "Visibilidade Digital" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "#historia", label: "Nossa História" },
      { href: "#metodologia", label: "Metodologia" },
      { href: "#cronograma", label: "Cronograma" },
      { href: "#provas", label: "Cases & Resultados" },
      { href: "#planos", label: "Planos" },
      { href: "#faq", label: "FAQ" },
    ],
  },
];

const socialLinks = [
  { href: "https://www.instagram.com/connex.mkt/", icon: Instagram, label: "Instagram" },
  { href: "mailto:agenciaconnex@gmail.com", icon: Mail, label: "Email" },
  { href: "https://wa.me/5584999999999", icon: Phone, label: "WhatsApp" },
];

function AccordionColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-3 pb-4"
          >
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer style={{ backgroundColor: "#17161C" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* ── DESKTOP: grid horizontal ── */}
          <div className="hidden md:flex py-14 gap-16">
            {/* Esquerda: logo + tagline + CTA */}
            <div className="flex flex-col gap-5 max-w-[220px] shrink-0">
              <Image
                src="/escuro-removebg-preview.png"
                alt="Connex"
                width={120}
                height={40}
                className="object-contain"
                style={{ height: "auto" }}
              />
              <a
                href="#contato"
                className="inline-flex items-center gap-2 self-start bg-primary text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 hover:bg-primary/90 transition-colors"
              >
                Fale com a Connex
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direita: colunas de links */}
            <div className="grid grid-cols-3 gap-8 flex-1">
              {navColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-xs text-foreground/70 hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── MOBILE: logo + acordeões ── */}
          <div className="md:hidden pt-12 pb-8 flex flex-col gap-8">
            {/* Logo centralizada */}
            <div className="flex justify-center">
              <Image
                src="/escuro-removebg-preview.png"
                alt="Connex"
                width={120}
                height={40}
                className="object-contain"
                style={{ height: "auto" }}
              />
            </div>

            {/* Acordeões */}
            <div className="flex flex-col">
              {navColumns.map((col) => (
                <AccordionColumn key={col.title} title={col.title} links={col.links} />
              ))}
            </div>

            {/* Ícones sociais centralizados */}
            <div className="flex items-center justify-center gap-8 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Barra inferior (ambos) ── */}
          <div className="py-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="hidden sm:block text-xs text-muted-foreground">
              Copyright © 2026 Connex · Todos os direitos reservados.
            </p>

            <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
              <span>Natal, RN</span>
              <span className="opacity-30">|</span>
              <span>Brasília, DF</span>
            </div>

            {/* Ícones sociais só aparecem aqui no desktop */}
            <div className="hidden md:flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
