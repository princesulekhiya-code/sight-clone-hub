import { useState } from "react";

const companies = [
  { ticker: "NET", name: "Q4 2024 earnings call", logo: "https://assets.fey.com/logos/NET_XNYS.svg", img: "https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNET_4x.2321a827.jpg&w=640&q=100" },
  { ticker: "ABNB", name: "Q1 2025 earnings call", logo: "https://assets.fey.com/logos/ABNB_XNAS.svg", img: "https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FABNB_4x.521655da.jpg&w=640&q=100" },
  { ticker: "NFLX", name: "Q1 2025 earnings call", logo: "https://assets.fey.com/logos/NFLX_XNAS.svg", img: "https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNFLX_4x.90abcc27.jpg&w=640&q=100" },
  { ticker: "DIS", name: "Q2 2025 earnings call", logo: "https://assets.fey.com/logos/DIS_XNAS.svg", img: "https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDIS_4x.5c7e3116.jpg&w=640&q=100" },
  { ticker: "AAPL", name: "Q2 2025 earnings call", logo: "https://assets.fey.com/logos/AAPL_XNAS.svg", img: "https://www.fey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAAPL_4x.0577fc27.jpg&w=640&q=100" },
];

const SwitchCallsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="section-heading mb-4">
            <span className="gradient-text">Switch calls as effortlessly as </span>
            <span className="warm-text">songs.</span>
          </h2>
          <p className="section-subheading mx-auto">
            Just like the iPod put thousands of songs in your pocket, Fey puts thousands of companies at your fingertips—instantly accessible, effortlessly navigable, and beautifully simple.
          </p>
        </div>

        <div className="reveal flex flex-col md:flex-row gap-8 items-start">
          {/* Company list (iPod style) */}
          <div className="w-full md:w-72 space-y-1">
            {companies.map((c, i) => (
              <button
                key={c.ticker}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  active === i
                    ? "bg-card border border-border shadow-lg"
                    : "hover:bg-card/40"
                }`}
              >
                <img src={c.logo} className="w-8 h-8 rounded-lg" alt={c.ticker} />
                <div>
                  <div className="text-sm font-semibold text-foreground">{c.ticker}</div>
                  <div className="text-xs text-muted-foreground">{c.name}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="flex-1 rounded-2xl overflow-hidden border border-border bg-card relative">
            {companies.map((c, i) => (
              <img
                key={c.ticker}
                src={c.img}
                alt={c.ticker}
                className={`w-full object-cover transition-opacity duration-500 ${
                  active === i ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchCallsSection;
