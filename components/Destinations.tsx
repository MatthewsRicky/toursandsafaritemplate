"use client";

import { useState } from "react";

const destinations = [
  {
    name: "Maasai Mara",
    highlight: "Big Five & Great Migration",
    description:
      "Iconic grasslands, dramatic river crossings, and luxury tented camps under vast skies.",
    image: "/migration.jpg",
    bestTime: "July to October",
    details:
      "Perfect for the Great Migration, sunrise game drives, and classic East African safari moments in luxury camp settings.",
  },
  {
    name: "Amboseli",
    highlight: "Elephants & Kilimanjaro Views",
    description:
      "A stunning mix of open plains, iconic acacia trees, and unforgettable elephant encounters.",
    image: "/elephants.jpg",
    bestTime: "June to October",
    details:
      "Known for large elephant herds and dramatic views of Mount Kilimanjaro, making for iconic photography and remarkable wildlife sightings.",
  },
  {
    name: "Tsavo",
    highlight: "Remote wilderness",
    description:
      "Wild, dramatic landscapes with red earth, rolling hills, and unforgettable game drives.",
    image: "/tsavoelephants.jpg",
    bestTime: "June to September",
    details:
      "A wild and rugged setting with open plains, red earth terrain, and exceptional game viewing away from the crowds.",
  },
  {
    name: "Samburu",
    highlight: "Northern Kenya",
    description:
      "A rugged, beautiful region known for unique wildlife, dramatic escarpments, and cultural heritage.",
    image: "/giraffe.jpg",
    bestTime: "June to October",
    details:
      "Home to the Samburu Special Five, dramatic canyon landscapes, and a fascinating cultural mix of community and conservancy experiences.",
  },
  {
    name: "Lake Naivasha",
    highlight: "Birdlife & lakeside retreats",
    description:
      "Peaceful boat rides, hippo sightings, and relaxing escapes framed by volcanic landscapes.",
    image: "/sunset.jpg",
    bestTime: "Year-round",
    details:
      "Ideal for a slower pace, boat trips, birdlife, and restful stays close to Nairobi while still feeling deeply connected to nature.",
  },
  {
    name: "Diani Coast",
    highlight: "Beach & marine luxury",
    description:
      "White-sand beaches, turquoise water, and a perfect finish to your safari adventure.",
    image: "/beach-diani-picture.jpg",
    bestTime: "June to March",
    details:
      "A perfect beach extension with coral gardens, oceanfront resorts, and easy access to nature-filled coastal experiences.",
  },
];

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState<
    (typeof destinations)[number] | null
  >(null);

  return (
    <>
      <section
        id="destinations"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Destinations
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Chase the wild in Kenya&apos;s most iconic destinations.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <button
              key={destination.name}
              type="button"
              onClick={() => setSelectedDestination(destination)}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-56 bg-cover bg-center transition duration-300 group-hover:scale-105"
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
                <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">
                  View details →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedDestination && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-3 sm:p-4"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <div
                className="h-56 bg-cover bg-center sm:h-64"
                style={{
                  backgroundImage: `url('${selectedDestination.image}')`,
                }}
              />
              <button
                type="button"
                onClick={() => setSelectedDestination(null)}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-slate-900/50 text-lg font-medium text-white backdrop-blur-sm"
                aria-label="Close destination details"
              >
                ×
              </button>
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    {selectedDestination.highlight}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {selectedDestination.name}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {selectedDestination.details}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Best time
                  </span>
                  <span className="mt-2 block text-sm font-medium text-slate-800">
                    {selectedDestination.bestTime}
                  </span>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3">
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Ideal for
                  </span>
                  <span className="mt-2 block text-sm font-medium text-slate-800">
                    Wildlife, luxury, and photography
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  onClick={() => setSelectedDestination(null)}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Plan this trip
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedDestination(null)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
