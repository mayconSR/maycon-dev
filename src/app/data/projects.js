export const projects = [
  {
    id: "bpainting",
    slug: "bpainting",
    title: "BPainting — site de serviços de pintura",
    description:
      "Landing responsiva do zero, focada em presença digital e captação de leads.",
    impact: [
      "Core Web Vitals em verde*",
      "A11y AA (landmarks, foco visível, teclado)",
      "SEO on-page pronto (titles, OG/Twitter, sitemap/robots)"
    ],
    stack: ["React", "Next.js", "Tailwind", "A11y", "SEO"],
    links: {
      live: "https://bpaintingnyc.com", 
    },
    cover: "/projects/bpainting-cover.png",
    isClient: true,
    clientName: "Bpainting",
    testimonial: null, 
    caseStudy: {
      problem:
        "O negócio não possuía site; presença digital inexistente e solicitação de orçamentos dependia de indicação/WhatsApp.",
      context:
        "Empresa local, prioridade para mobile e facilidade de contato.",
      goals: [
        "Estabelecer presença web com identidade da marca",
        "Facilitar a solicitação de orçamento (CTA claro e formulário acessível)",
        "Preparar base técnica para SEO local e mensuração com GA4"
      ],
      approach: [
        "Next.js (App Router) com páginas estáticas onde possível",
        "Imagens otimizadas com next/image e tipografia com next/font",
        "Semântica correta e componentes com estados de foco/erro descritivos",
        "Metadados completos (title/description, OG/Twitter) + sitemap/robots"
      ],
      solution: [
        "Layout responsivo e legível, microinterações leves",
        "Seções de serviços e prova social (quando disponível)",
        "CTA evidente e rota de contato preparada para validação/GA4"
      ],
      results: [
        "Site rápido e estável pronto para indexação e campanhas",
        "Acessibilidade prática: skip link, navegação por teclado e contraste",
        "GA4 configurável para eventos (cliques em CTA/formulário) assim que houver tráfego"
      ]
    }
  },
  {
    slug: "youtube-music-queue-app",
    title: "YouTube Music Queue — App",
    description:
      "Frontend que gerencia e reproduz em sequência músicas do YouTube enviadas pelos usuários.",
    stack: ["React", "Vite", "YouTube IFrame API"],
    repoUrl: "https://github.com/mayconSR/youtube-music-queue-app",
    liveUrl: "https://youtube-music-queue-app.vercel.app",
    image: null // se tiver thumb local, coloque o caminho aqui
  },
  {
    slug: "youtube-music-queue-api",
    title: "YouTube Music Queue — API",
    description:
      "API Node/Express que serve o app de fila de músicas do YouTube.",
    stack: ["Node.js", "Express", "Vercel"],
    repoUrl: "https://github.com/mayconSR/youtube-music-queue-api",
    liveUrl: "https://youtube-music-queue-api.vercel.app",
    image: null
  },
  {
    slug: "dndstickynotes98",
    title: "DndStickyNotes98",
    description:
      "Aplicação de notas adesivas com drag & drop e visual retrô Windows 98.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    repoUrl: "https://github.com/mayconSR/dndstickynotes98",
    liveUrl: "https://dndstickynotes98.vercel.app",
    image: null
  },
  {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "App de clima com busca por cidade e exibição de temperatura, umidade e vento.",
    stack: ["React", "Vite", "Weather API"],
    repoUrl: "https://github.com/mayconSR/react-weather-app",
    liveUrl: "https://react-weather-app-ecru-psi.vercel.app",
    image: null
  },
  {
    slug: "react-chatbot",
    title: "React Chatbot",
    description:
      "Chatbot com Next.js e Tailwind; exemplo de integração e personalização.",
    stack: ["Next.js", "React", "Tailwind", "OpenAI"],
    repoUrl: "https://github.com/mayconSR/react-chatbot",
    liveUrl: "https://react-chatbot-five.vercel.app",
    image: null
  },
  {
    slug: "portfolio-2024",
    title: "Portfolio 2024",
    description:
      "Versão atualizada do seu portfólio em Next.js + Tailwind.",
    stack: ["Next.js", "Tailwind CSS"],
    repoUrl: "https://github.com/mayconSR/portfolio-2024",
    liveUrl: "https://portfolio-2024-tau-blue.vercel.app",
    image: null
  }
];
