"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage("Message sent — thank you!");
        e.currentTarget.reset();
      } else {
        setStatusMessage(data?.error || "Failed to send message");
      }
    } catch (err) {
      setStatusMessage("Failed to send message");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Contact & booking
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Tell us where you want to go, and we’ll design the right journey.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Share your preferred travel dates, group size, and dream
            destinations. We’ll plan a custom safari or beach escape around your
            needs.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <div>
              <span className="font-semibold text-slate-900">
                Travel dates:
              </span>{" "}
              Flexible planning and seasonal advice.
            </div>
            <div>
              <span className="font-semibold text-slate-900">Guests:</span>{" "}
              Adults and children catered for.
            </div>
            <div>
              <span className="font-semibold text-slate-900">
                Destinations:
              </span>{" "}
              Maasai Mara, Amboseli, Tsavo, Samburu, Naivasha, Diani, and more.
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Full name
              <input
                required
                name="fullName"
                type="text"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Email address
              <input
                required
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Phone number
              <input
                required
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition"
                placeholder="+254 ..."
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Number of travelers
              <input
                required
                name="travelers"
                type="number"
                min="1"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition"
                placeholder="2"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Travel dates
              <input
                required
                name="dates"
                type="date"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Destination / package
              <select
                name="destination"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition"
              >
                <option>Maasai Mara</option>
                <option>Amboseli</option>
                <option>Tsavo</option>
                <option>Samburu</option>
                <option>Lake Naivasha</option>
                <option>Diani Coast</option>
                <option>Custom itinerary</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-slate-700">
            Message / special requests
            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition"
              placeholder="Tell us about your ideal trip, interests, accommodation preferences, or special needs."
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Enquiry"}
          </button>
          {statusMessage && (
            <p className="mt-3 text-sm text-slate-700">{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
