// data/projects.js
const projects = [
  {
    id: "bpainting",
    slug: "bpainting",
    title: "BPainting — site de serviços de pintura",
    description:
      "Landing responsiva com foco em leads, otimizada em SEO e performance.",
    impact: ["-45% LCP", "+32% conversões"],
    stack: ["React", "Next.js", "Tailwind", "A11y", "SEO"],
    links: {
      live: "https://maycondev.com.br", // troque se quiser
      repo: "https://github.com/mayconSR",
    },
    cover: "/projects/bpainting-cover.jpg", // coloque um arquivo em /public/projects/
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
