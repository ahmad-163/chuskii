import FlowerPattern from "./Flowerpattern";
import FlowerMotif from "./Flowermotif";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ivory"
    >
      <FlowerPattern />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-20">
        {/* Left column — copy */}
        <Reveal className="relative z-10">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-terracotta sm:text-sm">
            SPECIALTY HERBAL QEHWA
          </p>

          <h1 className="mt-4 font-serif text-[56px] leading-[1.02] text-forest sm:text-7xl lg:text-[80px]">
            Pause.
            <br />
            Pour.
            <br />
            <span className="italic text-terracotta">Chuskii.</span>
          </h1>

          <p
            className="mt-6 font-urdu text-4xl leading-none text-saffron sm:text-5xl"
            dir="rtl"
            lang="ur"
          >
            چسکی لا لو
          </p>

          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-charcoal sm:text-lg">
            Herbal qehwa inspired by Pakistan, made for your everyday cup.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#blends"
              className="inline-flex items-center rounded-full bg-forest px-7 py-4 font-sans text-xs font-semibold tracking-[0.14em] text-ivory-warm hover:bg-forest-deep transition-colors"
            >
              EXPLORE THE BLENDS
            </a>
            <a
              href="#story"
              className="font-sans text-xs font-semibold tracking-[0.14em] text-forest underline decoration-terracotta decoration-2 underline-offset-8 hover:text-terracotta"
            >
              OUR STORY
            </a>
          </div>
        </Reveal>

        {/* Right column — image */}
        <div className="relative z-10 mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-[140px] rounded-tr-3xl rounded-bl-3xl rounded-br-[140px] sm:aspect-[9/10]">
            <img
              src="/pic4.jpg"
              alt="Glass mug of Chuskii herbal qehwa topped with fresh edible flowers, set on linen with dried herbs"
              className="h-full w-full object-cover"
            />
          </div>

          <FlowerMotif
            variant="small"
            size={64}
            className="sway absolute -top-4 right-2 sm:-top-6 sm:right-4"
          />
          <FlowerMotif
            variant="large"
            size={96}
            className="sway absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6"
          />
        </div>
      </div>
    </section>
  );
}