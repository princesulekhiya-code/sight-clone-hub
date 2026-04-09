import { useRef, useState, useCallback } from "react";
import { Upload, CheckCircle, Shield, Clock, BarChart3 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const STEPS = [
  { num: 1, label: "Upload", desc: "Drop your resume" },
  { num: 2, label: "Analyze", desc: "AI scans your file" },
  { num: 3, label: "Optimize", desc: "Get actionable tips" },
];

export function ScoreSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentStep = file ? 1 : 0;

  const handleFile = (f: File) => {
    const ext = f.name.toLowerCase();
    if (!ext.endsWith(".pdf") && !ext.endsWith(".docx") && !ext.endsWith(".doc")) {
      setError("Only PDF or DOCX files are accepted");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setError("File size must not exceed 5MB");
      return;
    }
    setError(null);
    setFile(f);
  };

  return (
    <section id="score" className="relative py-24 px-6 overflow-hidden cosmic-bg">
      <div className="grid-bg absolute inset-0" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
              ✦ AI-Powered Analysis
            </span>
            <h2 className="section-heading mb-4">
              Get your resume score <span className="purple-text">now!</span>
            </h2>
            <p className="section-subheading mx-auto">
              Upload your resume and get an instant ATS compatibility report powered by AI.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Steps */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i < currentStep ? "bg-primary text-primary-foreground" : i === currentStep ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary text-muted-foreground"}`}>
                    {i < currentStep ? <CheckCircle className="w-4 h-4" /> : step.num}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">{step.label}</div>
                    <div className="text-[10px] text-muted-foreground">{step.desc}</div>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-12 h-px ${i < currentStep ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-lg mx-auto">
            <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />

            <div className="glass-card rounded-2xl p-6">
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
                onClick={() => { if (!file) fileInputRef.current?.click(); }}
                className={`rounded-xl border-2 border-dashed p-8 text-center cursor-pointer transition-all ${isDragging ? "border-primary/60 scale-[1.01]" : file ? "border-primary/30" : "border-border hover:border-primary/30"}`}
                style={{ background: isDragging ? "rgba(124,94,240,0.08)" : "rgba(255,255,255,0.01)" }}
              >
                {file ? (
                  <div>
                    <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-medium">Upload Complete!</p>
                    <p className="text-sm text-muted-foreground mt-1">Your resume is ready for analysis</p>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <span className="text-xs text-primary">{file.name}</span>
                      <button onClick={(e) => { e.stopPropagation(); setFile(null); setError(null); }} className="text-xs text-muted-foreground hover:text-foreground">✕</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                    <p className="text-foreground font-medium mb-1">{isDragging ? "Drop it here!" : "Drop your resume or click to browse"}</p>
                    <p className="text-xs text-muted-foreground">Supports PDF, DOCX up to 5MB</p>
                  </>
                )}
              </div>

              <div className="mt-4 space-y-3">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full group flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold text-white transition-all hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #7c5ef0, #6352dc)", boxShadow: "0 4px 20px rgba(124,94,240,0.35)" }}
                >
                  {file ? "Start Analysis →" : "Upload Resume"}
                </button>

                {!file && (
                  <p className="text-center text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" /> Privacy guaranteed
                  </p>
                )}
              </div>

              {error && (
                <div className="mt-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs text-center">
                  {error}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-6 mt-6">
              {[
                { icon: BarChart3, text: "ATS Compatible" },
                { icon: Shield, text: "256-bit Encrypted" },
                { icon: Clock, text: "Auto-deleted in 24h" },
              ].map(({ icon: Icon, text }, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Icon className="w-3.5 h-3.5 text-primary/50" />{text}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ScoreSection;
