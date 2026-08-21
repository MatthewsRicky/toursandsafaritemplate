const galleryImages = [
  "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Gallery
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Moments from the savannah, the coast, and every unforgettable stop in
          between.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={image}
            className={`h-72 rounded-3xl bg-cover bg-center shadow-sm ${index % 2 === 0 ? "sm:col-span-1" : ""}`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>
    </section>
  );
}
