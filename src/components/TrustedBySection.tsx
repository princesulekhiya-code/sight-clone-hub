const BRANDS = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple",
  "Netflix", "Spotify", "Uber", "Airbnb", "Tesla",
];

export function TrustedBySection() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-12 overflow-hidden border-y border-border/30">
      <p className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-6">Trusted by professionals at</p>
      <div className="relative">
        <div className="flex gap-16 whitespace-nowrap" style={{ animation: "marquee-scroll 30s linear infinite" }}>
          {doubled.map((brand, i) => (
            <span key={i} className="text-lg font-semibold text-muted-foreground/40 select-none">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
