export function Ticker({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="hairline-top hairline-bottom relative overflow-hidden bg-night py-5">
      <div
        className="ticker flex gap-16 whitespace-nowrap font-display text-[20px] tracking-[0.32em] uppercase text-gold/70"
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-16">
            <span>{item}</span>
            <span className="text-gold/30">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
