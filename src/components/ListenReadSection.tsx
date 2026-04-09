import { useEffect, useState } from "react";

const ListenReadSection = () => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `00:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Listen */}
        <div className="reveal">
          <p className="text-sm text-muted-foreground mb-2">One click. Zero friction.</p>
          <h2 className="section-heading mb-8">
            <span className="gradient-text">Just </span>
            <span className="warm-text">listen.</span>
          </h2>

          <div className="glass-card p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full animate-pulse-slow">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Live
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Q2 2026 Earnings call</h3>
              <p className="text-sm text-muted-foreground">April 9, 2026</p>
            </div>
            <div className="text-2xl font-mono text-foreground tracking-wider">
              {formatTime(elapsed)}
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                Live call
              </button>
              <img src="https://assets.fey.com/logos/NVDA_XNAS.svg" className="w-7 h-7 rounded-md" alt="NVDA" />
            </div>
          </div>

          <div className="mt-4 glass-card p-4 flex items-center gap-3">
            <img src="https://assets.fey.com/logos/NET_XNYS.svg" className="w-7 h-7 rounded-md" alt="NET" />
            <div className="flex-1">
              <span className="text-sm font-medium text-foreground">NET</span>
              <span className="text-sm text-muted-foreground"> · Cloudflare Inc.</span>
            </div>
            <a href="#" className="text-xs text-muted-foreground border border-border rounded-lg px-3 py-1.5 hover:text-foreground transition-colors">
              View report
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Listen effortlessly within Fey—no third-party logins, no redirects. Just instant, uninterrupted access to the calls you care about.
          </p>
        </div>

        {/* Read */}
        <div className="reveal">
          <h2 className="section-heading mb-8">
            <span className="gradient-text">Or </span>
            <span className="warm-text">read.</span>
          </h2>

          <div className="glass-card p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">Live earnings</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Q3 2024 earnings</h3>
              <span className="inline-block mt-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">
                Beat
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">0.64</span> +4.28% EPS · 
              <span className="text-foreground font-medium">28.71B</span> +4.04% revenue
            </p>
            <div className="flex gap-2">
              <button className="text-xs border border-border rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
                View announcement
              </button>
              <button className="text-xs border border-border rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
                Join call
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Instantly catch up with clear summaries and live transcripts. Perfect for skimming the highlights or diving deep, without missing a moment.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-muted-foreground bg-card border border-border">
            Coming soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListenReadSection;
