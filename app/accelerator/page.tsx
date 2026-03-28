import type { Metadata } from "next";
import AnimatedSection from "../components/AnimatedSection";
import AcceleratorForm from "./AcceleratorForm";

export const metadata: Metadata = {
  title: "30-Day Bio-Business Accelerator",
  description:
    "Start a biohazard cleaning business in 30 days. The complete program — industry training, business setup, and biohazards.net included.",
};

const included = [
  {
    icon: "📅",
    title: "30-day structured program",
    description:
      "Daily tasks and milestones with Benjamin Mustonen — a working biohazard operator with years of experience in the industry.",
  },
  {
    icon: "🎓",
    title: "Industry knowledge and certification guidance",
    description:
      "Learn what certifications you need, how to get them, and what training actually matters vs. what's just box-ticking.",
  },
  {
    icon: "🏛️",
    title: "Business setup: ABN, insurance, compliance",
    description:
      "Get your business structured correctly from the start. ABN registration, public liability insurance, PCBU obligations, waste licensing.",
  },
  {
    icon: "🔧",
    title: "Equipment and supplier contacts",
    description:
      "Know exactly what equipment you need, what you can skip, and where to source it in Australia at the right price.",
  },
  {
    icon: "💻",
    title: "biohazards.net platform included",
    description:
      "You get full access to biohazards.net during your training. Use it on real assessments throughout the program.",
  },
  {
    icon: "🚀",
    title: "Ready to take real jobs by day 30",
    description:
      "By the end of the program, you have your own subdomain, your branding set up, and everything you need to quote and win your first job.",
  },
];

export default function AcceleratorPage() {
  return (
    <div className="bg-[#0D0D0D] pt-24">
      {/* Hero */}
      <section className="py-20 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                <span className="text-[#FF6B35] text-xs font-medium">
                  30-Day Bio-Business Accelerator
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Start a biohazard cleaning business{" "}
                <span className="text-[#FF6B35]">in 30 days.</span>
              </h1>
              <p className="text-[#888888] text-xl leading-relaxed mb-8 max-w-2xl">
                The complete program — industry training, business setup, and
                the software to run it from day one. No prior experience
                required.
              </p>
              <a
                href="#apply"
                className="inline-block bg-[#FF6B35] hover:bg-[#e55a26] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Apply for the Next Cohort
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-[#2A2A2A] bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "30", label: "Days to your first job" },
              { stat: "$150K+", label: "Average first-year revenue" },
              { stat: "0", label: "Prior experience needed" },
              { stat: "100%", label: "Online, self-paced" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-white text-2xl font-black">{item.stat}</div>
                <div className="text-[#888888] text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              What&apos;s included
            </h2>
            <p className="text-[#888888] text-lg max-w-xl">
              Everything you need to go from no business to running real jobs —
              in 30 days.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#FF6B35]/30 transition-colors h-full">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Who this is for
              </h2>
              <div className="space-y-4">
                {[
                  "People looking to start a high-income service business in Australia",
                  "Ex-trades who want to work for themselves",
                  "Career changers ready to work in a high-demand, low-competition niche",
                  "Anyone willing to do the work — no prior cleaning or biohazard experience required",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#FF6B35] mt-0.5 shrink-0 font-bold">
                      →
                    </span>
                    <span className="text-[#888888]">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-black">BM</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Benjamin Mustonen
                    </div>
                    <div className="text-[#888888] text-sm">
                      Founder, Brisbane Biohazard Cleaning
                    </div>
                  </div>
                </div>
                <blockquote className="text-[#888888] leading-relaxed">
                  &quot;Biohazard cleaning is one of the best service businesses you
                  can start in Australia. High margins, repeat referrals from
                  funeral homes and real estate agents, and almost no direct
                  competition in most areas. I&apos;ve built this program to give you
                  the exact path I took — without the mistakes.&quot;
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Apply for the next cohort
            </h2>
            <p className="text-[#888888]">
              Fill in your details and Benjamin will be in touch within one
              business day.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <AcceleratorForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
