import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Shop", href: "#shop" },
  { label: "Our Blends", href: "#blends" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Our Story", href: "#story" },
  { label: "The Ritual", href: "#ritual" },
  { label: "Find Your Chuskii", href: "#find" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-ivory border-b border-forest/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1.5 shrink-0">
          <span className="font-serif text-2xl text-forest sm:text-[26px]">
            Chuskii<span className="text-saffron"> چسکی</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[15px] text-forest hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right icons + CTA */}
        <div className="flex items-center gap-4 sm:gap-5">
          <button
            aria-label="Search"
            className="text-forest hover:text-terracotta transition-colors"
          >
            <Search size={20} strokeWidth={1.75} />
          </button>
          <button
            aria-label="Account"
            className="text-forest hover:text-terracotta transition-colors"
          >
            <User size={20} strokeWidth={1.75} />
          </button>
          <button
            aria-label="Cart"
            className="relative text-forest hover:text-terracotta transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
            <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-terracotta" />
          </button>

          <a
            href="#shop-qehwa"
            className="hidden lg:inline-flex items-center rounded-full bg-terracotta px-6 py-3 font-sans text-xs font-semibold tracking-[0.12em] text-ivory-warm hover:bg-terracotta transition-colors"
          >
            SHOP QEHWA
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-forest lg:hidden"
          >
            {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col gap-1 border-t border-forest/10 bg-ivory-warm px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 font-sans text-[15px] text-forest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#shop-qehwa"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex w-fit items-center rounded-full bg-terracotta px-6 py-3 font-sans text-xs font-semibold tracking-[0.12em] text-ivory-warm"
          >
            SHOP QEHWA
          </a>
        </nav>
      )}
    </header>
  );
}