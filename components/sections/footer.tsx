"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Instagram, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#cronograma", label: "Cronograma" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/connex.mkt/",
    icon: Instagram,
    label: "Instagram",
  },
  { href: "mailto:agenciaconnex@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      className="border-t border-border"
      style={{ backgroundColor: "#17161C" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="py-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Image
                src="/escuro.jpeg"
                alt="Connex"
                width={100}
                height={32}
                className="object-contain"
                style={{ height: "auto" }}
              />
              <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                Conectamos sua marca ao que realmente importa: clientes,
                resultados e crescimento sustentável.
              </p>

              {/* Location */}
              <div className="flex flex-col gap-1 mt-3 text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-xs">Natal, RN</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-xs">Brasília, DF</span>
                </div>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Links</h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Redes Sociais</h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-5 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              © Connex 2026 - Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
