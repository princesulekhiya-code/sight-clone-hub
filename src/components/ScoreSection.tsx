import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, FileText, Shield, Clock, BarChart3 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const STEPS = [
  { num: 1, label: "Upload", desc: "Drop your resume" },
  { num: 2, label: "Analyze", desc: "AI scans your file" },
  { num: 3, label: "Optimize", desc: "Get actionable tips" },
];

export function ScoreSection() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentStep = file ? 1 : 0;

  const handleFile = (f: File) => {
    const ext = f.name.toLowerCase();
    if (!ext.endsWith(".pdf") && !ext.endsWith(".docx") && !ext.endsWith(".doc")) { setError("Only PDF or DOCX files are accepted"); return; }
    if (f.size > 5 * 1024 * 1024) { setError("File size must not exceed 5MB"); return; }
    setError(null); setFile(f);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden cosmic-bg">
      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">✦ AI-Powered Analysis</span>
            <h2 className="section-heading mb-4">Get your resume score <span className="warm-text">now!</span></h2>
            <p className="section-subheading mx-auto">Upload your resume and get instant ATS compatibility analysis with actionable improvement tips.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-4 mb-12">
            {STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${i <= currentStep ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {i < currentStep ? <CheckCircle className="w-5 h-5" /> : step.num}
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-foreground">{step.label}</div>
                  <div className="text-xs text-muted-foreground">{step.desc}</div>
                </div>
                {i < STEPS.length - 1 && <div className="w-12 h-px bg-border ml-2" />}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-lg mx-auto">
            <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            <div
              className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${isDragging ? "border-primary bg-primary/5" : file ? "border-primary/40 bg-primary/5" : "border-border hover:border-primary/30"}`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
              onClick={() => !file && fileInputRef.current?.click()}
            >
              {file ? (
                <div className="space-y-3">
                  <FileText className="w-8 h-8 text-primary mx-auto" />
                  <p className="text-sm text-foreground font-medium">{file.name}</p>
                  <button onClick={() => navigate("/resume-analysis")} className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all">Analyze Now</button>
                </div>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-foreground font-medium">Drop your resume here</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX · Max 5MB</p>
                </>
              )}
            </div>
            {error && <p className="text-xs text-destructive mt-2 text-center">{error}</p>}
            <div className="flex items-center justify-center gap-6 mt-6">
              {[{ icon: Shield, text: "ATS Verified" }, { icon: Clock, text: "30 Sec Analysis" }, { icon: BarChart3, text: "Detailed Report" }].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground"><item.icon className="w-3.5 h-3.5 text-primary" /> {item.text}</div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ScoreSection;
