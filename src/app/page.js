import { FiGithub, FiMail, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Olá, eu sou o <span className="text-teal-500">Maycon</span>. <br />
        Desenvolvedor Front-end focado em <span className="underline decoration-teal-500/60">React & Next.js</span>.
      </h1>
      <p className="mt-5 max-w-2xl text-balance text-lg/relaxed text-black/70 dark:text-white/70">
        Crio interfaces rápidas, acessíveis e com SEO afiado. Veja meus projetos e fale comigo para colocarmos sua ideia em produção.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 text-white hover:opacity-90">
          Ver projetos <FiArrowRight aria-hidden />
        </Link>
        <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/10 dark:border-white/10">
          Fale comigo <FiMail aria-hidden />
        </Link>
        <a href="https://github.com/mayconSR" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/10 dark:border-white/10">
          GitHub <FiGithub aria-hidden />
        </a>
      </div>
    </section>
  );
}
