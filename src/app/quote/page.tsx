import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import QuoteForm from "@/features/contact/QuoteForm";

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 opacity-18">
          <Image src="/images/insurance2.png" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0F1A2A_0%,rgba(15,26,42,.9)_45%,rgba(15,26,42,.55)_100%)]" />
        <div className="site-container relative grid gap-8 py-9 sm:py-12 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="lg:col-span-6">
            <Link href="/" className="mb-9 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/55 hover:text-brand-gold"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
            <p className="eyebrow text-brand-gold">Simple. Clear. Personal.</p>
            <h1 className="mt-5 max-w-xl text-3xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl lg:text-6xl">The right cover starts with the <span className="font-serif font-normal italic text-brand-gold">right questions.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">Share a few details and an advisor will help you identify the right next step. You do not need to have all the answers.</p>
            <div className="mt-8 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
              {[
                { icon: Clock3, text: "Takes about 2 minutes" },
                { icon: ShieldCheck, text: "Independent advice" },
                { icon: CheckCircle2, text: "No obligation" },
              ].map((item) => <div key={item.text} className="flex items-center gap-2 text-xs text-white/65"><item.icon className="h-4 w-4 shrink-0 text-brand-gold" />{item.text}</div>)}
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-8"><QuoteForm /></div>
        </div>
      </section>
    </div>
  );
}
