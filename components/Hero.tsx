export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.65)), url('https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-200 backdrop-blur-sm">
          Experience Kenya Beyond the Ordinary
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
          Wildlife wonders, golden beaches, and unforgettable journeys.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          Tailor-made safaris, luxury lodges, and cultural adventures designed
          around your pace, budget, and dream itinerary.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Plan My Safari
          </a>
          <a
            href="#packages"
            className="rounded-full border border-white/40 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Packages
          </a>
        </div>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {[
            { value: "12+", label: "Years crafting iconic journeys" },
            { value: "25+", label: "Private and group safari departures" },
            { value: "4.9/5", label: "Guest satisfaction from travelers" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-amber-300">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
