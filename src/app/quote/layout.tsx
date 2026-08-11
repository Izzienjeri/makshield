import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Request an Insurance Quote in Kenya",
  description: "Request a personal, business, employee benefits, or specialist insurance quote from Mak Shield Insurance in Kenya.",
  path: "/quote",
});

export default function QuoteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
