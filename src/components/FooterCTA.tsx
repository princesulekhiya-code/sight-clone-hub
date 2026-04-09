const FooterCTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-model_4x.7e8dcb15.jpg&w=3840&q=100"
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="reveal text-sm text-muted-foreground mb-4 tracking-wide">
          Press releases · calls · slides · transcripts
        </p>
        <h2 className="reveal section-heading">
          <span className="gradient-text">Tap. Listen. </span>
          <span className="warm-text">Know.</span>
        </h2>
        <div className="reveal mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-foreground text-background hover:opacity-90"
          >
            Get started
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-24 pt-8 border-t border-border/30 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-tertiary">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
              <path d="M4 4L14 4L14 14L4 14Z" fill="hsl(var(--muted-foreground))" />
              <path d="M14 4L24 14L14 14Z" fill="hsl(var(--muted-foreground))" opacity="0.7" />
            </svg>
            <span>© 2025 Fey. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
