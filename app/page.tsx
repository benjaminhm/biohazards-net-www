import type { Metadata } from "next";
import Link from "next/link";
import HeroMockup from "./components/HeroMockup";
import AnimatedSection from "./components/AnimatedSection";

export const metadata: Metadata = {
  title: "biohazards.net — The Employee in Your Pocket. Built for Biohazard Operators.",
  description:
    "biohazards.net quotes jobs, files receipts, and invoices clients automatically. The operating system for solo biohazard cleaning operators across Australia.",
  openGraph: {
    title: "biohazards.net — The Employee in Your Pocket. Built for Biohazard Operators.",
    description:
      "biohazards.net quotes jobs, files receipts, and invoices clients automatically. Built for solo biohazard cleaning operators across Australia.",
    url: "https://www.biohazards.net",
  },
};

const features = [
  {
    icon: "⚡",
    title: "Automated Document Generation",
    description:
      "Quotes, scopes of work, and completion reports written automatically — specific to your job, not a generic template.",
  },
  {
    icon: "📋",
    title: "Job Queue",
    description:
      "Track every job from lead to paid in one place. Know exactly where each job is at, at a glance.",
  },
  {
    icon: "📸",
    title: "Photo Evidence",
    description:
      "Before and after photos embedded directly in your reports. Captured on your phone, embedded in the PDF.",
  },
  {
    icon: "🧾",
    title: "Receipt Capture",
    description:
      "Snap a photo of any receipt on site. Saved to the job, synced to Xero as an expense. No more receipts lost in the van.",
  },
  {
    icon: "✍️",
    title: "Client Accept Flow",
    description:
      "Clients accept quotes online — no printing, no scanning, no chasing signatures. They get a link, they click accept.",
  },
  {
    icon: "🔗",
    title: "Xero Integration",
    description:
      "Invoices created on quote acceptance. Expenses synced from receipt capture. Xero stays up to date without you touching it.",
  },
  {
    icon: "🏷️",
    title: "Your Branding",
    description:
      "Every document uses your logo, colours, and business details. It looks like you made it — because you did.",
  },
];

const steps = [
  {
    number: "01",
    title: "Fill in the job",
    description:
      "Log the client, site, and assessment details. Add photos with notes directly from your phone.",
  },
  {
    number: "02",
    title: "Press generate",
    description:
      "One button generates the document — written specifically to your job details, not a generic template.",
  },
  {
    number: "03",
    title: "Send and get paid",
    description:
      "Download a branded PDF. Send to your client. They accept online. Xero invoice created automatically.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#0D0D0D]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D0D0D]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                <span className="text-[#FF6B35] text-xs font-medium">
                  Built for solo biohazard operators in Australia
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                The employee{" "}
                <span className="text-[#FF6B35]">
                  in your pocket.
                </span>
              </h1>
              <p className="text-[#888888] text-lg leading-relaxed mb-8 max-w-lg">
                biohazards.net quotes the job, files the receipts, and invoices
                the client — automatically. So you can stay on the tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="https://app.biohazards.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF6B35] hover:bg-[#e55a26] text-white font-bold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Start Free Trial
                </a>
                <Link
                  href="/features"
                  className="border border-[#2A2A2A] hover:border-[#888888] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  See How It Works
                </Link>
              </div>
              <p className="text-[#888888] text-sm">
                Used by biohazard cleaning operators across Australia.
                <br />
                14-day free trial · No credit card required
              </p>
            </div>

            {/* Right: app mockup */}
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              How it works
            </h2>
            <p className="text-[#888888] text-lg">
              Three steps from job site to paid.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="relative p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#FF6B35]/30 transition-colors">
                  <div className="text-5xl font-black text-[#2A2A2A] mb-4 leading-none">
                    {step.number}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-[#2A2A2A] text-xl">
                      →
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Does the work you don&apos;t have time for
            </h2>
            <p className="text-[#888888] text-lg max-w-xl mx-auto">
              Built specifically for biohazard operators. Not adapted from
              generic business software.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.05}>
                <div className="p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#FF6B35]/30 hover:-translate-y-0.5 transition-all duration-200 h-full">
                  <div className="text-2xl mb-4">{feature.icon}</div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link
              href="/features"
              className="text-[#FF6B35] hover:text-[#e55a26] font-semibold text-sm transition-colors"
            >
              See all features →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-4xl mb-6">&quot;</div>
              <blockquote className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-8">
                I built this because I was spending hours writing quotes after
                12-hour jobs. Now I press a button on the drive home.
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BM</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">
                    Benjamin Mustonen
                  </div>
                  <div className="text-[#888888] text-xs">
                    Brisbane Biohazard Cleaning
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Ready to run a tighter operation?
            </h2>
            <p className="text-[#888888] text-lg mb-8">
              14-day free trial. No credit card required. Cancel any time.
            </p>
            <a
              href="https://app.biohazards.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF6B35] hover:bg-[#e55a26] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Start Free Trial
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
