import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { TrendingUp, Award, Target, BarChart3, ArrowRight, Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-serif">Welcome back, <span className="warm-text">Marcus</span></h2>
          <p className="text-sm text-muted-foreground mt-1">Here's your career intelligence overview</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BarChart3, label: "ATS Score", value: "87%", color: "text-primary" },
            { icon: Target, label: "Job Matches", value: "47", color: "text-foreground" },
            { icon: Award, label: "Interviews", value: "12", color: "text-foreground" },
            { icon: TrendingUp, label: "Profile Views", value: "234", color: "text-foreground" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-5">
              <s.icon className="w-5 h-5 text-primary mb-3" />
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-foreground font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { label: "Analyze Resume", href: "/resume-analysis", desc: "Upload & scan your resume" },
                { label: "Build Resume", href: "/resume-builder", desc: "Create ATS-friendly resumes" },
                { label: "Find Jobs", href: "/job-matches", desc: "AI-matched opportunities" },
                { label: "Practice Interview", href: "/interview", desc: "Mock interview prep" },
              ].map((a, i) => (
                <Link key={i} to={a.href} className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group">
                  <div><p className="text-sm text-foreground font-medium">{a.label}</p><p className="text-xs text-muted-foreground">{a.desc}</p></div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" /> AI Insights</h3>
            <div className="space-y-4">
              {[
                { tip: "Add more quantified achievements to your experience section", impact: "High" },
                { tip: "Your skills section could benefit from industry-specific keywords", impact: "Medium" },
                { tip: "Consider adding a professional summary at the top", impact: "High" },
              ].map((t, i) => (
                <div key={i} className="p-3 rounded-xl bg-secondary/50">
                  <p className="text-sm text-foreground">{t.tip}</p>
                  <span className={`text-xs mt-1 inline-block ${t.impact === "High" ? "text-primary" : "text-muted-foreground"}`}>{t.impact} Impact</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
