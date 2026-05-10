import { FadeIn } from "@/components/animations/FadeIn";
import { Shield, Target, Users, CheckCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/features/home/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-grey-light text-brand-navy mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-navy" />
                <span className="text-sm font-semibold tracking-wide uppercase">Who We Are</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance leading-tight">
                Uncompromising <br/>Client Advocacy.
              </h2>
              
              <p className="text-brand-grey text-lg leading-relaxed mb-8 text-balance">
                We exist to close the gap between client expectations and market delivery. From private individuals seeking personal protection to large corporations managing complex risk portfolios, we serve the full spectrum of the market with the same rigor and independence.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                  "Independent advice with zero insurer bias",
                  "End-to-end claims advocacy until full settlement",
                  "Clarity over complexity — no jargon, no ambiguity"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-navy font-medium text-lg">
                    <CheckCircle className="w-6 h-6 text-brand-navy-light shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" size="lg" className="h-12 px-6 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all group">
                <Link href="/about">
                  Read Our Story
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-125 lg:h-150 rounded-2xl overflow-hidden shadow-float group">
                 <div className="w-full h-full bg-brand-grey-light flex flex-col items-center justify-center border border-brand-grey/20 relative z-0">
                    <Shield className="w-20 h-20 text-brand-grey/30 mb-4" />
                    <span className="text-brand-grey font-medium tracking-wider uppercase text-sm">Corporate Imagery Placeholder</span>
                 </div>
                 
                 <div className="absolute inset-0 border-12 border-white/10 mix-blend-overlay rounded-2xl pointer-events-none z-10 transition-all duration-500 group-hover:border-8"></div>
                 
                 <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-soft border border-brand-grey-light z-20">
                    <p className="text-brand-navy font-bold text-xl mb-1">Licensed & Regulated</p>
                    <p className="text-brand-grey text-sm">Insurance Regulatory Authority of Kenya (IRA)</p>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-grey-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <FadeIn>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy mb-6 border border-brand-navy/10">
                  <span className="text-sm font-semibold tracking-wide uppercase">What We Do</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
                  Integrated Risk <br/>Solutions.
                </h2>
                <p className="text-brand-grey text-lg text-balance">
                  A comprehensive suite of brokerage and risk advisory services across global and local markets. Driven purely by your needs.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Link href="/services" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors group text-lg pb-1 border-b-2 border-transparent hover:border-brand-navy-light">
                View All Services <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Risk Management & Advisory",
                desc: "Detailed risk surveys, internal management frameworks, loss prevention strategies, and institutional reinsurance consulting.",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Corporate & Commercial",
                desc: "Bespoke packages to protect balance sheets and maintain business resilience, including business interruption and all-risks cover.",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "Employee Benefits",
                desc: "Group life, medical schemes, WIBA compliance, and wellness consulting to help you attract and retain top talent.",
                icon: <Users className="w-8 h-8" />
              }
            ].map((service, idx) => (
              <FadeIn key={idx} delay={0.1 + (idx * 0.1)} direction="up">
                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-soft transition-all duration-300 border border-brand-grey-light h-full flex flex-col group cursor-pointer relative overflow-hidden">
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-grey-light rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150 opacity-50"></div>

                  <div className="w-16 h-16 bg-brand-navy rounded-xl flex items-center justify-center text-white mb-8 group-hover:-translate-y-2 transition-transform duration-300 shadow-md">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                  <p className="text-brand-grey text-base leading-relaxed grow mb-8">{service.desc}</p>
                  
                  <Link href={`/services#${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-brand-navy font-bold inline-flex items-center gap-2 mt-auto group/link">
                    Explore Solutions <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to secure what matters most?
              </h2>
              <p className="text-xl text-brand-grey-light mb-10 max-w-2xl mx-auto font-light">
                Whether you are an individual, a business ready for a fresh perspective, or an organization building something new, our team is ready to listen and ready to act.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-white text-brand-navy hover:bg-brand-grey-light h-14 px-10 text-lg font-semibold shadow-soft">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}