import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, ArrowRight, FileText, CheckCircle2, File, X, Star, Shield } from "lucide-react";

const JOB_TITLES = [
  "Frontend Developer",
  "Data Scientist",
  "Product Manager",
  "UX Designer",
  "Cloud Architect",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Full Stack Developer",
];

function TypingText() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => { setDeleting(true); setPause(false); }, 1800);
      return () => clearTimeout(t);
    }
    const target = JOB_TITLES[titleIdx];
    if (!deleting) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        setPause(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setTitleIdx((i) => (i + 1) % JOB_TITLES.length);
      }
    }
  }, [displayed, deleting, pause, titleIdx]);

  return (
    <span className="purple-text">
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse" />
    </span>
  );
}

function AnimatedCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 30);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-foreground">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function ResumeDropZone({ visible }: { visible: boolean }) {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);

  const ACCEPTED = ".pdf,.doc,.docx";
  const MAX_SIZE = 10 * 1024 * 1024;

  const handleFile = useCallback((f: File) => {
    const ext = f.name.split(".").pop()?.toLowerCase() || "";
    if (!["pdf", "doc", "docx"].includes(ext)) return;
    if (f.size > MAX_SIZE) return;
    setFile(f);
    setUploadProgress(0);
    setIsUploaded(false);

    let prog = 0;
    const interval = setInterval(() => {
      prog += Math.random() * 25 + 10;
      if (prog >= 100) {
        prog = 100;
        clearInterval(interval);
        setIsUploaded(true);
        setTimeout(() => navigate("/resume-analysis"), 1200);
      }
      setUploadProgress(Math.min(prog, 100));
    }, 200);
  }, [navigate]);

  const onDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); }, []);
  const onDragLeave = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); }, []);
  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  }, [handleFile]);
  const onFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  }, [handleFile]);
  const removeFile = useCallback(() => {
    setFile(null); setUploadProgress(0); setIsUploaded(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "400ms" }}>
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-primary tracking-wider">AI Resume Analyzer</span>
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            Instant ATS score & feedback
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-[10px]">Live</span>
          </span>
        </div>

        <input ref={fileInputRef} type="file" accept={ACCEPTED} className="hidden" onChange={onFileSelect} />

        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => !file && fileInputRef.current?.click()}
          className={`relative group cursor-pointer rounded-2xl border-2 border-dashed p-5 transition-all duration-300 ${
            isDragging ? "border-primary/60 scale-[1.02]" : file ? "border-primary/30" : "border-border hover:border-primary/40"
          }`}
          style={{
            background: isDragging ? "rgba(124,94,240,0.08)" : file ? "rgba(124,94,240,0.05)" : "rgba(255,255,255,0.015)",
          }}
        >
          {!file ? (
            <div className="text-center py-4">
              <Upload className="w-8 h-8 text-primary/60 mx-auto mb-3" />
              <p className="text-sm text-foreground font-medium mb-1">
                {isDragging ? "Drop your resume here" : "Drag & drop your resume"}
              </p>
              <p className="text-[11px] text-muted-foreground mb-3">or click to browse files</p>
              <div className="flex items-center justify-center gap-3 text-[10px] text-muted-foreground">
                <span>PDF, DOC, DOCX</span>
                <span>Max 10MB</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                {["ATS Score", "AI Analysis", "Instant"].map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-2">
              <div className="flex items-center gap-3 mb-3">
                <File className="w-5 h-5 text-primary" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground font-medium truncate">{file.name}</p>
                  <p className="text-[11px] text-muted-foreground">{formatSize(file.size)}</p>
                </div>
                {!isUploaded && (
                  <button onClick={(e) => { e.stopPropagation(); removeFile(); }} className="w-7 h-7 rounded-lg flex items-center justify-center border border-border hover:bg-accent/50">
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                )}
              </div>
              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden mb-2">
                <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
              </div>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                {isUploaded ? "Ready! Redirecting..." : `Analyzing ${Math.round(uploadProgress)}%`}
                {isUploaded && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </p>
              {isUploaded && (
                <div className="flex items-center gap-2 mt-3">
                  {["ATS Score", "Keywords", "Format"].map((label, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full border border-primary/20 text-primary flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> 256-bit encrypted · Auto-deleted in 24h</span>
          <span className="flex items-center gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />)}
            <span className="ml-1">4.9 · Trusted by 12K+</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden cosmic-bg">
      <div className="grid-bg absolute inset-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
              <span>✦</span> AI Career Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Land your job as a<br />
              <TypingText />
            </h1>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0">
              Upload your resume and let AI analyze your ATS score, rebuild it for maximum impact, prepare you for interviews, and match you with the perfect job — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-10">
              <a href="#score" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #7c5ef0, #6352dc)", boxShadow: "0 4px 20px rgba(124,94,240,0.35)" }}>
                Analyze Resume <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all">
                Explore Platform
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: 12000, suffix: "+", label: "Resumes Analyzed" },
                { value: 99, suffix: "%", label: "ATS Accuracy" },
                { value: 47, suffix: "+", label: "Job Categories" },
                { value: 500, suffix: "+", label: "Partner Companies" },
              ].map((stat, i) => (
                <AnimatedCounter key={i} target={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right: Drop Zone */}
          <ResumeDropZone visible={visible} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
