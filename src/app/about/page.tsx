"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { ShieldCheck, Target, Compass, CheckCircle2, Award } from "lucide-react";

const values = [
  { title: "Integrity", desc: "Truth over convenience." },
  { title: "Client Advocacy", desc: "We work for the client, not insurers." },
  { title: "Clarity", desc: "No jargon. No ambiguity." },
  { title: "Responsiveness", desc: "Present when it matters." },
  { title: "Excellence", desc: "High standards, always." },
  { title: "Partnership", desc: "Long-term, not transactional." },
  { title: "Community", desc: "Kenyan roots. Global outlook." }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 font-sans bg-brand-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://placehold.co/1920x1080/0F1A2A/B28F4B?text=About+Mak+Shield" alt="About Mak Shield" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 mb-6 glass-panel">
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold">Corporate Profile</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              Our <span className="font-serif italic text-brand-accent font-light">Story.</span>
            </h1>
            <p className="text-brand-grey-light/80 max-w-2xl text-lg font-light leading-relaxed">
              We exist to close the gap between client expectations and market delivery through technical expertise, independence, and disciplined execution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Corporate Overview & Story */}
      <section className="py-24 lg:py-32 bg-brand-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-grey mb-4">Corporate Overview</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tighter mb-8 leading-tight">
                Protecting our clients&apos; interests, <br />
                <span className="font-serif italic text-brand-accent font-light">simplifying complexity.</span>
              </h3>
              <div className="space-y-6 text-brand-grey leading-relaxed font-light text-lg">
                <p>
                  Mak Shield Insurance Limited is an independent insurance brokerage and risk advisory firm based in Kenya, serving clients locally and globally.
                </p>
                <p>
                  We provide unbiased access to the insurance market, structuring and placing risk solutions that are aligned purely to client needs, not commissions or insurer relationships.
                </p>
                <p>
                  From private individuals and families seeking personal protection, to small and medium enterprises, large corporations, logistics operators, and institutions managing complex risk portfolios. Mak Shield serves the full spectrum of the market with the same rigor, the same independence, and the same commitment to doing it right.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="relative aspect-[5/4] max-w-[550px] mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] transform scale-90 -z-10" style={{ borderRadius: '32px 96px 32px 96px' }}></div>
                <div className="relative w-full h-full overflow-hidden shadow-float border-[8px] border-white bg-white" style={{ borderRadius: '32px 96px 32px 96px' }}>
                  <Image src="/images/black.png" alt="Mak Shield Logo" fill className="object-contain p-8" />
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-6 -left-6 bg-brand-navy text-white px-5 py-4 shadow-float rounded-sm z-10">
                  <p className="text-2xl font-bold text-brand-accent">15+</p>
                  <p className="text-[11px] uppercase tracking-widest text-white/60 mt-0.5">Years of Experience</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-white border border-brand-grey-light text-brand-navy px-5 py-4 shadow-float rounded-sm z-10">
                  <p className="text-2xl font-bold text-brand-navy">500+</p>
                  <p className="text-[11px] uppercase tracking-widest text-brand-grey mt-0.5">Clients Protected</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-navy text-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-10 lg:p-14 border border-white/10 bg-white/5 backdrop-blur-sm shadow-soft h-full hover:border-brand-accent/50 transition-colors duration-500">
                <Target className="w-10 h-10 text-brand-accent mb-8" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Our Mission</h3>
                <p className="text-brand-grey-light/80 leading-relaxed font-light text-lg">
                  To deliver clear, client-first insurance and risk solutions that protect lives, businesses, and investments across borders.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="p-10 lg:p-14 border border-white/10 bg-white/5 backdrop-blur-sm shadow-soft h-full hover:border-brand-accent/50 transition-colors duration-500">
                <Compass className="w-10 h-10 text-brand-accent mb-8" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Our Vision</h3>
                <p className="text-brand-grey-light/80 leading-relaxed font-light text-lg">
                  To be a globally trusted insurance brokerage, recognized for client advocacy, technical excellence, and reliable execution.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-brand-grey-light">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tighter mb-6">Core Values</h2>
              <p className="text-brand-grey font-light text-lg leading-relaxed text-balance">
                These are not aspirational statements. They are operating principles that govern every interaction, every recommendation, and every claim we handle.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 border border-brand-grey/10 shadow-soft rounded-sm h-full hover:-translate-y-2 transition-transform duration-500">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent mb-6" />
                  <h4 className="text-xl font-bold text-brand-navy mb-2">{value.title}</h4>
                  <p className="text-brand-grey text-sm leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-24 bg-brand-white border-t border-brand-grey-light">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="bg-brand-navy p-10 lg:p-16 rounded-sm shadow-float text-white flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full"></div>
              
              <div className="lg:w-1/3 flex justify-center relative z-10">
                <Award className="w-32 h-32 text-brand-accent opacity-90" />
              </div>
              <div className="lg:w-2/3 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight mb-6">Regulatory Compliance &amp; Market Standing</h3>
                <p className="text-brand-grey-light/80 font-light leading-relaxed mb-4 text-balance">
                  Mak Shield Insurance Limited is fully licensed and regulated by the Insurance Regulatory Authority of Kenya (IRA) under the Insurance Act, Cap 487 of the Laws of Kenya. All operations, advisory services, and brokerage activities comply with the applicable regulatory frameworks governing insurance intermediaries in Kenya.
                </p>
                <p className="text-brand-grey-light/80 font-light leading-relaxed text-balance">
                  We maintain professional indemnity cover, hold client funds in segregated accounts, and adhere to the IRA code of conduct for insurance brokers. Our commitment to regulatory compliance is not merely a legal obligation; it is an expression of the professional standards we hold ourselves to in every aspect of our business.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
