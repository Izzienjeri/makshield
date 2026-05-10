import { FadeIn } from "@/components/animations/FadeIn";
import { Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/nairobi-skyline.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            {/* Using the new glass-panel @utility from our CSS */}
            <div className="glass-panel inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-brand-grey-light mb-8">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">
                Licensed by IRA Kenya
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            {/* Using text-balance @utility for perfect typography wrapping */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
              Your Risk. <br/>
              <span className="text-brand-grey">Our Resolve.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed text-balance">
              Mak Shield Insurance Limited is an independent insurance brokerage and risk advisory firm. We step forward when risk arrives, delivering clear, client-first solutions that protect lives, businesses, and investments across borders.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-brand-grey-light h-14 px-8 text-base shadow-soft transition-all">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-grey text-white hover:bg-brand-navy-light h-14 px-8 text-base bg-transparent transition-all">
                <Link href="/contact">Speak to an Advisor</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}