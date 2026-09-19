import Reveal from "./Reveal";

function CornerFlower({ className }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="45"
          rx="14"
          ry="42"
          transform={`rotate(${i * 45} 100 100)`}
          fill={["var(--color-terracotta)", "var(--color-botanical)", "var(--color-saffron)"][i % 3]}
        />
      ))}
      <circle cx="100" cy="100" r="9" fill="var(--color-forest)" />
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-24 sm:py-28 lg:py-32">
      {/* Hanging vine, top center */}
      <svg
        width="60"
        height="190"
        viewBox="0 0 60 190"
        className="absolute left-1/2 top-0 -translate-x-1/2 text-forest/70"
        aria-hidden="true"
      >
        <line x1="30" y1="0" x2="30" y2="185" stroke="currentColor" strokeWidth="1.5" />
        {[
          { y: 30, side: -1 },
          { y: 55, side: 1 },
          { y: 80, side: -1 },
          { y: 105, side: 1 },
          { y: 130, side: -1 },
        ].map((leaf, i) => (
          <ellipse
            key={i}
            cx={30 + leaf.side * 11}
            cy={leaf.y}
            rx="9"
            ry="15"
            transform={`rotate(${leaf.side * 35} ${30 + leaf.side * 11} ${leaf.y})`}
            fill="currentColor"
          />
        ))}
      </svg>

      {/* Corner flowers */}
      <CornerFlower className="sway pointer-events-none absolute -left-8 top-10 h-36 w-36 opacity-90 sm:h-40 sm:w-40" />
      <CornerFlower className="sway pointer-events-none absolute -right-8 bottom-8 h-36 w-36 opacity-90 sm:h-40 sm:w-40" />

      <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p
          className="font-urdu text-6xl leading-none text-saffron sm:text-8xl"
          dir="rtl"
          lang="ur"
        >
          چسکی لا لو
        </p>

        <h2 className="mt-6 font-serif text-4xl italic leading-tight text-ivory-warm sm:text-5xl lg:text-[52px]">
          Take a peaceful sip.
        </h2>

        <a
          href="#shop-qehwa"
          className="mt-10 inline-flex items-center rounded-full bg-saffron px-8 py-4 font-sans text-xs font-semibold tracking-[0.2em] text-forest transition-opacity hover:opacity-90"
        >
          SHOP CHUSKII
        </a>
      </Reveal>
    </section>
  );
}