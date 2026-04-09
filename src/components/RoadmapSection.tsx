import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FileSearch, FileText, Briefcase, Send, Mic, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const phases = [
  {
    num: "01", label: "Phase 1", title: "Resume Analysis", subtitle: "Instant ATS Score & Feedback",
    icon: FileSearch, color: "#6352dc", glowColor: "99, 82, 220", status: "Live",
    features: ["Upload resume with or without Job Description", "Select target Job Role for tailored analysis", "Extract resume text, skills & job history", "Compare against JD, Job Role or standalone", "Generate ATS score & improvement suggestions"],
    href: "/resume-analysis", cta: "Try Now",
  },
  {
    num: "02", label: "Phase 2", title: "Resume Correction", subtitle: "AI-Powered Resume Rewriting",
    icon: FileText, color: "#0ea5e9", glowColor: "14, 165, 233", status: "Live",
    features: ["Improve grammar, structure & formatting", "Auto-suggest power words & better descriptions", "Provide ATS-friendly professional templates", "One-click AI resume upgrade", "Export as polished PDF"],
    href: "/resume-builder", cta: "Build Resume",
  },
  {
    num: "03", label: "Phase 3", title: "Job Suggestions", subtitle: "Smart Job Matching Engine",
    icon: Briefcase, color: "#f59e0b", glowColor: "245, 158, 11", status: "Live",
    features: ["Suggest jobs based on skills & experience", "Compatibility score for each job role", "Redirect users to relevant job postings", "Filter by location, salary & industry", "Save and track applied positions"],
    href: "/job-matches", cta: "Find Jobs",
  },
  {
    num: "04", label: "Phase 4", title: "Direct Job Apply", subtitle: "One-Click Apply & Auto-Fill",
    icon: Send, color: "#10b981", glowColor: "16, 185, 129", status: "Coming Soon",
    features: ["Allow one-click apply to jobs", "Auto-fill job applications from resume data", "Track application status in real-time", "Smart follow-up reminders", "Application history dashboard"],
    href: "/job-matches", cta: "Explore",
  },
  {
    num: "05", label: "Phase 5", title: "Interview Prep", subtitle: "AI Interview Coach",
    icon: Mic, color: "#ec4899", glowColor: "236, 72, 153", status: "Coming Soon",
    features: ["AI voice assistant for interview preparation", "Role-specific question generation", "Real-time scoring on answers & delivery", "Generate performance reports with suggestions", "Interview question bank by experience level"],
    href: "/interview", cta: "Practice",
  },
];

export function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const phase = phases[activePhase];
  const Icon = phase.icon;
  const isLive = phase.status === "Live";

  const goToPhase = useCallback((idx: number) => {
    if (idx === activePhase) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePhase(idx);
      setProgressWidth(0);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  }, [activePhase]);

  useEffect(() => {
    setProgressWidth(0);
    const t = setTimeout(() => setProgressWidth(100), 100);
    return () => clearTimeout(t);
  }, [activePhase]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActivePhase(prev => (prev + 1) % phases.length);
        setProgressWidth(0);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 250);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(${phase.glowColor}, 0.08), transparent 70%)` }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
              Product Roadmap
            </span>
            <h2 className="section-heading mb-4">
              From resume to <span className="purple-text">dream job</span>
            </h2>
            <p className="section-subheading mx-auto">
              5 powerful phases — from resume analysis to AI interview coaching — all in one platform.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline stepper */}
        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-4 mb-12 overflow-x-auto pb-2">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-border -translate-y-1/2 hidden md:block" />
            {phases.map((p, i) => {
              const PIcon = p.icon;
              const isActive = i === activePhase;
              const isLivePhase = p.status === "Live";

              return (
                <button key={i} onClick={() => goToPhase(i)} className="relative z-10 flex flex-col items-center gap-2 group">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-500`} style={{ borderColor: isActive ? p.color : `${p.color}30`, background: isActive ? `${p.color}15` : "hsl(var(--background))", color: isActive ? p.color : `${p.color}60` }}>
                    {p.num}
                    {isLivePhase && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" style={{ animation: "dotPulse 2s infinite" }} />
                    )}
                  </div>
                  <span className={`text-[10px] font-medium transition-colors whitespace-nowrap ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{p.title}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Main content card */}
        <ScrollReveal delay={200}>
          <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${isTransitioning ? "opacity-50 scale-[0.98]" : "opacity-100 scale-100"}`}>
            <div className="h-1 w-full bg-secondary">
              <div className="h-full transition-all duration-[5s] ease-linear" style={{ width: `${progressWidth}%`, background: `linear-gradient(90deg, ${phase.color}, rgba(${phase.glowColor}, 0.6))` }} />
            </div>

            <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 p-8">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-muted-foreground font-medium">{phase.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${isLive ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                    {isLive ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {phase.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{phase.subtitle}</p>

                <ul className="space-y-2.5 mb-6">
                  {phase.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: phase.color }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link to={phase.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]" style={{ background: phase.color, boxShadow: `0 4px 15px rgba(${phase.glowColor}, 0.3)` }}>
                  {phase.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right - Progress tracker */}
              <div>
                <p className="text-xs text-muted-foreground mb-3 font-medium">Platform Progress</p>
                {phases.map((p, i) => {
                  const PIcon = p.icon;
                  const isSelected = i === activePhase;
                  const isDone = p.status === "Live";

                  return (
                    <button key={i} onClick={() => goToPhase(i)} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl mb-1.5 transition-all duration-300 text-left ${isSelected ? "" : "hover:bg-accent/30"}`} style={isSelected ? { background: `rgba(${p.glowColor}, 0.06)`, border: `1px solid rgba(${p.glowColor}, 0.15)` } : { border: "1px solid transparent" }}>
                      <PIcon className="w-4 h-4" style={{ color: p.color }} />
                      <span className="text-xs text-foreground flex-1">{p.title}</span>
                      <span className="text-[10px] font-mono" style={{ color: isDone ? p.color : "rgba(255,255,255,0.3)" }}>
                        {isDone ? "100%" : "Soon"}
                      </span>
                    </button>
                  );
                })}

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { val: "3/5", label: "Phases Live", icon: "🚀" },
                    { val: "12K+", label: "Users", icon: "👥" },
                    { val: "Free", label: "To Start", icon: "✨" },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-secondary/50 border border-border/50">
                      <span className="text-sm">{s.icon}</span>
                      <div className="text-sm font-bold text-foreground">{s.val}</div>
                      <div className="text-[9px] text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom dots */}
            <div className="flex items-center justify-center gap-2 pb-6">
              {phases.map((p, i) => (
                <button key={i} onClick={() => goToPhase(i)} className="rounded-full transition-all duration-500" style={{ width: i === activePhase ? "32px" : "8px", height: "8px", background: i === activePhase ? `linear-gradient(90deg, ${p.color}, rgba(${p.glowColor}, 0.6))` : i < activePhase ? `rgba(${p.glowColor}, 0.3)` : "rgba(255,255,255,0.08)", boxShadow: i === activePhase ? `0 0 10px rgba(${p.glowColor}, 0.4)` : "none" }} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default RoadmapSection;
