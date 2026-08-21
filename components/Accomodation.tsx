const stays = [
  {
    title: "Luxury tented camps",
    text: "Wake up to sunrise game drives, open-air dining, and immersive bush experiences in beautifully designed camps.",
  },
  {
    title: "Eco-lodges",
    text: "Stay close to nature while enjoying thoughtful design, conservation-led practices, and warm hospitality.",
  },
  {
    title: "Beach resorts",
    text: "Relax at the coast with ocean views, spa treatments, and easy access to snorkeling and marine adventures.",
  },
  {
    title: "Family-friendly villas",
    text: "Spacious, comfortable stays tailored to multi-generational travelers seeking comfort and privacy.",
  },
];

export default function Accomodation() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Accommodation
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Stay in places that turn the journey into a memory.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stays.map((stay) => (
          <div
            key={stay.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-800">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              {stay.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{stay.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
