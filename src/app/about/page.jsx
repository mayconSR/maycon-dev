import { FiUser } from "react-icons/fi";
import { profile, skillZones, capabilities } from "../data/about";
import SkillZones from "../components/about/Skillzone";
import CapabilityList from "../components/about/CapabilityList";
import Timeline from "../components/about/Timeline";

export const metadata = {
  title: "Sobre — Maycon Dev",
  description: "Quem sou, minhas habilidades e experiência como desenvolvedor front-end.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header>
        <h1 className="text-3xl md:text-5xl font-extrabold flex items-center gap-3">
          <FiUser aria-hidden /> Sobre
        </h1>
        <p className="mt-3 max-w-2xl text-black/70 dark:text-white/70">
          {profile.summary}
        </p>
      </header>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
            <div className="size-24 rounded-full bg-black/10 dark:bg-white/10 grid place-items-center text-2xl">
              MSR
            </div>
            <h2 className="mt-4 text-xl font-bold">{profile.name}</h2>
            <p className="opacity-80">{profile.title}</p>
            {profile.location && (
              <p className="mt-2 text-sm opacity-70">{profile.location}</p>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <SkillZones zones={skillZones} />
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold">O que eu entrego</h2>
        <div className="mt-4">
          <CapabilityList groups={capabilities} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Experiência</h2>
        <div className="mt-4">
          <Timeline items={[]} />
        </div>
      </section>
    </section>
  );
}
