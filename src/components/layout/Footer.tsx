import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-28 pb-16 border-t border-brand-navy-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10 mb-24">
          
          <div className="space-y-8 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/black.png" 
                alt="Mak Shield Insurance" 
                width={350} 
                height={120} 
                className="h-24 lg:h-28 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </Link>
            <p className="text-brand-grey-light/80 text-base leading-relaxed">
              Independent insurance brokerage and risk advisory firm. Protecting lives, businesses, and investments across borders with clarity and integrity.
            </p>
            <p className="text-base font-serif italic font-light text-brand-grey">&ldquo;Your Risk. Our Resolve.&rdquo;</p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.22em] font-semibold text-brand-grey mb-10">Company</h4>
            <ul className="space-y-6 text-brand-grey-light/95 text-base">
              <li><Link href="/about" className="hover:text-brand-accent transition-colors flex items-center gap-4 group"><ArrowRight className="w-3.5 h-3.5 text-brand-grey group-hover:text-brand-accent transition-colors"/> About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-accent transition-colors flex items-center gap-4 group"><ArrowRight className="w-3.5 h-3.5 text-brand-grey group-hover:text-brand-accent transition-colors"/> Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors flex items-center gap-4 group"><ArrowRight className="w-3.5 h-3.5 text-brand-grey group-hover:text-brand-accent transition-colors"/> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.22em] font-semibold text-brand-grey mb-10">Expertise</h4>
            <ul className="space-y-6 text-brand-grey-light/95 text-base">
              <li><Link href="/services#corporate" className="hover:text-brand-accent transition-colors">Corporate &amp; Commercial</Link></li>
              <li><Link href="/services#medical" className="hover:text-brand-accent transition-colors">Medical &amp; Health</Link></li>
              <li><Link href="/services#employee-benefits" className="hover:text-brand-accent transition-colors">Employee Benefits</Link></li>
              <li><Link href="/services#risk-advisory" className="hover:text-brand-accent transition-colors">Risk Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.22em] font-semibold text-brand-grey mb-10">Get in Touch</h4>
            <ul className="space-y-6 text-brand-grey-light/95 text-base">
              <li className="flex gap-5 items-start">
                <MapPin className="w-5 h-5 shrink-0 text-brand-grey mt-0.5" />
                <span className="leading-relaxed">Nairobi, Kenya<br/>Operating across East Africa</span>
              </li>
              <li className="flex gap-5 items-center">
                <Mail className="w-5 h-5 shrink-0 text-brand-grey" />
                <a href="mailto:info@makshieldinsurance.com" className="hover:text-brand-accent transition-colors">info@makshieldinsurance.com</a>
              </li>
              <li className="flex gap-5 items-center">
                <Phone className="w-5 h-5 shrink-0 text-brand-grey" />
                <span>Mon - Fri: 8:00 AM - 5:00 PM (EAT)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs uppercase tracking-widest text-brand-grey">
            © {new Date().getFullYear()} Mak Shield Insurance Limited. Licensed by IRA Kenya.
          </p>
          <div className="flex gap-10 text-xs uppercase tracking-widest text-brand-grey">
            <Link href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
