"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-blue.png"
            alt="Scryon"
            width={110}
            height={36}
            priority
            className="h-8 w-auto block dark:hidden"
          />
          <Image
            src="/logo-white.png"
            alt="Scryon"
            width={110}
            height={36}
            priority
            className="h-8 w-auto hidden dark:block"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
            How it works
          </Link>
          <Link href="https://dashboard.scryon.app/login" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
            Sign in
          </Link>
          <Link
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-[var(--brand)] text-white hover:bg-[var(--brand-light)] transition-colors"
          >
            Get the app
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--text-secondary)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden border-t border-[var(--border)] bg-[var(--background)] overflow-hidden transition-all duration-200",
        open ? "max-h-64" : "max-h-0"
      )}>
        <div className="px-4 py-4 flex flex-col gap-4">
          <Link href="/#features" className="text-sm text-[var(--text-secondary)]" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/#how-it-works" className="text-sm text-[var(--text-secondary)]" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="https://dashboard.scryon.app/login" className="text-sm text-[var(--text-secondary)]" onClick={() => setOpen(false)}>Sign in</Link>
          <Link
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-[var(--brand)] text-white text-center"
            onClick={() => setOpen(false)}
          >
            Get the app
          </Link>
        </div>
      </div>
    </nav>
  );
}
