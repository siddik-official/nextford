import type { Metadata } from "next";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexfordit.com"),
  title: {
    default: "Nexford IT | Digital Growth and Technology Solutions",
    template: "%s | Nexford IT",
  },
  description:
    "Nexford IT supports Australian and New Zealand businesses with digital growth, IT consultancy, and operations delivery from a transparent, performance-aligned model.",
  openGraph: {
    title: "Nexford IT",
    description:
      "Run smarter. Scale faster. AUS/NZ-focused digital, technology, and operations support.",
    url: "https://nexfordit.com",
    siteName: "Nexford IT",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/Artboard 1.png",
        width: 1200,
        height: 1200,
        alt: "Nexford IT logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexford IT",
    description:
      "AUS/NZ-focused digital growth, technology, and operations support.",
    images: ["/Artboard 1.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
