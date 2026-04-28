import Link from "next/link";

export function Footer() {
  return (
    <footer className="light bg-bg px-6 py-10 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-xs text-text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Krets</p>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          <Link
            href="/pricing"
            className="transition-colors hover:text-text-secondary"
          >
            Pricing
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-text-secondary"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-text-secondary"
          >
            Terms
          </Link>
          <a
            href="mailto:hello@getkrets.app"
            className="transition-colors hover:text-text-secondary"
          >
            hello@getkrets.app
          </a>
        </nav>

        <p>Made in Sweden</p>
      </div>
    </footer>
  );
}
