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
    id: "metacraft",
    slug: "metacraft",
    title: "MetaCraft — gerador de SEO/OG/Schema",
    description:
      "Ferramenta web que gera metatags OG/Twitter e JSON-LD com preview ao vivo, imagem OG dinâmica e estado compartilhável via URL.",
    impact: [
      "Geração de metatags OG/Twitter prontas para WhatsApp/LinkedIn/X",
      "Imagem OG dinâmica via /api/og (1200×630) com título/cores",
      "JSON-LD (Schema.org) + snippet do <head> copiável em 1 clique",
      "Validação com RHF + Zod e checagem de contraste (WCAG)"
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "React Hook Form",
      "Zod",
      "@vercel/og",
      "A11y",
      "SEO"
    ],
    links: {
      repo: "https://github.com/mayconSR/Metacraft",
      live: "https://metacraft-54r2.vercel.app"
    },
    cover: "/projects/metacraft-cover.png",
    isClient: false,
    clientName: null,
    testimonial: null,
    caseStudy: {
      problem:
        "Criar metatags OG/Twitter e JSON-LD do jeito certo é chato, repetitivo e fácil de errar; além disso, fazer uma imagem OG bonita normalmente exige editar arte manualmente.",
      context:
        "Projeto pessoal focado em produtividade pra devs: gerar SEO/OG/Schema rápido, com preview, validação e um link compartilhável que já abre tudo preenchido via query string.",
      goals: [
        "Gerar metatags OG/Twitter e canonicals de forma confiável",
        "Gerar JSON-LD (Schema.org) para WebSite/Article/Person",
        "Criar imagem OG dinâmica sem depender de Photoshop (endpoint /api/og)",
        "Ter preview ao vivo, validação clara e UX/A11y caprichadas",
        "Permitir compartilhar o estado do formulário via URL"
      ],
      approach: [
        "Next.js (App Router) com generateMetadata lendo searchParams",
        "Form com React Hook Form + Zod para validação e erros acessíveis",
        "Sincronização do estado com query string (com debounce) para compartilhamento",
        "Endpoint /api/og com @vercel/og (ImageResponse) gerando PNG 1200×630",
        "Checagem de contraste WCAG e detalhes de A11y (skip link, foco visível, labels/erros bem vinculados)"
      ],
      solution: [
        "Interface em cards com campos para Title/Description/Site Name/Canonical e opções de OG/Twitter",
        "Preview ao vivo do <head> + botão para copiar o snippet pronto",
        "Gerador de imagem OG (cores e título) com URL direta para testar",
        "Templates de JSON-LD para tipos comuns (WebSite/Article/Person)"
      ],
      results: [
        "Fluxo rápido: preencher → validar → copiar snippet → colar no projeto",
        "Imagem OG personalizada por parâmetros (sem edição manual de arte)",
        "Colaboração simples: enviar a URL com parâmetros e abrir tudo preenchido",
        "Base bem redonda de SEO + A11y para uso em projetos reais"
      ]
    }
  }, {
    id: "dndstickynotes98",
    slug: "dndstickynotes98",
    title: "DndStickyNotes98 — sticky notes com drag & drop (Windows 98)",
    description:
      "Aplicação de notas adesivas com drag & drop e visual retrô Windows 98, com salvamento automático das posições.",
    impact: [
      "Drag & drop livre para organizar notas na tela",
      "Visual nostálgico inspirado no Windows 98",
      "Posições salvas automaticamente (persistência da organização)"
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Drag & Drop"],
    links: {
      repo: "https://github.com/mayconSR/dndstickynotes98",
      live: "https://dndstickynotes98.vercel.app"
    },
    cover: "/projects/dndstickynotes98-cover.png",
    isClient: false,
    clientName: null,
    testimonial: null,
    caseStudy: {
      problem:
        "Queria um projeto curto e divertido pra treinar interação na UI (drag & drop), com foco em experiência visual e organização livre na tela.",
      context:
        "Projeto pessoal com estética retrô (Windows 98), priorizando uma experiência simples e direta: criar notas e mover como quiser.",
      goals: [
        "Criar notas rapidamente e posicionar em qualquer lugar",
        "Reproduzir um visual retrô consistente",
        "Persistir a disposição das notas para não perder a organização"
      ],
      approach: [
        "Next.js + React para UI componentizada",
        "Tailwind CSS para estilização e consistência visual",
        "Implementação do drag & drop e persistência local das posições"
      ],
      solution: [
        "Canvas simples com notas arrastáveis",
        "Estilo Windows 98 (cores, bordas, tipografia/feel retrô)",
        "Auto-save de posições para manter o layout do usuário"
      ],
      results: [
        "App leve e rápido com interação fluída",
        "Organização persistente (não perde o layout ao recarregar)",
        "Deploy na Vercel pronto pra compartilhar"
      ]
    }
  }, {
    id: "ignite-timer",
    slug: "ignite-timer",
    title: "Ignite Timer — cronômetro de tarefas (Pomodoro)",
    description:
      "Aplicação de cronômetro feita no Ignite (Rocketseat) para gerenciar tarefas, tempo e histórico de ciclos.",
    impact: [
      "Iniciar, pausar e resetar o cronômetro",
      "Gerenciamento de tarefas e ciclos",
      "Histórico de tarefas concluídas"
    ],
    stack: ["React", "TypeScript", "Styled-components", "Vite"],
    links: {
      repo: "https://github.com/mayconSR/ignite-timer"
    },
    cover: null,
    isClient: false,
    clientName: null,
    testimonial: null,
    caseStudy: {
      problem:
        "Treinar fundamentos e boas práticas de React construindo um timer estilo Pomodoro com gerenciamento de tarefas e histórico.",
      context:
        "Projeto de estudo do Ignite (Rocketseat), com foco em componentização, estado e UI consistente.",
      goals: [
        "Criar um cronômetro funcional (start/pause/reset)",
        "Permitir criar e gerenciar tarefas/ciclos",
        "Exibir histórico de tarefas"
      ],
      approach: [
        "React + TypeScript para UI e tipagem",
        "Styled-components para estilização por componente",
        "Vite para dev server leve e rápido"
      ],
      solution: [
        "Tela de timer com controles de execução",
        "Fluxo de tarefas/ciclos ligado ao cronômetro",
        "Tela/área de histórico de execuções"
      ],
      results: [
        "App funcional para gestão de tempo e tarefas",
        "Base sólida para evoluir com novas features e refinamentos de UX"
      ]
    }
  }, {
    id: "ignite-feed",
    slug: "ignite-feed",
    title: "Ignite Feed — feed simples (fundamentos de React)",
    description:
      "Feed simples criado no curso da Rocketseat para praticar componentes, estado e props com React + Vite.",
    impact: [
      "Feed de postagens com UI simples e direta",
      "Prática de componentes, props e estado",
      "Ambiente rápido de desenvolvimento com Vite"
    ],
    stack: ["React", "Vite", "CSS3", "HTML5"],
    links: {
      repo: "https://github.com/mayconSR/ignite-feed"
    },
    cover: null,
    isClient: false,
    clientName: null,
    testimonial: null,
    caseStudy: {
      problem:
        "Precisava de um projeto objetivo pra consolidar a base do React: componentização, props e estado.",
      context:
        "Projeto de estudo da Rocketseat, sem back-end, focado em UI e fundamentos.",
      goals: [
        "Montar um feed simples e organizado",
        "Praticar componentes, props e estado",
        "Trabalhar layout/estilos e organização do projeto"
      ],
      approach: [
        "React para componentização da UI",
        "Vite para setup e dev server",
        "CSS para estilização do layout"
      ],
      solution: [
        "Interface de feed com estrutura de posts",
        "Componentes reaproveitáveis e bem separados",
        "Estilização simples e legível"
      ],
      results: [
        "Projeto enxuto e didático para fixar fundamentos do React",
        "Código pronto pra servir como base/boilerplate em estudos futuros"
      ]
    }
  }, {
    id: "webrtc-cam-bridge",
    slug: "webrtc-cam-bridge",
    title: "WebRTC Cam Bridge — usar a câmera do celular no PC",
    description:
      "Bridge em WebRTC para transmitir a câmera do celular para o PC, com front-end web e servidor Node, usando Socket.IO para sinalização.",
    impact: [
      "Transforma o celular em “webcam” no navegador do PC via WebRTC",
      "Arquitetura separada em web + server",
      "Sinalização com Socket.IO para iniciar a conexão"
    ],
    stack: ["WebRTC", "React", "Node.js", "Socket.IO", "JavaScript"],
    links: {
      repo: "https://github.com/mayconSR/webrtc-cam-bridge",
      live: "https://webrtc-cam-bridge-web.vercel.app"
    },
    cover: "/projects/webrtc-cam-bridge-cover.png",
    isClient: false,
    clientName: null,
    testimonial: null,
    caseStudy: {
      problem:
        "Queria um jeito simples de usar a câmera do celular no PC sem depender de apps proprietários, explorando WebRTC na prática.",
      context:
        "Projeto em andamento com stack React + Node + Socket.IO, separando web e server para suportar o fluxo de conexão.",
      goals: [
        "Transmitir vídeo do celular para o PC via WebRTC",
        "Ter um servidor de sinalização para trocar SDP/ICE",
        "Deixar o projeto fácil de rodar e evoluir"
      ],
      approach: [
        "WebRTC para mídia (getUserMedia + RTCPeerConnection)",
        "Node + Socket.IO para sinalização e coordenação dos peers",
        "Front-end web em React para UX simples de pareamento"
      ],
      solution: [
        "App web (celular) envia stream da câmera",
        "App web (PC) recebe e exibe o stream",
        "Servidor faz a ponte de sinalização pra estabelecer a conexão"
      ],
      results: [
        "Base pronta para usar o celular como câmera no PC via navegador",
        "Projeto estruturado para evoluir (pareamento, QR code, salas, etc.)"
      ]
    }
  }
];
