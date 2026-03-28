import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-[#FF6B35] rounded flex items-center justify-center">
                <span className="text-white text-xs font-black">BH</span>
              </div>
              <span className="font-bold text-white text-sm tracking-tight">
                biohazards.net
              </span>
            </div>
            <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
              Job management and AI document generation for biohazard cleaning operators across Australia.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/accelerator", label: "Accelerator" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#888888] text-sm">
            © 2026 biohazards.net — Built in Brisbane, Australia
          </p>
          <a
            href="https://app.biohazards.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:text-[#e55a26] text-sm font-semibold transition-colors"
          >
            Sign in to the app →
          </a>
        </div>
      </div>
    </footer>
  );
}
