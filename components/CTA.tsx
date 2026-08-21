export default function CTA() {
  return (
    <section className="bg-emerald-700 py-20 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
            Ready to travel?
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Plan your safari with us.
          </h2>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-white px-7 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
        >
          Start Planning
        </a>
      </div>
    </section>
  );
}
