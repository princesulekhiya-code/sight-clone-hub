import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { num: 1, title: "Upload Your Resume", desc: "Upload your resume (PDF/DOCX) with a job description, specific role, or for a general ATS scan — three analysis modes to match your needs.", tags: ["With JD", "With Role", "General Scan"], accent: "#8b5cf6" },
  { num: 2, title: "ATS Score & Suggestions", desc: "AI analyzes your resume against ATS systems — detailed score breakdown for Format, Skills, Experience, Keywords — plus actionable improvement suggestions.", tags: ["ATS Score", "Breakdown", "Keywords", "Suggestions"], accent: "#3b82f6" },
  { num: 3, title: "AI Upgrades Your Resume", desc: "JOBRA AI rewrites your resume — adding quantified achievements, industry keywords, action verbs, and proper ATS formatting. Automatic and instant.", tags: ["AI Rewrite", "Keywords", "Achievements"], accent: "#6366f1" },
  { num: 4, title: "Choose a Template", desc: "Pick from 22 professional resume templates. Your AI-improved data is auto-filled. Customize, preview, and export as PDF.", tags: ["22 Templates", "Auto-Fill", "PDF Export"], accent: "#06b6d4" },
  { num: 5, title: "Smart Job Matching", desc: "JOBRA finds matching job listings with compatibility scores based on your optimized resume. Apply directly to roles that fit.", tags: ["Job Matches", "Compatibility", "Apply Direct"], accent: "#f59e0b" },
  { num: 6, title: "AI Mock Interview", desc: "Practice with our AI interviewer — get role-specific questions, behavioral prep, and real-time scoring on content, communication, and delivery.", tags: ["AI Interviewer", "Real-Time Scoring", "Behavioral Prep"], accent: "#f43f5e" },
  { num: 7, title: "Expert Mentorship", desc: "Connect with industry professionals for 1-on-1 career coaching, portfolio reviews, and personalized career guidance.", tags: ["1-on-1 Sessions", "Industry Pros", "Coaching"], accent: "#a855f7" },
];

function MockupUpload({ accent }: { accent: string }) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border-2 border-dashed p-4 text-center" style={{ borderColor: `${accent}40` }}>
        <p className="text-xs text-foreground mb-1">Drop your resume here</p>
        <p className="text-[10px] text-muted-foreground">PDF, DOCX up to 5MB</p>
      </div>
      <div className="flex gap-2">
        {["With JD", "With Role", "General"].map((m) => (
          <span key={m} className="text-[10px] px-2 py-1 rounded-md border border-border text-muted-foreground">{m}</span>
        ))}
      </div>
    </div>
  );
}

function MockupATS({ accent }: { accent: string }) {
  const scores = [{ label: "Format", val: 92 }, { label: "Skills", val: 78 }, { label: "Keywords", val: 85 }, { label: "Experience", val: 70 }];
  return (
    <div className="space-y-3">
      <div className="text-center">
        <span className="text-3xl font-bold" style={{ color: accent }}>83</span>
      </div>
      {scores.map((s) => (
        <div key={s.label} className="flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground w-14">{s.label}</span>
          <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${s.val}%`, background: accent }} />
          </div>
          <span className="text-[10px] text-foreground w-6 text-right">{s.val}</span>
        </div>
      ))}
    </div>
  );
}

function MockupAI({ accent }: { accent: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-foreground flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
        AI Rewriting…
      </p>
      {[{ b: "Added action verbs", d: "\"Led\", \"Optimized\"" }, { b: "Quantified impact", d: "\"Increased by 35%\"" }, { b: "ATS keywords", d: "+12 terms added" }].map((item, i) => (
        <div key={i} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
          <span style={{ color: accent }}>✓</span>
          <span><span className="text-foreground">{item.b}</span> — {item.d}</span>
        </div>
      ))}
    </div>
  );
}

function MockupTemplate({ accent }: { accent: string }) {
  return (
    <div className="flex gap-2 justify-center">
      {[0.9, 0.6, 0.4].map((op, i) => (
        <div key={i} className="w-14 h-20 rounded-lg border" style={{ borderColor: accent, opacity: op, background: `${accent}10` }}>
          <div className="p-1.5 space-y-1">
            <div className="h-1 rounded-full" style={{ background: `${accent}60`, width: "80%" }} />
            <div className="h-0.5 rounded-full bg-border" style={{ width: "100%" }} />
            <div className="h-0.5 rounded-full bg-border" style={{ width: "60%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function MockupJob({ accent }: { accent: string }) {
  return (
    <div className="space-y-2">
      {[{ role: "Senior Frontend Dev", co: "Google", match: 94 }, { role: "React Engineer", co: "Stripe", match: 89 }, { role: "Full Stack Dev", co: "Meta", match: 82 }].map((j, i) => (
        <div key={i} className="flex items-center gap-2 p-2 rounded-lg" style={{ background: `${accent}08`, border: `1px solid ${accent}15` }}>
          <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white" style={{ background: accent }}>{j.co[0]}</div>
          <div className="flex-1">
            <div className="text-[11px] text-foreground">{j.role}</div>
            <div className="text-[9px] text-muted-foreground">{j.co}</div>
          </div>
          <span className="text-xs font-bold" style={{ color: accent }}>{j.match}%</span>
        </div>
      ))}
    </div>
  );
}

function MockupInterview({ accent }: { accent: string }) {
  return (
    <div className="space-y-3">
      <div className="text-[10px] text-primary font-medium flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Live AI Interview
      </div>
      <p className="text-[10px] text-muted-foreground italic">Q: Tell me about a time you led a cross-functional team…</p>
      <div className="flex gap-3">
        {[{ label: "Content", score: 88 }, { label: "Delivery", score: 75 }, { label: "Clarity", score: 92 }].map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-sm font-bold" style={{ color: accent }}>{m.score}</div>
            <div className="text-[9px] text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupMentor({ accent }: { accent: string }) {
  return (
    <div className="space-y-2">
      {[{ name: "Sarah Chen", role: "Engineering Manager", co: "Google", rating: "4.9" }, { name: "James Miller", role: "Senior Recruiter", co: "Meta", rating: "4.8" }].map((m, i) => (
        <div key={i} className="flex items-center gap-2 p-2 rounded-lg" style={{ background: `${accent}08` }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: accent }}>
            {m.name.split(" ").map((w) => w[0]).join("")}
          </div>
          <div className="flex-1">
            <div className="text-[11px] text-foreground">{m.name}</div>
            <div className="text-[9px] text-muted-foreground">{m.role} · {m.co}</div>
          </div>
          <span className="text-[10px] text-amber-400">★ {m.rating}</span>
        </div>
      ))}
      <button className="w-full text-center text-[10px] font-medium py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors">
        Book a 1-on-1 session →
      </button>
    </div>
  );
}

const mockups = [MockupUpload, MockupATS, MockupAI, MockupTemplate, MockupJob, MockupInterview, MockupMentor];

function StepCard({ step, idx, isActive, isPast, onClick }: { step: typeof steps[0]; idx: number; isActive: boolean; isPast: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`w-full text-left flex gap-4 py-4 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-70"}`}>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300" style={{ borderColor: isActive ? step.accent : isPast ? `${step.accent}50` : "rgba(255,255,255,0.1)", background: isActive ? `${step.accent}15` : "transparent", color: isActive ? step.accent : "rgba(255,255,255,0.3)" }}>
          {step.num}
        </div>
        {idx < steps.length - 1 && (
          <div className="w-px flex-1 my-1 transition-all" style={{ background: isPast ? `${step.accent}50` : "rgba(255,255,255,0.06)" }} />
        )}
      </div>
      <div className="flex-1 pb-4">
        <span className="text-[10px] text-muted-foreground">Step {step.num}</span>
        <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
        {isActive && <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>}
      </div>
    </button>
  );
}

function DetailPanel({ activeStep }: { activeStep: number }) {
  const step = steps[activeStep];
  const Mockup = mockups[activeStep];

  return (
    <div className="glass-card rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] text-muted-foreground">Step {step.num} of 7</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-4">{step.title}</h3>
      <div className="mb-4">
        <Mockup accent={step.accent} />
      </div>
      <div className="flex flex-wrap gap-1.5">
        {step.tags.map((tag, i) => (
          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">{tag}</span>
        ))}
      </div>
      <div className="flex gap-1 mt-4">
        {steps.map((_, i) => (
          <div key={i} className="h-1 flex-1 rounded-full transition-all" style={{ background: i <= activeStep ? steps[activeStep].accent : "rgba(255,255,255,0.06)" }} />
        ))}
      </div>
      {activeStep < steps.length - 1 && (
        <p className="text-[10px] text-muted-foreground mt-3 flex items-center gap-1">
          <ArrowRight className="w-3 h-3" /> Next: {steps[activeStep + 1].title}
        </p>
      )}
    </div>
  );
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [autoplay]);

  const handleClick = (idx: number) => {
    setAutoplay(false);
    setActiveStep(idx);
    clearInterval(timerRef.current);
    setTimeout(() => setAutoplay(true), 14000);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
              ✦ How It Works
            </span>
            <h2 className="section-heading mb-4">
              Your complete career <span className="warm-text">pipeline</span>
            </h2>
            <p className="section-subheading mx-auto">
              From resume upload to dream job — 7 steps, fully guided by AI.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8">
            <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
              {steps.map((step, i) => (
                <StepCard key={i} step={step} idx={i} isActive={i === activeStep} isPast={i < activeStep} onClick={() => handleClick(i)} />
              ))}
            </div>
            <div className="hidden lg:block sticky top-24">
              <DetailPanel activeStep={activeStep} />
            </div>
          </div>

          {/* Mobile dots */}
          <div className="flex items-center justify-center gap-1.5 mt-6 lg:hidden">
            {steps.map((s, i) => (
              <button key={i} onClick={() => handleClick(i)} className="rounded-full transition-all duration-300" style={{ width: i === activeStep ? "20px" : "8px", height: "8px", background: i === activeStep ? s.accent : i < activeStep ? `${s.accent}50` : "rgba(255,255,255,0.08)" }} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default HowItWorksSection;
