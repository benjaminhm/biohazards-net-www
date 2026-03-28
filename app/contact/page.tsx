import type { Metadata } from "next";
import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Benjamin Mustonen about biohazards.net. Get in touch to book a demo or ask any questions.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0D0D0D] pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Talk to a real person.
              </h1>
              <p className="text-[#888888] text-lg mb-10">
                No bots. No sales funnel. Just Benjamin.
              </p>

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-black">BM</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Benjamin Mustonen
                    </div>
                    <div className="text-[#888888] text-sm">
                      Founder, biohazards.net
                    </div>
                  </div>
                </div>
                <p className="text-[#888888] text-sm leading-relaxed mb-4">
                  I built biohazards.net while running my own biohazard cleaning
                  business in Brisbane. I know the industry from the inside —
                  the jobs, the quoting, the compliance, the paperwork.
                </p>
                <p className="text-[#888888] text-sm leading-relaxed mb-4">
                  If you have questions about the platform, want to book a demo,
                  or are considering the Accelerator program, send me a message.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#22C55E]">●</span>
                  <span className="text-[#888888]">
                    I respond within one business day
                  </span>
                </div>
              </div>

              <div>
                <div className="text-[#888888] text-sm mb-1">Email directly</div>
                <a
                  href="mailto:ben.mustonen@brisbanebiohazardcleaning.com.au"
                  className="text-white hover:text-[#FF6B35] transition-colors text-sm break-all"
                >
                  ben.mustonen@brisbanebiohazardcleaning.com.au
                </a>
              </div>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
