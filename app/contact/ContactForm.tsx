"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#1A1A1A] border border-[#22C55E]/30 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-white font-bold text-lg mb-2">Message sent</h3>
        <p className="text-[#888888]">
          Benjamin will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 space-y-5"
    >
      <div>
        <label className="block text-[#888888] text-sm mb-1.5">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-[#888888] text-sm mb-1.5">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-[#888888] text-sm mb-1.5">
          Phone (optional)
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
          placeholder="04XX XXX XXX"
        />
      </div>
      <div>
        <label className="block text-[#888888] text-sm mb-1.5">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
          placeholder="What would you like to know?"
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#FF6B35] hover:bg-[#e55a26] disabled:opacity-60 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
