"use client";

import { useState } from "react";
import { ArrowRight, Check, CircleCheck, Loader2 } from "lucide-react";

const coverOptions = [
  "Personal or family cover",
  "Business insurance",
  "Employee benefits",
  "Risk advisory",
  "Not sure yet",
];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(form);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "quote",
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          cover: formData.get("cover"),
          details: formData.get("details"),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setSubmitError(result?.error ?? "We could not send your quote request. Please try again.");
        return;
      }

      const result = await response.json();
      console.info("Quote request sent successfully", result.delivery);
      setIsSent(true);
    } catch {
      setSubmitError("We could not send your quote request. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSent) {
    return (
      <div role="status" className="flex min-h-[520px] flex-col items-center justify-center bg-white p-8 text-center shadow-[0_30px_80px_-35px_rgba(15,26,42,.35)] sm:p-10">
        <CircleCheck className="h-14 w-14 text-brand-gold" aria-hidden="true" />
        <p className="eyebrow mt-6 text-brand-copper">Request sent</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy">Thank you.</h2>
        <p className="mt-4 max-w-md leading-7 text-brand-grey">Your quote request has been delivered. A Mak Shield advisor will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submitQuote} className="bg-white p-5 shadow-[0_30px_80px_-35px_rgba(15,26,42,.35)] sm:p-8 lg:p-10">
      <div className="mb-7 flex items-start justify-between gap-6 border-b border-brand-navy/10 pb-6">
        <div>
          <p className="eyebrow text-brand-copper">Quote request</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-navy">Tell us what you need.</h2>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-navy text-xs font-bold text-brand-gold">01</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-navy">
          Full name
          <input required name="name" autoComplete="name" className="h-11 w-full border border-brand-navy/15 bg-brand-ivory px-3 outline-none transition focus:border-brand-gold" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-navy">
          Phone number
          <input required name="phone" type="tel" autoComplete="tel" className="h-11 w-full border border-brand-navy/15 bg-brand-ivory px-3 outline-none transition focus:border-brand-gold" placeholder="+254 7XX XXX XXX" />
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-navy sm:col-span-2">
          Email address
          <input required name="email" type="email" autoComplete="email" className="h-11 w-full border border-brand-navy/15 bg-brand-ivory px-3 outline-none transition focus:border-brand-gold" placeholder="you@company.co.ke" />
        </label>
      </div>

      <fieldset className="mt-7">
        <legend className="mb-3 text-sm font-medium text-brand-navy">What would you like to protect?</legend>
        <div className="grid grid-cols-2 gap-2">
          {coverOptions.map((option, index) => (
            <label key={option} className="group relative flex cursor-pointer items-center gap-2 border border-brand-navy/12 p-2.5 text-xs text-brand-slate transition hover:border-brand-gold has-checked:border-brand-navy has-checked:bg-brand-navy has-checked:text-white sm:gap-3 sm:p-3 sm:text-sm">
              <input required={index === 0} type="radio" name="cover" value={option} className="peer sr-only" />
              <span className="grid h-5 w-5 place-items-center rounded-full border border-current"><Check className="h-3 w-3 opacity-0 peer-checked:opacity-100" /></span>
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block space-y-2 text-sm font-medium text-brand-navy">
        Anything else we should know? <span className="font-normal text-brand-grey">(Optional)</span>
        <textarea name="details" rows={3} className="w-full resize-none border border-brand-navy/15 bg-brand-ivory p-3 outline-none transition focus:border-brand-gold" placeholder="A short description is enough..." />
      </label>

      <button disabled={isSubmitting} type="submit" className="mt-6 flex h-12 w-full items-center justify-center gap-3 bg-brand-gold text-xs font-bold uppercase tracking-[.15em] text-brand-navy transition hover:bg-brand-navy hover:text-white disabled:opacity-60">
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Request my quote <ArrowRight className="h-4 w-4" /></>}
      </button>
      {submitError && <p role="alert" className="mt-4 text-center text-sm text-red-600">{submitError}</p>}
      <p className="mt-4 text-center text-xs leading-5 text-brand-grey">No obligation. Your information is handled privately.</p>
    </form>
  );
}
