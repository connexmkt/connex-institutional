"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ConnexLogo } from "@/components/connex-logo";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#cronograma", label: "Cronograma" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:contato@connex.com.br", icon: Mail, label: "Email" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <ConnexLogo width={100} height={32} />
              <p className="text-muted-foreground mt-4 max-w-sm">
                Conectamos sua marca ao que realmente importa: clientes,
                resultados e crescimento sustentável.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Natal, RN — Brasil</span>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Connex. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Feito com 💙 em Natal, RN
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}