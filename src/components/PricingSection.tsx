import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const plans = [
  { id: "free", name: "Free", icon: Zap, price: { monthly: 0, yearly: 0 }, desc: "Get started with basic ATS analysis", popular: false, features: ["3 resume scans / month", "General ATS score", "Basic keyword analysis", "1 resume template", "PDF export"], cta: "Get Started Free", href: "/resume-analysis" },
  { id: "pro", name: "Pro", icon: Crown, price: { monthly: 19, yearly: 15 }, desc: "Everything you need to land your dream job", popular: true, features: ["Unlimited resume scans", "Role-specific analysis", "Job description matching", "AI resume improvement", "All 22 templates", "PDF & DOCX export", "Interview prep", "Priority support"], cta: "Start Pro Trial", href: "/login" },
  { id: "enterprise", name: "Enterprise", icon: Building2, price: { monthly: -1, yearly: -1 }, desc: "For teams and recruitment agencies", popular: false, features: ["Everything in Pro", "Team analytics", "Bulk processing", "Custom branding", "API access", "Dedicated manager", "SSO & SAML", "SLA guarantee"], cta: "Contact Sales", href: "#" },
];

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">✦ Pricing</span>
            <h2 className="section-heading mb-4">Simple, transparent <span className="warm-text">pricing</span></h2>
            <p className="section-subheading mx-auto">Choose the plan that fits your career goals.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className={`relative w-11 h-6 rounded-full transition-colors ${yearly ? "bg-primary" : "bg-switch-background"}`}>
              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-foreground transition-transform ${yearly ? "translate-x-[22px]" : "translate-x-0.5"}`} />
            </button>
            <span className={`text-sm ${yearly ? "text-foreground" : "text-muted-foreground"}`}>Yearly <span className="text-primary text-xs">Save 20%</span></span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const price = yearly ? plan.price.yearly : plan.price.monthly;
            return (
              <ScrollReveal key={plan.id} delay={i * 100}>
                <div className={`glass-card rounded-2xl p-8 relative ${plan.popular ? "border border-primary/30" : ""}`}>
                  {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">Most Popular</div>}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10"><Icon className="w-5 h-5 text-primary" /></div>
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                  <div className="mb-6">
                    {price === -1 ? <span className="text-3xl font-bold text-foreground">Custom</span> : price === 0 ? <span className="text-3xl font-bold text-foreground">Free</span> : <><span className="text-3xl font-bold text-foreground">${price}</span><span className="text-sm text-muted-foreground">/mo</span></>}
                  </div>
                  <Link to={plan.href} className={`block text-center px-6 py-3 rounded-full text-sm font-semibold transition-all ${plan.popular ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border text-foreground hover:border-primary/30"}`}>{plan.cta}</Link>
                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    {plan.features.map((f, j) => <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="w-4 h-4 text-primary shrink-0" /> {f}</div>)}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
