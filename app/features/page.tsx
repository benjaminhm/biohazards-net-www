import type { Metadata } from "next";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Full breakdown of every feature in biohazards.net — job management, automated document generation, photo evidence, client accept flow, Xero integration, and more.",
};

const features = [
  {
    id: "job-management",
    icon: "📋",
    title: "Job Management",
    subtitle: "Every job tracked from first call to final invoice.",
    description:
      "Log every job in one place — client details, site address, job type, status, and notes. See your entire job queue at a glance. Know what needs quoting, what's in progress, and what's waiting on payment. No more spreadsheets or post-it notes.",
    bullets: [
      "Job status tracking (Lead → Quoted → Accepted → In Progress → Complete → Invoiced)",
      "Site assessment forms built for biohazard jobs",
      "Job history and notes per client",
      "Filter and search across all jobs",
    ],
  },
  {
    id: "ai-documents",
    icon: "⚡",
    title: "Automated Document Generation",
    subtitle: "Your quote is ready before you leave the job site.",
    description:
      "Fill in the site assessment. Press generate. biohazards.net writes a professional quote, scope of work, or completion report — using your actual job details, not a generic template. You get a document you'd actually send to a client or insurance company.",
    bullets: [
      "Quotes — itemised, professional, specific to your job",
      "Scopes of Work — detailed method statements for insurance",
      "Completion Reports — evidence-backed job summaries",
      "Editable before sending — add your own notes or adjust pricing",
    ],
  },
  {
    id: "photo-evidence",
    icon: "📸",
    title: "Photo Management + Evidence",
    subtitle: "Before, during, and after — documented and attached.",
    description:
      "Capture photos directly from your phone as you work. Tag them as before, during, or after. Add notes. They're automatically embedded in your scope of work and completion report. No more emailing yourself photos or sorting through a camera roll.",
    bullets: [
      "Capture photos from your phone browser — no app required",
      "Before/during/after tagging",
      "Photo notes and timestamps",
      "Auto-embedded in PDF reports",
    ],
  },
  {
    id: "client-accept",
    icon: "✍️",
    title: "Client Accept Flow",
    subtitle: "Clients accept online. No printing, no fax, no fuss.",
    description:
      "Send your client a link. They open it, read the quote, and click accept. Their acceptance is recorded with a timestamp. You get notified. No printing, no scanning, no chasing wet signatures. Clean, fast, professional.",
    bullets: [
      "Branded client-facing quote page",
      "One-click online acceptance",
      "Timestamped acceptance records",
      "Automatic Xero invoice on acceptance",
    ],
  },
  {
    id: "xero",
    icon: "🔗",
    title: "Xero Integration",
    subtitle: "Quote accepted. Invoice created. Done.",
    description:
      "When a client accepts a quote, biohazards.net automatically creates the Xero invoice. Line items, amounts, client details — all transferred without touching a keyboard. No double-handling. No manual data entry.",
    bullets: [
      "Automatic invoice creation on quote acceptance",
      "Line items matched to your quote",
      "Client synced to Xero contacts",
      "Payment tracking in Xero",
    ],
  },
  {
    id: "branding",
    icon: "🏷️",
    title: "Company Branding",
    subtitle: "Every document looks like it came from your business.",
    description:
      "Upload your logo, set your colours, add your ABN and licence numbers. Every quote, scope, and report is generated with your branding — not ours. Your clients see your business name, not biohazards.net.",
    bullets: [
      "Your logo on every PDF",
      "Business name, ABN, licence numbers in headers",
      "Custom colour accents",
      "Optional custom domain (biohazard.yourbusiness.com.au)",
    ],
  },
  {
    id: "mobile-pwa",
    icon: "📱",
    title: "Mobile PWA",
    subtitle: "Works on your phone. Installs like an app.",
    description:
      "biohazards.net is a Progressive Web App. Open it in your phone browser, add it to your home screen, and it works like a native app — offline access, fast load, full functionality from the job site. No App Store required.",
    bullets: [
      "Works in any mobile browser",
      "Add to home screen (iOS + Android)",
      "Photo capture from camera",
      "Optimised for field use",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-[#0D0D0D] pt-24">
      {/* Header */}
      <section className="py-20 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Built for the job.
                <br />
                <span className="text-[#FF6B35]">Every part of it.</span>
              </h1>
              <p className="text-[#888888] text-lg leading-relaxed">
                Every feature in biohazards.net was designed around how a
                biohazard cleaning job actually works — from first call to final
                invoice.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {features.map((feature, i) => (
          <AnimatedSection key={feature.id}>
            <div
              className={`py-16 border-b border-[#2A2A2A] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <div className="text-[#FF6B35] text-sm font-semibold mb-2">
                  {feature.subtitle}
                </div>
                <h2 className="text-3xl font-black text-white mb-4">
                  {feature.title}
                </h2>
                <p className="text-[#888888] leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-[#22C55E] mt-0.5 shrink-0">✓</span>
                      <span className="text-[#888888] text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                {/* Placeholder mockup */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{feature.icon}</div>
                    <div className="text-[#888888] text-sm">{feature.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to put it to work?
            </h2>
            <p className="text-[#888888] mb-8">
              14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.biohazards.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6B35] hover:bg-[#e55a26] text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/pricing"
                className="border border-[#2A2A2A] hover:border-[#888888] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
