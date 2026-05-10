import Link from "next/link";
import { Shield, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-brand-navy-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-wide text-white">MAK SHIELD</span>
                <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-grey-light">Insurance</span>
              </div>
            </Link>
            <p className="text-brand-grey-light text-sm leading-relaxed max-w-xs">
              Independent insurance brokerage and risk advisory firm. Protecting lives, businesses, and investments across borders with clarity and integrity.
            </p>
            <p className="text-sm font-medium italic">&ldquo;Your Risk. Our Resolve.&rdquo;</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-brand-grey-light text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Our Services</Link></li>
              <li><Link href="/why-mak-shield" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Why Mak Shield</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Core Services</h4>
            <ul className="space-y-4 text-brand-grey-light text-sm">
              <li><Link href="/services#corporate" className="hover:text-white transition-colors">Corporate & Commercial</Link></li>
              <li><Link href="/services#medical" className="hover:text-white transition-colors">Medical & Health</Link></li>
              <li><Link href="/services#employee-benefits" className="hover:text-white transition-colors">Employee Benefits</Link></li>
              <li><Link href="/services#risk-advisory" className="hover:text-white transition-colors">Risk Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-brand-grey-light text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-brand-grey" />
                <span>Nairobi, Kenya<br/>Operating across East Africa</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 shrink-0 text-brand-grey" />
                <a href="mailto:info@makshieldinsurance.com" className="hover:text-white transition-colors">info@makshieldinsurance.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 shrink-0 text-brand-grey" />
                <span>Mon - Fri: 8:00 AM - 5:00 PM (EAT)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-navy-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-grey-light">
            © {new Date().getFullYear()} Mak Shield Insurance Limited. Licensed & regulated by the Insurance Regulatory Authority of Kenya (IRA).
          </p>
          <div className="flex gap-4 text-xs text-brand-grey-light">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}