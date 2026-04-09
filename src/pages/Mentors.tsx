import { DashboardLayout } from "@/components/DashboardLayout";
import { MessageSquare, Calendar, Star, Clock, Search } from "lucide-react";

const MENTORS = [
  { name: "Sarah Chen", title: "Senior Product Designer", company: "Meta", rating: 4.9, reviews: 47, expertise: ["Product Design", "Design Systems"], price: "$120/hr", available: true },
  { name: "Michael Rodriguez", title: "Design Director", company: "Google", rating: 5.0, reviews: 63, expertise: ["Leadership", "Strategy"], price: "$150/hr", available: false },
  { name: "Emily Zhang", title: "UX Lead", company: "Apple", rating: 4.8, reviews: 35, expertise: ["UX Research", "Accessibility"], price: "$100/hr", available: true },
  { name: "David Kim", title: "Staff Engineer", company: "Netflix", rating: 4.9, reviews: 52, expertise: ["React", "System Design"], price: "$130/hr", available: true },
];

export default function MentorsPage() {
  return (
    <DashboardLayout title="Mentors">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-serif">Find a <span className="warm-text">Mentor</span></h2>
          <p className="text-sm text-muted-foreground mt-1">Connect with industry professionals for personalized career guidance</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {MENTORS.map((m, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">{m.name.split(" ").map(n => n[0]).join("")}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-foreground font-semibold">{m.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${m.available ? "bg-green-500/10 text-green-500" : "bg-muted text-muted-foreground"}`}>{m.available ? "Available" : "Busy"}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{m.title} at {m.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-1 text-xs text-primary"><Star className="w-3 h-3" />{m.rating} ({m.reviews})</span>
                <span className="text-xs text-muted-foreground">{m.price}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {m.expertise.map((e, j) => <span key={j} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">{e}</span>)}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-1"><Calendar className="w-3 h-3" /> Book Session</button>
                <button className="py-2 px-3 rounded-xl border border-border text-xs text-foreground hover:bg-secondary transition-colors"><MessageSquare className="w-3 h-3" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
