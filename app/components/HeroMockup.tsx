"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quoteLines = [
  "PROFESSIONAL QUOTE — Ref: BHC-2024-089",
  "",
  "Client: Sandra Mitchell",
  "Site: 14 Riverdale St, Paddington QLD 4064",
  "Job Type: Unattended Death — Level 3",
  "",
  "SCOPE OF WORKS:",
  "• Removal and disposal of all biohazardous material",
  "• Treatment of affected surfaces with hospital-grade",
  "  disinfectant (EN1276 certified)",
  "• HEPA air filtration — minimum 6 air changes",
  "• Waste manifested and disposed per Qld EPA regs",
  "",
  "QUOTE TOTAL: $4,850 + GST",
  "Valid for 7 days.",
  "",
  "✓ Quote ready to send",
];

export default function HeroMockup() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    if (currentLine >= quoteLines.length) {
      setDone(true);
      return;
    }

    const line = quoteLines[currentLine];

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] || "") + line[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, 18);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          if (next[currentLine] === undefined) next[currentLine] = "";
          return next;
        });
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, line === "" ? 80 : 40);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, done]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Window chrome */}
      <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2A2A2A] bg-[#141414]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[#888888] text-xs ml-2">
            biohazards.net — Quote Generator
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[#22C55E] text-xs font-medium bg-[#22C55E]/10 px-2 py-0.5 rounded">
              ● Generating
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 font-mono text-xs leading-relaxed min-h-[320px]">
          {displayedLines.map((line, i) => (
            <div
              key={i}
              className={
                line.startsWith("QUOTE TOTAL")
                  ? "text-[#FF6B35] font-bold"
                  : line.startsWith("✓")
                  ? "text-[#22C55E]"
                  : line.startsWith("SCOPE") || line.startsWith("PROFESSIONAL")
                  ? "text-white font-semibold"
                  : "text-[#888888]"
              }
            >
              {line || "\u00A0"}
            </div>
          ))}
          {!done && (
            <span className="inline-block w-2 h-4 bg-[#FF6B35] animate-pulse ml-0.5" />
          )}
        </div>

        {/* Footer bar */}
        <div className="px-5 py-3 border-t border-[#2A2A2A] bg-[#141414] flex items-center justify-between">
          <span className="text-[#888888] text-xs">biohazards.net automation</span>
          <button className="bg-[#FF6B35] text-white text-xs font-semibold px-3 py-1.5 rounded-md">
            Download PDF
          </button>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35]/20 to-transparent rounded-xl blur-xl -z-10" />
    </motion.div>
  );
}
