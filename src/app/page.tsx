"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Shield, Scale, Briefcase, Award, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HERO_IMAGES = [
  { src: "/images/hero12.png", position: "top" },
  { src: "/images/hero16.png", position: "top" },
  { src: "/images/hero17.png", position: "top" },
  { src: "/images/hero3.png",  position: "top" },
];

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
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Carousel State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-brand-white text-brand-navy selection:bg-brand-navy selection:text-white overflow-hidden font-sans">
      
      <div className="fixed inset-0 z-50 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-svh flex flex-col justify-end overflow-hidden bg-brand-navy pt-32 pb-16 lg:pb-24">
        
        {/* Background Layer with Carousel & Parallax */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 bg-brand-navy">
          
          <AnimatePresence mode="popLayout">
            {HERO_IMAGES.map((img, index) => (
              index === currentImageIndex && (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 z-0"
                >
                  <motion.div 
                    initial={{ scale: 1.08 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 10, ease: "easeOut" }} 
                    className="w-full h-full relative"
                  >
                    <Image
                      src={img.src}
                      alt={`Mak Shield Strategic Risk Advisory ${index + 1}`}
                      fill
                      priority={index === 0}
                      quality={100}
                      sizes="100vw"
                      className={`object-cover object-${img.position}`}
                    />
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          {/* Depth Gradients - Placed ABOVE the images (z-10) */}
          {/* Protects left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/20 to-transparent z-10 pointer-events-none"></div>
          {/* Protects bottom for text/CTA readability */}
          <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent z-10 pointer-events-none"></div>
        </motion.div>

        {/* Floating Animated Accent Orb */}
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -80, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[0%] w-[50vw] h-[50vw] bg-brand-accent/15 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen"
        />

        <div className="container relative z-20 mx-auto px-6 lg:px-12 flex flex-col justify-end h-full pb-8 lg:pb-12 mt-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Left Side: Main Headline & CTA */}
            <div className="lg:col-span-8 flex flex-col items-start">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="glass-panel inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 mb-8 shadow-soft backdrop-blur-md"
              >
                <Award className="w-4 h-4 text-brand-accent" />
                <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">
                  Premier Independent Brokerage
                </span>
              </motion.div>

              <div className="flex flex-col mb-8 relative">
                <MaskText delay={0.3}>
                  <h1 className="text-[14vw] md:text-[9vw] lg:text-[7.5rem] font-bold text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
                    YOUR RISK.
                  </h1>
                </MaskText>
                <MaskText delay={0.4}>
                  <div className="flex items-center gap-4 md:gap-8 mt-2">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                      className="hidden md:block h-0.5 bg-brand-accent shadow-[0_0_10px_rgba(178,143,75,0.8)]"
                    />
                    <h1 className="text-[14vw] md:text-[9vw] lg:text-[7.5rem] font-serif italic font-light text-brand-accent leading-[0.85] tracking-tight pr-4 drop-shadow-lg">
                      Our Resolve.
                    </h1>
                  </div>
                </MaskText>
              </div>

              <MaskText delay={0.5}>
                <p className="text-brand-grey-light/95 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-balance border-l-2 border-brand-accent/50 pl-6 py-1 drop-shadow-md">
                  We do not simply arrange cover. We step forward when risk arrives, architecting protection that secures lives, businesses, and investments.
                </p>
              </MaskText>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}
                className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-10 w-full"
              >
                <Button asChild size="lg" className="bg-brand-accent hover:bg-white text-white hover:text-brand-navy h-14 px-8 rounded-sm uppercase tracking-widest text-xs font-bold transition-all duration-500 shadow-[0_0_30px_-5px_rgba(178,143,75,0.4)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.6)] border border-brand-accent hover:border-white">
                  <Link href="/contact" className="flex items-center gap-3">
                    Engage Our Firm <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>

                <div className="hidden sm:flex gap-8 text-[9px] uppercase tracking-[0.2em] drop-shadow-md">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-brand-accent font-semibold">Headquarters</span>
                    <span className="text-white/95 tracking-widest">Nairobi, Kenya</span>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-brand-accent font-semibold">Regulation</span>
                    <span className="text-white/95 tracking-widest">Licensed by IRA</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Floating Glass Panel Card */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end pb-2 relative">
               <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1.2, ease }}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="glass-panel p-8 rounded-2xl w-full max-w-90 border border-white/10 shadow-float relative overflow-hidden group cursor-default backdrop-blur-2xl bg-brand-navy/20"
               >
                  {/* Card inner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl group-hover:bg-brand-accent/40 transition-colors duration-700"></div>

                  <div className="w-12 h-12 rounded-full bg-brand-navy border border-white/20 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                    <Globe className="w-5 h-5 text-brand-accent" />
                  </div>
                  
                  <h3 className="text-white font-serif italic text-2xl mb-3 relative z-10 drop-shadow-md">Cross-Border Reach</h3>
                  <p className="text-brand-grey-light/85 text-sm leading-relaxed relative z-10 font-light">
                    Seamlessly managing complex risk portfolios for multinational operations across the East African landscape and beyond.
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between relative z-10">
                    <span className="text-[10px] text-white/80 uppercase tracking-widest font-semibold">Explore Advisory</span>
                    <Link href="/services#risk-advisory" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-white text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </Link>
                  </div>
               </motion.div>
            </div>

          </div>
        </div>

        {/* Sophisticated Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-80 z-20"
        >
          <span className="text-white text-[9px] uppercase tracking-[0.3em] font-semibold drop-shadow-md">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1.5px] h-12 bg-gradient-to-b from-brand-accent to-transparent rounded-full shadow-[0_0_10px_rgba(178,143,75,0.5)]"
          />
        </motion.div>

        {/* Carousel Indicators (Bottom Right) */}
        <div className="absolute bottom-10 right-6 md:right-12 z-20 flex gap-3">
          {HERO_IMAGES.map((_, i) => (
            <div key={i} className="w-10 h-[2px] bg-white/20 overflow-hidden rounded-full">
              {i === currentImageIndex && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-brand-accent shadow-[0_0_8px_rgba(178,143,75,0.8)]"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- REMAINDER OF PAGE SECTIONS --- */}
      <section className="relative bg-brand-white py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-grey-light rounded-full blur-[90px] -translate-y-1/2 translate-x-1/3 opacity-40 z-0"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <MaskText>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tighter leading-none mb-10">
                The market is not short of options. <br />
                <span className="text-brand-grey font-serif italic font-light">It lacks true advisors.</span>
              </h2>
            </MaskText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {[
              { icon: <Scale className="w-5 h-5"/>, title: "Unbiased Counsel", desc: "Zero insurer bias. Every recommendation we structure is driven entirely by client needs, never by hidden commissions." },
              { icon: <Shield className="w-5 h-5"/>, title: "End-to-End Advocacy", desc: "We don't disappear after placement. We stand firmly in your corner, managing claims until full, fair settlement." },
              { icon: <Briefcase className="w-5 h-5"/>, title: "Technical Rigor", desc: "Excellence across all risk classes. We distill complex policy phrasing into actionable, jargon-free strategy." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                variants={fadeScale}
                className="group relative p-8 lg:p-10 bg-white/60 backdrop-blur-xl border border-brand-grey-light shadow-soft hover:shadow-float transition-all duration-700"
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-navy group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]"></div>
                
                <div className="w-10 h-10 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-brand-grey leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white py-32 relative border-t border-brand-navy-light">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] bg-brand-navy-light opacity-15 blur-[120px] rounded-[100%]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-20 flex items-end justify-between">
            <MaskText>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">Core Expertise.</h2>
            </MaskText>
            <div className="hidden md:block w-1/4 h-px bg-brand-navy-light"></div>
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
                  className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 lg:py-12 border-b border-white/10 hover:border-white/40 transition-colors duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/3 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] -z-10"></div>

                  <div className="flex items-baseline gap-6 md:gap-16 relative z-10">
                    <span className="text-xs font-mono text-brand-grey group-hover:text-brand-accent transition-colors">{service.num}</span>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tighter group-hover:translate-x-4 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-10 mt-5 md:mt-0 opacity-0 md:opacity-100 relative z-10">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-brand-grey group-hover:text-white transition-colors">{service.meta}</span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white transition-all duration-700">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 bg-brand-grey-light relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-brand-navy/5"></div>
        <div className="absolute top-0 bottom-0 left-3/4 w-px bg-brand-navy/5"></div>

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }}
              className="lg:col-span-5 aspect-4/5 bg-brand-navy p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden text-white shadow-float z-20"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
              <Image src="/images/black.png" alt="Mak Shield Mark" width={300} height={300} className="w-40 h-auto opacity-10 brightness-0 invert absolute -bottom-8 -right-8" />
              
              <div className="relative z-10">
                <div className="w-6 h-0.5 bg-brand-accent mb-6"></div>
                <h3 className="text-2xl font-light leading-snug tracking-tight text-balance">
                  &ldquo;When risk arrives, <br/>we step forward.&rdquo;
                </h3>
              </div>
              <div className="relative z-10">
                <p className="text-[9px] uppercase tracking-[0.2em] text-brand-grey-light">Est. in Kenya</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2, ease }}
              className="lg:col-span-7 bg-white p-10 lg:p-20 lg:-ml-12 relative z-10 shadow-soft border border-brand-grey/10"
            >
              <MaskText>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter text-brand-navy mb-6 leading-[1.1]">
                  Not a transactional relationship. <br/>
                  <span className="text-brand-accent font-serif italic font-light">A lasting one.</span>
                </h2>
              </MaskText>
              
              <MaskText delay={0.2}>
                <p className="text-base text-brand-grey leading-relaxed mb-10 text-balance font-light">
                  Whether you are a private entity, a business ready for a fresh perspective, or an institution building something new, we are ready to listen and architect your protection.
                </p>
              </MaskText>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
                <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-accent h-14 px-8 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-none group transition-all duration-500 shadow-soft">
                  <Link href="/contact" className="flex items-center gap-3">
                    Initiate Consultation 
                    <span className="w-6 h-px bg-white/50 group-hover:w-12 group-hover:bg-white transition-all duration-700 ease-out"></span>
                    <ArrowRight className="w-3 h-3" />
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