import { Check, X } from "lucide-react";

const competitors = [
  { name: "Fey", price: "$30", summaries: true, transcripts: true, liveCalls: true, delivery: "Instant", highlight: true },
  { name: "Perplexity", price: "Free", summaries: true, transcripts: true, liveCalls: false, delivery: "-15 min" },
  { name: "Seeking Alpha", price: "$200", summaries: false, transcripts: false, liveCalls: false, delivery: "-5 min" },
  { name: "Earnings Whisper", price: "$50", summaries: false, transcripts: false, liveCalls: false, delivery: "-30 min" },
  { name: "Yahoo Finance", price: "$49.95", summaries: false, transcripts: false, liveCalls: false, delivery: "-30 min" },
  { name: "TradingView", price: "Free", summaries: false, transcripts: false, liveCalls: false, delivery: "-60 min" },
  { name: "Google", price: "Free", summaries: false, transcripts: false, liveCalls: false, delivery: "-180 min" },
];

const BoolCell = ({ value, highlight }: { value: boolean; highlight?: boolean }) => (
  <td className={`px-4 py-3 text-center ${highlight ? "bg-primary/5" : ""}`}>
    {value ? (
      <Check className="w-4 h-4 text-emerald-400 mx-auto" />
    ) : (
      <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
    )}
  </td>
);

const ComparisonSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="section-heading mb-4">
            <span className="gradient-text">Beautiful. Now the </span>
            <span className="warm-text">best.</span>
          </h2>
          <p className="section-subheading mx-auto">
            We mastered design first. Now we've perfected depth, giving you the best earnings experience available anywhere.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="reveal hidden md:block overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">Company</th>
                <th className="px-4 py-3 text-muted-foreground font-medium">Monthly price</th>
                <th className="px-4 py-3 text-muted-foreground font-medium">Summaries</th>
                <th className="px-4 py-3 text-muted-foreground font-medium">Transcripts</th>
                <th className="px-4 py-3 text-muted-foreground font-medium">Live calls</th>
                <th className="px-4 py-3 text-muted-foreground font-medium">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr
                  key={c.name}
                  className={`border-b border-border/50 transition-colors ${
                    c.highlight ? "bg-primary/5" : "hover:bg-card/50"
                  }`}
                >
                  <td className={`px-4 py-3 font-medium text-foreground ${c.highlight ? "bg-primary/5" : ""}`}>
                    {c.name}
                    {c.highlight && (
                      <span className="ml-2 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        This app
                      </span>
                    )}
                  </td>
                  <td className={`px-4 py-3 text-center text-muted-foreground ${c.highlight ? "bg-primary/5 text-foreground font-medium" : ""}`}>
                    {c.price}
                  </td>
                  <BoolCell value={c.summaries} highlight={c.highlight} />
                  <BoolCell value={c.transcripts} highlight={c.highlight} />
                  <BoolCell value={c.liveCalls} highlight={c.highlight} />
                  <td className={`px-4 py-3 text-center ${
                    c.highlight ? "bg-primary/5 text-primary font-semibold" : "text-muted-foreground"
                  }`}>
                    {c.delivery}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="reveal md:hidden space-y-3">
          {competitors.map((c) => (
            <div
              key={c.name}
              className={`glass-card p-4 ${c.highlight ? "border-primary/30 ring-1 ring-primary/20" : ""}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-foreground">{c.name}</span>
                <span className={`text-sm ${c.highlight ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                  {c.price}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5">
                  {c.summaries ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <X className="w-3.5 h-3.5 text-muted-foreground/40" />}
                  <span className="text-muted-foreground">Summaries</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {c.transcripts ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <X className="w-3.5 h-3.5 text-muted-foreground/40" />}
                  <span className="text-muted-foreground">Transcripts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {c.liveCalls ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <X className="w-3.5 h-3.5 text-muted-foreground/40" />}
                  <span className="text-muted-foreground">Live calls</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={c.highlight ? "text-primary font-medium" : "text-muted-foreground"}>
                    {c.delivery}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-6 text-xs text-text-tertiary text-center max-w-2xl mx-auto">
          Prices shown reflect plans offering comparable features. Some services listed may offer free or lower-priced tiers with limited functionality. Displayed delay times are approximate averages.
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;
