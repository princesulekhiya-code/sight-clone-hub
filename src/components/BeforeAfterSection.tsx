import { useState } from "react";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function BeforeAfterSection() {
  const beforeItems = [
    { label: "Generic keywords", score: 35 },
    { label: "Poor formatting", score: 22 },
    { label: "No metrics", score: 18 },
    { label: "Missing sections", score: 40 },
  ];
  const afterItems = [
    { label: "Targeted keywords", score: 95 },
    { label: "ATS-optimized format", score: 92 },
    { label: "Impact metrics", score: 88 },
    { label: "Complete sections", score: 96 },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">✦ Transformation</span>
            <h2 className="section-heading mb-4">Before & After <span className="warm-text">JOBRA</span></h2>
            <p className="section-subheading mx-auto">See how our AI transforms your resume from overlooked to outstanding.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0}>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6"><div className="w-3 h-3 rounded-full bg-destructive" /><span className="text-sm font-medium text-destructive">Before JOBRA</span></div>
              <div className="space-y-4">
                {beforeItems.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5"><span className="text-muted-foreground">{item.label}</span><span className="text-destructive font-medium">{item.score}%</span></div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full rounded-full bg-destructive/60 transition-all duration-1000" style={{ width: `${item.score}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border text-center"><span className="text-3xl font-bold text-destructive">28%</span><p className="text-xs text-muted-foreground mt-1">Average ATS Score</p></div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-2 mb-6"><div className="w-3 h-3 rounded-full bg-primary" /><span className="text-sm font-medium text-primary">After JOBRA</span></div>
              <div className="space-y-4">
                {afterItems.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5"><span className="text-foreground">{item.label}</span><span className="text-primary font-medium">{item.score}%</span></div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full rounded-full bg-primary transition-all duration-1000" style={{ width: `${item.score}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border text-center"><span className="text-3xl font-bold text-primary">93%</span><p className="text-xs text-muted-foreground mt-1">Average ATS Score</p></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterSection;
