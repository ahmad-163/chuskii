import FlowerMotif from "./Flowermotif";
import Reveal from "./Reveal";

const BLENDS = [
  {
    number: "01",
    urdu: "سکون",
    name: "Calm Chamomile",
    quote: '"For slowing down a little."',
    ingredients: "CHAMOMILE • LEMONGRASS • LAVENDER",
    description:"GOOD FOR QUIET EVENINGS, WINDING DOWN, OR WHENEVER YOU WANT SOMETHING GENTLE.",
    image: "/pic6.jpg",
    accent: "var(--color-botanical)",
    reverse: false,
  },
  {
    number: "02",
    urdu: "تازگی",
    name: "Refresh Hibiscus",
    quote: '"Bright, fresh, and a little tangy."',
    ingredients: "HIBISCUS • LEMONGRASS • TULSI",
    description:
      "A REFRESHING CUP FOR YOUR MORNING, AFTER A WORKOUT, OR WHEN YOU NEED A LITTLE PICK ME UP.",
    image: "/pic7.jpg",
    accent: "var(--color-terracotta)",
    reverse: true,
  },
  {
    number: "03",
    urdu: "خوشبو",
    name: "Pakhair Peshawar",
    quote: '"A little taste of Peshawar."',
    ingredients: "PESHAWARI QEHWA • LEMONGRASS • JASMINE",
    description:
      "FRAGRANT, WARM, AND FAMILIAR. A CUP FOR SLOW MORNINGS, AFTER MEALS, OR COLD EVENINGS.",
    image: "/pic8.jpg",
    accent: "var(--color-terracotta)",
    reverse: false,
  },
];

function BlendRow({ blend }) {
  return (
    <div
      className={`flex flex-col gap-8 lg:gap-16 ${
        blend.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center`}
    >
      {/* Image with faded numeral and flower accent */}
      <div className="relative w-full lg:w-1/2">
        <span
          className="pointer-events-none absolute -top-14 left-0 select-none font-serif text-8xl text-forest/10 sm:text-9xl"
          aria-hidden="true"
        >
          {blend.number}
        </span>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <img
            src={blend.image}
            alt={blend.name}
            className="h-full w-full object-cover"
          />
          <FlowerMotif
            variant="small"
            size={44}
            className="sway absolute bottom-3 right-3"
          />
        </div>
      </div>

      {/* Copy */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-3">
          <span
            className="h-px w-6"
            style={{ backgroundColor: blend.accent }}
          />
          <span
            className="font-urdu text-2xl italic"
            style={{ color: blend.accent }}
            dir="rtl"
            lang="ur"
          >
            {blend.urdu}
          </span>
        </div>

        <h3 className="mt-3 font-serif text-4xl text-forest sm:text-[42px]">
          {blend.name}
        </h3>

        <p className="mt-2 font-serif italic text-base text-charcoal">
          {blend.quote}
        </p>

        <p className="mt-4 font-sans text-xs tracking-[0.1em] text-charcoal/60">
          {blend.ingredients}
        </p>

        <p
          className="mt-2 max-w-md font-sans text-xs font-semibold leading-relaxed tracking-[0.03em]"
          style={{ color: blend.accent }}
        >
          {blend.description}
        </p>

        <button
          className="mt-6 rounded-full border px-6 py-2.5 font-sans text-[11px] font-semibold tracking-[0.14em] transition-colors hover:text-white"
          style={{
            borderColor: blend.accent,
            color: blend.accent,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = blend.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          SHOP {blend.name.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default function Blends() {
  return (
    <section className="bg-ivory-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <Reveal className="text-center">
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] text-terracotta">
            MEET YOUR CHUSKII
          </p>
          <h2 className="mt-3 font-serif text-4xl text-forest sm:text-5xl">
            Three blends. Pick your moment.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-forest/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            <span className="h-px w-16 bg-forest/20" />
          </div>
        </Reveal>

        {/* Rows */}
        <div className="mt-20 flex flex-col gap-24 sm:gap-28 lg:gap-32">
          {BLENDS.map((blend) => (
            <Reveal key={blend.number}>
              <BlendRow blend={blend} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}