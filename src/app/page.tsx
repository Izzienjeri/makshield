"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Globe2, Scale, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const revealUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white text-brand-navy selection:bg-brand-navy selection:text-white overflow-hidden">
      
      {/* 1. EDITORIAL HERO WITH SIDE LOGO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 lg:pb-24">
        <div className="absolute inset-0 pointer-events-none flex justify-between px-6 lg:px-12 opacity-10">
          <div className="w-px h-full bg-brand-navy"></div>
          <div className="w-px h-full bg-brand-navy hidden md:block"></div>
          <div className="w-px h-full bg-brand-navy hidden lg:block"></div>
          <div className="w-px h-full bg-brand-navy hidden lg:block"></div>
          <div className="w-px h-full bg-brand-navy"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-1">
            
            {/* Massive Statement */}
            <div>
              <motion.h1 variants={revealUp} className="text-[14vw] lg:text-[7.5rem] leading-[0.85] font-bold tracking-tighter text-brand-navy">
                YOUR RISK.
              </motion.h1>
              <motion.h1 variants={revealUp} className="text-[14vw] lg:text-[7.5rem] leading-[0.85] font-bold tracking-tighter text-brand-grey mb-12">
                OUR RESOLVE.
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-brand-navy/20">
                <motion.p variants={revealUp} className="text-xl lg:text-2xl font-light leading-relaxed text-balance">
                  We do not simply arrange cover. We step forward when risk arrives, resolving what others leave unmanaged.
                </motion.p>
                <motion.div variants={revealUp} className="flex flex-col md:items-end justify-center">
                  <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-grey h-14 px-8 rounded-none w-fit text-sm uppercase tracking-widest transition-all duration-500 shadow-float">
                    <Link href="/contact" className="flex items-center gap-3">
                      Engage Our Firm <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="bg-brand-navy text-brand-white py-32 lg:py-48 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={stagger}
            className="max-w-5xl mx-auto"
          >
            <motion.p variants={revealUp} className="text-brand-grey text-sm uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
              <span className="w-12 h-px bg-brand-grey"></span> The Mak Shield Standard
            </motion.p>
            
            <motion.h2 variants={revealUp} className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-balance mb-16">
              The insurance market is not short of options. What it lacks are true advisors who consistently prioritize the <span className="text-brand-grey italic font-serif">client over the commission</span>, and transparency over complexity.
            </motion.h2>

            <motion.div variants={revealUp} className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
              {[
                { title: "Independence", desc: "Zero insurer bias. Every recommendation is purely client-driven.", icon: <Scale className="w-6 h-6"/> },
                { title: "Advocacy", desc: "We stay until claims are fully settled, not just submitted.", icon: <ShieldCheck className="w-6 h-6"/> },
                { title: "Global Reach", desc: "Kenyan roots. International market access and capability.", icon: <Globe2 className="w-6 h-6"/> }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="text-brand-grey mb-6 group-hover:text-white transition-colors duration-500">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-brand-grey-light/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. DIRECTORY */}
      <section className="py-32 lg:py-40 bg-brand-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">Core Expertise.</h2>
            <p className="max-w-xs text-sm text-brand-grey uppercase tracking-widest font-semibold">
              Integrated risk solutions across key risk classes.
            </p>
          </div>

          <div className="border-t-[1.5px] border-brand-navy">
            {[
              { num: "01", title: "Corporate & Commercial", suffix: "Risk Placement" },
              { num: "02", title: "Risk Management", suffix: "Advisory Services" },
              { num: "03", title: "Employee Benefits", suffix: "Health & Wellness" },
              { num: "04", title: "Claims Management", suffix: "End-to-End Advocacy" }
            ].map((service, idx) => (
              <Link key={idx} href={`/services#${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 lg:py-14 border-b border-brand-navy/20 hover:border-brand-navy transition-colors duration-500 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-grey-light scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1] -z-10"></div>

                  <div className="flex items-baseline gap-6 md:gap-16">
                    <span className="text-sm font-semibold text-brand-grey tracking-widest group-hover:text-brand-navy transition-colors">{service.num}</span>
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-brand-navy group-hover:translate-x-4 transition-transform duration-500">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-8 mt-6 md:mt-0 opacity-0 md:opacity-100">
                    <span className="text-sm uppercase tracking-[0.2em] text-brand-grey group-hover:text-brand-navy transition-colors">{service.suffix}</span>
                    <div className="w-12 h-12 rounded-full border border-brand-navy/20 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRICAL IMAGE CTA */}
      <section className="py-24 lg:py-32 bg-brand-grey-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 aspect-square lg:aspect-4/5 bg-brand-navy p-12 flex flex-col justify-between relative overflow-hidden text-white">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
              <Image src="/images/black.png" alt="Mak Shield Mark" width={300} height={300} className="w-32 h-auto opacity-20 brightness-0 invert" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-grey-light mb-4">The Promise</p>
                <h3 className="text-2xl font-medium text-balance">We will tell the truth about cover, even when that truth is uncomfortable.</h3>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-12 lg:p-24 -mt-10 lg:mt-0 lg:-ml-20 relative z-10 shadow-float border border-brand-grey/10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={revealUp} className="text-4xl lg:text-6xl font-bold tracking-tighter text-brand-navy mb-8">
                  Not a transactional relationship. <br/>
                  <span className="text-brand-grey">A lasting one.</span>
                </motion.h2>
                <motion.p variants={revealUp} className="text-lg text-brand-grey leading-relaxed mb-12 text-balance font-light">
                  When you choose Mak Shield, you choose a partner that carries the responsibility of protecting your livelihoods, businesses, and investments every single day.
                </motion.p>
                <motion.div variants={revealUp}>
                  <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-navy-light h-16 px-10 text-sm font-semibold uppercase tracking-widest rounded-none group transition-all duration-500">
                    <Link href="/contact" className="flex items-center gap-4">
                      Initiate Consultation 
                      <span className="w-8 h-px bg-white group-hover:w-12 transition-all duration-500"></span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
