import Image from "next/image";
import { industriesWeServe } from "../data/Industires.data";

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#fbfaf7] py-6 text-[#181818] sm:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">
              Industries we serve
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Service support for homes, businesses, and managed properties.
            </h2>
          </div>
          <div className="rounded-2xl border border-[#dfe7df] bg-white p-5 sm:p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#133d32]">Not sure what fits your property?</p>
            <p className="mt-2 text-sm leading-6 text-[#626a64]">Tell us about the space and the job. Our team can help you choose a suitable service option.</p>
            <a href="tel:+911234567890" className="mt-4 inline-flex text-sm font-semibold text-[#168365] hover:text-[#133d32]">Talk to our team</a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {industriesWeServe.map((industry) => (
            <article key={industry.name} className="group relative aspect-[1.35/1] min-h-[180px] overflow-hidden rounded-2xl bg-[#dfe9e1] shadow-[0_6px_18px_rgba(20,38,31,.07)] ring-1 ring-inset ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(20,38,31,.14)] sm:min-h-[195px]">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251e]/90 via-[#10251e]/15 to-transparent transition-colors duration-300 group-hover:from-[#10251e]/95" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="mb-3 block h-1 w-9 rounded-full bg-[#b9e7d1] transition-all duration-300 group-hover:w-14" />
                <h3 className="max-w-[15rem] text-xl font-semibold leading-tight tracking-tight text-white sm:text-[1.35rem]">
                  {industry.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
