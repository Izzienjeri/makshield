"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { Globe, Scale, Shield, Database, Zap, BookOpen } from "lucide-react";

const reasons = [
  { icon: <Scale />, title: "Independent Advice", desc: "No insurer bias. Every recommendation is client-driven." },
  { icon: <Shield />, title: "End-to-End Advocacy", desc: "We stay until claims are fully settled, not just submitted." },
  { icon: <Database />, title: "Technical Depth", desc: "Expertise across all major risk classes and industries." },
  { icon: <Zap />, title: "Speed & Access", desc: "Fast turnaround. Direct access to decision-makers." },
  { icon: <Globe />, title: "Global Reach, Local Strength", desc: "Kenyan expertise with international capability." },
  { icon: <BookOpen />, title: "Clarity Over Complexity", desc: "No jargon. No ambiguity. Just clear answers and honest advice." },
];

export default function WhyMakShieldPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 font-sans bg-brand-white">
      
      {/* Hero Section */}
      <section className="inner-hero relative h-[46vh] min-h-[360px] sm:h-[52vh] sm:min-h-[440px] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero16-hd.png" alt="Why choose Mak Shield" fill className="object-cover object-top opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="site-container relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
              Why <span className="font-serif italic text-brand-accent font-light">Mak Shield.</span>
            </h1>
            <p className="text-brand-grey-light/80 max-w-2xl text-lg font-light leading-relaxed">
              The insurance market is not short of options. What it has historically lacked is true risk advisors.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Differentiators Grid */}
      <section className="py-9 sm:py-16 lg:py-20 bg-brand-white">
        <div className="site-container">
          <FadeIn>
            <div className="max-w-4xl mb-7 sm:mb-10">
              <p className="section-kicker mb-5">The Mak Shield difference</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy tracking-tighter mb-6">
                Professionals who prioritize the client over the commission.
              </h2>
              <p className="text-brand-grey text-lg font-light leading-relaxed text-balance">
                We value transparency over complexity, and long-term relationships over short-term placements. Here is how we stand apart.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
            {reasons.map((reason, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="editorial-card p-4 sm:p-7 border-t-2 border-t-brand-navy h-full group">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-3 sm:mb-5 group-hover:bg-brand-navy group-hover:text-brand-accent transition-colors duration-500 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
                    {reason.icon}
                  </div>
                  <h3 className="text-sm font-bold leading-tight text-brand-navy mb-2 sm:text-xl sm:mb-3">{reason.title}</h3>
                  <p className="text-[11px] leading-4 text-brand-grey sm:text-base sm:leading-relaxed">{reason.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="py-9 sm:py-16 lg:py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <FadeIn direction="right" className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden shadow-float border border-white/15">
                <Image src="/images/risk2.png" alt="Mak Shield support across borders" fill className="object-cover" />
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="lg:col-span-6">
              <h2 className="section-kicker mb-5 text-brand-gold">Our Reach</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
                Kenyan Roots. <br />
                <span className="font-serif italic text-brand-accent font-light">Global Outlook.</span>
              </h3>
              <div className="space-y-6 text-brand-grey-light/80 leading-relaxed font-light text-lg">
                <p>
                  Based in Kenya, Mak Shield serves clients across multiple jurisdictions through strategic insurer partnerships and global market access.
                </p>
                <p>
                  We support businesses, expatriates, and internationally exposed clients with solutions that extend beyond borders. Our network spans local and international insurance markets, giving clients access to capacity and expertise that goes well beyond the domestic market.
                </p>
                <p>
                  Whether your operations are in Nairobi, across East Africa, or internationally, Mak Shield brings the same rigor, independence, and advocacy to every engagement.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-9 sm:py-16 lg:py-20 bg-brand-grey-light">
        <div className="site-container text-center max-w-4xl">
          <FadeIn>
            <Shield className="w-16 h-16 text-brand-accent mx-auto mb-8" />
            <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-grey mb-8">Our Promise to Clients</h2>
            <h3 className="text-3xl md:text-4xl font-serif italic text-brand-navy font-light leading-snug mb-10 text-balance">
              &quot;We will tell the truth about cover, even when that truth is not what a client hoped to hear. We will show up during claims and not disappear when the relationship requires effort.&quot;
            </h3>
            <div className="space-y-6 text-brand-grey leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                Insurance is not only about managing risk. It is about protecting livelihoods, businesses, investments, and people. The moment a client chooses Mak Shield, they are choosing a partner that takes that responsibility seriously and carries it every single day.
              </p>
              <p className="font-bold text-brand-navy pt-6 border-t border-brand-grey/20">
                Not a transactional relationship. A lasting one.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
