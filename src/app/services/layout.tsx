import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Insurance Brokerage & Risk Advisory Services",
  description: "Explore insurance placement, risk advisory, employee benefits, and claims management services from Mak Shield Insurance in Kenya.",
  path: "/services",
});

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
