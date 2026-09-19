const SHOP_LINKS = ["Shop", "Our Story", "Ingredients", "FAQs"];
const SUPPORT_LINKS = ["Shipping", "Contact", "Instagram", "TikTok"];

export default function Footer() {
  return (
    <footer className="bg-forest">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.6fr] lg:gap-8">
          {/* Logo + tagline */}
          <div>
            <a href="#home" className="flex items-center gap-1.5">
              <span className="font-serif text-3xl text-ivory-warm">Chuskii</span>
              <span
                className="font-urdu text-2xl text-saffron"
                dir="rtl"
                lang="ur"
              >
                چسکی
              </span>
            </a>
            <p className="mt-5 max-w-xs font-sans text-base leading-relaxed text-botanical/40">
              Specialty herbal qehwa rooted in Pakistan.
            </p>
            <p className="mt-8 font-sans text-xs font-semibold tracking-[0.2em] text-botanical">
              PAKISTAN
            </p>
          </div>

          {/* Shop links */}
          <nav className="flex flex-col gap-4">
            {SHOP_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-[15px] text-ivory-warm/90 hover:text-saffron transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Support links */}
          <nav className="flex flex-col gap-4">
            {SUPPORT_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-[15px] text-ivory-warm/90 hover:text-saffron transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-2xl text-ivory-warm sm:text-[26px]">
              A little Chuskii in your inbox.
            </h3>
            <form className="mt-6 flex items-center justify-between gap-4 border-b border-ivory-warm/20 pb-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent font-sans text-base text-ivory-warm placeholder:text-ivory-warm/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 whitespace-nowrap font-sans text-xs font-semibold tracking-[0.14em] text-saffron hover:text-saffron transition-colors"
              >
                JOIN THE CHUSKII CIRCLE →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-ivory-warm/10 pt-8 sm:flex-row">
          <p className="font-sans text-xs tracking-[0.14em] text-botanical/40">
            © 2026 CHUSKII
          </p>
          <p
            className="font-urdu text-xl text-botanical"
            dir="rtl"
            lang="ur"
          >
            چسکی لا لو
          </p>
        </div>
      </div>
    </footer>
  );
}