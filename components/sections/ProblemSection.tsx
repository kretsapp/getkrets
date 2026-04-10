const quotes = [
  {
    text: "I post family photos on Instagram, but I don\u2019t want everyone seeing them.",
    attribution: "Maria, mom",
  },
  {
    text: "Our group WhatsApp is chaos. Photos disappear in a flood of messages.",
    attribution: "Theo, college friend group",
  },
  {
    text: "We used to have a family app, but it shut down and we lost all photos.",
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
              className="relative rounded-2xl bg-surface px-6 pb-5 pt-8"
            >
              <span
                className="absolute left-5 top-2 text-3xl font-serif leading-none text-accent select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-[15px] leading-relaxed text-text-body">
                {quote.text}
              </p>
              <footer className="mt-3 text-[13px] font-medium text-text-secondary">
                {quote.attribution}
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
