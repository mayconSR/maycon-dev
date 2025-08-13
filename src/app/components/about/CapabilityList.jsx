export default function CapabilityList({ groups = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {groups.map((g) => (
        <section key={g.title} className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <h3 className="text-lg font-bold">{g.title}</h3>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
            {g.items.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}
