import { DashboardLayout } from "@/components/DashboardLayout";
import { Plus, Eye, Download, Sparkles } from "lucide-react";

const templates = [
  { name: "Classic", color: "bg-primary/10" },
  { name: "Modern", color: "bg-accent" },
  { name: "Minimal", color: "bg-secondary" },
  { name: "Professional", color: "bg-primary/5" },
];

export default function ResumeBuilderPage() {
  return (
    <DashboardLayout title="Resume Builder">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-serif">Resume Builder</h2>
            <p className="text-sm text-muted-foreground mt-1">Create ATS-optimized professional resumes</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all">
            <Plus className="w-4 h-4" /> New Resume
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {templates.map((t, i) => (
            <div key={i} className="glass-card rounded-xl p-4 cursor-pointer hover:border-primary/30 transition-all">
              <div className={`${t.color} rounded-lg h-40 mb-3 flex items-center justify-center`}>
                <div className="space-y-2 w-3/4">
                  {[1, 2, 3, 4].map((l) => <div key={l} className="h-2 bg-foreground/10 rounded" style={{ width: `${100 - l * 15}%` }} />)}
                </div>
              </div>
              <p className="text-sm text-foreground font-medium">{t.name}</p>
              <p className="text-xs text-muted-foreground">ATS Optimized</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">AI Resume Writer</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Let our AI help you craft compelling bullet points and summaries based on your experience.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div><label className="text-xs text-muted-foreground mb-1 block">Job Title</label><input className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50" placeholder="e.g. Senior Frontend Developer" /></div>
              <div><label className="text-xs text-muted-foreground mb-1 block">Key Skills</label><input className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50" placeholder="React, TypeScript, Node.js" /></div>
              <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all">Generate Content</button>
            </div>
            <div className="bg-secondary rounded-xl p-4 min-h-[200px] flex items-center justify-center">
              <p className="text-sm text-muted-foreground text-center">AI-generated content will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
