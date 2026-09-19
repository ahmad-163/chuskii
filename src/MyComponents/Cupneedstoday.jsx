const OPTIONS = [
  { title: "I need to slow down" },
  { title: "I need a reset" },
  { title: "I want something warm" },
];

import Reveal from "./Reveal";

export default function CupNeedsToday() {
  return (
    <section className="relative overflow-hidden bg-forest">
      {/* Top accent line */}
      <div className="h-1 w-full bg-terracotta" />

      {/* Decorative flowers */}
      <svg
        viewBox="0 0 300 300"
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 opacity-[0.12] sm:h-80 sm:w-80"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="150"
            cy="70"
            rx="16"
            ry="65"
            transform={`rotate(${i * 30} 150 150)`}
            fill="var(--color-botanical)"
          />
        ))}
        <circle cx="150" cy="150" r="10" fill="var(--color-botanical)" />
      </svg>
      <svg
        viewBox="0 0 300 300"
        className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 opacity-[0.12] sm:h-80 sm:w-80"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="150"
            cy="70"
            rx="16"
            ry="65"
            transform={`rotate(${i * 30} 150 150)`}
            fill="var(--color-botanical)"
          />
        ))}
        <circle cx="150" cy="150" r="10" fill="var(--color-botanical)" />
      </svg>

      <div className="relative mx-auto max-w-[900px] px-5 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-serif text-4xl leading-tight text-ivory-warm sm:text-5xl">
            What does your cup need today?
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {OPTIONS.map((option) => (
            <Reveal key={option.title}>
              <button
                className="flex h-auto w-full flex-col justify-between rounded-[20px] border border-botanical/30 p-8 text-left transition-colors hover:border-saffron/60 sm:h-[216px] sm:w-[288px]"
              >
                <h3 className="font-serif text-2xl leading-snug text-ivory-warm sm:text-[26px]">
                  {option.title}
                </h3>
                <span className="mt-8 font-sans text-xs font-semibold tracking-[0.15em] text-botanical sm:mt-0">
                  CHOOSE →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}