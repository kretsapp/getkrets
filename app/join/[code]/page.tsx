import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const APP_STORE_ID = "6762391540";
const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

type Params = { code: string };

function normalizeCode(raw: string): string | null {
  const code = raw.trim().toUpperCase();
  if (!/^[A-Z0-9]{4,16}$/.test(code)) return null;
  return code;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { code: raw } = await params;
  const code = normalizeCode(raw);
  const canonical = code
    ? `https://getkrets.app/join/${code}`
    : "https://getkrets.app";

  return {
    title: "You've been invited to Krets",
    description:
      "Krets is a private app for sharing photos and moments with family and close friends.",
    alternates: { canonical },
    robots: { index: false, follow: false },
    other: {
      "apple-itunes-app": code
        ? `app-id=${APP_STORE_ID}, app-argument=${canonical}`
        : `app-id=${APP_STORE_ID}`,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Krets",
      title: "You've been invited to Krets",
      description:
        "Tap to join a private circle for sharing photos and moments.",
    },
  };
}

export default async function JoinPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { code: raw } = await params;
  const code = normalizeCode(raw);
  if (!code) notFound();

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <Image
          src="/krets-mark-terracotta-512.png"
          alt="Krets"
          width={72}
          height={72}
          priority
          className="mb-8 rounded-2xl"
        />

        <p className="text-sm uppercase tracking-[0.18em] text-text-muted mb-3">
          You&rsquo;ve been invited
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
          Join a circle on Krets
        </h1>
        <p className="text-text-body mb-8 leading-relaxed">
          A private, invite-only app for sharing photos and moments with family
          and close friends. No ads. No algorithm.
        </p>

        <div className="mb-10 inline-flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.18em] text-text-muted mb-2">
            Invite code
          </span>
          <span className="font-mono text-2xl font-bold tracking-[0.2em] text-text-primary bg-surface border border-input-border rounded-[var(--radius-button)] px-5 py-2.5">
            {code}
          </span>
        </div>

        <a
          href={APP_STORE_URL}
          className="w-full max-w-xs inline-flex items-center justify-center rounded-[var(--radius-button)] bg-accent hover:bg-accent-hover transition-colors text-white font-semibold px-6 py-3.5 mb-3"
        >
          Download on the App Store
        </a>
        <p className="text-sm text-text-muted">
          Already have Krets? Open the app, tap <strong className="text-text-secondary">Join a circle</strong>,
          and enter the code above.
        </p>

        <Link
          href="/"
          className="mt-10 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          &larr; About Krets
        </Link>
      </div>
    </main>
  );
}
