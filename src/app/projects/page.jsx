import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export const metadata = {
  title: "Projetos — Maycon Dev",
  description: "Alguns projetos públicos e estudos de caso.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
        Projetos
      </h1>
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug || p.id}
            slug={p.slug}
            title={p.title}
            description={p.description}
            stack={p.stack}
            links={p.links}
            cover={p.cover}
            isClient={p.isClient}
            clientName={p.clientName}
            testimonial={p.testimonial}
          />
        ))}
      </section>
    </main>
  );
}
