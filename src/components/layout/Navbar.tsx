"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-brand-grey-light py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <Shield className={cn("w-8 h-8 transition-colors", scrolled ? "text-brand-navy" : "text-white")} />
          <div className="flex flex-col">
            <span className={cn("text-xl font-bold leading-none tracking-wide", scrolled ? "text-brand-navy" : "text-white")}>
              MAK SHIELD
            </span>
            <span className={cn("text-[0.65rem] font-semibold tracking-[0.2em] uppercase", scrolled ? "text-brand-grey" : "text-brand-grey-light")}>
              Insurance
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-grey relative",
                  scrolled ? "text-brand-navy" : "text-brand-grey-light",
                  isActive && "font-bold"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className={cn("absolute -bottom-2 left-0 right-0 h-0.5", scrolled ? "bg-brand-navy" : "bg-white")}
                  />
                )}
              </Link>
            );
          })}
          <Button 
            asChild
            className={cn(
              "ml-4 transition-all",
              scrolled ? "bg-brand-navy text-white hover:bg-brand-navy-light" : "bg-white text-brand-navy hover:bg-brand-grey-light"
            )}
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden z-50 p-2", scrolled || isMobileMenuOpen ? "text-brand-navy" : "text-white")}
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6 text-2xl font-semibold text-brand-navy">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeMobileMenu}>
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-12">
              <Button asChild size="lg" className="w-full bg-brand-navy text-white h-14 text-lg">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}