"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import { Briefcase, Shield, Users, Activity, Check } from "lucide-react";

const services = [
  {
    id: "risk-advisory",
    icon: <Activity className="w-8 h-8 text-brand-accent" />,
    title: "Risk Advisory",
    description: "Structuring, negotiating, and placing solutions across global and local markets.",
    image: "/images/risk.png",
    features: [
      "Risk assessments and profiling",
      "Risk registers and documentation",
      "Loss prevention strategies",
      "Internal risk management frameworks",
      "Reinsurance advisory for institutional clients",
    ]
  },
  {
    id: "corporate",
    icon: <Briefcase className="w-8 h-8 text-brand-accent" />,
    title: "Insurance Placement",
    description: "Unbiased market access and placement across all major risk classes.",
    image: "/images/insurance.png",
    features: [
      "Medical & Health Insurance",
      "Motor & Fleet Insurance",
      "Property & Engineering",
      "Marine & Cargo",
      "Liability (D&O, Professional Indemnity, Cyber)",
      "Travel Insurance",
      "Corporate & Commercial Risk",
      "Personal Lines",
    ]
  },
  {
    id: "employee-benefits",
    icon: <Users className="w-8 h-8 text-brand-accent" />,
    title: "Employee Benefits",
    description: "Comprehensive solutions to protect and retain your human capital.",
    image: "/images/employee.png",
    features: [
      "Group Life Cover",
      "Group Medical Schemes",
      "Personal Accident & WIBA Compliance",
      "Pension & Retirement Solutions",
      "Integrated Wellness and Human Capital Consulting",
    ]
  },
  {
    id: "claims",
    icon: <Shield className="w-8 h-8 text-brand-accent" />,
    title: "Claims Management",
    description: "End-to-end advocacy. We do not simply arrange cover; we stand by you when risk arrives.",
    image: "/images/claim.png",
    features: [
      "End-to-end claims advocacy from first notification to settlement",
      "Documentation preparation and submission",
      "Negotiation with insurers on the client's behalf",
      "Escalation and resolution management",
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 font-sans bg-brand-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://placehold.co/1920x1080/0F1A2A/B28F4B?text=Core+Services" alt="Mak Shield Services" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 mb-6 glass-panel">
              <Briefcase className="w-4 h-4 text-brand-accent" />
              <span className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold">Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              Our Core <span className="font-serif italic text-brand-accent font-light">Services.</span>
            </h1>
            <p className="text-brand-grey-light/80 max-w-2xl text-lg font-light leading-relaxed">
              Mak Shield offers a comprehensive suite of brokerage and risk advisory services across all key risk classes. We structure, negotiate, and place solutions globally.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-brand-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-20">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tighter mb-6">
                Rooted in reality. <br/>
                <span className="font-serif italic text-brand-accent font-light">Guided by best practice.</span>
              </h2>
              <p className="text-brand-grey font-light text-lg leading-relaxed">
                Our services draw on the global best practices of leading firms while remaining deeply rooted in the realities of the East African market. Our offering spans personal lines, corporate and commercial risk, employee benefits, and specialist advisory solutions.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-24 lg:space-y-36">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <FadeIn delay={0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    
                    {/* Asymmetrical Image Container */}
                    <div className={cn(
                      "lg:col-span-5 relative w-full aspect-[5/4] max-w-[550px] mx-auto flex items-center justify-center",
                      index % 2 === 1 ? "lg:order-last" : ""
                    )}>
                      {/* Glow effect behind the image */}
                      <div 
                        className="absolute inset-0 bg-brand-accent/20 blur-[80px] transform scale-90 -z-10"
                        style={{ borderRadius: index % 2 === 0 ? '32px 96px 32px 96px' : '96px 32px 96px 32px' }}
                      ></div>
                      
                      <div 
                        className="relative w-full h-full overflow-hidden shadow-float border-[8px] border-white bg-brand-grey-light/50"
                        style={{ borderRadius: index % 2 === 0 ? '32px 96px 32px 96px' : '96px 32px 96px 32px' }}
                      >
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          fill 
                          className="object-cover hover:scale-105 transition-transform duration-700" 
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-brand-navy/5 pointer-events-none mix-blend-overlay"></div>
                      </div>
                    </div>

                    {/* Text & Features Card */}
                    <div className={cn(
                      "lg:col-span-7 bg-brand-grey-light/30 p-8 md:p-12 border border-brand-grey-light shadow-soft rounded-sm hover:shadow-float transition-all duration-500",
                      index % 2 === 1 ? "lg:order-first" : ""
                    )}>
                      <div className="flex flex-col items-start mb-10">
                        <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6 shadow-md">
                          {service.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-brand-navy tracking-tighter mb-4">{service.title}</h3>
                        <p className="text-brand-grey leading-relaxed text-lg">{service.description}</p>
                      </div>

                      <div className="pt-8 border-t border-brand-grey/20">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-4">
                              <div className="mt-1 w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-brand-accent" />
                              </div>
                              <span className="text-brand-navy font-medium leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}