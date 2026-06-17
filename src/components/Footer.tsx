import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold text-[var(--foreground)]">
          <span className="w-6 h-6 rounded-md bg-[var(--brand)] flex items-center justify-center text-white text-xs font-black">
            S
          </span>
          <span>Scryon</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-secondary)]">
          <Link href="/#features" className="hover:text-[var(--foreground)] transition-colors">
            Features
          </Link>
          <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[var(--foreground)] transition-colors">
            Terms
          </Link>
          <Link href="/login" className="hover:text-[var(--foreground)] transition-colors">
            Sign in
          </Link>
        </nav>

        <p className="text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Scryon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
