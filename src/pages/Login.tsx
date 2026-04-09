import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [tab, setTab] = useState<"signup" | "signin">("signup");
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: "radial-gradient(circle at 50% 30%, hsl(25 55% 58%), transparent 60%)" }} />
      <div className="relative w-full max-w-md glass-card rounded-2xl p-8">
        <Link to="/" className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></Link>
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-foreground">Jobra AI</h2>
        </div>
        <div className="flex bg-secondary rounded-lg p-1 mb-6">
          {(["signup", "signin"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${tab === t ? "bg-card text-primary" : "text-muted-foreground"}`}>
              {t === "signup" ? "Sign up" : "Sign in"}
            </button>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-4">{tab === "signup" ? "Create an account" : "Welcome back"}</h3>
        <div className="space-y-3">
          {tab === "signup" && <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />}
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
          <div className="relative">
            <input type={showPw ? "text" : "password"} placeholder="Password" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
            <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
          </div>
          <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
            {tab === "signup" ? "Create Account" : "Sign In"} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-3 my-5"><div className="flex-1 h-px bg-border" /><span className="text-xs text-muted-foreground">or continue with</span><div className="flex-1 h-px bg-border" /></div>
        <div className="flex gap-3">
          {["Google", "Apple"].map((p) => (
            <button key={p} className="flex-1 py-2.5 rounded-xl border border-border text-sm text-foreground hover:bg-secondary transition-colors">{p}</button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">By continuing, you agree to our <a href="#" className="text-primary">Terms & Service</a></p>
      </div>
    </div>
  );
}
