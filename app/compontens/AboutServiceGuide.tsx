import Link from "next/link";
import { services } from "./homeData";
import UiIcon from "./UiIcon";

const featuredIds = ["ac-repair", "deep-cleaning", "plumbing", "salon-at-home"];
const serviceIcons: Record<string, "wrench" | "sparkle" | "home"> = {
  "ac-repair": "wrench",
  "deep-cleaning": "sparkle",
  plumbing: "home",
  "salon-at-home": "sparkle",
};

export default function AboutServiceGuide() {
  const featuredServices = services.filter((service) => featuredIds.includes(service.id));

  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">What we can help with</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[#17211c] sm:text-4xl">Everyday services, all in one place.</h2>
          </div>
          <Link href="/#services" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#176b50] hover:text-[#133d32]">
            Browse all services <UiIcon name="arrow-right" />
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group rounded-2xl border border-[#e3e8e2] bg-[#fbfcfa] p-5 transition hover:-translate-y-0.5 hover:border-[#b9d6ca] hover:bg-white hover:shadow-[0_12px_28px_rgba(20,38,31,.08)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-[#e8f3ed] text-[#176b50]">
                  <UiIcon name={serviceIcons[service.id]} className="size-5" />
                </span>
                <UiIcon name="arrow-right" className="size-4 text-[#789084] transition group-hover:translate-x-1 group-hover:text-[#176b50]" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#7b847d]">{service.category}</p>
              <h3 className="mt-1 text-lg font-semibold text-[#17211c]">{service.name}</h3>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#e6ebe6] pt-3 text-sm">
                <span className="font-semibold text-[#133d32]">From Rs. {service.price}</span>
                <span className="inline-flex items-center gap-1.5 text-[#69766e]"><UiIcon name="clock" className="size-3.5" />{service.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
