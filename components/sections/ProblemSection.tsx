const quotes = [
  {
    text: "I post family photos on Instagram, but I don\u2019t want everyone seeing them.",
    attribution: "Sarah, mom of 3",
  },
  {
    text: "Our family WhatsApp is chaos. Photos disappear in a flood of messages.",
    attribution: "Marcus, college friend group",
  },
  {
    text: "We used a family app once. It shut down and we lost everything.",
    attribution: "Lin, family of 12",
  },
];

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="bg-deep px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="problem-heading"
          className="mb-10 text-center text-[19px] font-semibold text-text-primary"
        >
          Sound familiar?
        </h2>

        <div className="mx-auto flex max-w-xl flex-col gap-4">
          {quotes.map((quote) => (
            <blockquote
              key={quote.text}
              className="rounded-r-[var(--radius-button)] border-l-3 border-l-accent bg-surface px-5 py-4"
            >
              <p className="text-[15px] italic leading-relaxed text-text-body">
                &ldquo;{quote.text}&rdquo;
              </p>
              <footer className="mt-2 text-[13px] text-text-muted">
                &mdash; {quote.attribution}
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[460px] text-center text-[15px] leading-relaxed text-text-secondary">
          Krets is built for people who&apos;ve felt this. Private by design. No
          ads, ever. And your data is always yours to keep and export.
        </p>
      </div>
    </section>
  );
}
