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
    <div className="flex flex-col min-h-screen pt-24 font-sans bg-brand-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://placehold.co/1920x1080/0F1A2A/B28F4B?text=Why+Mak+Shield" alt="Why Choose Mak Shield" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              Why <span className="font-serif italic text-brand-accent font-light">Mak Shield.</span>
            </h1>
            <p className="text-brand-grey-light/80 max-w-2xl text-lg font-light leading-relaxed">
              The insurance market is not short of options. What it has historically lacked is true risk advisors.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Differentiators Grid */}
      <section className="py-24 lg:py-32 bg-brand-white">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tighter mb-6">
                Professionals who prioritize the client over the commission.
              </h2>
              <p className="text-brand-grey text-lg font-light leading-relaxed text-balance">
                We value transparency over complexity, and long-term relationships over short-term placements. Here is how we stand apart.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-10 border border-brand-grey-light shadow-soft rounded-sm h-full group hover:shadow-float transition-all duration-500">
                  <div className="w-14 h-14 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-brand-accent transition-colors duration-500">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{reason.title}</h3>
                  <p className="text-brand-grey leading-relaxed">{reason.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full -translate-y-1/2"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <Image src="https://placehold.co/1000x800/1A2E4B/B28F4B?text=Global+Reach" alt="Our Reach" fill className="object-cover" />
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-grey mb-4">Our Reach</h2>
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
      <section className="py-24 lg:py-36 bg-brand-grey-light">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
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
