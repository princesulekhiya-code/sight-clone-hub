import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const plans = [
  {
    id: "free", name: "Free", icon: Zap,
    price: { monthly: 0, yearly: 0 },
    desc: "Get started with basic ATS analysis",
    popular: false,
    features: ["3 resume scans / month", "General ATS score", "Basic keyword analysis", "1 resume template", "PDF export"],
    cta: "Get Started Free", href: "/resume-analysis",
  },
  {
    id: "pro", name: "Pro", icon: Crown,
    price: { monthly: 19, yearly: 15 },
    desc: "Everything you need to land your dream job",
    popular: true,
    features: ["Unlimited resume scans", "Role-specific analysis", "Job description matching", "AI resume improvement", "All 22 resume templates", "PDF & DOCX export", "Interview prep access", "Priority support"],
    cta: "Start Pro Trial", href: "/login",
  },
  {
    id: "enterprise", name: "Enterprise", icon: Building2,
    price: { monthly: -1, yearly: -1 },
    desc: "For teams and recruitment agencies",
    popular: false,
    features: ["Everything in Pro", "Team analytics dashboard", "Bulk resume processing", "Custom branding", "API access", "Dedicated account manager", "SSO & SAML", "SLA guarantee"],
    cta: "Contact Sales", href: "#",
  },
];

function AnimatedPrice({ value }: { value: number }) {
  const [displayed, setDisplayed] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    if (prevRef.current === value) return;
    const start = prevRef.current;
    const end = value;
    const steps = 20;
    const diff = (end - start) / steps;
    let current = start;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      current += diff;
      if (i >= steps) { setDisplayed(end); clearInterval(timer); }
      else setDisplayed(Math.round(current));
    }, 20);
    prevRef.current = value;
    return () => clearInterval(timer);
  }, [value]);

  return <>${displayed}</>;
}

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
              ✦ Simple Pricing
            </span>
            <h2 className="section-heading mb-4">
              Choose the plan that fits your <span className="purple-text">career goals</span>
            </h2>
            <p className="section-subheading mx-auto">
              Start free and upgrade as you grow. No hidden fees.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${yearly ? "bg-primary" : "bg-switch-background"}`}>
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${yearly ? "translate-x-7" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm ${yearly ? "text-foreground" : "text-muted-foreground"}`}>Yearly</span>
            {yearly && <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">🎉 Save 20%</span>}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => {
            const price = plan.price.monthly === -1 ? null : yearly ? plan.price.yearly : plan.price.monthly;
            const Icon = plan.icon;

            return (
              <ScrollReveal key={plan.id} delay={idx * 100}>
                <div className={`relative glass-card rounded-2xl p-6 h-full flex flex-col ${plan.popular ? "border-primary/30" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold text-white" style={{ background: "linear-gradient(135deg, #7c5ef0, #6352dc)" }}>Most Popular</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{plan.desc}</p>

                  <div className="mb-6">
                    {price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-foreground"><AnimatedPrice value={price} /></span>
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-foreground">Custom</span>
                      </div>
                    )}
                    {yearly && price !== null && price > 0 && (
                      <p className="text-[10px] text-muted-foreground mt-1">
                        Billed ${price * 12}/year — save ${(plan.price.monthly - plan.price.yearly) * 12}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </div>
                    ))}
                  </div>

                  <Link to={plan.href} className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] ${plan.popular ? "text-white" : "text-foreground border border-border hover:border-primary/30"}`} style={plan.popular ? { background: "linear-gradient(135deg, #7c5ef0, #6352dc)", boxShadow: "0 4px 15px rgba(124,94,240,0.3)" } : {}}>
                    {plan.cta}
                  </Link>
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
