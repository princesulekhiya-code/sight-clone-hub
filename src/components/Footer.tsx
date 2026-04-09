import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Github, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
            <div className="space-y-3">
              {[["Resume Analysis", "/resume-analysis"], ["Resume Builder", "/resume-builder"], ["Job Matches", "/job-matches"], ["Interview Prep", "/interview"]].map(([label, href]) => (
                <Link key={label} to={href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <div className="space-y-3">
              {["About", "Careers", "Blog", "Press"].map((item) => (
                <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <div className="space-y-3">
              {["Documentation", "Help Center", "API Reference", "Community"].map((item) => (
                <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <div className="space-y-3">
              {["Privacy", "Terms", "Security", "Compliance"].map((item) => (
                <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
          <p className="text-sm text-muted-foreground">© 2026 JOBRA AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Icon className="w-4 h-4" /></a>
            ))}
            <button onClick={scrollToTop} className="ml-4 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
