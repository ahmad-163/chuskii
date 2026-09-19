import Reveal from "./Reveal";

const INGREDIENTS = [
  { name: "Chamomile", image: "/chamomile.jpg" },
  { name: "Hibiscus", image: "/hibiscus.jpg" },
  { name: "Lavender", image: "/lavender.jpg" },
  { name: "Mint", image: "/mint.jpg" },
  { name: "Lemongrass", image: "/lemongrass.jpg" },
  { name: "Jasmine", image: "/jasmine.jpg" },
];

export default function Ingredients() {
  return (
    <section className="bg-forest py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] text-ivory-warm/60">
            THE BOTANICAL GARDEN
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.1] text-ivory-warm sm:text-6xl">
            Real herbs.
            <br />
            <span className="italic text-saffron">Nothing to hide.</span>
          </h2>
        </Reveal>

        {/* Image grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INGREDIENTS.map((item) => (
            <Reveal
              key={item.name}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
              <span className="absolute bottom-5 left-5 font-serif text-2xl text-white">
                {item.name}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Link */}
        <Reveal>
          <a
            href="#ingredients"
            className="mt-10 inline-block font-sans text-xs font-semibold tracking-[0.14em] text-saffron underline decoration-saffron decoration-2 underline-offset-8 hover:text-saffron"
          >
            EXPLORE OUR INGREDIENTS →
          </a>
        </Reveal>
      </div>
    </section>
  );
}