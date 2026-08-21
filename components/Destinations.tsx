const destinations = [
  {
    name: "Maasai Mara",
    highlight: "Big Five & Great Migration",
    description:
      "Iconic grasslands, dramatic river crossings, and luxury tented camps under vast skies.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Amboseli",
    highlight: "Elephants & Kilimanjaro Views",
    description:
      "A stunning mix of open plains, iconic acacia trees, and unforgettable elephant encounters.",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tsavo",
    highlight: "Remote wilderness",
    description:
      "Wild, dramatic landscapes with red earth, rolling hills, and unforgettable game drives.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Samburu",
    highlight: "Northern Kenya",
    description:
      "A rugged, beautiful region known for unique wildlife, dramatic escarpments, and cultural heritage.",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lake Naivasha",
    highlight: "Birdlife & lakeside retreats",
    description:
      "Peaceful boat rides, hippo sightings, and relaxing escapes framed by volcanic landscapes.",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Diani Coast",
    highlight: "Beach & marine luxury",
    description:
      "White-sand beaches, turquoise water, and a perfect finish to your safari adventure.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Destinations
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Chase the wild in Kenya's most iconic destinations.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((destination) => (
          <article
            key={destination.name}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url('${destination.image}')` }}
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {destination.highlight}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {destination.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {destination.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
