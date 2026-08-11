import type { Metadata } from "next";

export const siteUrl = "https://makshieldinsurance.co.ke";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_KE",
      url: canonical,
      siteName: "Mak Shield Insurance",
      title,
      description,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Mak Shield Insurance — Your Risk. Our Resolve.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image.png"],
    },
  };
}
