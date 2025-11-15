"use client";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 border transition bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
