const BeFirstSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal relative rounded-2xl overflow-hidden border border-border">
          <img
            src="https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbe-first_4x.aa313952.jpg&w=1920&q=100"
            alt="Be the first to know"
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
            <h2 className="section-heading mb-3">
              <span className="gradient-text">Be the first to </span>
              <span className="warm-text">know.</span>
            </h2>
            <p className="section-subheading max-w-lg">
              Official company press releases hit your feed the instant they're announced—accurate, and ahead of the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeFirstSection;
