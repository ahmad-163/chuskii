import Reveal from "./Reveal";

const FOUNDERS = [
  {
    name: "Shafaq Zahra",
    role: "FOUNDER & PRODUCT VISION",
    image: "/founder1.jpg",
    rounding: "rounded-tr-[140px]",
    offset: "",
  },
  {
    name: "Zunairah Hashmi",
    role: "CO-FOUNDER & CREATIVE VISION",
    image: "/founder2.jpg",
    rounding: "rounded-tl-[140px] rounded-br-[140px]",
    offset: "lg:mt-12",
  },
];

export default function Founders() {
  return (
    <section className="bg-ivory-warm py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] text-terracotta">
            THE FOUNDERS
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-[54px]">
            Born over countless
            <br />
            cups of tea.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-charcoal sm:text-lg">
            Chuskii started with two friends, plenty of conversations, and a
            simple idea: make qehwa easy to enjoy without losing what makes it
            feel like home.
          </p>
        </Reveal>

        {/* Founder cards */}
        <div className="mt-14 grid grid-cols-1 justify-items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {FOUNDERS.map((founder) => (
            <Reveal key={founder.name} className={founder.offset}>
              <div
                className={`aspect-[4/5] w-full max-w-md overflow-hidden ${founder.rounding}`}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-6 font-serif text-2xl text-forest sm:text-[28px]">
                {founder.name}
              </h3>

              <p className="mt-1 font-sans text-xs font-semibold tracking-[0.14em] text-terracotta">
                {founder.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}