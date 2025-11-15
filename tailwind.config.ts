// tailwind.config.ts
import { Manrope } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    fontFamily: {
      // sans: ["'DM Sans'", "ui-sans-serif", "system-ui"],
       sans: ["var(--font-manrope)"],
    },
  },
},

  plugins: [],
};

export default config;
