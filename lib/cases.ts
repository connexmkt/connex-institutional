export type CaseStat = {
  label: string;
  value: string | null;
};

export type CaseStudy = {
  id: string;
  name: string;
  segment: string;
  logo: string | null;
  href: string | null;
  work: string;
  stats: [CaseStat, CaseStat];
};

export const cases: CaseStudy[] = [
  {
    id: "icon-fitbrands",
    name: "Icon Fitbrands",
    segment: "E-commerce",
    logo: "/icon-fitbrands-logo.jpg",
    href: "https://www.instagram.com/icon.fitbrands/",
    work: "Estoque zerado nas primeiras 3 semanas de atuação, somente com tráfego orgânico.",
    stats: [
      { label: "Leads gerados", value: "+93%" },
      { label: "Faturamento", value: "+300%" },
    ],
  },
  {
    id: "lba-advogados",
    name: "LBA Advogados",
    segment: "Jurídico",
    logo: "/lba-advogados-logo.png",
    href: null,
    work: "Resultado obtido em apenas 1 semana e pouco investimento.",
    stats: [
      { label: "Leads gerados", value: "+100%" },
      { label: "Faturamento", value: "+67%" },
    ],
  },
  {
    id: "otocentro",
    name: "Clínica Otocentro",
    segment: "Saúde",
    logo: "/otocentro-logo.jpg",
    href: null,
    work: "Colocação no top 3 das pesquisas do Google no nicho de otorrinolaringologia.",
    stats: [
      { label: "Avaliação no Google", value: "4.7" },
      { label: "Faturamento", value: "+46%" },
    ],
  },
];
