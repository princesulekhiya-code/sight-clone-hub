const ClaritySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="section-heading mb-4">
            <span className="gradient-text">Instant clarity. </span>
            <span className="warm-text">Zero clutter.</span>
          </h2>
          <p className="section-subheading mx-auto">
            Instantly generated summaries deliver all the key details, clearly sourced and elegantly simplified—so you don't have to sift through lengthy reports.
          </p>
        </div>

        {/* Main image showcase */}
        <div className="reveal relative rounded-2xl overflow-hidden border border-border bg-card">
          <img
            src="https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpress-release_4x.0958cf2a.jpg&w=3840&q=100"
            alt="Earnings press release view"
            className="w-full object-cover"
            loading="lazy"
          />
          
          {/* Floating cursor + tooltip */}
          <div className="absolute bottom-12 right-12 hidden md:flex items-start gap-1 animate-float">
            <img src="https://www.fey.com/_next/static/media/iconCursor.b3b1eeec.svg" alt="" className="w-5 h-5" />
            <img
              src="https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftooltip-earnings.f17bdfff.png&w=640&q=100"
              alt="Tooltip"
              className="w-48 rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Mobile screenshots */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            "https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpress-release-mobile-1.0775ee1a.jpg&w=3840&q=100",
            "https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpress-release-mobile-2.901819af.jpg&w=3840&q=100",
            "https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpress-release-mobile-3.75c6f0db.jpg&w=3840&q=100",
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-border bg-card">
              <img src={src} alt={`Mobile view ${i + 1}`} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClaritySection;
