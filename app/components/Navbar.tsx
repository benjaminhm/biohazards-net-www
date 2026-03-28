"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/accelerator", label: "Accelerator" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#2A2A2A]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#FF6B35] rounded flex items-center justify-center">
                <span className="text-white text-xs font-black">BH</span>
              </div>
              <span className="font-bold text-white text-sm tracking-tight">
                biohazards.net
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-[#888888] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="https://app.biohazards.net"
                target="_blank"
                className="text-sm text-[#888888] hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <a
                href="https://app.biohazards.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6B35] hover:bg-[#e55a26] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-[#888888] hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-current transition-all ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-[#0D0D0D] border-b border-[#2A2A2A] md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-[#888888] hover:text-white transition-colors py-2 border-b border-[#2A2A2A]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://app.biohazards.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-[#FF6B35] hover:bg-[#e55a26] text-white text-sm font-semibold px-4 py-3 rounded-lg text-center transition-colors"
              >
                Get Started — Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
