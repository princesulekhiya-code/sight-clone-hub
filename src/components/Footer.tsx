import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #7c5ef0, #6352dc)" }}>
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-foreground font-semibold text-lg">JOBRA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered career intelligence platform. Analyze, optimize, and land your dream job.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
            <div className="space-y-2.5">
              <Link to="/resume-analysis" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Resume Analysis</Link>
              <Link to="/resume-builder" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Resume Builder</Link>
              <Link to="/job-matches" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Job Matching</Link>
              <Link to="/interview" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Interview Prep</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <div className="space-y-2.5">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="mailto:support@jobra.ai" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <div className="space-y-2.5">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">© 2026 JOBRA. All rights reserved.</p>
          <button onClick={scrollToTop} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/30 hover:text-primary transition-all text-muted-foreground">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
