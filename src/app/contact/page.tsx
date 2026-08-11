"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import ContactForm from "@/features/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 font-sans bg-brand-white">
      
      {/* Small Hero */}
      <section className="inner-hero relative py-11 sm:py-14 lg:py-18 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero18-hd.png" alt="Speak with Mak Shield" fill className="object-cover object-top opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
        </div>
        
        <div className="site-container relative z-10 text-left max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-5">
              Initiate <span className="font-serif italic text-brand-accent font-light">Consultation.</span>
            </h1>
            <p className="text-brand-grey-light/80 text-lg font-light leading-relaxed">
              We welcome the opportunity to discuss your insurance and risk management needs. Whether you are an individual, a business ready for a fresh perspective, or an organization building something new, our team is ready to listen and ready to act.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-11 sm:py-14 lg:py-20 bg-brand-grey-light relative">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Col: Contact Details */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <FadeIn direction="right">
                <div>
                  <p className="section-kicker mb-4">Reach us directly</p>
                  <h2 className="text-3xl font-semibold text-brand-navy tracking-tight mb-7">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 bg-brand-navy flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-bold mb-1">Office Address</h4>
                        <p className="text-brand-grey leading-relaxed">
                          Mak Shield Insurance Limited<br />
                          Nairobi, Kenya<br />
                          <span className="text-sm italic">Serving clients across East Africa</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 bg-brand-navy flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-bold mb-1">Phone</h4>
                        <p className="text-brand-grey leading-relaxed">+254 (0) 700 000 000</p>
                      </div>
                    </div>

                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 bg-brand-navy flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-bold mb-1">Email</h4>
                        <a href="mailto:info@makshieldinsurance.co.ke" className="text-brand-grey leading-relaxed hover:text-brand-accent transition-colors">
                          info@makshieldinsurance.co.ke
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 bg-brand-navy flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-bold mb-1">Office Hours</h4>
                        <p className="text-brand-grey leading-relaxed">
                          Monday to Friday<br />
                          8:00 AM to 5:00 PM (EAT)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-brand-grey/20">
                  <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-brand-grey mb-6">Social Media</h4>
                  <div className="flex gap-6">
                    <a href="#" className="text-brand-navy hover:text-brand-accent transition-colors font-semibold">LinkedIn</a>
                    <a href="#" className="text-brand-navy hover:text-brand-accent transition-colors font-semibold">Twitter/X</a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.2}>
                <ContactForm />
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
