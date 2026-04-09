import { Star } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  { text: "JOBRA completely changed my job search. The ATS analysis showed exactly what recruiters were looking for. I landed my dream role within 2 weeks.", author: "Sarah Jackson", role: "Product Manager", company: "Google", rating: 5, scoreJump: "58% → 94%" },
  { text: "JOBRA's insightful direction not only guided my job search but also sharpened my interview skills. It's a must-have for any professional.", author: "Emily Wilson", role: "Marketing Director", company: "Meta", rating: 5, scoreJump: "45% → 89%" },
  { text: "The interview simulator walked me through real challenges. I felt so prepared that the actual interview felt easy. Absolutely recommend!", author: "Michael Brown", role: "Software Engineer", company: "Microsoft", rating: 5, scoreJump: "62% → 97%" },
  { text: "The ATS score analysis revealed gaps I never knew existed. Within 3 weeks of optimizing, I landed 4 interviews at top-tier companies.", author: "David Kim", role: "UX Designer", company: "Apple", rating: 5, scoreJump: "41% → 92%" },
  { text: "As a career switcher, JOBRA helped me identify transferable skills I didn't know I had. My resume score went from 42% to 91%.", author: "Priya Sharma", role: "Data Analyst", company: "Netflix", rating: 4, scoreJump: "42% → 91%" },
  { text: "The resume builder crafted a version that passed every ATS I submitted to. 5 offers in one month — that's the JOBRA effect.", author: "James Rodriguez", role: "Frontend Developer", company: "Spotify", rating: 5, scoreJump: "55% → 96%" },
];

function TestimonialCard({ testimonial, onHover }: { testimonial: typeof testimonials[0]; onHover: (h: boolean) => void }) {
  return (
    <div className="glass-card rounded-2xl p-6 min-w-[320px] max-w-[360px] flex-shrink-0" onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}`} />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{testimonial.text}"</p>
      {testimonial.scoreJump && (
        <div className="flex items-center gap-2 mb-4 text-xs">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
            ATS Score: {testimonial.scoreJump}
          </span>
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: "linear-gradient(135deg, #7c5ef0, #6352dc)" }}>
          {testimonial.author.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="text-sm font-medium text-foreground">{testimonial.author}</div>
          <div className="text-[11px] text-muted-foreground">{testimonial.role} · {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [paused, setPaused] = useState(false);
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <ScrollReveal>
        <div className="text-center mb-12 px-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
            ✦ Success Stories
          </span>
          <h2 className="section-heading mb-4">Wall of Success</h2>
          <p className="section-subheading mx-auto">
            Real professionals, real results. See how JOBRA transformed their careers.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className={`flex gap-6 px-6 ${paused ? "" : ""}`} style={{ animation: paused ? "none" : "marquee-scroll 40s linear infinite", width: "max-content" }}>
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} onHover={setPaused} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
