// data/projects.js
const projects = [
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
      live: "https://maycondev.com.br", // ajuste se necessário
      repo: "https://github.com/mayconSR",
    },
    cover: "/projects/bpainting-cover.jpg",
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
        "Imagens otimizadas com `next/image` e tipografia com `next/font`",
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
    id: "upload-rhf-zod",
    slug: "upload-rhf-zod",
    title: "Componente de Upload — RHF + Zod",
    description:
      "Upload de arquivos com validação por schema, feedbacks acessíveis e hooks reusáveis.",
    impact: ["-60% erros de envio", "DX ↑"],
    stack: ["React", "Tailwind", "React Hook Form", "Zod"],
    links: {
      live: "#",
      repo: "https://github.com/mayconSR",
    },
    cover: null,
  },
  {
    id: "design-system",
    slug: "design-system",
    title: "Mini Design System",
    description:
      "Tokens, tipografia e componentes base reutilizáveis (botões, inputs, cards).",
    impact: ["-28% CSS", "consistência ↑"],
    stack: ["React", "Tailwind"],
    links: { live: "#", repo: "https://github.com/mayconSR" },
    cover: null,
  },
  {
    id: "dashboard",
    slug: "dashboard",
    title: "Dashboard de Métricas",
    description:
      "Listas e gráficos client-side com filtros e paginação acessíveis.",
    impact: ["TTI rápido", "UX ↑"],
    stack: ["React", "Next.js", "Tailwind"],
    links: { live: "#", repo: "https://github.com/mayconSR" },
    cover: null,
  },
  {
    id: "nerdindica",
    slug: "nerdindica",
    title: "NerdIndica — blog de tecnologia",
    description:
      "Estrutura de blog com MDX, otimização de SEO e compartilhamento social.",
    impact: ["rich snippets", "indexação ↑"],
    stack: ["Next.js", "MDX", "SEO", "Tailwind"],
    links: { live: "#", repo: "https://github.com/mayconSR" },
    cover: null,
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Portfólio — Maycon Dev",
    description:
      "Este site: animações leves, A11y real e base forte de SEO.",
    impact: ["Lighthouse 95+*"],
    stack: ["React", "Next.js", "Tailwind", "A11y", "SEO"],
    links: { live: "https://maycondev.com.br", repo: "https://github.com/mayconSR" },
    cover: null,
  },
];

export default projects;
