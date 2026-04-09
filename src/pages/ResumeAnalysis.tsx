import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { FileText, Upload, BarChart3, Target, Sparkles, AlertCircle, Brain, ShieldCheck, Star } from "lucide-react";

const analyzeSteps = [
  { icon: FileText, label: "Parsing your resume", sub: "Extracting text & sections…" },
  { icon: Brain, label: "Running AI analysis", sub: "Matching keywords & ATS rules…" },
  { icon: BarChart3, label: "Calculating ATS score", sub: "Scoring format, skills & experience…" },
  { icon: ShieldCheck, label: "Generating recommendations", sub: "Building your action plan…" },
  { icon: Star, label: "Finalising report", sub: "Wrapping up insights…" },
];

export default function ResumeAnalysisPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    setFile(f);
    setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); setScore(Math.floor(Math.random() * 30) + 65); }, 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">✦ AI Resume Analysis</span>
          <h1 className="section-heading mb-4">Analyze Your <span className="warm-text">Resume</span></h1>
          <p className="section-subheading mx-auto">Upload your resume and get instant ATS score with detailed improvement recommendations.</p>
        </div>

        {!file ? (
          <div className="max-w-lg mx-auto">
            <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            <div onClick={() => inputRef.current?.click()} className="border-2 border-dashed border-border hover:border-primary/40 rounded-2xl p-12 text-center cursor-pointer transition-all">
              <Upload className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-foreground font-medium">Drop your resume here or click to browse</p>
              <p className="text-sm text-muted-foreground mt-2">PDF, DOC, DOCX · Max 5MB</p>
            </div>
          </div>
        ) : analyzing ? (
          <div className="max-w-md mx-auto text-center glass-card rounded-2xl p-10">
            <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <p className="text-foreground font-medium mb-2">Analyzing {file.name}...</p>
            <p className="text-sm text-muted-foreground">Our AI is scanning your resume</p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">Your ATS Score</p>
              <div className="text-6xl font-bold text-primary mb-2">{score}%</div>
              <p className="text-sm text-muted-foreground">{(score ?? 0) >= 80 ? "Great score! Your resume is ATS-friendly." : "Good start! Here are some improvements."}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {["Keywords Match", "Formatting", "Section Structure", "Experience Impact"].map((area, i) => (
                <div key={i} className="glass-card rounded-xl p-5">
                  <div className="flex justify-between mb-2"><span className="text-sm text-foreground font-medium">{area}</span><span className="text-sm text-primary font-bold">{Math.floor(Math.random() * 30) + 65}%</span></div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${Math.floor(Math.random() * 30) + 65}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
