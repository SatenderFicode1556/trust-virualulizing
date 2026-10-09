const brandGroups = [
  {
    brands: ["LG", "Samsung", "Voltas", "Daikin", "Blue Star", "Hitachi", "Lloyd"],
    direction: "brand-marquee-reverse",
  },
  {
    brands: ["Whirlpool", "IFB", "Bosch", "Godrej", "Haier", "Panasonic", "Carrier"],
    direction: "brand-marquee-forward",
  },
  {
    brands: ["Crompton", "Havells", "V-Guard","Whirlpool", "IFB", "Bosch"],
    direction: "brand-marquee-reverse",
  },
  {
    brands: ["LG", "Samsung", "Voltas", "Daikin", "Blue Star", "Hitachi", "Lloyd", "Carrier",],
    direction: "brand-marquee-reverse",
  },
   {
    brands: ["Whirlpool", "IFB", "Bosch", "Godrej", "Haier", "Panasonic"],
    direction: "brand-marquee-forward",
  },
    {
    brands: ["Crompton", "Havells", "V-Guard","Haier", "Panasonic"],
    direction: "brand-marquee-reverse",
  },
];

function BrandRow({ brands, direction }: { brands: string[]; direction: string }) {
  return (
    <div className="brand-marquee min-w-0 overflow-hidden" aria-hidden="true">
      <div className={`brand-marquee-track flex w-max ${direction}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
            {brands.map((brand) => (
              <span key={`${copy}-${brand}`} className="flex items-center gap-8 whitespace-nowrap sm:gap-12">
                <span className="text-lg font-semibold tracking-tight text-white/90 sm:text-2xl">{brand}</span>
                <span className="size-1 shrink-0 rounded-full bg-[#8fc6a8]" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandSupportSection() {
  return (
    <section aria-labelledby="brand-support-title" className="relative isolate overflow-hidden bg-[#12382f] py-12 text-white sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 -z-10 size-[34rem] rounded-full bg-[#2d765c]/25 blur-3xl" />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-7 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#a8dcc0]">Brand coverage</p>
            <h2 id="brand-support-title" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Support for the brands in your home.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/65">Share your appliance brand and location. Our team will check service availability before you book.</p>
        </div>

        <div className="mt-6 space-y-4" role="group" aria-label="Brand names we service">
          {brandGroups.map((group, index) => (
            <div key={`brand-row-${index}`}>
              <div className="relative min-w-0 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
                <BrandRow brands={group.brands} direction={group.direction} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-white/45">
          Truston Service is an independent multi-brand home appliance repair and maintenance service provider. All brand names, logos, and trademarks (such as LG, Samsung, Philips, etc.) are the property of their respective owners and are used strictly for identification and informational purposes only to indicate servicing capabilities.
        </p>
      </div>
    </section>
  );
}
