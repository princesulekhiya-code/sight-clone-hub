import { useState } from "react";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const beforeData = {
  score: 38,
  label: "Before JOBRA",
  color: "hsl(var(--destructive))",
  items: [
    { text: "Missing ATS-friendly formatting", type: "bad" as const },
    { text: "No quantified achievements", type: "bad" as const },
    { text: "Generic job descriptions", type: "bad" as const },
    { text: "Missing critical keywords", type: "bad" as const },
    { text: "Poor section structure", type: "bad" as const },
  ],
  breakdown: [
    { label: "FORMAT", value: 25 },
    { label: "SKILLS", value: 40 },
    { label: "EXPERIENCE", value: 35 },
    { label: "KEYWORDS", value: 50 },
  ],
};

const afterData = {
  score: 94,
  label: "After JOBRA",
  color: "hsl(var(--primary))",
  items: [
    { text: "ATS-optimized formatting & structure", type: "good" as const },
    { text: "Quantified achievements with metrics", type: "good" as const },
    { text: "Action-oriented bullet points", type: "good" as const },
    { text: "Industry-specific keywords added", type: "good" as const },
    { text: "Professional section hierarchy", type: "good" as const },
  ],
  breakdown: [
    { label: "FORMAT", value: 95 },
    { label: "SKILLS", value: 92 },
    { label: "EXPERIENCE", value: 90 },
    { label: "KEYWORDS", value: 98 },
  ],
};

function ScoreRing({ score, color, size = 100 }: { score: number; color: string; size?: number }) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth="6" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-1000" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-foreground">{score}%</span>
        <span className="text-[10px] text-muted-foreground">ATS Score</span>
      </div>
    </div>
  );
}

function ResumeCard({ data, active }: { data: { score: number; label: string; color: string; items: { text: string; type: "bad" | "good" }[]; breakdown: { label: string; value: number }[] }; active: boolean }) {
  const isBefore = data.score < 50;

  return (
    <div className={`glass-card rounded-2xl p-6 transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-60 scale-95"}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{data.label}</h3>
        <span className="text-xs text-muted-foreground">{isBefore ? "Typical unoptimized resume" : "AI-optimized resume"}</span>
      </div>

      <div className="flex items-center gap-6 mb-6">
        <ScoreRing score={data.score} color={data.color} />
        <div className="flex-1 space-y-2">
          {data.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              {item.type === "bad" ? (
                <AlertCircle className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
              ) : (
                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              )}
              <span className="text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {data.breakdown.map((bar, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-muted-foreground tracking-wider">{bar.label}</span>
              <span className="text-[10px] text-foreground font-medium">{bar.value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${bar.value}%`, background: bar.value >= 70 ? "hsl(var(--primary))" : "hsl(var(--destructive))" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
              ✦ Real Results
            </span>
            <h2 className="section-heading mb-4">
              See the <span className="purple-text">JOBRA difference</span>
            </h2>
            <p className="section-subheading mx-auto">
              Average score improvement of 56% — turning rejected resumes into interview magnets.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Mobile tab toggle */}
          <div className="flex items-center justify-center gap-3 mb-8 md:hidden">
            <button onClick={() => setActiveTab("before")} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === "before" ? "bg-destructive/10 border border-destructive/20 text-destructive" : "bg-secondary border border-border text-muted-foreground"}`}>
              Before
            </button>
            <button onClick={() => setActiveTab("after")} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === "after" ? "bg-primary/10 border border-primary/20 text-primary" : "bg-secondary border border-border text-muted-foreground"}`}>
              After
            </button>
          </div>

          <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-start">
            <div className={`${activeTab === "before" ? "block" : "hidden"} md:block`}>
              <ResumeCard data={beforeData} active={true} />
            </div>

            <div className="hidden md:flex flex-col items-center justify-center py-16">
              <ArrowRight className="w-6 h-6 text-primary" />
              <span className="text-[10px] text-primary font-medium mt-1">JOBRA AI</span>
            </div>

            <div className={`${activeTab === "after" ? "block" : "hidden"} md:block`}>
              <ResumeCard data={afterData} active={true} />
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Based on analysis of 12,000+ resumes processed through JOBRA
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default BeforeAfterSection;
