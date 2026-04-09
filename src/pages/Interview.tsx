import { DashboardLayout } from "@/components/DashboardLayout";
import { MessageSquare, Video, Target, Play, Clock, TrendingUp, ArrowRight } from "lucide-react";

const MODES = [
  { icon: MessageSquare, title: "Behavioral Questions", desc: "Master the STAR method with common behavioral questions.", count: "50+ questions" },
  { icon: Target, title: "Technical Interview", desc: "Role-specific technical questions tailored to your target job.", count: "200+ questions" },
  { icon: Video, title: "Video Interview", desc: "Practice with video recording and get AI analysis on delivery.", count: "AI feedback" },
];

const SESSIONS = [
  { type: "Behavioral", date: "2 days ago", duration: "25 min", score: 87, questions: 8 },
  { type: "Technical", date: "5 days ago", duration: "40 min", score: 72, questions: 12 },
  { type: "Video", date: "1 week ago", duration: "15 min", score: 91, questions: 5 },
];

export default function InterviewPage() {
  return (
    <DashboardLayout title="Interview Prep">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-serif">Interview <span className="warm-text">Preparation</span></h2>
          <p className="text-sm text-muted-foreground mt-1">AI-powered mock interviews to help you prepare and succeed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {MODES.map((mode, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><mode.icon className="w-5 h-5 text-primary" /></div>
              <h3 className="text-foreground font-semibold mb-1">{mode.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{mode.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-primary">{mode.count}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Sessions</h3>
        <div className="space-y-3">
          {SESSIONS.map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Play className="w-4 h-4 text-primary" /></div>
                <div>
                  <p className="text-sm text-foreground font-medium">{s.type} Interview</p>
                  <p className="text-xs text-muted-foreground">{s.date} · {s.duration} · {s.questions} questions</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">{s.score}%</div>
                <div className="text-xs text-muted-foreground">score</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
