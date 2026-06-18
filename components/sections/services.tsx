"use client";


import StoryScroll, { StorySection } from "@/components/ui/story-scroll";

import {
  Globe,
  Target,
  type LucideIcon,
  Network,
  Monitor,
  Lightbulb,
  Video,
} from "lucide-react";

const DIVIDER_LIGHT = "1px solid rgba(255,255,255,0.25)";
const DIVIDER_DARK = "1px solid rgba(22,22,34,0.2)";

type ServiceFeature = {
  title: string;
  description: string;
};

type Service = {
  index: string;
  icon: LucideIcon;
  label: string;
  title: string[];
  description: string;
  divider: "light" | "dark";
  style: React.CSSProperties;
  features: ServiceFeature[];
};

const services: Service[] = [
  {
    index: "01",
    icon: Globe,
    label: "Presença Digital",
    title: ["Presença", "Digital"],
    description:
      "Site profissional e redes sociais com impacto visual imediato. Primeira impressão que converte visitantes em clientes.",
    divider: "dark",
    style: { backgroundColor: "#f5f2ee", color: "#161622" },
    features: [
      {
        title: "Sites & Landing Pages",
        description:
          "Design responsivo e performance otimizada para conversão e retenção.",
      },
      {
        title: "Redes Sociais",
        description:
          "Perfis profissionais com identidade visual consistente e conteúdo estratégico.",
      },
    ],
  },
  {
    index: "02",
    icon: Target,
    label: "Campanhas de Captação",
    title: ["Campanhas de", "Captação"],
    description:
      "Estratégias de tráfego pago e orgânico com teses bem definidas para atrair leads ativos e passivos qualificados.",
    divider: "light",
    style: { backgroundColor: "#252535", color: "#f5f2ee" },
    features: [
      {
        title: "Tráfego Pago",
        description:
          "Google Ads, Meta Ads e outras plataformas com ROI rastreado e otimizado.",
      },
      {
        title: "SEO & Orgânico",
        description:
          "Estratégias de conteúdo para crescimento sustentável e autoridade de marca.",
      },
      {
        title: "Leads Qualificados",
        description:
          "Funis de captação com segmentação precisa para atrair quem realmente compra.",
      },
    ],
  },
  {
    index: "03",
    icon: Video,
    label: "Produção de Vídeo",
    title: ["Produção", "de Vídeo"],
    description:
      "Do roteiro à entrega final. Criamos vídeos com equipamentos de ponta que comunicam sua marca com profissionalismo e impacto real.",
    divider: "dark",
    style: { backgroundColor: "#f5f2ee", color: "#161622" },
    features: [
      {
        title: "Roteiro Estratégico",
        description:
          "Estrutura narrativa alinhada ao seu objetivo: vender, engajar ou posicionar.",
      },
      {
        title: "Equipamentos de Ponta",
        description:
          "Câmeras, iluminação e áudio profissionais para um resultado visualmente superior.",
      },
      {
        title: "Edição & Entrega",
        description:
          "Pós-produção completa com corte, trilha, legendas e formatos para cada plataforma.",
      },
    ],
  },
  {
    index: "04",
    icon: Lightbulb,
    label: "Consultoria Estratégica",
    title: ["Consultoria", "Estratégica"],
    description:
      "Mergulhamos no seu negócio para entender onde você está e traçar o caminho mais direto até onde você quer chegar.",
    divider: "light",
    style: { backgroundColor: "#161622", color: "#f5f2ee" },
    features: [
      {
        title: "Diagnóstico Personalizado",
        description:
          "Análise profunda do seu negócio, mercado e concorrência para identificar alavancas reais.",
      },
      {
        title: "Plano de Ação",
        description:
          "Roadmap prático com metas, prioridades e prazos adaptados à sua realidade.",
      },
      {
        title: "Acompanhamento Contínuo",
        description:
          "Sessões de revisão para ajustar a rota conforme o negócio evolui.",
      },
    ],
  },
  {
    index: "05",
    icon: Monitor,
    label: "Tecnologia & Gestão",
    title: ["Tecnologia", "& Gestão"],
    description:
      "Criamos sua identidade digital e entregamos visibilidade real do negócio. Do site ao painel que mostra seu crescimento em tempo real.",
    divider: "dark",
    style: { backgroundColor: "#f5f2ee", color: "#161622" },
    features: [
      {
        title: "Identidade Digital",
        description:
          "Site profissional que representa sua marca e converte visitantes em oportunidades.",
      },
      {
        title: "Gestão de Visibilidade",
        description:
          "Painel centralizado para acompanhar leads, desempenho nas redes e crescimento do negócio.",
      },
      {
        title: "Automação Inteligente",
        description:
          "Processos automatizados que economizam tempo e mantêm o cliente sempre no radar.",
      },
    ],
  },
  {
    index: "06",
    icon: Network,
    label: "Conexões Estratégicas",
    title: ["Conexões", "Estratégicas"],
    description:
      "Conectamos você com outros clientes e parceiros do ecossistema Connex para gerar oportunidades reais de negócio e crescimento mútuo.",
    divider: "light",
    style: { backgroundColor: "#252535", color: "#f5f2ee" },
    features: [
      {
        title: "Networking Qualificado",
        description:
          "Apresentações estratégicas entre empresas com perfis complementares dentro da rede Connex.",
      },
      {
        title: "Ecossistema de Negócios",
        description:
          "Ambiente colaborativo onde clientes trocam indicações, parcerias e oportunidades.",
      },
      {
        title: "Crescimento em Rede",
        description:
          "Quanto mais o ecossistema cresce, mais oportunidades surgem para cada negócio dentro dele.",
      },
    ],
  },
];

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
        <StorySection
          aria-label="Serviços"
          style={{ backgroundColor: "#5b5fe8", color: "#ffffff" }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
            Serviços
          </p>
          <SectionDivider color="light" />
          <h2 className="text-[clamp(2.5rem,10vw,13rem)] font-bold leading-[0.85] uppercase tracking-tight">
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

        {services.map((service) => {
          const Icon = service.icon;
          const opacityClass =
            service.divider === "dark" ? "opacity-40" : "opacity-50";
          const descOpacityClass =
            service.divider === "dark" ? "opacity-55" : "opacity-60";

          return (
            <StorySection
              key={service.index}
              aria-label={service.label}
              style={service.style}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${opacityClass}`} />
                <p
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${opacityClass}`}
                >
                  {service.index}
                </p>
              </div>
              <SectionDivider color={service.divider} />
              <h2 className="text-[clamp(2rem,8vw,13rem)] font-bold leading-[0.85] uppercase tracking-tight">
                {service.title.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < service.title.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <SectionDivider color={service.divider} />
              <p
                className={`max-w-[48ch] text-[clamp(1rem,2vw,1.75rem)] font-normal leading-relaxed ${service.divider === "dark" ? "opacity-75" : "opacity-80"}`}
              >
                {service.description}
              </p>
              <SectionDivider color={service.divider} />
              <div className="flex flex-wrap gap-[clamp(1.5rem,3vw,4rem)] justify-center md:justify-start">
                {service.features.map((feature) => (
                  <div key={feature.title} className="min-w-[160px] flex-1">
                    <p
                      className={`mb-2 text-sm font-bold uppercase tracking-wider ${opacityClass}`}
                    >
                      {feature.title}
                    </p>
                    <p
                      className={`text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed ${descOpacityClass}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </StorySection>
          );
        })}
      </StoryScroll>
    </div>
  );
}
