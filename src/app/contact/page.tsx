"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import ContactForm from "@/features/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 font-sans bg-brand-white">
      
      {/* Small Hero */}
      <section className="relative py-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://placehold.co/1920x600/0F1A2A/B28F4B?text=Contact+Us" alt="Contact Mak Shield" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Initiate <span className="font-serif italic text-brand-accent font-light">Consultation.</span>
            </h1>
            <p className="text-brand-grey-light/80 text-lg font-light leading-relaxed">
              We welcome the opportunity to discuss your insurance and risk management needs. Whether you are an individual, a business ready for a fresh perspective, or an organization building something new, our team is ready to listen and ready to act.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-brand-grey-light relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Col: Contact Details */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <FadeIn direction="right">
                <div>
                  <h2 className="text-3xl font-bold text-brand-navy tracking-tight mb-8">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
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
                      <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-bold mb-1">Phone</h4>
                        <p className="text-brand-grey leading-relaxed">+254 (0) 700 000 000</p>
                      </div>
                    </div>

                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-bold mb-1">Email</h4>
                        <a href="mailto:info@makshieldinsurance.com" className="text-brand-grey leading-relaxed hover:text-brand-accent transition-colors">
                          info@makshieldinsurance.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
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
