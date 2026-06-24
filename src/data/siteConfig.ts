import {
  WHATSAPP_DEFAULT_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/lib/whatsapp";

export const SITE_CONFIG = {
  restaurantName: "Oishi",
  tagline:
    "Restaurante e bar japonês onde tradição, sabor e sofisticação se encontram em cada detalhe.",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: WHATSAPP_DEFAULT_MESSAGE,
  address: "Rua 13 de Maio, 705 — Piraju-SP",
  phone: "(14) 99775-7180",
  instagram: "@oishiadrenalina",
  openHour: 16,
  closeHour: 24,
  hoursLabel: "Seg — Sáb",
  hoursDisplay: "16h às 00h",
  foundedYear: 1999,
  copyrightText: "© 1999 Oishi Restaurante. Todos os direitos reservados.",
} as const;

export const HERO_CONTENT = {
  subtitle: "Bar & Restaurante",
  headingLine1: "Oishi",
  headingLine2: "Adrenalina",
  tagline: "Uma experiência culinária inesquecível.",
  description:
    "Drinks autorais, gastronomia japonesa e noites memoráveis em um ambiente único.",
  ctaButtonText: "Chamar no Whatsapp",
  secondaryLinkText: "Ver Cardápio",
  backgroundImage: "/images/interior.png",
} as const;

export const ABOUT_CONTENT = {
  heading: "Onde a tradição",
  headingLine2: "encontra Piraju.",
  paragraph1:
    "O Oishi é um restaurante e bar japonês reconhecido pela atmosfera única, sabor e modernidade. Membro AGSB 🇯🇵🇧🇷, uma releitura ousada do oriente.",
  paragraph2:
    "De sushi e sashimi cuidadosamente selecionados a temakis exclusivos e drinks autorais, oferecemos uma jornada gastronômica em um ambiente sofisticado, perfeito para encontros memoráveis.",
  stats: [
    { number: "1999", label: "Desde" },
    { number: "60", label: "Itens no cardápio" },
    { number: "AGSB 🇯🇵🇧🇷", label: "Membro" },
  ],
} as const;

export const CTA_RESERVE_CONTENT = {
  heading: "Venha nos visitar agora.",
  description:
    "Oishi Adrenalina, gastronomicamente e com o lugar perfeito para desfrutar de uma experiência única.",
  buttonText: "Chamar no WhatsApp",
} as const;

export const FEATURES_CONTENT = [
  {
    icon: "Sparkles",
    title: "Ambiente Sofisticado",
    description: "Iluminação cuidada, design contemporâneo e atmosfera.",
  },
  {
    icon: "Leaf",
    title: "Ingredientes Frescos",
    description: "Peixes selecionados diariamente.",
  },
  {
    icon: "Wine",
    title: "Drinks Exclusivos",
    description: "Variedades de Drinks, com a melhor qualidade da região.",
  },
  {
    icon: "ConciergeBell",
    title: "Atendimento Premium",
    description: "Equipe treinada para uma experiência memorável.",
  },
] as const;
