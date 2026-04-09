import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, FileSearch, FileText, Mic, Briefcase, Zap, Crown, Building2, Users, Lightbulb, Award, ArrowRight } from "lucide-react";

const SERVICE_ITEMS = [
  { label: "Resume Analysis", href: "/resume-analysis", desc: "AI-powered ATS score & optimization", icon: FileSearch },
  { label: "Resume Builder", href: "/resume-builder", desc: "Build ATS-friendly professional resumes", icon: FileText },
  { label: "Interview Prep", href: "/interview", desc: "AI mock interview simulator", icon: Mic },
  { label: "Job Matching", href: "/job-matches", desc: "Smart role compatibility scoring", icon: Briefcase },
];

const PRICE_ITEMS = [
  { label: "Free", href: "#pricing", desc: "Basic ATS analysis, 3 scans/month", icon: Zap, tag: "Current" },
  { label: "Pro", href: "#pricing", desc: "Unlimited scans, AI resume builder", icon: Crown, tag: "$19/mo" },
  { label: "Enterprise", href: "#pricing", desc: "Team analytics, priority support", icon: Building2, tag: "Custom" },
];

const ABOUT_ITEMS = [
  { label: "About Us", href: "#about", desc: "Our mission to revolutionize hiring", icon: Users },
  { label: "How It Works", href: "#features", desc: "See JOBRA's AI engine in action", icon: Lightbulb },
  { label: "Success Stories", href: "#testimonials", desc: "Real results from real professionals", icon: Award },
];

function NavDropdown({ trigger, children }: { trigger: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
        {trigger} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 animate-fade-up" style={{ animationDuration: "0.2s" }}>
          <div className="glass-card rounded-xl p-2 min-w-[280px] border border-border/50">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownItem({ item }: { item: { label: string; href: string; desc: string; icon: React.ElementType; tag?: string } }) {
  const Icon = item.icon;
  const isLink = !item.href.startsWith("#");
  const content = (
    <div className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-secondary/60 transition-colors cursor-pointer group">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.label}</span>
          {item.tag && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{item.tag}</span>}
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
      </div>
    </div>
  );
  return isLink ? <Link to={item.href}>{content}</Link> : <a href={item.href}>{content}</a>;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-foreground tracking-tight">JOBRA</Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavDropdown trigger="Services">{SERVICE_ITEMS.map((item) => <DropdownItem key={item.label} item={item} />)}</NavDropdown>
          <NavDropdown trigger="Pricing">{PRICE_ITEMS.map((item) => <DropdownItem key={item.label} item={item} />)}</NavDropdown>
          <NavDropdown trigger="About">{ABOUT_ITEMS.map((item) => <DropdownItem key={item.label} item={item} />)}</NavDropdown>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign in</Link>
          <Link to="/resume-analysis" className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-all">
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {SERVICE_ITEMS.map((item) => (
              <Link key={item.label} to={item.href} className="block text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileOpen(false)}>{item.label}</Link>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Link to="/login" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Sign in</Link>
              <Link to="/resume-analysis" className="block text-center px-4 py-2.5 rounded-full text-sm font-medium bg-primary text-primary-foreground" onClick={() => setMobileOpen(false)}>Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
