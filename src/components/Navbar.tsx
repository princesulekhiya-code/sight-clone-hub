import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 4L14 4L14 14L4 14Z" fill="hsl(var(--foreground))" />
              <path d="M14 4L24 14L14 14Z" fill="hsl(var(--foreground))" opacity="0.7" />
              <path d="M4 14L14 14L14 24Z" fill="hsl(var(--foreground))" opacity="0.5" />
            </svg>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Updates</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Students</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">App</a>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/60">
            <span className="text-sm text-muted-foreground">Fey has joined Wealthsimple</span>
            <a href="#" className="text-sm font-medium text-foreground px-3 py-1 rounded-full bg-accent hover:bg-accent/80 transition-colors">
              Learn more
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? <path d="M6 6L18 18M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3">
          <a href="#" className="block text-sm text-muted-foreground">Features</a>
          <a href="#" className="block text-sm text-muted-foreground">Pricing</a>
          <a href="#" className="block text-sm text-muted-foreground">Updates</a>
          <a href="#" className="block text-sm text-muted-foreground">Students</a>
          <a href="#" className="block text-sm text-muted-foreground">App</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
