import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Required for relative image URLs in OpenGraph
  metadataBase: new URL("https://krishjain-me.vercel.app"),

  title: "Krish Jain | Full-Stack Engineer",
  description:
    "Portfolio of Krish Jain, a Full-Stack Developer building scalable web infrastructure, AI agents, and modern user interfaces.",
  keywords: [
    "Krish Jain",
    "Full Stack Engineer",
    "Software Developer",
    "Mumbai",
    "Next.js Developer",
    "React Developer",
    "Web3 Developer",
  ],
  authors: [{ name: "Krish Jain", url: "https://krishjain-me.vercel.app" }],
  creator: "Krish Jain",

  // Open Graph (For LinkedIn, Discord, Facebook)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishjain-me.vercel.app",
    title: "Krish Jain | Full-Stack Engineer",
    description:
      "Explore my technical projects, including JanSamvaad, Solana Nexus, and scalable infrastructure experiments.",
    siteName: "Krish Jain Portfolio",
    images: [
      {
        url: "/og-image.png", // Make sure to add this image to your public folder!
        width: 1200,
        height: 630,
        alt: "Krish Jain - Full Stack Engineer Portfolio",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Krish Jain | Full-Stack Engineer",
    description:
      "Explore my technical projects and infrastructure experiments.",
    images: ["/og.png"],
  },

  // Tell Google explicitly to index this page
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans">
        <ScrollProgress />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
