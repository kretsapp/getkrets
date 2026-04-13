import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Krets",
  description:
    "How Krets collects, uses, and protects your personal information.",
  alternates: { canonical: "https://getkrets.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Link
        href="/"
        className="mb-10 inline-block text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        &larr; Back to home
      </Link>

      <h1 className="text-3xl font-bold text-text-primary mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-text-muted mb-12">Last updated: April 13, 2026</p>

      <div className="space-y-10 text-[15px] leading-relaxed text-text-body">
        <p>
          Krets (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a
          private photo and video sharing app for family and close friends. This
          policy explains what personal information we collect, how we use it,
          and the choices you have.
        </p>
        <p>
          Contact: <strong className="text-text-primary">hello@getkrets.app</strong>
        </p>

        <Section title="What we collect">
          <p>When you create an account and use Krets, we collect:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>
              <strong className="text-text-primary">Account data</strong> — your
              email address, display name, date of birth (if provided), profile
              picture, and optional bio.
            </li>
            <li>
              <strong className="text-text-primary">Authentication data</strong>{" "}
              — password hash (if you use email sign-in) or Apple Sign In
              identifier. We never see your Apple ID password.
            </li>
            <li>
              <strong className="text-text-primary">Content you create</strong>{" "}
              — photos, videos, text posts, comments, reactions, polls, events,
              and other content you choose to share in your groups.
            </li>
            <li>
              <strong className="text-text-primary">
                Location data (optional)
              </strong>{" "}
              — if you choose to tag a post with a location, we store the
              latitude/longitude and place name with that post. Krets only
              requests &ldquo;When In Use&rdquo; location access and never
              tracks your location in the background.
            </li>
            <li>
              <strong className="text-text-primary">
                Push notification tokens
              </strong>{" "}
              — a device-specific token issued by Apple so we can deliver push
              notifications about activity in your groups. You can disable these
              in Settings.
            </li>
            <li>
              <strong className="text-text-primary">
                Basic usage information
              </strong>{" "}
              — app version, platform, and crash logs used to diagnose problems.
            </li>
          </ul>
          <p className="mt-3">
            We do <strong className="text-text-primary">not</strong> collect
            advertising identifiers, we do{" "}
            <strong className="text-text-primary">not</strong> use third-party
            analytics SDKs, and we do{" "}
            <strong className="text-text-primary">not</strong> sell or share
            your data with advertisers.
          </p>
        </Section>

        <Section title="How we use your information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>
              Operate the core app: show you content from your groups, deliver
              comments/reactions/notifications, tag posts with locations, and run
              features like Birthdays, Time Capsules, Daily Snap, and the map
              view.
            </li>
            <li>Authenticate you and keep your account secure.</li>
            <li>
              Respond to support requests and investigate abuse reports.
            </li>
            <li>Improve the app by diagnosing crashes and errors.</li>
          </ul>
          <p className="mt-3">
            Content you post is visible only to members of the groups you share
            it with. Krets does not make any content public.
          </p>
        </Section>

        <Section title="How your data is stored">
          <p>
            Krets is built on Supabase. Your account data and content are stored
            in Supabase&rsquo;s Postgres database and object storage, protected
            by row-level security policies so that only authenticated members of
            a given group can read its content.
          </p>
          <p className="mt-3">
            Supabase may store your data in the United States or the European
            Union. By using Krets you consent to this cross-border processing.
          </p>
          <p className="mt-3">
            Push notifications are delivered via Expo&rsquo;s push notification
            service, which forwards tokens to Apple Push Notification service
            (APNs).
          </p>
        </Section>

        <Section title="Data retention and deletion">
          <p>
            You can delete your account at any time from the Profile tab.
            Deleting your account permanently removes:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Your profile, email, and authentication record</li>
            <li>All posts, comments, reactions, and media you created</li>
            <li>Your push tokens</li>
            <li>Your memberships in every group</li>
          </ul>
          <p className="mt-3">
            Deletion is immediate and irreversible. Some backup copies may
            persist for up to 30 days before being purged.
          </p>
        </Section>

        <Section title="Data portability">
          <p>
            You can download a copy of all your data at any time from the
            Profile tab in the app. The export includes your profile, posts,
            comments, reactions, group memberships, event RSVPs, and more, in a
            machine-readable JSON format.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Krets is not intended for children under 13 (or the equivalent age
            in your jurisdiction). We do not knowingly collect information from
            children. If you believe a child has created an account, email us at{" "}
            <a
              href="mailto:hello@getkrets.app"
              className="text-accent hover:underline"
            >
              hello@getkrets.app
            </a>{" "}
            and we&rsquo;ll delete it.
          </p>
        </Section>

        <Section title="Your rights">
          <p>Depending on where you live, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>
              Delete your data (you can do this yourself from the Profile tab)
            </li>
            <li>Object to or restrict certain processing</li>
            <li>Data portability</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email{" "}
            <a
              href="mailto:hello@getkrets.app"
              className="text-accent hover:underline"
            >
              hello@getkrets.app
            </a>
            .
          </p>
        </Section>

        <Section title="Abuse and content reporting">
          <p>
            Krets provides in-app tools to report offensive posts, comments, or
            users, and to block other users. Reports are reviewed within 24
            hours and offending content or accounts may be removed. Report abuse
            by tapping the three-dots menu on any post or profile, or email{" "}
            <a
              href="mailto:hello@getkrets.app"
              className="text-accent hover:underline"
            >
              hello@getkrets.app
            </a>
            .
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. Material changes will
            be announced in-app. Continued use of Krets after a change means you
            accept the updated policy.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions, concerns, or data requests:{" "}
            <a
              href="mailto:hello@getkrets.app"
              className="text-accent hover:underline"
            >
              hello@getkrets.app
            </a>
          </p>
        </Section>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center text-sm text-text-muted">
        &copy; {new Date().getFullYear()} Krets. All rights reserved.
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-text-primary mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
