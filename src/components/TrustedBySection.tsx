const BRANDS = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple",
  "Netflix", "Spotify", "Uber", "Airbnb", "Tesla",
];

export function TrustedBySection() {
  return (
    <section className="py-16 px-6 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8">Trusted by professionals at</p>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-[marquee-scroll_30s_linear_infinite]" style={{ width: "max-content" }}>
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span key={i} className="text-sm text-muted-foreground/60 font-medium whitespace-nowrap">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
