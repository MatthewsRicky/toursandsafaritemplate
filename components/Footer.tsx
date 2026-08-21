import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-white">Trademark Tours</h3>
          <p className="mt-4 text-sm text-slate-400">
            Crafting memorable, responsible travel experiences across Kenya's
            wild landscapes and coast.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Our Story", "#about"],
              ["Destinations", "#destinations"],
              ["Packages", "#packages"],
              ["Gallery", "#gallery"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Nairobi, Kenya</li>
            <li>+254 700 000 000</li>
            <li>hello@trademarktours.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Follow
          </h4>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition hover:text-white">
              Facebook
            </a>
            <a href="#" className="transition hover:text-white">
              Tripadvisor
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
        Trademark Tours and Safaris © {new Date().getFullYear()} - All rights
        reserved
      </div>
    </footer>
  );
}
