import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getkrets.app"),
  title: "Krets — Your inner circles",
  description:
    "A private app for sharing photos and moments with your family and closest friends. No ads, no algorithm. Join the waitlist.",
  openGraph: {
    type: "website",
    url: "https://getkrets.app",
    siteName: "Krets",
    title: "Krets — Your inner circles",
    description:
      "A private app for sharing photos and moments with your family and closest friends. No ads, no algorithm. Join the waitlist.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krets — Your inner circles",
    description:
      "A private app for sharing photos and moments with your family and closest friends. No ads, no algorithm. Join the waitlist.",
  },
  alternates: { canonical: "https://getkrets.app" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg">
      <head>
        <meta name="theme-color" content="#1C1917" />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Krets",
              url: "https://getkrets.app",
              description:
                "Private photo and video sharing for family and close friends.",
            }),
          }}
        />
      </head>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
