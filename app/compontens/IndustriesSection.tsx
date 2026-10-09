import Image from "next/image";
import { industriesWeServe, SITE_IMAGE } from "./homeData";
import UiIcon from "./UiIcon";

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
            <a href="tel:+911234567890" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#168365] hover:text-[#133d32]">Talk to our team <UiIcon name="arrow-right" /></a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {industriesWeServe.map((industry) => (
            <article
              key={industry.name}
              className="overflow-hidden rounded-2xl border border-[#e8e7e2] bg-white shadow-[0_3px_12px_rgba(20,38,31,.05)] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[5/3] bg-[#f7f4ef]">
                <Image
                  src={SITE_IMAGE}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-xl font-semibold">{industry.name}</h3>
                <p className="mt-3 text-sm leading-6 text-black/62">
                  {industry.detail}
                </p>
                <p className="mt-5 rounded-md border border-black/10 px-3 py-2 text-sm font-semibold text-[#315c4c]">
                  Ask about service options
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
