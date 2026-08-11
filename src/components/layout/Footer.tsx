import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#071421] text-white">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="Mak Shield home">
              <Image src="/images/grey&white.png" alt="Mak Shield Insurance" width={284} height={284} className="h-24 w-24 object-contain" />
            </Link>
            <p className="mt-7 max-w-md text-lg font-light leading-8 text-white/60">Independent insurance brokerage and risk advisory for people and organisations who expect clearer thinking and stronger advocacy.</p>
            <p className="mt-8 font-serif text-2xl italic text-brand-gold">Your risk. Our resolve.</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="eyebrow mb-7 text-white/35">Explore</h3>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <Link href="/about" className="hover:text-brand-gold">About</Link>
                <Link href="/services" className="hover:text-brand-gold">Services</Link>
                <Link href="/why-mak-shield" className="hover:text-brand-gold">Why Mak Shield</Link>
                <Link href="/contact" className="hover:text-brand-gold">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="eyebrow mb-7 text-white/35">Expertise</h3>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <Link href="/services#risk-advisory" className="hover:text-brand-gold">Risk advisory</Link>
                <Link href="/services#corporate" className="hover:text-brand-gold">Insurance placement</Link>
                <Link href="/services#employee-benefits" className="hover:text-brand-gold">Employee benefits</Link>
                <Link href="/services#claims" className="hover:text-brand-gold">Claims management</Link>
              </div>
            </div>
            <div>
              <h3 className="eyebrow mb-7 text-white/35">Connect</h3>
              <div className="flex flex-col gap-5 text-sm text-white/70">
                <span className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />Nairobi, Kenya<br />East Africa</span>
                <a href="mailto:info@makshieldinsurance.co.ke" className="flex items-center gap-3 break-all hover:text-brand-gold"><Mail className="h-4 w-4 shrink-0 text-brand-gold" />info@makshieldinsurance.co.ke</a>
                <Link href="/contact" className="text-link mt-2 w-fit text-brand-gold">Enquire <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/12 pt-7 text-[10px] uppercase tracking-[.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mak Shield Insurance Limited · Licensed by IRA Kenya</p>
          <div className="flex gap-6"><Link href="#">Privacy</Link><Link href="#">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
