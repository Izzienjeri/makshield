import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Why Choose Mak Shield Insurance",
  description: "Discover Mak Shield's independent advice, claims advocacy, technical expertise, local strength, and access to insurance markets beyond Kenya.",
  path: "/why-mak-shield",
});

export default function WhyMakShieldLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
