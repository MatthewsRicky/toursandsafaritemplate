import Link from "next/link";

const navItems = [
  { label: "Our Story", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-emerald-950/90 backdrop-blur-md text-white shadow-lg">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="text-xl font-bold tracking-wide">
          Trademark Tours
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Book a Safari
        </Link>
      </nav>
    </header>
  );
}
