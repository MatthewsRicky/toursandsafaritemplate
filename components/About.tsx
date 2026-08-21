const values = [
  "Local expertise and trusted guides",
  "Responsible tourism with community impact",
  "Personalized itineraries for every traveler",
  "Seamless logistics from airport to camp",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Our story
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Built for travelers who want authentic Kenya, not just a checklist.
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            We began with a simple idea: every safari should feel personal,
            immersive, and deeply connected to the land and people that make
            Kenya extraordinary.
          </p>
          <p className="mt-4 text-slate-600">
            From the Great Migration to quiet sunrise game drives and coastal
            escapes, we craft journeys that balance luxury, wildlife, and
            cultural discovery without the stress.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [
              "Mission",
              "To design remarkable experiences that help travelers connect with Kenya's wildlife, culture, and landscapes responsibly.",
            ],
            [
              "Vision",
              "To become the most trusted safari and leisure travel partner for immersive journeys across East Africa.",
            ],
            [
              "Values",
              "Honesty, authenticity, care for communities, and unforgettable guest experiences.",
            ],
            [
              "History",
              "Over a decade of guiding families, honeymooners, and adventure-seekers across Kenya.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-3xl bg-emerald-950 px-6 py-8 text-white lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Why travelers choose us
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              Thoughtful planning, trusted guidance, and unforgettable moments.
            </h3>
          </div>
          <ul className="grid gap-3 text-sm sm:grid-cols-2">
            {values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-2 text-slate-200"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-300" />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
