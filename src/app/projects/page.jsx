import ProjectsView from "../components/projects/ProjectsView";
import projects from "../data/projects";

export const metadata = {
  title: "Projetos — Maycon Dev",
  description:
    "Seleção de projetos com foco em performance, acessibilidade e SEO.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold">Projetos</h1>
      <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">
        Filtre por stack ou pesquise pelo nome/descrição. Cada card traz links para o repositório e a versão ao vivo.
      </p>
      <ProjectsView initialProjects={projects} />
    </section>
  );
}
