export default function Timeline({ items = [] }) {
  return (
    <ol className="relative border-s border-black/10 dark:border-white/10 pl-6 space-y-6">
      {items.map((it, idx) => (
        <li key={idx} className="space-y-2">
          <span className="absolute -left-1.5 mt-1 size-3 rounded-full bg-teal-600" />
          <div className="text-sm opacity-70">{it.period}</div>
          <h3 className="font-semibold">{it.role} {it.company && <span className="opacity-70">· {it.company}</span>}</h3>
          {it.bullets?.length > 0 && (
            <ul className="list-disc pl-5 space-y-1 opacity-90 text-sm">
              {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
