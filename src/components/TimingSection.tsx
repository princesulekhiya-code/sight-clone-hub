import { useState } from "react";

const TimingSection = () => {
  const [activeTab, setActiveTab] = useState<"press" | "call">("press");

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="reveal flex gap-2 mb-10 justify-center">
          <button
            onClick={() => setActiveTab("press")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === "press"
                ? "bg-card border border-border text-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Press release · 4:20 PM
          </button>
          <button
            onClick={() => setActiveTab("call")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === "call"
                ? "bg-card border border-border text-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Earnings call · 5:00 PM
          </button>
        </div>

        {/* Content */}
        <div className="reveal text-center max-w-xl mx-auto">
          <div
            className="transition-all duration-500"
            style={{ opacity: 1 }}
          >
            {activeTab === "press" ? (
              <p className="section-subheading mx-auto">
                Summaries hit your screen just ~0.8 seconds after a press release—around 40 minutes before the earnings call—giving you the advantage of clarity before the market reacts.
              </p>
            ) : (
              <p className="section-subheading mx-auto">
                Listen live, right within Fey. With instant press releases and insightful summaries delivered ahead of each earnings call, you'll have ample time and context to make your move.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingSection;
