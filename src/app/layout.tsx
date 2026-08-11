import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { createPageMetadata, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createPageMetadata({
    title: "Mak Shield Insurance | Insurance Broker in Kenya",
    description: "Independent insurance brokerage and risk advisory in Kenya. Mak Shield protects lives, businesses, employees, and investments with clear advice and claims support.",
    path: "/",
  }),
  title: {
    default: "Mak Shield Insurance | Insurance Broker in Kenya",
    template: "%s | Mak Shield Insurance",
  },
  applicationName: "Mak Shield Insurance",
  category: "Insurance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Mak Shield Insurance Limited",
  url: siteUrl,
  logo: `${siteUrl}/images/blue&grey.png`,
  image: `${siteUrl}/images/hero12-hd.png`,
  description: "Independent insurance brokerage and risk advisory firm based in Kenya.",
  email: "info@makshieldinsurance.co.ke",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: ["Kenya", "East Africa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-KE"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-white text-brand-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
