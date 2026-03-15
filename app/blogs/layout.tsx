"use client";

import Link from "next/link";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { useTheme } from "@/components/ThemeProvider";
// Make sure this path and casing perfectly matches your actual file
import ThemeToggle from "@/components/Themetoggle";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {/* Floating Theme Toggle */}
      <div className="fixed bottom-6 right-7 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Navigation / Back Button */}
        <header className="mb-10">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors font-sans ${
              theme === "dark"
                ? "text-gray-400 hover:text-gray-100"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            &larr; Back to Portfolio
          </Link>
        </header>

        <main className={manrope.variable}>{children}</main>
      </div>
    </div>
  );
}
