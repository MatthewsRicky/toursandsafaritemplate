const reasons = [
  {
    title: "Expert local guides",
    text: "Our team knows every route, view point, and wildlife movement pattern across Kenya's top parks and private conservancies.",
  },
  {
    title: "Custom itineraries",
    text: "From honeymoon escapes to family adventures, we build journeys around your budget, pace, and travel style.",
  },
  {
    title: "Responsible travel",
    text: "We work with community-led lodges, conservation partners, and local operators to create meaningful impact.",
  },
  {
    title: "Seamless logistics",
    text: "Airport transfers, domestic flights, lodge bookings, and safari vehicles are planned with precision and care.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Why travel with us
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Every detail is handled so you can focus on the thrill.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-lg font-bold text-slate-900">
                ✓
              </div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
