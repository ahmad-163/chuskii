import FlowerMotif from "./Flowermotif";
import Reveal from "./Reveal";

const FEATURES = [
  "3 Signature Blends",
  "Premium Wood Pulp Tea Bags",
  "Delivered Across Pakistan",
];

export default function TrialBox() {
  return (
    <section id="trial" className="relative bg-ivory py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12">
        {/* Image */}
        <Reveal className="relative order-2 lg:order-1">
          <FlowerMotif
            variant="small"
            size={56}
            className="absolute -left-4 -top-6 z-10"
          />
          <div className="overflow-hidden rounded-[2.5rem] rounded-bl-[8rem] bg-saffron/20">
            <img
              src="/pic9.jpg"
              alt="The Chuskii trial box with all three signature blends"
              className="h-[420px] w-full object-cover sm:h-[560px]"
            />
          </div>

          {/* Leaf sprig accent */}
          <svg
            width="70"
            height="140"
            viewBox="0 0 70 140"
            className="sway pointer-events-none absolute -right-6 top-10 text-botanical/60"
            aria-hidden="true"
          >
            <line x1="35" y1="10" x2="35" y2="135" stroke="currentColor" strokeWidth="2" />
            {[
              { y: 30, side: 1 },
              { y: 48, side: -1 },
              { y: 66, side: 1 },
              { y: 84, side: -1 },
              { y: 102, side: 1 },
              { y: 118, side: -1 },
            ].map((leaf, i) => (
              <ellipse
                key={i}
                cx={35 + leaf.side * 13}
                cy={leaf.y}
                rx="10"
                ry="6"
                transform={`rotate(${leaf.side * 35} ${35 + leaf.side * 13} ${leaf.y})`}
                fill="currentColor"
              />
            ))}
          </svg>
        </Reveal>

        {/* Copy */}
        <Reveal className="order-1 lg:order-2">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-terracotta sm:text-sm">
            THE CHUSKII BOX
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-none text-forest sm:text-6xl lg:text-7xl">
            Meet all three.
          </h2>

          <p className="mt-5 font-serif text-2xl italic text-charcoal/70">
            Three blends. One box. Start with your favourite.
          </p>

          <ul className="mt-9 space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 font-sans text-base text-charcoal sm:text-lg">
                <FlowerMotif variant="small" size={20} className="shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <p className="mt-9 font-serif text-4xl text-terracotta">Rs. 2,450</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#trial"
              className="inline-flex items-center rounded-full bg-terracotta px-8 py-4 font-sans text-xs font-semibold tracking-[0.14em] text-ivory-warm transition-transform duration-300 hover:-translate-y-0.5"
            >
              GET THE CHUSKII BOX
            </a>
            <a
              href="#blends"
              className="font-sans text-xs font-semibold tracking-[0.14em] text-forest underline decoration-saffron decoration-2 underline-offset-8 hover:text-terracotta"
            >
              SEE WHAT'S INSIDE
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
