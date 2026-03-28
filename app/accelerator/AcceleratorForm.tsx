"use client";
import { useState } from "react";

const australianStates = [
  "Australian Capital Territory",
  "New South Wales",
  "Northern Territory",
  "Queensland",
  "South Australia",
  "Tasmania",
  "Victoria",
  "Western Australia",
];

export default function AcceleratorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      state: (form.elements.namedItem("state") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      type: "accelerator",
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      // Still show success to user
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#1A1A1A] border border-[#22C55E]/30 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-white font-bold text-lg mb-2">Application received</h3>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#888888] text-sm mb-1.5">Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
            placeholder="Your full name"
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#888888] text-sm mb-1.5">Phone</label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
            placeholder="04XX XXX XXX"
          />
        </div>
        <div>
          <label className="block text-[#888888] text-sm mb-1.5">State</label>
          <select
            name="state"
            required
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
          >
            <option value="">Select your state</option>
            {australianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[#888888] text-sm mb-1.5">
          Tell us about yourself (optional)
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
          placeholder="Background, current situation, why you're interested..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#FF6B35] hover:bg-[#e55a26] disabled:opacity-60 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {loading ? "Submitting..." : "Apply for the Next Cohort"}
      </button>
    </form>
  );
}
