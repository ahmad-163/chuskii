import Reveal from "./Reveal";

const GALLERY_IMAGES = [
  { src: "/pic4.jpg", alt: "Glass mug of tea topped with purple edible flowers", tall: true },
  { src: "/pic5.jpg", alt: "Woman looking out a window holding a mug", tall: false },
  { src: "/pic6.jpg", alt: "Flat lay of chamomile daisies and a tea cup on wood", tall: false },
  { src: "/pic7.jpg", alt: "Overhead shot of tea pouring into a glass on a dark surface", tall: false },
  { src: "/pic8.jpg", alt: "Qehwa being poured from a copper pot into copper cups", tall: false },
  { src: "/pic9.jpg", alt: "Tea being poured into a glass in warm evening light", tall: true },
];

export default function InstagramGallery() {
  return (
    <section className="bg-ivory-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] text-terracotta">
            @CHUSKIITEA
          </p>

          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-serif text-4xl leading-tight text-forest sm:text-5xl lg:text-[52px]">
              How Pakistan takes its Chuskii.
            </h2>
            <a
              href="https://instagram.com/chuskiitea"
              className="inline-flex w-fit items-center rounded-full border border-forest px-6 py-3.5 font-sans text-xs font-semibold tracking-[0.14em] text-forest transition-colors hover:bg-forest hover:text-ivory-warm"
            >
              FOLLOW THE CHUSKII
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 items-start gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY_IMAGES.map((image, i) => (
            <Reveal
              key={i}
              className={`overflow-hidden rounded-2xl ${
                image.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}