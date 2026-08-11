"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Globe2,
  Handshake,
  Scale,
  ShieldCheck,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    number: "01",
    title: "Risk advisory",
    copy: "See the full picture before risk becomes loss. We assess exposure, strengthen controls, and build practical frameworks.",
    href: "/services#risk-advisory",
    image: "/images/risk2.png",
  },
  {
    number: "02",
    title: "Insurance placement",
    copy: "Independent market access, precise policy design, and stronger terms across every major class of risk.",
    href: "/services#corporate",
    image: "/images/insurance.png",
  },
  {
    number: "03",
    title: "Employee benefits",
    copy: "Benefits built around your people—from medical and life cover to wellness and retirement solutions.",
    href: "/services#employee-benefits",
    image: "/images/employee2.png",
  },
  {
    number: "04",
    title: "Claims management",
    copy: "Hands-on advocacy from first notification to fair settlement. When it matters, we stay in your corner.",
    href: "/services#claims",
    image: "/images/claim2.png",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-brand-ivory text-brand-navy">
      <section className="relative min-h-svh bg-brand-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero16.png"
            alt="A confident business leader protected by Mak Shield"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,33,.96)_0%,rgba(7,20,33,.78)_44%,rgba(7,20,33,.12)_78%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,20,33,.8)_0%,transparent_45%)]" />
        </div>

        <div className="site-container relative z-10 flex min-h-svh flex-col justify-end pb-10 pt-36 lg:pb-12">
          <motion.div initial="hidden" animate="visible" variants={reveal} className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="eyebrow text-brand-sand">Independent insurance brokerage · Kenya</span>
          </motion.div>

          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease }}
                className="max-w-5xl text-[clamp(4rem,9vw,8.5rem)] font-medium leading-[.83] tracking-[-.065em]"
              >
                Your risk.
                <span className="block font-serif font-normal italic text-brand-gold">Our resolve.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease }}
                className="mt-9 flex max-w-3xl flex-col gap-8 border-l border-brand-gold/70 pl-6 sm:flex-row sm:items-end sm:justify-between lg:pl-8"
              >
                <p className="max-w-xl text-base font-light leading-7 text-white/78 md:text-lg">
                  Protection should feel clear, considered, and personal. We design insurance around what you have built—and stand with you when it is tested.
                </p>
                <Link href="/contact" className="button-gold shrink-0">
                  Talk to an advisor <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="hidden justify-end lg:col-span-4 lg:flex"
            >
              <div className="w-72 border border-white/16 bg-white/8 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <Globe2 className="h-5 w-5 text-brand-gold" />
                  <span className="eyebrow text-white/55">East Africa + Beyond</span>
                </div>
                <p className="mt-5 font-serif text-2xl italic leading-snug">Local insight.<br />Global market access.</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-5">
            <span className="eyebrow text-white/45">Licensed by IRA Kenya</span>
            <a href="#approach" className="flex items-center gap-3 text-xs uppercase tracking-[.18em] text-white/70 transition-colors hover:text-brand-gold">
              Discover our approach <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="approach" className="section-space relative">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={reveal} className="lg:col-span-4">
              <p className="eyebrow mb-6 text-brand-copper">Why Mak Shield</p>
              <p className="max-w-xs text-sm leading-6 text-brand-slate">Insurance is only as good as the thinking behind it—and the people who show up when it counts.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={reveal} className="lg:col-span-8">
              <h2 className="display-title max-w-4xl">The market offers policies.<br /><span>We offer perspective.</span></h2>
            </motion.div>
          </div>

          <div className="mt-20 grid border-y border-brand-navy/15 md:grid-cols-3">
            {[
              { icon: Scale, title: "Independent counsel", copy: "Advice shaped by your needs—not by an insurer’s sales target." },
              { icon: ShieldCheck, title: "Claims-first thinking", copy: "Every programme is designed with the moment of claim in mind." },
              { icon: Handshake, title: "Present throughout", copy: "One accountable partner from discovery and placement to renewal." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                className="group border-b border-brand-navy/15 py-10 md:border-b-0 md:border-r md:px-9 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:py-14"
              >
                <div className="mb-10 flex items-center justify-between">
                  <item.icon className="h-6 w-6 text-brand-copper" strokeWidth={1.5} />
                  <span className="font-mono text-xs text-brand-slate/60">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-brand-slate">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-navy text-white">
        <div className="site-container">
          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5 text-brand-gold">What we do</p>
              <h2 className="text-4xl font-medium tracking-[-.045em] sm:text-6xl">Protection, properly considered.</h2>
            </div>
            <Link href="/services" className="text-link text-brand-sand">View all services <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid gap-px bg-white/12 lg:grid-cols-2">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group relative min-h-105 overflow-hidden bg-brand-navy p-7 sm:p-10">
                <Image src={service.image} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-25" />
                <div className="relative z-10 flex h-full min-h-85 flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-gold">{service.number}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy"><ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-3xl font-medium tracking-[-.035em] sm:text-4xl">{service.title}</h3>
                    <p className="mt-4 max-w-md leading-7 text-white/60">{service.copy}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-sand">
        <div className="site-container grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .9, ease }} className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/images/hero12.png" alt="Protection for families, businesses and futures" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-3 bg-brand-gold p-6 text-brand-navy sm:-right-8 sm:p-8">
              <p className="font-serif text-4xl italic">Always</p>
              <p className="mt-1 text-xs uppercase tracking-[.16em]">on your side</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="lg:col-span-7 lg:pl-8">
            <p className="eyebrow mb-6 text-brand-copper">Built around you</p>
            <h2 className="display-title">A relationship that gets stronger <span>when pressure rises.</span></h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-brand-slate">From the first risk conversation to the final claim settlement, we make the complex understandable and the next step unmistakably clear.</p>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {["Clear policy language", "Responsive claims support", "Rigorous market negotiation", "Regional and global reach"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium"><span className="grid h-6 w-6 place-items-center rounded-full bg-brand-navy text-brand-gold"><Check className="h-3.5 w-3.5" /></span>{item}</li>
              ))}
            </ul>
            <Link href="/why-mak-shield" className="button-dark mt-10">Why choose Mak Shield <ChevronRight className="h-4 w-4" /></Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-gold py-20 text-brand-navy lg:py-24">
        <div className="site-container flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow mb-4">Let’s begin</p>
            <h2 className="max-w-3xl text-4xl font-medium tracking-[-.045em] sm:text-6xl">What matters to you deserves better protection.</h2>
          </div>
          <Link href="/contact" className="grid h-24 w-24 shrink-0 place-items-center rounded-full border border-brand-navy transition hover:rotate-12 hover:bg-brand-navy hover:text-white sm:h-32 sm:w-32" aria-label="Start a conversation">
            <ArrowUpRight className="h-8 w-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}
