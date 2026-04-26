import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Krets",
  description:
    "The agreement between you and Krets when you use the Krets app and services.",
  alternates: { canonical: "https://getkrets.app/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Link
        href="/"
        className="mb-10 inline-block text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        &larr; Back to home
      </Link>

      <h1 className="text-3xl font-bold text-text-primary mb-2">
        Terms of Use
      </h1>
      <p className="text-sm text-text-muted mb-12">Last updated: April 26, 2026</p>

      <div className="space-y-10 text-[15px] leading-relaxed text-text-body">
        <p>
          These Terms of Use (the &ldquo;Terms&rdquo;) govern your use of the
          Krets mobile app and any related services (together, &ldquo;Krets&rdquo;).
          By creating an account or using Krets you agree to these Terms. If
          you don&rsquo;t agree, please don&rsquo;t use Krets.
        </p>
        <p>
          Contact: <strong className="text-text-primary">hello@getkrets.app</strong>
        </p>

        <Section title="Apple&rsquo;s Standard EULA applies">
          <p>
            Krets is licensed, not sold, to you. Your license to use Krets is
            governed by Apple&rsquo;s Licensed Application End User License
            Agreement (the &ldquo;Standard EULA&rdquo;), available at{" "}
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              apple.com/legal/internet-services/itunes/dev/stdeula
            </a>
            . The Krets-specific terms below supplement, and don&rsquo;t
            replace, the Standard EULA. Where the two conflict, the
            Krets-specific term controls for the conflict.
          </p>
        </Section>

        <Section title="Eligibility and accounts">
          <p>
            You must be at least 13 years old (or the minimum age of digital
            consent in your jurisdiction) to use Krets. You&rsquo;re responsible
            for keeping your account credentials secure and for all activity
            that happens under your account.
          </p>
          <p className="mt-3">
            You can delete your account at any time from the Profile tab. We
            may suspend or terminate accounts that violate these Terms, post
            illegal content, or are used to harass other members.
          </p>
        </Section>

        <Section title="Your content">
          <p>
            You keep ownership of the photos, videos, comments, and other
            content you post to Krets (&ldquo;Your Content&rdquo;). By posting
            Your Content to a group, you grant Krets a worldwide, royalty-free
            license to host, display, and deliver it to the other members of
            that group, solely so we can operate the app for you. We don&rsquo;t
            use Your Content to advertise, train AI, or sell to third parties.
          </p>
          <p className="mt-3">
            You&rsquo;re responsible for Your Content. Don&rsquo;t post anything
            you don&rsquo;t have the right to share.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>
              Post content that is illegal, hateful, harassing, sexually
              explicit, or that depicts violence or self-harm.
            </li>
            <li>
              Impersonate another person, or invite people who haven&rsquo;t
              consented to join your group.
            </li>
            <li>
              Use Krets to spam, distribute malware, or attempt to gain
              unauthorized access to other accounts or our systems.
            </li>
            <li>
              Reverse-engineer, scrape, or attempt to extract data from Krets
              outside the in-app export tool.
            </li>
          </ul>
          <p className="mt-3">
            We provide in-app tools to report offensive content and block
            users. Reports are reviewed within 24 hours and offending content
            or accounts may be removed. You can also email{" "}
            <a
              href="mailto:hello@getkrets.app"
              className="text-accent hover:underline"
            >
              hello@getkrets.app
            </a>
            .
          </p>
        </Section>

        <Section title="Krets Keeper subscriptions">
          <p>
            Krets offers an optional auto-renewing subscription called{" "}
            <strong className="text-text-primary">Krets Keeper</strong> that
            unlocks additional features (e.g. creating more than the free-tier
            limit of groups). Plans currently offered:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>
              <strong className="text-text-primary">Keeper Monthly</strong> —
              billed every 1 month.
            </li>
            <li>
              <strong className="text-text-primary">Keeper Yearly</strong> —
              billed every 12 months.
            </li>
            <li>
              <strong className="text-text-primary">
                Founding Keeper (Monthly)
              </strong>{" "}
              — limited-quantity early-supporter monthly plan.
            </li>
          </ul>
          <p className="mt-3">
            Subscription length, price, and price-per-unit are shown in the
            in-app paywall before purchase. Payment is charged to your Apple ID
            account at confirmation. Subscriptions auto-renew unless cancelled
            at least 24 hours before the end of the current period. You can
            manage or cancel a subscription anytime in{" "}
            <strong className="text-text-primary">
              Settings &rsaquo; Apple ID &rsaquo; Subscriptions
            </strong>{" "}
            on your device. Deleting the Krets app does not cancel an active
            subscription.
          </p>
          <p className="mt-3">
            New users may be offered a free trial. Any unused portion of a
            trial is forfeited when the trial converts to a paid subscription.
            Refunds, where applicable, are handled by Apple under the App Store
            refund policy.
          </p>
        </Section>

        <Section title="Privacy">
          <p>
            Our handling of personal information is described in the{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            . By using Krets you also agree to the Privacy Policy.
          </p>
        </Section>

        <Section title="Disclaimers and limits of liability">
          <p>
            Krets is provided &ldquo;as is&rdquo; without warranties of any
            kind. To the maximum extent allowed by law, neither Krets nor its
            operators are liable for indirect, incidental, special, or
            consequential damages arising out of or in connection with your use
            of the app.
          </p>
          <p className="mt-3">
            Apple is not responsible for Krets or any claims relating to it,
            and is not a party to these Terms. Apple is, however, a third-party
            beneficiary of these Terms with the right to enforce them against
            you.
          </p>
        </Section>

        <Section title="Changes to these Terms">
          <p>
            We may update these Terms from time to time. Material changes will
            be announced in-app or by email. Continued use of Krets after a
            change means you accept the updated Terms.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These Terms are governed by the laws of Sweden, excluding its
            conflict-of-law rules. Disputes will be heard in the courts of
            Stockholm, Sweden, except where local consumer-protection law
            requires otherwise.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these Terms:{" "}
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
      <h2 className="text-xl font-semibold text-text-primary mb-3">{title}</h2>
      {children}
    </section>
  );
}
