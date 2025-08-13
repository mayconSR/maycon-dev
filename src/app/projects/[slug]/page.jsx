// app/projects/[slug]/page.jsx
import projects from "../../data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import CaseGallery from "../../components/projects/CaseGallery";
import CaseActions from "../../components/projects/CaseActions";

function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};

  const title = `${project.title} — Estudo de caso | Maycon Dev`;
  const description = project.description;
  const url = `https://maycondev.com.br/projects/${project.slug}`;
  const images = project.cover ? [{ url: project.cover }] : [];

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url,
      siteName: "Maycon Dev",
      locale: "pt_BR",
      type: "article",
      images,
    },
  };
}

export default function ProjectCasePage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      {/* Breadcrumbs simples */}
      <nav aria-label="breadcrumb" className="text-sm opacity-80">
        <ol className="flex gap-1 flex-wrap">
          <li><Link className="hover:underline" href="/">Home</Link></li>
          <li aria-hidden>›</li>
          <li><Link className="hover:underline" href="/projects">Projetos</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="font-medium">{project.title}</li>
        </ol>
      </nav>

      {/* Título + meta */}
      <header className="mt-4 md:mt-6">
        <h1 className="text-3xl md:text-5xl font-extrabold">{project.title}</h1>
        <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">
          {project.description}
        </p>

        {/* Impacto e stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.impact?.map((it, i) => (
            <span key={i} className="px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-sm">{it}</span>
          ))}
        </div>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.stack?.map((t) => (
            <li key={t} className="px-2 py-1 rounded-full text-xs border border-black/10 dark:border-white/15">{t}</li>
          ))}
        </ul>

        {/* Ações (Client Component p/ GA4 clicks) */}
        <CaseActions title={project.title} links={project.links} />
      </header>

      {/* Galeria */}
      {cs?.screenshots?.length > 0 && (
        <div className="mt-8">
          <CaseGallery images={cs.screenshots} />
        </div>
      )}

      {/* Seções do case */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {cs?.problem && (
          <section>
            <h2 className="text-xl font-bold">Problema</h2>
            <p className="mt-2 opacity-90">{cs.problem}</p>
          </section>
        )}
        {cs?.context && (
          <section>
            <h2 className="text-xl font-bold">Contexto</h2>
            <p className="mt-2 opacity-90">{cs.context}</p>
          </section>
        )}
        {cs?.goals?.length > 0 && (
          <section className="md:col-span-2">
            <h2 className="text-xl font-bold">Objetivos</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 opacity-90">
              {cs.goals.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </section>
        )}
        {cs?.approach?.length > 0 && (
          <section className="md:col-span-2">
            <h2 className="text-xl font-bold">Abordagem</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 opacity-90">
              {cs.approach.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </section>
        )}
        {cs?.solution?.length > 0 && (
          <section className="md:col-span-2">
            <h2 className="text-xl font-bold">Solução</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 opacity-90">
              {cs.solution.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </section>
        )}
        {cs?.results?.length > 0 && (
          <section className="md:col-span-2">
            <h2 className="text-xl font-bold">Resultados</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1 opacity-90">
              {cs.results.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </section>
        )}
      </div>

      {/* Voltar */}
      <div className="mt-12">
        <Link href="/projects" className="inline-flex items-center gap-2 hover:underline">
          <FiArrowLeft aria-hidden /> Voltar para projetos
        </Link>
      </div>

      {/* JSON-LD (Breadcrumb + Project) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maycondev.com.br/" },
                  { "@type": "ListItem", "position": 2, "name": "Projetos", "item": "https://maycondev.com.br/projects" },
                  { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://maycondev.com.br/projects/${project.slug}` }
                ]
              },
              {
                "@type": "SoftwareSourceCode",
                "name": project.title,
                "url": `https://maycondev.com.br/projects/${project.slug}`,
                "programmingLanguage": "JavaScript",
                "runtimePlatform": "Next.js",
                "description": project.description
              }
            ]
          })
        }}
      />
    </section>
  );
}
