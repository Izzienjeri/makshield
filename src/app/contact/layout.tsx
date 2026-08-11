import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Mak Shield Insurance",
  description: "Contact Mak Shield Insurance in Nairobi for independent insurance advice, risk management support, or help with an existing policy or claim.",
  path: "/contact",
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
