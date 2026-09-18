"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Instagram, Mail, ArrowRight, ChevronUp } from "lucide-react";

type FooterLink = {
  href: string | null;
  label: string;
};

const navColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Entrar em contato",
    links: [
      { href: "mailto:agenciaconnex@gmail.com", label: "agenciaconnex@gmail.com" },
      { href: "https://wa.me/558499757038", label: "Atendimento via WhatsApp" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { href: "#servicos", label: "Marketing Digital" },
      { href: "#servicos", label: "Branding" },
      { href: null, label: "Tráfego pago" },
      { href: "#servicos", label: "Tecnologia" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/about", label: "Nossa História" },
      { href: "/cases", label: "Cases" },
      { href: "#metodologia", label: "Metodologia" },
      { href: "#faq", label: "FAQ" },
    ],
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 19l1-3.2A7.2 7.2 0 1 1 8.6 18L5 19z" />
      <path d="M9.2 9.5c.3 2.2 2.1 4 4.3 4.3l1-1.2 1.7.9-.3 1.4c-2.9.5-6.4-2.9-5.9-5.9l1.4-.3.9 1.7-1.1 1.1" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/connex.mkt/", icon: Instagram, label: "Instagram" },
  { href: "mailto:agenciaconnex@gmail.com", icon: Mail, label: "Email" },
  { href: "https://wa.me/558499757038", icon: WhatsAppIcon, label: "WhatsApp" },
];

function FooterLinkItem({ link, className }: { link: FooterLink; className: string }) {
  if (!link.href) {
    return <span className={className}>{link.label}</span>;
  }
  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}

function AccordionColumn({ title, links }: { title: string; links: FooterLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-semibold tracking-tight text-primary">
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronUp className="w-3.5 h-3.5 text-white/50" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-3.5 pb-5"
          >
            {links.map((link) => (
              <li key={link.label}>
                <FooterLinkItem
                  link={link}
                  className="text-[15px] text-white/80 hover:text-white transition-colors"
                />
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
    <footer className="bg-[#161622] px-6 pt-12 pb-8 sm:px-10 sm:pt-16 lg:px-16 lg:pt-[72px]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* ── DESKTOP: grid horizontal ── */}
          <div className="hidden md:flex gap-20 items-start">
            {/* Esquerda: logo + tagline + CTA */}
            <div className="flex flex-col items-center justify-end gap-7 w-[220px] shrink-0">
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
                className="inline-flex items-center gap-2.5 self-start rounded bg-primary text-white text-sm font-bold uppercase tracking-wider px-6 py-4 hover:bg-primary/90 transition-colors"
              >
                Fale com a Connex
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direita: colunas de links */}
            <div className="grid grid-cols-3 gap-12 flex-1">
              {navColumns.map((col) => (
                <div key={col.title} className="flex flex-col gap-5">
                  <h4 className="text-[17px] font-semibold tracking-tight text-primary">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <FooterLinkItem
                          link={link}
                          className="text-[17px] leading-snug text-white/90 hover:text-white transition-colors"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── MOBILE: logo + acordeões ── */}
          <div className="md:hidden pb-4 flex flex-col gap-8">
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
            <div className="flex items-center justify-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors duration-200 hover:border-primary/60 hover:bg-primary/[0.16] hover:text-white"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Barra inferior (ambos) ── */}
          <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="hidden sm:block text-[15px] text-white/60">
              Copyright © 2026 Connex · Todos os direitos reservados.
            </p>

            <div className="hidden sm:flex items-center gap-3.5 text-[15px] text-white/60">
              <span>Natal, RN</span>
              <span className="opacity-35">|</span>
              <span>Brasília, DF</span>
            </div>

            {/* Ícones sociais só aparecem aqui no desktop */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors duration-200 hover:border-primary/60 hover:bg-primary/[0.16] hover:text-white"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
