// app/services/page.jsx
import { FiBriefcase } from "react-icons/fi";
import ServiceCard from "../components/services/ServiceCard";

export const metadata = {
  title: "Serviços — Maycon Dev",
  description: "Escolha o tipo de site que você precisa: página única, múltiplas páginas, blog e mais.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Site Página Única",
    tagline:
      "Tudo em uma página só (rolando). Ideal para apresentar seu negócio rápido.",
    features: [
      "Seções: sobre, serviços, depoimentos e contato",
      "Botões para WhatsApp e formulário simples",
      "Funciona bem no celular e carrega rápido",
      "SEO básico e medição com GA4",
    ],
  },
  {
    title: "Site com Múltiplas Páginas",
    tagline:
      "Home, Sobre, Serviços, Portfólio e Contato separados no menu.",
    features: [
      "Navegação fácil e conteúdo organizado",
      "Pronto para crescer com novas páginas",
      "Base para aparecer melhor no Google",
      "Formulário de contato e mapa",
    ],
  },
  {
    title: "Blog / Notícias",
    tagline:
      "Espaço para publicar textos, novidades e tutoriais.",
    features: [
      "Lista de posts e página de leitura agradável",
      "Busca e categorias (opcional)",
      "Botões de compartilhar",
      "Estrutura pensada para SEO",
    ],
  },
  {
    title: "Portfólio Profissional",
    tagline:
      "Mostre seus trabalhos com estudos de caso e galeria de imagens.",
    features: [
      "Projetos com descrição do desafio e solução",
      "Imagens otimizadas e navegação por teclado",
      "Links para repositório e versão ao vivo",
      "Design limpo e fácil de entender",
    ],
  },
  {
    title: "Deixar o site mais Rápido e Fácil",
    tagline:
      "Otimização de velocidade, acessibilidade e SEO do seu site atual.",
    features: [
      "Carregamento mais rápido (imagens e fontes otimizadas)",
      "Acessibilidade: navegação por teclado e bom contraste",
      "Ajustes de SEO (títulos, descrições e dados do site)",
      "Relatório do antes e depois",
    ],
  },
  {
    title: "Manutenção & Suporte",
    tagline:
      "Pequenas melhorias, correções e atualizações mensais.",
    features: [
      "Ajustes de conteúdo e layout",
      "Inclusão de novas seções/páginas",
      "Monitoramento básico com GA4",
      "Suporte por e-mail/WhatsApp",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header>
        <h1 className="text-3xl md:text-5xl font-extrabold flex items-center gap-3">
          <FiBriefcase aria-hidden /> Serviços
        </h1>
        <p className="mt-3 max-w-2xl text-black/70 dark:text-white/70">
          Escolha o tipo de site que você precisa. Linguagem simples, sem tecnicês — e, se preferir, a gente adapta o pacote ao seu caso.
        </p>
      </header>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s) => (
          <li key={s.title}>
            <ServiceCard
              title={s.title}
              tagline={s.tagline}
              features={s.features}
            />
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/10 dark:border-white/10"
        >
          Falar sobre um projeto
        </a>
      </div>
    </section>
  );
}
