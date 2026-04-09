export function Footer() {
  return (
    <footer className="light bg-bg px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-xs text-text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Krets</p>
        <a
          href="mailto:hello@getkrets.app"
          className="transition-colors hover:text-text-secondary"
        >
          hello@getkrets.app
        </a>
        <p>Made in Sweden</p>
      </div>
    </footer>
  );
}
