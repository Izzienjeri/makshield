import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 border-t border-brand-navy-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="space-y-8 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/black.png" 
                alt="Mak Shield Insurance" 
                width={350} 
                height={120} 
                className="h-20 lg:h-24 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-brand-grey-light/70 text-sm leading-relaxed">
              Independent insurance brokerage and risk advisory firm. Protecting lives, businesses, and investments across borders with clarity and integrity.
            </p>
            <p className="text-sm font-medium italic text-brand-grey">&ldquo;Your Risk. Our Resolve.&rdquo;</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-grey mb-8">Company</h4>
            <ul className="space-y-5 text-brand-grey-light/90 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-3 group"><ArrowRight className="w-3 h-3 text-brand-grey group-hover:text-white transition-colors"/> About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors flex items-center gap-3 group"><ArrowRight className="w-3 h-3 text-brand-grey group-hover:text-white transition-colors"/> Our Services</Link></li>
              <li><Link href="/why-mak-shield" className="hover:text-white transition-colors flex items-center gap-3 group"><ArrowRight className="w-3 h-3 text-brand-grey group-hover:text-white transition-colors"/> Why Mak Shield</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-3 group"><ArrowRight className="w-3 h-3 text-brand-grey group-hover:text-white transition-colors"/> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-grey mb-8">Expertise</h4>
            <ul className="space-y-5 text-brand-grey-light/90 text-sm">
              <li><Link href="/services#corporate" className="hover:text-white transition-colors">Corporate & Commercial</Link></li>
              <li><Link href="/services#medical" className="hover:text-white transition-colors">Medical & Health</Link></li>
              <li><Link href="/services#employee-benefits" className="hover:text-white transition-colors">Employee Benefits</Link></li>
              <li><Link href="/services#risk-advisory" className="hover:text-white transition-colors">Risk Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-grey mb-8">Get in Touch</h4>
            <ul className="space-y-5 text-brand-grey-light/90 text-sm">
              <li className="flex gap-4 items-start">
                <MapPin className="w-4 h-4 shrink-0 text-brand-grey mt-0.5" />
                <span className="leading-relaxed">Nairobi, Kenya<br/>Operating across East Africa</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-4 h-4 shrink-0 text-brand-grey" />
                <a href="mailto:info@makshieldinsurance.com" className="hover:text-white transition-colors">info@makshieldinsurance.com</a>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-4 h-4 shrink-0 text-brand-grey" />
                <span>Mon - Fri: 8:00 AM - 5:00 PM (EAT)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] uppercase tracking-widest text-brand-grey">
            © {new Date().getFullYear()} Mak Shield Insurance Limited. Licensed by IRA Kenya.
          </p>
          <div className="flex gap-8 text-[11px] uppercase tracking-widest text-brand-grey">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}