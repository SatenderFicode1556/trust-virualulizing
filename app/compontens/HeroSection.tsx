import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGE, services } from "./homeData";
import UiIcon from "./UiIcon";

const quickServices = services.filter((service) =>
  ["ac-repair", "deep-cleaning", "plumbing"].includes(service.id),
);

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#f7f8f4]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-12 lg:py-10">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce8df] bg-white px-3.5 py-2 text-sm font-medium text-[#31584a] shadow-sm">
            <span className="grid size-6 place-items-center rounded-full bg-[#e8f3ed] text-[#168365]"><UiIcon name="check" className="size-3.5" /></span>
            Home services, made easier
          </div>
          <h1 className="mt-6 max-w-[720px] text-[clamp(2.7rem,5.4vw,5rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-[#17211c]">
            The right help for your home, <span className="text-[#168365]">made simple.</span>
          </h1>
          <p className="mt-6 max-w-[620px] text-base leading-7 text-[#59645d] sm:text-lg sm:leading-8">
            From AC repair and plumbing to deep cleaning and salon care, find a service that fits your needs. See starting prices, choose the work, and request a convenient visit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#services" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#133d32] px-6 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(19,61,50,.18)] transition hover:-translate-y-0.5 hover:bg-[#0d3027]">
              Explore services <UiIcon name="arrow-right" className="ml-2 size-4" />
            </Link>
            <a href="tel:+911234567890" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8dfd9] bg-white px-6 text-sm font-semibold text-[#20382e] transition hover:border-[#9db6a7] hover:bg-[#f4f8f5]">
              <UiIcon name="phone" className="mr-2 size-4" />Call our team
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#e1e7e1] pt-5 text-sm font-medium text-[#45584e]">
            {["Starting prices shown", "Choose the service type", "Request a preferred time"].map((promise) => (
              <span key={promise} className="inline-flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-[#e3f1e9] text-[#168365]"><UiIcon name="check" className="size-3.5" /></span>
                {promise}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-[#dceae1] sm:-inset-4" />
          <div className="relative h-[390px] overflow-hidden rounded-[1.6rem] bg-[#d9e4dc] shadow-[0_24px_60px_rgba(25,50,39,.16)] sm:h-[500px] lg:h-[570px]">
            <Image src={SITE_IMAGE} alt="A home professional helping with a cleaning service" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10251e]/75 via-transparent to-[#10251e]/10" />

            <div className="absolute left-4 right-4 top-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:left-6 sm:right-auto sm:top-6 sm:max-w-[360px] sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#168365]">One place for everyday care</p>
              <p className="mt-1.5 text-lg font-semibold tracking-tight text-[#17211c]">Repairs, cleaning &amp; home services</p>
              <p className="mt-1 text-sm leading-6 text-[#59645d]">Browse the options and choose what suits your home.</p>
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[#10251e]/95 p-4 text-white shadow-xl backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-white/65">Get started with</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">A service that fits your need</p>
                </div>
                <Link href="/#services" className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#173d32] transition hover:bg-[#e8f3ed]">View services</Link>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {quickServices.map((service) => (
                <Link key={service.id} href={`/services/${service.id}`} className="rounded-xl border border-white/10 bg-white/[0.08] px-2.5 py-3 text-xs font-medium text-white/90 transition hover:bg-white/[0.16] sm:px-3 sm:text-sm">
                    <span className="block truncate">{service.name}</span>
                    <span className="mt-1 block text-xs text-white/60">From Rs. {service.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
