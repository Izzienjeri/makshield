"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, Shield, Scale, Briefcase, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const transition = { duration: 1.4, ease };

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.8, ease } }
};

function MaskText({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          hidden: { y: "100%", rotate: 2, opacity: 0 },
          visible: { y: 0, rotate: 0, opacity: 1, transition: { ...transition, delay } }
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset:["start start", "end end"] });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-brand-white text-brand-navy selection:bg-brand-navy selection:text-white overflow-hidden font-sans">
      
      <div className="fixed inset-0 z-50 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <section className="relative h-screen min-h-200 flex flex-col justify-end overflow-hidden bg-brand-navy">
        
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero1.png"
            alt="Mak Shield Strategic Risk Advisory"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Creative addition: A subtle gradient overlay to help the text stand out more naturally */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent"></div>
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col justify-end h-full pb-24">
          
          <div className="flex items-center gap-4 mb-8 overflow-hidden">
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={transition} className="h-px w-12 bg-brand-grey"></motion.div>
            <MaskText delay={0.2} className="text-brand-grey text-[10px] uppercase tracking-[0.4em] font-semibold">
              Independent Risk Advisory
            </MaskText>
          </div>
          
          <div className="flex flex-col mb-12">
            <MaskText delay={0.3}>
              <h1 className="text-[15vw] md:text-[10vw] lg:text-[9rem] font-bold text-white leading-[0.8] tracking-tighter drop-shadow-lg">
                YOUR RISK.
              </h1>
            </MaskText>
            <MaskText delay={0.4}>
              <h1 className="text-[15vw] md:text-[10vw] lg:text-[9rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-brand-grey to-brand-grey-light leading-[0.8] tracking-tighter mt-2 drop-shadow-lg">
                OUR RESOLVE.
              </h1>
            </MaskText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-5 lg:col-span-4">
              <MaskText delay={0.5}>
                <p className="text-brand-grey-light/80 text-lg md:text-xl font-light leading-relaxed text-balance">
                  We do not simply arrange cover. We step forward when risk arrives, architecting protection that secures lives, businesses, and investments.
                </p>
              </MaskText>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8 flex flex-col md:items-end justify-between">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
                className="hidden md:flex gap-16 text-brand-grey text-[10px] uppercase tracking-[0.2em]"
              >
                <div>
                  <p className="mb-2 opacity-50">Headquarters</p>
                  <p className="text-white font-medium">Nairobi, Kenya</p>
                </div>
                <div>
                  <p className="mb-2 opacity-50">Regulation</p>
                  <p className="text-white font-medium">Licensed by IRA</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}>
                <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-brand-grey-light h-16 px-10 rounded-none uppercase tracking-widest text-xs font-bold transition-all duration-500 shadow-float hover:shadow-2xl">
                  <Link href="/contact" className="flex items-center gap-4">
                    Engage Our Firm <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-white text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown className="w-4 h-4 text-white animate-bounce" />
        </motion.div>
      </section>

      <section className="relative bg-brand-white py-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-grey-light rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-50 z-0"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <MaskText>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-navy tracking-tighter leading-[0.95] mb-12">
                The market is not short of options. <br />
                <span className="text-brand-grey font-serif italic font-light">It lacks true advisors.</span>
              </h2>
            </MaskText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            {[
              { icon: <Scale className="w-6 h-6"/>, title: "Unbiased Counsel", desc: "Zero insurer bias. Every recommendation we structure is driven entirely by client needs, never by hidden commissions." },
              { icon: <Shield className="w-6 h-6"/>, title: "End-to-End Advocacy", desc: "We don't disappear after placement. We stand firmly in your corner, managing claims until full, fair settlement." },
              { icon: <Briefcase className="w-6 h-6"/>, title: "Technical Rigor", desc: "Excellence across all risk classes. We distill complex policy phrasing into actionable, jargon-free strategy." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                variants={fadeScale}
                className="group relative p-10 lg:p-12 bg-white/60 backdrop-blur-xl border border-brand-grey-light shadow-soft hover:shadow-float transition-all duration-700"
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-navy group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]"></div>
                
                <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-brand-grey leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white py-40 relative border-t border-brand-navy-light">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-brand-navy-light opacity-20 blur-[150px] rounded-[100%]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-24 flex items-end justify-between">
            <MaskText>
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter">Core Expertise.</h2>
            </MaskText>
            <div className="hidden md:block w-1/3 h-px bg-brand-navy-light"></div>
          </div>

          <div className="border-t border-white/10">
            {[
              { num: "01", title: "Corporate & Commercial", meta: "Risk Placement" },
              { num: "02", title: "Risk Advisory", meta: "Management Frameworks" },
              { num: "03", title: "Employee Benefits", meta: "Health & Wellness" },
              { num: "04", title: "Claims Management", meta: "End-to-End Resolution" }
            ].map((service, idx) => (
              <Link key={idx} href={`/services#${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeScale}
                  className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-12 lg:py-16 border-b border-white/10 hover:border-white/40 transition-colors duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/3 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] -z-10"></div>

                  <div className="flex items-baseline gap-8 md:gap-20 relative z-10">
                    <span className="text-xs font-mono text-brand-grey group-hover:text-white transition-colors">{service.num}</span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter group-hover:translate-x-6 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-12 mt-6 md:mt-0 opacity-0 md:opacity-100 relative z-10">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey group-hover:text-white transition-colors">{service.meta}</span>
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-navy transition-all duration-700">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-48 bg-brand-grey-light relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-brand-navy/5"></div>
        <div className="absolute top-0 bottom-0 left-3/4 w-px bg-brand-navy/5"></div>

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }}
              className="lg:col-span-5 aspect-4/5 bg-brand-navy p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden text-white shadow-float z-20"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
              <Image src="/images/black.png" alt="Mak Shield Mark" width={400} height={400} className="w-48 h-auto opacity-10 brightness-0 invert absolute -bottom-10 -right-10" />
              
              <div className="relative z-10">
                <div className="w-8 h-0.5 bg-brand-grey mb-8"></div>
                <h3 className="text-3xl font-light leading-snug tracking-tight text-balance">
                  &ldquo;When risk arrives, <br/>we step forward.&rdquo;
                </h3>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-grey-light">Est. in Kenya</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2, ease }}
              className="lg:col-span-7 bg-white p-12 lg:p-24 lg:-ml-16 relative z-10 shadow-soft border border-brand-grey/10"
            >
              <MaskText>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-brand-navy mb-8 leading-[1.1]">
                  Not a transactional relationship. <br/>
                  <span className="text-brand-grey font-serif italic font-light">A lasting one.</span>
                </h2>
              </MaskText>
              
              <MaskText delay={0.2}>
                <p className="text-lg text-brand-grey leading-relaxed mb-12 text-balance font-light">
                  Whether you are a private entity, a business ready for a fresh perspective, or an institution building something new, we are ready to listen and architect your protection.
                </p>
              </MaskText>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
                <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-navy-light h-16 px-10 text-[11px] font-semibold uppercase tracking-[0.2em] rounded-none group transition-all duration-500">
                  <Link href="/contact" className="flex items-center gap-4">
                    Initiate Consultation 
                    <span className="w-8 h-px bg-white/50 group-hover:w-16 group-hover:bg-white transition-all duration-700 ease-out"></span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}