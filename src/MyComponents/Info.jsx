import React from "react";
import Reveal from "./Reveal";

function Info() {
  return (
    <section className="bg-ivory-warm">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        {/* Left column — copy */}
        <Reveal className="flex flex-col">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-terracotta sm:text-sm">
            ROOTED HERE. MADE FOR TODAY.
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-[52px]">
            Pakistan has always known the comfort of a good cup.
          </h2>

          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-charcoal sm:text-lg">
            From Peshawari qehwa at family gatherings to a warm cup after a
            long day, qehwa has always had a place in our homes. Chuskii
            takes that familiar feeling and puts it in an easy to brew tea
            bag real botanicals, simple blends, and a good cup whenever you
            need one.
          </p>

          <p
            className="mt-8 font-urdu text-4xl font-bold leading-none text-terracotta sm:text-5xl"
            dir="rtl"
            lang="ur"
          >
            مہمان نوازی
          </p>
        </Reveal>

        {/* Right column — image */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-tr-[140px] rounded-br-[140px] sm:aspect-[16/11]">
            <img
              src="/pic5.jpg"
              alt="Woman by a window holding a floral mug of qehwa, warm morning light"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Leaf sprig accent */}
          <svg
            width="70"
            height="140"
            viewBox="0 0 70 140"
            className="sway pointer-events-none absolute -bottom-10 -right-4 text-botanical/60 sm:-right-8"
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
        </div>
      </div>
    </section>
  );
}

export default Info;