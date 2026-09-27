"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center justify-between rounded-full neu-inset p-1 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300 focus:outline-none"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Sliding Pill Indicator */}
      <div
        className={`absolute top-1 bottom-1 w-8 rounded-full bg-zinc-900 dark:bg-white shadow-md transition-transform duration-300 ease-in-out ${
          theme === "dark" ? "translate-x-10" : "translate-x-0"
        }`}
      />

      {/* Sun Icon (Light Mode) */}
      <div className="relative z-10 flex h-8 w-8 items-center justify-center">
        <Sun className={`h-4 w-4 transition-colors duration-300 ${theme === "light" ? "text-white" : "text-zinc-500"}`} />
      </div>

      {/* Moon Icon (Dark Mode) */}
      <div className="relative z-10 flex h-8 w-8 items-center justify-center">
        <Moon className={`h-4 w-4 transition-colors duration-300 ${theme === "dark" ? "text-zinc-900" : "text-zinc-500"}`} />
      </div>
    </button>
  );
}
