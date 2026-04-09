import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Upload, ArrowRight, FileText, CheckCircle2, X, Star, Shield } from "lucide-react";

const JOB_TITLES = [
  "Frontend Developer", "Data Scientist", "Product Manager", "UX Designer",
  "Cloud Architect", "DevOps Engineer", "Machine Learning Engineer", "Full Stack Developer",
];

function TypingText() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) { const t = setTimeout(() => { setDeleting(true); setPause(false); }, 1800); return () => clearTimeout(t); }
    const target = JOB_TITLES[titleIdx];
    if (!deleting) {
      if (displayed.length < target.length) { const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60); return () => clearTimeout(t); }
      else setPause(true);
    } else {
      if (displayed.length > 0) { const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35); return () => clearTimeout(t); }
      else { setDeleting(false); setTitleIdx((i) => (i + 1) % JOB_TITLES.length); }
    }
  }, [displayed, deleting, pause, titleIdx]);

  return <span className="warm-text">{displayed}<span className="animate-pulse text-primary">|</span></span>;
}

function AnimatedCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let c = 0; const step = Math.ceil(target / 40);
        const iv = setInterval(() => { c += step; if (c >= target) { setCount(target); clearInterval(iv); } else setCount(c); }, 40);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-foreground">{count}{suffix}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function ResumeDropZone({ visible }: { visible: boolean }) {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    const ext = f.name.toLowerCase();
    if (!ext.endsWith(".pdf") && !ext.endsWith(".docx") && !ext.endsWith(".doc")) { setError("Only PDF or DOCX files accepted"); return; }
    if (f.size > 10 * 1024 * 1024) { setError("File must be under 10MB"); return; }
    setError(null); setFile(f); setProgress(0);
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) { p = 100; clearInterval(iv); setTimeout(() => navigate("/resume-analysis"), 600); }
      setProgress(p);
    }, 200);
  }, [navigate]);

  if (!visible) return null;

  return (
    <div className="mt-10 max-w-md mx-auto animate-fade-up-delay-2">
      <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      {!file ? (
        <div
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-foreground font-medium">Drop your resume here</p>
          <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX · Max 10MB</p>
        </div>
      ) : (
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground flex-1 truncate">{file.name}</span>
            {progress >= 100 ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <button onClick={() => { setFile(null); setProgress(0); }}><X className="w-4 h-4 text-muted-foreground" /></button>}
          </div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{progress >= 100 ? "Redirecting to analysis…" : "Uploading…"}</p>
        </div>
      )}
      {error && <p className="text-xs text-destructive mt-2 text-center">{error}</p>}
    </div>
  );
}

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(25 55% 58%), transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] font-serif">
            Your career, at the<br />speed of <span className="warm-text">now.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            AI-powered resume analysis, job matching, and career intelligence. Land your next role as a <TypingText />
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/resume-analysis" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-all">
              Analyze My Resume <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all">
              See How It Works
            </a>
          </div>
        </div>
        <ResumeDropZone visible={visible} />
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <AnimatedCounter target={50} suffix="K+" label="Resumes Analyzed" />
          <AnimatedCounter target={92} suffix="%" label="ATS Pass Rate" />
          <AnimatedCounter target={200} suffix="+" label="Companies Trust Us" />
          <AnimatedCounter target={4} suffix=".9" label="User Rating" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
