import Reveal from "./Reveal";

const FEATURES = [
  {
    number: "01",
    title: "100% Wood Pulp Tea Bags",
    description:
      "Easy to brew and made for a clean cup, without plastic based heat sealing.",
  },
  {
    number: "02",
    title: "Real Botanicals",
    description:
      "Chamomile, hibiscus, lemongrass, tulsi, jasmine and more you know what you're drinking.",
  },
  {
    number: "03",
    title: "Blended For A Smoother Cup",
    description: "Each blend is put together for its own taste, aroma and character.",
  },
  {
    number: "04",
    title: "Rooted In Pakistan",
    description:
      "Inspired by the qehwa traditions, flavours and hospitality we grew up around.",
  },
];

export default function WhatGoesIn() {
  return (
    <section className="bg-ivory-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] text-terracotta">
            WHAT GOES INTO A CHUSKII?
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.15] text-forest sm:text-6xl lg:text-[64px]">
            Small things, done
            <br />
            with care.
          </h2>
        </Reveal>

        {/* List */}
        <div className="mt-16 border-t border-forest/15">
          {FEATURES.map((feature) => (
            <Reveal
              key={feature.number}
              className="border-b border-forest/15 py-8 sm:grid sm:grid-cols-[60px_340px_1fr] sm:gap-x-10"
            >
              <div className="flex items-baseline gap-4 sm:contents">
                <span className="font-serif text-xl text-saffron sm:pt-1">
                  {feature.number}
                </span>
                <h3 className="font-serif text-2xl leading-snug text-forest sm:text-[28px]">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-3 max-w-xl font-sans text-base leading-relaxed text-charcoal/70 sm:mt-0 sm:pt-1">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}