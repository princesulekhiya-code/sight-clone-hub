import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Search, FileText, Briefcase, MessageSquare, Users, User, Settings, LogOut, Bell } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Search, label: "Resume Analysis", href: "/resume-analysis" },
  { icon: FileText, label: "Resume Builder", href: "/resume-builder" },
  { icon: Briefcase, label: "Job Matches", href: "/job-matches" },
  { icon: MessageSquare, label: "AI Interview", href: "/interview" },
  { icon: Users, label: "Mentors", href: "/mentors" },
];

const bottomItems = [
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function DashboardLayout({ children, title }: { children: React.ReactNode; title?: string }) {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card p-4">
        <Link to="/" className="text-lg font-bold text-foreground mb-8 px-3">JOBRA</Link>
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = path === item.href;
            return (
              <Link key={item.href} to={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}>
                <Icon className="w-4 h-4" /> {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border pt-3 space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} to={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                <Icon className="w-4 h-4" /> {item.label}
              </Link>
            );
          })}
          <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-border flex items-center justify-between px-6">
          <h1 className="text-sm font-semibold text-foreground">{title || ""}</h1>
          <div className="flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground"><Bell className="w-4 h-4" /></button>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">MV</div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
