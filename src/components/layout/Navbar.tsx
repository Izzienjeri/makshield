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
    <header className="sticky inset-x-0 top-0 z-50 border-b border-brand-navy/10 bg-brand-sand text-brand-navy">
      <div className="site-container flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="relative z-50 flex h-16 w-16 items-center justify-center overflow-hidden lg:h-20 lg:w-20" aria-label="Mak Shield home">
          <Image src="/images/blue&grey.png" alt="Mak Shield Insurance" width={284} height={284} priority className="h-[95%] w-[95%] object-contain" />
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

        <button onClick={toggleMobileMenu} className={cn("group relative z-50 grid h-11 w-11 place-items-center overflow-hidden border border-brand-navy/20 lg:hidden", isMobileMenuOpen && "border-brand-navy/40")} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen}>
          <span className="relative block h-5 w-7" aria-hidden="true">
            <motion.span
              className="absolute right-0 top-0.5 block h-px bg-current"
              animate={isMobileMenuOpen ? { width: 24, y: 8, rotate: 45 } : { width: [28, 20, 25, 28], y: 0, rotate: 0 }}
              transition={isMobileMenuOpen ? { duration: .35, ease: [0.16, 1, 0.3, 1] } : { width: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }, y: { duration: .35 }, rotate: { duration: .35 } }}
            />
            <motion.span
              className="absolute right-0 top-[9px] block h-px bg-current"
              animate={isMobileMenuOpen ? { width: 0, opacity: 0, x: 8 } : { width: [18, 25, 14, 18], opacity: 1, x: 0 }}
              transition={isMobileMenuOpen ? { duration: .25, ease: [0.16, 1, 0.3, 1] } : { width: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: .2 }, opacity: { duration: .2 }, x: { duration: .25 } }}
            />
            <motion.span
              className="absolute right-0 top-[17px] block h-px bg-current"
              animate={isMobileMenuOpen ? { width: 24, y: -8, rotate: -45 } : { width: [23, 16, 28, 23], y: 0, rotate: 0 }}
              transition={isMobileMenuOpen ? { duration: .35, ease: [0.16, 1, 0.3, 1] } : { width: { duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: .4 }, y: { duration: .35 }, rotate: { duration: .35 } }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: .42, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: .22 } }}
            className="overflow-hidden bg-brand-navy text-white lg:hidden"
          >
            <motion.div initial={{ y: -16 }} animate={{ y: 0 }} exit={{ y: -10 }} transition={{ duration: .36, ease: [0.16, 1, 0.3, 1] }} className="site-container py-3">
              <nav className="flex flex-col border-t border-white/15">
                {links.map((link, index) => (
                  <Link key={link.href} href={link.href} className={cn("flex items-center justify-between border-b border-white/15 py-2.5 text-base font-medium tracking-tight transition-colors hover:text-brand-gold", pathname === link.href && "text-brand-gold")}>
                    {link.name}<span className="font-mono text-[10px] text-brand-gold">0{index + 1}</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-3 flex items-center gap-4 pb-1">
                <Link href="/quote" className="button-gold grow">Get a quote <ArrowUpRight className="h-4 w-4" /></Link>
                <span className="text-right text-[8px] uppercase leading-4 tracking-[.14em] text-white/35">Nairobi<br />Kenya</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
