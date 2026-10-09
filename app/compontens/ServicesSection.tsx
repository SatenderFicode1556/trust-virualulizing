import Image from "next/image";
import Link from "next/link";
import { services } from "./homeData";
import UiIcon from "./UiIcon";

const serviceVisuals: Record<string, "sparkle" | "wrench" | "home" | "check"> = {
  "salon-at-home": "sparkle",
  "ac-repair": "wrench",
  "deep-cleaning": "sparkle",
  plumbing: "wrench",
  "washing-machine": "home",
  electrician: "check",
  parceling: "home",
  "home-painter": "wrench",
} as const;

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">
              Choose service
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              What service do you need today?
            </h2>
          </div>
          <p className="max-w-xl text-black/60">
            Start with a service, then choose the exact type like Split AC,
            Window AC, bathroom cleaning, tap fitting, and more.
          </p>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group overflow-hidden rounded-2xl border border-[#e8e7e2] bg-white shadow-[0_3px_12px_rgba(20,38,31,.05)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d6ca] hover:shadow-[0_18px_38px_rgba(20,38,31,.12)]"
            >
              <div className={`relative flex aspect-[5/3] items-end justify-between overflow-hidden bg-gradient-to-br p-5 sm:p-6 ${service.accent}`}>
                {service.image ? (
                  <>
                    <Image src={service.image} alt={`${service.name} service`} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#10251e]/65 via-transparent to-[#10251e]/10" />
                    <span className="relative rounded-full border border-white/40 bg-[#10251e]/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-white backdrop-blur-sm">{service.category}</span>
                  </>
                ) : (
                  <>
                    <div aria-hidden="true" className="absolute -right-8 -top-12 size-48 rounded-full border-[28px] border-white/35 transition-transform duration-500 group-hover:scale-110" />
                    <div className="relative">
                      <span className="inline-flex rounded-full border border-white/70 bg-white/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-[#385346] backdrop-blur-sm">At-home service</span>
                      <p className="mt-3 text-sm font-semibold text-[#385346]">Choose a service that fits</p>
                    </div>
                    <span className="relative grid size-16 place-items-center rounded-[1.35rem] border border-white/80 bg-white/75 text-[#176b50] shadow-[0_8px_22px_rgba(20,38,31,.1)] backdrop-blur-sm transition duration-300 group-hover:-translate-y-1 group-hover:rotate-3 sm:size-[4.5rem]">
                      <UiIcon name={serviceVisuals[service.id]} className="size-8" />
                    </span>
                  </>
                )}
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/45">
                  {service.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{service.name}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-[#626a64] line-clamp-2">{service.description}</p>

                <div className="mt-4 rounded-xl border border-[#e8e7e2] bg-[#fbfaf7] p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/42">
                        Starts at
                      </p>
                      <p className="mt-1 text-lg font-semibold">
                        Rs. {service.price}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#edf3ef] px-3 py-1.5 text-xs font-semibold text-[#315c4c]">
                      <UiIcon name="clock" className="size-3.5" />
                      {service.duration}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3 text-sm text-black/60">
                    <span>Estimated visit time</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#176b50]">View options <UiIcon name="arrow-right" className="size-4" /></span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
