const testimonials = [
  {
    name: "Alicia & James",
    trip: "Maasai Mara honeymoon",
    quote:
      "Every day felt immersive and effortless. Our guide knew exactly where to be for sunrise and we felt cared for from the moment we landed.",
  },
  {
    name: "Daniel M.",
    trip: "Family safari to Amboseli",
    quote:
      "The planning was thoughtful, the lodge was stunning, and the kids still talk about the elephants and sunset game drives. A truly seamless trip.",
  },
  {
    name: "Sophie T.",
    trip: "Kenya + Diani coastal getaway",
    quote:
      "We loved the balance of safari adventure and beach restoration. The itinerary was perfectly paced and beautifully arranged.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-20 text-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Travelers return with stories worth sharing.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 text-amber-300">★★★★★</div>
              <p className="text-lg leading-8 text-slate-100">“{item.quote}”</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-slate-300">{item.trip}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
