export default function SkillZones({ zones }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Zone title="Uso diário" items={zones.daily} tone="solid" />
      <Zone title="Base sólida" items={zones.solid} />
      <Zone title="Explorando agora" items={zones.learning} />
    </div>
  );
}

function Zone({ title, items = [], tone }) {
  return (
    <section className="rounded-2xl border border-black/10 dark:border-white/10 p-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <li
            key={t}
            className={
              "px-2 py-1 rounded-full text-sm border " +
              (tone === "solid"
                ? "bg-teal-600 text-white border-teal-600"
                : "border-black/10 dark:border-white/15")
            }
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
