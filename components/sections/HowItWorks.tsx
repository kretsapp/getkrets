const steps = [
  {
    number: "1",
    title: "Create a circle",
    description:
      "Start a private group for your family, friends, or any crew.",
  },
  {
    number: "2",
    title: "Invite your people",
    description: "Send them a link and they're in. Always free to join.",
  },
  {
    number: "3",
    title: "Share moments",
    description:
      "Post photos, videos, and updates. Everyone sees them in a beautiful timeline.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="light bg-bg px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="how-heading"
          className="mb-12 text-center text-[19px] font-semibold text-text-primary"
        >
          How it works
        </h2>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-bold text-white">
                {step.number}
              </div>
              <h3 className="mb-2 text-[15px] font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
