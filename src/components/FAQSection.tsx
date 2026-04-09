import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  { q: "What is an ATS and why does it matter?", a: "An Applicant Tracking System (ATS) is software used by 98% of Fortune 500 companies to filter resumes before a human ever sees them. If your resume isn't ATS-friendly, it gets rejected automatically — no matter how qualified you are. JOBRA ensures your resume passes these filters." },
  { q: "How does the AI resume analysis work?", a: "Upload your resume (PDF or DOCX), and our AI engine scans it for ATS compatibility, keyword density, formatting issues, and section structure. You get a detailed score breakdown across Format, Skills, Experience, and Education — plus actionable suggestions to improve." },
  { q: "Is my data safe and private?", a: "Absolutely. All uploads are encrypted with 256-bit SSL. Your resume data is auto-deleted from our servers within 24 hours. We never share your information with third parties or use it for training purposes." },
  { q: "What's the difference between General, Role, and JD analysis?", a: "General Analysis checks overall ATS formatting and structure. Role-based Analysis matches your resume against a specific job title's requirements. JD Analysis does a deep-dive comparison against a specific job description you paste in — giving the most accurate match score." },
  { q: "How does the AI resume improvement work?", a: "After analysis, click 'Upgrade Your Resume' and our AI rewrites your content — adding quantified achievements, industry keywords, action verbs, and proper formatting. The improved version is automatically loaded into our resume builder with 22 professional templates." },
  { q: "Can I use JOBRA for free?", a: "Yes! The free plan includes 3 resume scans per month with general ATS scoring, 1 resume template, and PDF export. Upgrade to Pro for unlimited scans, all templates, AI improvement, role-specific analysis, and interview prep." },
  { q: "What file formats are supported?", a: "We support PDF, DOC, and DOCX files up to 10MB. For best results, we recommend uploading in PDF format. Our resume builder exports in both PDF and DOCX formats." },
  { q: "How accurate is the ATS score?", a: "Our AI has been trained on data from major ATS systems including Workday, Greenhouse, Lever, Taleo, and iCIMS. We maintain 99% accuracy in predicting ATS pass rates, validated against 12,000+ real resume submissions." },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors pr-4">{faq.q}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
              ✦ FAQ
            </span>
            <h2 className="section-heading mb-4">
              Frequently Asked <span className="warm-text">Questions</span>
            </h2>
            <p className="section-subheading mx-auto">
              Everything you need to know about JOBRA and how it works.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glass-card rounded-2xl p-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
            ))}
          </div>
        </ScrollReveal>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Still have questions?{" "}
          <a href="mailto:support@jobra.ai" className="text-primary hover:underline">Contact our support team</a>
        </p>
      </div>
    </section>
  );
}

export default FAQSection;
