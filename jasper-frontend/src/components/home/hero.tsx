export function Hero() {
  return (
    <div className="mx-auto w-[calc(100%-2rem)] max-w-[1360px] sm:w-[calc(100%-60px)]">
      <section
        id="top"
        aria-labelledby="hero-title"
        className="grid grid-cols-1 gap-8 border-b border-[#243C27]/15 py-16 text-[#1F2B22] sm:py-20 md:grid-cols-12 md:items-center md:gap-10 md:py-24"
      >
        <div className="md:col-span-7">
          <p className="mb-5 font-body text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#8B7355]">
            THE JASPER EDIT · INDIA
          </p>
          <h1
            id="hero-title"
            className="max-w-3xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-[#1F2B22] sm:text-6xl lg:text-[5.5rem]"
          >
            The Art of Living,
            <br />
            <span className="italic font-normal">the Indian Way.</span>
          </h1>
        </div>

        <div className="md:col-span-5 md:pl-5 lg:pl-12">
          <p className="max-w-xl font-body text-base font-normal leading-[1.9] text-[#39443B] sm:text-lg">
            A curated collection of objects, fragrances, textiles and thoughtful essentials inspired by India&apos;s rich cultural heritage and the beauty of everyday rituals.
          </p>
          <a
            href="/shop"
            className="mt-6 inline-flex items-center gap-3 border-b border-[#8B7355] pb-2 font-body text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#354638] transition-colors hover:text-[#8B7355]"
          >
            Discover pieces that make every day feel meaningful
            <span aria-hidden="true" className="text-base">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
