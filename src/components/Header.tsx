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

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1.5 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
        {trigger}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
        <div className="min-w-[280px] rounded-xl border border-border bg-card/95 backdrop-blur-xl p-2 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}

function DropdownItem({ item, onClick }: { item: { label: string; href: string; desc: string; icon: React.ComponentType<{ className?: string }> }; onClick?: () => void }) {
  const Icon = item.icon;
  const isHash = item.href.startsWith("#");

  const content = (
    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <div className="text-[13px] font-medium text-foreground">{item.label}</div>
        <div className="text-[11px] text-muted-foreground">{item.desc}</div>
      </div>
    </div>
  );

  if (isHash) {
    return (
      <a href={item.href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return <Link to={item.href} onClick={onClick}>{content}</Link>;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (!href.startsWith("#")) return;
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #7c5ef0, #6352dc)" }}>
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-foreground font-semibold text-lg tracking-tight">JOBRA</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavDropdown trigger="Services">
              {SERVICE_ITEMS.map((item) => (
                <DropdownItem key={item.label} item={item} />
              ))}
            </NavDropdown>
            <NavDropdown trigger="Pricing">
              {PRICE_ITEMS.map((item) => (
                <DropdownItem key={item.label} item={item} onClick={() => scrollTo(item.href)} />
              ))}
            </NavDropdown>
            <NavDropdown trigger="About">
              {ABOUT_ITEMS.map((item) => (
                <DropdownItem key={item.label} item={item} onClick={() => scrollTo(item.href)} />
              ))}
            </NavDropdown>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/resume-analysis" className="text-[13px] font-medium text-foreground px-5 py-2.5 rounded-lg transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #7c5ef0, #6352dc)", boxShadow: "0 4px 15px rgba(124,94,240,0.3)" }}>
            Analyze Resume
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 space-y-1">
          <MobileSection title="Services" items={SERVICE_ITEMS} onClose={() => setMobileOpen(false)} scrollTo={scrollTo} />
          <MobileSection title="Pricing" items={PRICE_ITEMS} onClose={() => setMobileOpen(false)} scrollTo={scrollTo} />
          <MobileSection title="About" items={ABOUT_ITEMS} onClose={() => setMobileOpen(false)} scrollTo={scrollTo} />
          <div className="pt-3">
            <Link to="/resume-analysis" onClick={() => setMobileOpen(false)} className="block text-center text-[14px] font-medium text-white px-5 py-3 rounded-xl" style={{ background: "linear-gradient(135deg, #7c5ef0, #6352dc)" }}>
              Analyze Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileSection({ title, items, onClose, scrollTo }: {
  title: string;
  items: { label: string; href: string; desc: string; icon: React.ComponentType<{ className?: string }> }[];
  onClose: () => void;
  scrollTo?: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-[14px] font-medium text-muted-foreground px-3 py-3 transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-2 pb-2 space-y-1">
          {items.map((child) => (
            <a key={child.label} href={child.href} onClick={() => { onClose(); scrollTo?.(child.href); }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/30 transition-colors"
            >
              <child.icon className="w-4 h-4 text-primary" />
              <div>
                <div className="text-[13px] font-medium text-foreground">{child.label}</div>
                <div className="text-[11px] text-muted-foreground">{child.desc}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
