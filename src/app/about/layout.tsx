import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Mak Shield Insurance",
  description: "Learn about Mak Shield Insurance Limited, an independent insurance brokerage and risk advisory firm serving clients in Kenya and beyond.",
  path: "/about",
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
