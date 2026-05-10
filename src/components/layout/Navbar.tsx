"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/useUIStore";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks =[
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-brand-grey-light shadow-soft py-4">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        <Link href="/" className="flex items-center group z-50">
          <Image 
            src="/images/blue&grey.png"
            alt="Mak Shield Insurance" 
            width={400} 
            height={120} 
            priority
            className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-500 origin-left"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:text-brand-grey relative py-2",
                  isActive ? "text-brand-navy" : "text-brand-navy/70"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-navy"
                  />
                )}
              </Link>
            );
          })}
          <Button 
            asChild
            className="ml-4 transition-all duration-500 bg-brand-navy text-white hover:bg-brand-navy-light rounded-none px-8 h-12 text-xs uppercase tracking-widest shadow-soft"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        <button
          className="lg:hidden z-50 p-2 text-brand-navy"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease:[0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-white z-40 flex flex-col pt-36 px-6"
          >
            <nav className="flex flex-col gap-8 text-3xl font-bold tracking-tighter text-brand-navy">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeMobileMenu} className="border-b border-brand-navy/10 pb-4">
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-12">
              <Button asChild size="lg" className="w-full bg-brand-navy text-white h-16 text-sm uppercase tracking-widest rounded-none">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}