"use client";

import { useState } from "react";

const galleryImages = [
  {
    src: "/elephants.jpg",
    title: "Elephant herd at sunrise",
    description:
      "A calm morning in Amboseli, where the light catches every motion across the plain.",
  },
  {
    src: "/migration.jpg",
    title: "Great Migration",
    description:
      "The Mara comes alive with movement, energy, and the drama of the season’s greatest wildlife spectacle.",
  },
  {
    src: "/tsavoelephants.jpg",
    title: "Tsavo wilderness",
    description:
      "Red earth, open horizons, and unforgettable game drives through Kenya’s rawest landscapes.",
  },
  {
    src: "/giraffe.jpg",
    title: "Samburu wildlife",
    description:
      "A quiet moment in the north, where unique species and dramatic terrain create a striking safari mood.",
  },
  {
    src: "/beach-diani-picture.jpg",
    title: "Diani coastline",
    description:
      "A slow afternoon by the shore, blending beach luxury with a sense of total escape.",
  },
  {
    src: "/cheetahs.jpg",
    title: "Big cat sighting",
    description:
      "A fleeting glimpse of Kenya’s most agile predator in the grasslands and shadowed light.",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);

  return (
    <>
      <section
        id="gallery"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Gallery
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Moments from the savannah, the coast, and every unforgettable stop
            in between.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedImage(item)}
              className={`group relative h-72 overflow-hidden rounded-3xl bg-cover bg-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl ${index % 2 === 0 ? "sm:col-span-1" : ""}`}
              style={{ backgroundImage: `url('${item.src}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                <div className="text-lg font-semibold">{item.title}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: `url('${selectedImage.src}')` }}
            />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedImage.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  Close
                </button>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
