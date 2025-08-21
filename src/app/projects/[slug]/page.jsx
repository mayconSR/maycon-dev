import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import { FiChevronLeft } from "react-icons/fi";

export async function generateStaticParams() {
  return projects.filter(p => p.slug).map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  const title = `${project.title} — Estudo de caso`;
  const description = project.caseStudy?.problem || project.description || "Estudo de caso";
  const images = project.cover ? [{ url: project.cover }] : [];
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description, images },
    twitter: { card: "summary_large_image", title, description, images }
  };
}

export default function ProjectCasePage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project || !project.caseStudy) notFound();

  const {
    title, description, cover, impact = [], stack = [], links = {},
    isClient, clientName, testimonial, caseStudy
  } = project;

  return (
    <main className="container mx-auto px-4 py-10">
      {/* back */}
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <FiChevronLeft aria-hidden /> Voltar para projetos
        </Link>
      </div>

      {/* hero */}
      <header className="mb-8">
        <div className="flex items-start gap-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
          {isClient && (
            <span className="mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium
                             ring-1 ring-emerald-400/30 text-emerald-700 bg-emerald-50
                             dark:text-emerald-200 dark:bg-emerald-900/30 dark:ring-emerald-700/30">
              Cliente real
            </span>
          )}
        </div>
        {description && (
          <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
        )}
      </header>

      {cover && (
        <div className="mb-10 overflow-hidden rounded-2xl ring-1 ring-border/30 bg-muted/20">
          <div className="relative aspect-[16/8]">
            <Image
              src={cover}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      )}

      {/* content grid */}
      <div className="grid gap-8 md:grid-cols-12">
        {/* main */}
        <section className="md:col-span-7">
          <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-28">
            <h2>Problema</h2>
            <p>{caseStudy.problem}</p>

            <h2>Contexto</h2>
            <p>{caseStudy.context}</p>

            <h2>Objetivos</h2>
            <ul>
              {caseStudy.goals.map((g) => <li key={g}>{g}</li>)}
            </ul>

            <h2>Abordagem</h2>
            <ul>
              {caseStudy.approach.map((a) => <li key={a}>{a}</li>)}
            </ul>

            <h2>Solução</h2>
            <ul>
              {caseStudy.solution.map((s) => <li key={s}>{s}</li>)}
            </ul>

            <h2>Resultados</h2>
            <ul>
              {caseStudy.results.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>

          {/* testimonial */}
          <section className="mt-8 rounded-2xl bg-muted/20 p-4 ring-1 ring-border/30">
            <div className="mb-2 text-sm font-semibold">
              Feedback do cliente{clientName ? ` — ${clientName}` : ""}
            </div>
            {testimonial ? (
              <blockquote className="text-sm leading-relaxed border-l-2 border-accent/40 pl-3">
                <span className="select-none text-xl">“</span>
                {testimonial}
                <span className="select-none text-xl">”</span>
              </blockquote>
            ) : (
              <p className="text-sm text-muted-foreground"><em>Em breve.</em></p>
            )}
          </section>
        </section>

        {/* aside */}
        <aside className="md:col-span-5">
          <div
            className="sticky top-24 space-y-6 rounded-2xl ring-1 ring-border/30 bg-background/40 p-5 shadow-sm
                       backdrop-blur supports-[backdrop-filter]:bg-background/30"
          >
            {/* ficha */}
            <div>
              <h3 className="text-base font-semibold">Ficha</h3>
              {stack?.length ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <li key={t} className="rounded-full bg-muted/50 px-2.5 py-1 text-[11px] leading-none">
                      {t}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-muted-foreground">—</p>
              )}
            </div>

            <div>
              <h3 className="text-base font-semibold">Impacto</h3>
              {impact?.length ? (
                <ul className="mt-2 list-disc pl-5 text-sm leading-7">
                  {impact.map((i) => <li key={i}>{i}</li>)}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-muted-foreground">—</p>
              )}
            </div>

            {(links.live || links.repo) && (
              <div>
                <h3 className="text-base font-semibold">Links</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {links.live && (
                    <a
                      href={links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg ring-1 ring-border/40 px-3 py-1.5 text-sm hover:bg-accent/5
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      Ver site
                    </a>
                  )}
                  {links.repo && (
                    <a
                      href={links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg ring-1 ring-border/40 px-3 py-1.5 text-sm hover:bg-accent/5
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
