import Reveal from "./Reveal";

export default function PaintedWithPakistan() {
  return (
    <section className="bg-terracotta py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] text-white">
            PAINTED WITH PAKISTAN
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.1] text-ivory-warm sm:text-6xl lg:text-[64px]">
            Painted with
            <br />
            <span className="italic text-forest">Pakistan.</span>
          </h2>
        </Reveal>

        {/* Staggered content */}
        <div className="mt-14 flex flex-col gap-8 lg:grid lg:grid-cols-4 lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-6 lg:gap-y-8">
          {/* Image 1 — tall truck door detail */}
          <Reveal className="order-1 lg:order-none lg:col-start-1 lg:row-start-1">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="/pic1.jpg"
                alt="Close-up of hand-painted Pakistani truck art door with decorative bolts"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Text block */}
          <Reveal className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:self-center">
            <p className="font-serif text-2xl leading-snug text-ivory-warm sm:text-[28px]">
              From truck art and bright colours to the qehwa served at home,
              Pakistan finds its way into everything we make.
            </p>
            <p
              className="mt-6 font-urdu text-2xl text-saffron sm:text-3xl"
              dir="rtl"
              lang="ur"
            >
              رنگ اور خوشبو
            </p>
          </Reveal>

          {/* Image 2 — panel detail, shifted up */}
          <Reveal className="order-3 lg:order-none lg:col-start-3 lg:row-start-1 lg:-mt-10">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="/pic3.jpg"
                alt="Colourful hand-painted truck art panel with floral motifs"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Image 3 — tree mural with yellow roof strip */}
          <Reveal className="order-4 lg:order-none lg:col-start-4 lg:row-start-1">
            <div className="overflow-hidden rounded-2xl">
              <div className="h-4 bg-saffron" />
              <div className="aspect-[3/4]">
                <img
                  src="/pic2.jpg"
                  alt="Hand-painted truck art mural of a tree with fruit"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Button, under image 1 */}
          <Reveal className="order-5 lg:order-none lg:col-start-1 lg:row-start-2">
            <button className="rounded-full bg-forest px-7 py-4 font-sans text-xs font-semibold tracking-[0.14em] text-ivory-warm hover:bg-forest-deep transition-colors">
              DISCOVER OUR STORY
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}