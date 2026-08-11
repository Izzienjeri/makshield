import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-brand-gold bg-[#071421] text-white">
      <div className="site-container py-10 sm:py-14 lg:py-18">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex h-24 w-24 items-center justify-center overflow-hidden sm:h-32 sm:w-32" aria-label="Mak Shield home">
              <Image src="/images/grey&white.png" alt="Mak Shield Insurance" width={284} height={284} className="h-full w-full scale-[1.15] object-contain" />
            </Link>
            <p className="mt-5 max-w-md text-base font-light leading-7 text-white/60">Independent insurance brokerage and risk advisory for people and organisations who expect clearer thinking and stronger advocacy.</p>
            <p className="mt-6 font-serif text-xl italic text-brand-gold">Your risk. Our resolve.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-7 lg:gap-10">
            <div>
              <h3 className="eyebrow mb-5 text-white/35 sm:mb-7">Explore</h3>
              <div className="flex flex-col gap-3 text-sm text-white/70 sm:gap-4">
                <Link href="/about" className="hover:text-brand-gold">About</Link>
                <Link href="/services" className="hover:text-brand-gold">Services</Link>
                <Link href="/why-mak-shield" className="hover:text-brand-gold">Why Mak Shield</Link>
                <Link href="/contact" className="hover:text-brand-gold">Contact</Link>
                <Link href="/quote" className="hover:text-brand-gold">Get a quote</Link>
              </div>
            </div>
            <div>
              <h3 className="eyebrow mb-5 text-white/35 sm:mb-7">Expertise</h3>
              <div className="flex flex-col gap-3 text-sm text-white/70 sm:gap-4">
                <Link href="/services#risk-advisory" className="hover:text-brand-gold">Risk advisory</Link>
                <Link href="/services#corporate" className="hover:text-brand-gold">Insurance placement</Link>
                <Link href="/services#employee-benefits" className="hover:text-brand-gold">Employee benefits</Link>
                <Link href="/services#claims" className="hover:text-brand-gold">Claims management</Link>
              </div>
            </div>
            <div className="col-span-2 border-t border-white/12 pt-6 sm:col-span-1 sm:border-t-0 sm:pt-0">
              <h3 className="eyebrow mb-5 text-white/35 sm:mb-7">Connect</h3>
              <div className="grid gap-4 text-sm text-white/70 sm:flex sm:flex-col sm:gap-5">
                <span className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />Nairobi, Kenya<br />East Africa</span>
                <a href="mailto:info@makshieldinsurance.co.ke" className="flex items-center gap-3 break-all hover:text-brand-gold"><Mail className="h-4 w-4 shrink-0 text-brand-gold" />info@makshieldinsurance.co.ke</a>
                <Link href="/contact" className="text-link mt-2 w-fit text-brand-gold">Enquire <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/12 pt-5 text-[9px] uppercase tracking-[.14em] text-white/35 sm:mt-12 sm:pt-6 sm:text-[10px] sm:tracking-[.16em]">
          <p>© {new Date().getFullYear()} Mak Shield Insurance Limited · Licensed by IRA Kenya</p>
        </div>
      </div>
    </footer>
  );
}
