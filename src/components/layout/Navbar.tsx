"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-gold/20 bg-brand-navy/96 text-white backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="relative z-50 flex h-16 w-16 items-center justify-center overflow-hidden lg:h-20 lg:w-20" aria-label="Mak Shield home">
          <Image src="/images/grey&white.png" alt="Mak Shield Insurance" width={284} height={284} priority className="h-[95%] w-[95%] object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={cn("relative py-3 text-[11px] font-semibold uppercase tracking-[.16em] text-white/65 transition hover:text-white", active && "text-white")}>
                {link.name}
                {active && <motion.span layoutId="nav-active" className="absolute inset-x-0 bottom-0 h-px bg-brand-gold" />}
              </Link>
            );
          })}
          <Link href="/quote" className="ml-3 inline-flex h-10 items-center gap-3 bg-brand-gold px-5 text-[10px] font-bold uppercase tracking-[.15em] text-brand-navy transition hover:bg-white">
            Get a quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        <button onClick={toggleMobileMenu} className="relative z-50 grid h-12 w-12 place-items-center border border-white/20 lg:hidden" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .35 }} className="fixed inset-0 z-40 min-h-svh bg-brand-navy px-4 pb-8 pt-32">
            <nav className="flex flex-col border-t border-white/15">
              {links.map((link, index) => (
                <Link key={link.href} href={link.href} className="flex items-center justify-between border-b border-white/15 py-5 text-3xl font-medium tracking-tight">
                  {link.name}<span className="font-mono text-[10px] text-brand-gold">0{index + 1}</span>
                </Link>
              ))}
            </nav>
            <Link href="/quote" className="button-gold mt-8 w-full">Get a quote <ArrowUpRight className="h-4 w-4" /></Link>
            <p className="eyebrow absolute bottom-8 text-white/35">Nairobi · Kenya · East Africa</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
