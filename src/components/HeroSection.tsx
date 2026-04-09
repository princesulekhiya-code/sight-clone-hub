import { useEffect, useState } from "react";

const HeroSection = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(30 70% 55% / 0.15), transparent 70%)" }} />

      <div className="relative z-10 text-center px-6">
        {/* Heading */}
        <h1 className="animate-fade-up section-heading mb-6">
          <span className="gradient-text">Earnings, at the speed of </span>
          <span className="warm-text font-semibold">now</span>
          <span className="gradient-text">.</span>
        </h1>
      </div>

      {/* Clock */}
      <div className="relative z-10 mt-8 animate-fade-up-delay-1">
        <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
          {/* Clock body */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-secondary to-background border border-border shadow-2xl" />
          
          {/* Clock face */}
          <div className="absolute inset-3 rounded-full bg-background border border-border/50">
            {/* Hour markers */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-3 bg-muted-foreground/40 left-1/2 -translate-x-1/2"
                style={{
                  top: "12px",
                  transformOrigin: "50% calc(50% + 100px)",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
              />
            ))}
            
            {/* Minute markers */}
            {Array.from({ length: 60 }).map((_, i) => (
              i % 5 !== 0 && (
                <div
                  key={`m-${i}`}
                  className="absolute w-px h-1.5 bg-muted-foreground/20 left-1/2"
                  style={{
                    top: "14px",
                    transformOrigin: "50% calc(50% + 98px)",
                    transform: `translateX(-50%) rotate(${i * 6}deg)`,
                  }}
                />
              )
            ))}

            {/* Hour hand */}
            <div
              className="absolute left-1/2 bottom-1/2 w-1.5 h-[60px] md:h-[75px] bg-foreground rounded-full origin-bottom -translate-x-1/2"
              style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
            />
            
            {/* Minute hand */}
            <div
              className="absolute left-1/2 bottom-1/2 w-1 h-[80px] md:h-[100px] bg-foreground/80 rounded-full origin-bottom -translate-x-1/2"
              style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
            />
            
            {/* Second hand */}
            <div
              className="absolute left-1/2 bottom-1/2 w-0.5 h-[90px] md:h-[110px] rounded-full origin-bottom -translate-x-1/2 transition-none"
              style={{
                transform: `translateX(-50%) rotate(${secondDeg}deg)`,
                backgroundColor: "hsl(var(--primary))",
              }}
            />
            
            {/* Center knob */}
            <div className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-foreground -translate-x-1/2 -translate-y-1/2 z-10" />

            {/* Day/Date */}
            <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 text-[10px] font-medium tracking-wider text-primary">
              <span className="uppercase">
                {time.toLocaleDateString("en-US", { weekday: "short" })}
              </span>
              <span className="ml-1">{time.getDate()}</span>
            </div>
          </div>

          {/* Surface / Stand */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[140px] md:w-[180px] h-12 bg-gradient-to-b from-secondary to-background rounded-b-2xl" />
        </div>

        {/* Notification overlays */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[420px] space-y-2 animate-fade-up-delay-2">
          <div className="notification-bar shadow-xl">
            <img src="https://assets.fey.com/logos/NFLX_XNAS.svg" className="w-8 h-8 rounded-lg" alt="Netflix" />
            <div className="flex-1 text-sm">
              <span className="font-semibold text-foreground">Netflix</span>
              <span className="text-muted-foreground"> reports record Q2 earnings.</span>
            </div>
            <span className="text-xs text-primary animate-pulse-slow">●</span>
            <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground border border-border rounded-lg px-2.5 py-1.5 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              Press release
            </a>
          </div>
        </div>
      </div>

      {/* Gradient divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient" />
    </section>
  );
};

export default HeroSection;
