import type { Metadata } from "next";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for biohazard cleaning operators. Starter from $49/month. All plans include a 14-day free trial.",
};

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For solo operators getting started.",
    features: [
      "1 user",
      "Unlimited jobs",
      "AI document generation",
      "PDF downloads",
      "app.biohazards.net subdomain",
      "Email support",
    ],
    cta: "Get Started",
    href: "https://app.biohazards.net",
    popular: false,
  },
  {
    name: "Operator",
    price: "$99",
    period: "/month",
    description: "For growing operators with a team.",
    features: [
      "3 users",
      "Everything in Starter",
      "Xero integration",
      "Client accept flow",
      "Custom domain support",
      "Priority support",
    ],
    cta: "Get Started",
    href: "https://app.biohazards.net",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    period: "",
    description: "For multi-van operations and franchises.",
    features: [
      "Unlimited users",
      "White-label branding",
      "Custom subdomain or domain",
      "Onboarding + training",
      "Dedicated support",
    ],
    cta: "Contact Us",
    href: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I try it before committing?",
    a: "Yes. All plans include a 14-day free trial. No credit card required. Cancel any time during the trial and you won't be charged.",
  },
  {
    q: "How does AI document generation work?",
    a: "You fill in your job assessment — client, site, job type, scope, photos. One button sends that data to Claude AI, which writes a professional quote, scope of work, or completion report. It uses your actual job details, not a generic template. You can edit before sending.",
  },
  {
    q: "Do I need to be tech-savvy?",
    a: "No. If you can fill in a form on your phone, you can use biohazards.net. It's built for trade operators who want to run a tighter business — not developers or office managers.",
  },
  {
    q: "What's included in the Xero integration?",
    a: "When a client accepts a quote, biohazards.net automatically creates a Xero invoice with the line items, amounts, and client details from your quote. No manual data entry. Available on Operator and above.",
  },
  {
    q: "Can I use my own branding?",
    a: "Yes. Upload your logo, set your colours, and add your ABN and licence numbers. Every quote, scope, and completion report is generated with your branding — your clients see your business, not ours.",
  },
  {
    q: "What job types is this built for?",
    a: "Crime scenes, unattended deaths, hoarding, mould, sewage, trauma, and flood remediation. Any job where you need a professional quote or report for a client or insurance company. If you're doing biohazard work in Australia, this is built for you.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0D0D0D] pt-24">
      {/* Header */}
      <section className="py-20 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Simple pricing.
              <br />
              <span className="text-[#FF6B35]">No surprises.</span>
            </h1>
            <p className="text-[#888888] text-lg">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative p-6 rounded-xl border h-full flex flex-col ${
                    plan.popular
                      ? "border-[#FF6B35] bg-[#FF6B35]/5"
                      : "border-[#2A2A2A] bg-[#1A1A1A]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-[#888888] text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white text-4xl font-black">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-[#888888] text-sm">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-[#22C55E] mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span className="text-[#888888] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.href}
                    target={plan.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      plan.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`block text-center font-bold py-3 px-4 rounded-lg transition-colors ${
                      plan.popular
                        ? "bg-[#FF6B35] hover:bg-[#e55a26] text-white"
                        : "border border-[#2A2A2A] hover:border-[#888888] text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <p className="text-[#888888] text-sm">
              All plans include a 14-day free trial. No credit card required.
              Cancel any time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-2">
              Common questions
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.05}>
                <div className="border border-[#2A2A2A] rounded-xl p-6 bg-[#1A1A1A]">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <p className="text-[#888888] mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="text-[#FF6B35] hover:text-[#e55a26] font-semibold transition-colors"
            >
              Talk to Benjamin →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
