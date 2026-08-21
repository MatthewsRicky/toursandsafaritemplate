const packages = [
  {
    name: "3-Day Maasai Mara Safari",
    price: "$1,260 pp",
    description:
      "A short but immersive safari with sunrise game drives, luxury tented camp stay, and expert guiding.",
    includes: [
      "Park fees",
      "Lodge accommodation",
      "Airport transfers",
      "Meals and game drives",
    ],
  },
  {
    name: "5-Day Amboseli Adventure",
    price: "$2,150 pp",
    description:
      "A scenic wildlife journey featuring elephants, mountain views, and a relaxed stay in a premium lodge.",
    includes: [
      "Transport",
      "Accommodation",
      "Private guide",
      "Conservancy fees",
    ],
  },
  {
    name: "7-Day Great Kenya Escape",
    price: "$3,420 pp",
    description:
      "Combine iconic parks, cultural experiences, and a touch of coastline in one seamless East Africa itinerary.",
    includes: ["Domestic flights", "All transfers", "Hotels", "Safari vehicle"],
  },
  {
    name: "9-Day Kenya + Diani Coastal",
    price: "$4,880 pp",
    description:
      "A balanced safari-and-beach holiday with wildlife days, culture, and a restorative seaside finish.",
    includes: [
      "Beach resort stay",
      "Park entry",
      "Transfers",
      "Breakfast & dinner",
    ],
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="bg-amber-50 py-20 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Packages
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Choose the safari that matches your pace and passion.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {pkg.name}
                </h3>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                  {pkg.price}
                </span>
              </div>
              <p className="mt-4 text-slate-600">{pkg.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-sm font-medium text-slate-500">
                  Includes airport transfers
                </span>
                <a
                  href="#contact"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Request booking
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
