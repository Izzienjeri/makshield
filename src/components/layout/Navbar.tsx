"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "@/store/useUIStore";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Mak Shield", href: "/why-mak-shield" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  useEffect(() => closeMobileMenu(), [pathname, closeMobileMenu]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-navy/10 bg-brand-sand/96 text-brand-navy backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="relative z-50 flex h-16 w-16 items-center justify-center overflow-hidden lg:h-20 lg:w-20" aria-label="Mak Shield home">
          <Image src={isMobileMenuOpen ? "/images/grey&white.png" : "/images/blue&grey.png"} alt="Mak Shield Insurance" width={284} height={284} priority className="h-[95%] w-[95%] object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={cn("relative py-3 text-[11px] font-semibold uppercase tracking-[.16em] text-brand-slate transition hover:text-brand-navy", active && "text-brand-navy")}>
                {link.name}
                {active && <motion.span layoutId="nav-active" className="absolute inset-x-0 bottom-0 h-px bg-brand-gold" />}
              </Link>
            );
          })}
          <Link href="/quote" className="ml-3 inline-flex h-10 items-center gap-3 bg-brand-navy px-5 text-[10px] font-bold uppercase tracking-[.15em] text-white transition hover:bg-brand-gold hover:text-brand-navy">
            Get a quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        <button onClick={toggleMobileMenu} className={cn("group relative z-50 grid h-11 w-11 place-items-center overflow-hidden border border-brand-navy/20 lg:hidden", isMobileMenuOpen && "border-white/20 text-white")} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen}>
          <span className="relative block h-5 w-7" aria-hidden="true">
            <motion.span
              className="absolute right-0 top-0.5 block h-px bg-current"
              animate={isMobileMenuOpen ? { width: 24, y: 8, rotate: 45 } : { width: 28, y: 0, rotate: 0 }}
              transition={{ duration: .35, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="absolute right-0 top-[9px] block h-px bg-current"
              animate={isMobileMenuOpen ? { width: 0, opacity: 0, x: 8 } : { width: 18, opacity: 1, x: 0 }}
              transition={{ duration: .25, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="absolute right-0 top-[17px] block h-px bg-current"
              animate={isMobileMenuOpen ? { width: 24, y: -8, rotate: -45 } : { width: 23, y: 0, rotate: 0 }}
              transition={{ duration: .35, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .35 }} className="fixed inset-0 z-40 min-h-svh bg-brand-navy px-4 pb-6 pt-24 text-white">
            <nav className="flex flex-col border-t border-white/15">
              {links.map((link, index) => (
                <Link key={link.href} href={link.href} className="flex items-center justify-between border-b border-white/15 py-4 text-2xl font-medium tracking-tight">
                  {link.name}<span className="font-mono text-[10px] text-brand-gold">0{index + 1}</span>
                </Link>
              ))}
            </nav>
            <Link href="/quote" className="button-gold mt-6 w-full">Get a quote <ArrowUpRight className="h-4 w-4" /></Link>
            <p className="eyebrow absolute bottom-6 text-white/35">Nairobi · Kenya · East Africa</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
