export const metadata = {
  title: "Maycon Dev — English (coming soon)",
  description: "English version coming soon.",
  alternates: { canonical: "/en" },
};

export default function EnLanding() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <h1 className="text-4xl md:text-5xl font-extrabold">English version</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        I’m preparing a full English version of this website. Meanwhile, you can
        browse the Portuguese version or get in touch.
      </p>
      <div className="mt-6 flex gap-3">
        <a href="/" className="px-5 py-3 rounded-xl border border-black/10 dark:border-white/10">
          Back to PT
        </a>
        <a href="/contact" className="px-5 py-3 rounded-xl bg-teal-600 text-white hover:opacity-90">
          Contact
        </a>
      </div>
    </section>
  );
}
