export default function Hero() {
  return (
    <section className="relative pt-28 pb-20">
      <div className="absolute inset-0 -z-10 bg-neutral-50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
              Scandinavian homes, light-filled and timeless
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              An elegant portfolio of curated properties with natural materials, calm palettes, and crafted details.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#upload" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors">
                Upload media
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-100 transition-colors">
                View gallery
              </a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1505692794403-34d4989c0bd7?q=80&w=1640&auto=format&fit=crop"
              alt="Scandinavian interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
