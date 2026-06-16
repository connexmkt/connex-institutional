"use client";

import { Palette, Globe, Target } from "lucide-react";
import StoryScroll, { StorySection } from "@/components/ui/story-scroll";

const DIVIDER_LIGHT = "1px solid rgba(255,255,255,0.25)";
const DIVIDER_DARK = "1px solid rgba(22,22,34,0.2)";

function SectionDivider({ color }: { color: "light" | "dark" }) {
  return (
    <hr
      style={{
        border: "none",
        borderTop: color === "light" ? DIVIDER_LIGHT : DIVIDER_DARK,
        margin: "clamp(1.25rem, 2vw, 2.5rem) 0",
      }}
    />
  );
}

export function ServicesSection() {
  return (
    <div id="servicos">
      <StoryScroll aria-label="Serviços da Connex">
        {/* 00 — Intro */}
        <StorySection
          aria-label="Serviços"
          style={{ backgroundColor: "#5b5fe8", color: "#ffffff" }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
            Serviços
          </p>
          <SectionDivider color="light" />
          <h2 className="text-[clamp(3.5rem,12vw,13rem)] font-bold leading-[0.85] uppercase tracking-tight">
            O que
            <br />
            Fazemos
          </h2>
          <SectionDivider color="light" />
          <p className="mt-auto max-w-[48ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed opacity-90">
            Soluções completas de marketing digital para impulsionar seu
            negócio.
          </p>
        </StorySection>

        {/* 01 — Criação de Marca */}
        <StorySection
          aria-label="Criação de Marca"
          style={{ backgroundColor: "#161622", color: "#f5f2ee" }}
        >
          <div className="flex items-center gap-3">
            <Palette className="w-4 h-4 opacity-60" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
              01
            </p>
          </div>
          <SectionDivider color="light" />
          <h2 className="text-[clamp(3.5rem,6vw,13rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Criação
            <br />
            de
            <br />
            Marca
          </h2>
          <SectionDivider color="light" />
          <p className="max-w-[48ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed opacity-80">
            Desenvolvemos identidade visual, posicionamento estratégico e
            presença digital que fazem sua marca se destacar no mercado.
          </p>
          <SectionDivider color="light" />
          <div className="flex flex-wrap gap-[clamp(1.5rem,3vw,4rem)]">
            <div className="min-w-[160px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">
                Identidade Visual
              </p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed opacity-60">
                Logotipo, paleta de cores e tipografia que comunicam seus
                valores com precisão.
              </p>
            </div>
            <div className="min-w-[160px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">
                Posicionamento
              </p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed opacity-60">
                Diferencial competitivo e proposta de valor alinhados ao seu
                mercado.
              </p>
            </div>
            <div className="min-w-[160px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">
                Coerência
              </p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed opacity-60">
                Presença digital coesa em todos os pontos de contato com o
                cliente.
              </p>
            </div>
          </div>
        </StorySection>

        {/* 02 — Presença Digital */}
        <StorySection
          aria-label="Presença Digital"
          style={{ backgroundColor: "#f5f2ee", color: "#161622" }}
        >
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 opacity-50" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">
              02
            </p>
          </div>
          <SectionDivider color="dark" />
          <h2 className="text-[clamp(3.5rem,6vw,13rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Presença
            <br />
            Digital
          </h2>
          <SectionDivider color="dark" />
          <p className="max-w-[48ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed opacity-75">
            Site profissional e redes sociais com impacto visual imediato.
            Primeira impressão que converte visitantes em clientes.
          </p>
          <SectionDivider color="dark" />
          <div className="flex flex-wrap gap-[clamp(1.5rem,3vw,4rem)]">
            <div className="min-w-[160px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-40">
                Sites & Landing Pages
              </p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed opacity-55">
                Design responsivo e performance otimizada para conversão e
                retenção.
              </p>
            </div>
            <div className="min-w-[160px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-40">
                Redes Sociais
              </p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed opacity-55">
                Perfis profissionais com identidade visual consistente e
                conteúdo estratégico.
              </p>
            </div>
          </div>
        </StorySection>

        {/* 03 — Campanhas de Captação */}
        <StorySection
          aria-label="Campanhas de Captação"
          style={{ backgroundColor: "#252535", color: "#f5f2ee" }}
        >
          <div className="flex items-center gap-3">
            <Target className="w-4 h-4 opacity-60" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
              03
            </p>
          </div>
          <SectionDivider color="light" />
          <h2 className="text-[clamp(3.5rem,6vw,13rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Campanhas de
            <br />
            Captação
          </h2>
          <SectionDivider color="light" />
          <p className="max-w-[48ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed opacity-80">
            Estratégias de tráfego pago e orgânico com teses bem definidas para
            atrair leads ativos e passivos qualificados.
          </p>
          <SectionDivider color="light" />
          <div className="flex flex-wrap gap-[clamp(1.5rem,3vw,4rem)]">
            <div className="min-w-[160px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">
                Tráfego Pago
              </p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed opacity-60">
                Google Ads, Meta Ads e outras plataformas com ROI rastreado e
                otimizado.
              </p>
            </div>
            <div className="min-w-[160px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">
                SEO & Orgânico
              </p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed opacity-60">
                Estratégias de conteúdo para crescimento sustentável e
                autoridade de marca.
              </p>
            </div>
            <div className="min-w-[160px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider opacity-50">
                Leads Qualificados
              </p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed opacity-60">
                Funis de captação com segmentação precisa para atrair quem
                realmente compra.
              </p>
            </div>
          </div>
        </StorySection>
      </StoryScroll>
    </div>
  );
}
