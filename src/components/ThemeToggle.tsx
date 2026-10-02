"use client";

import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    localStorage.setItem("scryon-web-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
    >
      <Moon size={16} className="dark:hidden" />
      <Sun size={16} className="hidden dark:block" />
    </button>
  );
}
