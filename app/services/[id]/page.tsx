import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingPopup from "../../compontens/BookingPopup";
import Footer from "../../compontens/Footer";
import Header from "../../compontens/Header";
import PageCtaSection from "../../compontens/PageCtaSection";
import UiIcon from "../../compontens/UiIcon";
import { getServiceById, services } from "../../compontens/homeData";

type ServicePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) return { title: "Service not found | TrustonServices" };

  return {
    title: `${service.name} | TrustonServices`,
    description: `${service.description} Starting at Rs. ${service.price}.`,
  };
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) notFound();

  const relatedServices = services.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#18221d]">
      <Header />

      <section className="relative isolate overflow-hidden border-b border-[#e4e9e3] bg-[#edf3ef]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[34rem] rounded-full bg-[#d4e8db] blur-3xl" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-14">
          <div>
            <nav aria-label="Breadcrumb" className="mb-9 flex items-center gap-2 text-sm text-[#647169]">
              <Link href="/#services" className="transition hover:text-[#176b50]">Services</Link>
              <span aria-hidden="true" className="text-[#98a39b]">/</span>
              <span className="font-medium text-[#315c4c]">{service.name}</span>
            </nav>

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#168365]">{service.category}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-.04em] sm:text-5xl lg:text-6xl">
              {service.name} services, made easier to book.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#59645d] sm:text-lg sm:leading-8">
              {service.description} Choose the type of work you need, then review its starting price and estimated visit time.
            </p>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-[#748178]">Common requests</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {service.popularFor.map((request) => (
                  <span key={request} className="rounded-full border border-[#d4e0d7] bg-white/70 px-3.5 py-2 text-sm font-medium text-[#385346]">{request}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#service-options" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#12382f] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d2e26]">
                Compare service options <UiIcon name="arrow-right" className="size-4" />
              </Link>
              <a href="tel:+911234567890" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cbd8ce] bg-white/75 px-5 text-sm font-semibold text-[#244537] transition hover:bg-white">
                <UiIcon name="phone" className="size-4" /> Talk to our team
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#d8e2da] pt-5 text-sm text-[#58645d]">
              <span className="inline-flex items-center gap-2"><UiIcon name="check" className="size-4 text-[#168365]" /> {service.subcategories.length} service options</span>
              <span className="inline-flex items-center gap-2"><UiIcon name="check" className="size-4 text-[#168365]" /> Starting prices shown</span>
              <span className="inline-flex items-center gap-2"><UiIcon name="check" className="size-4 text-[#168365]" /> Visit time estimates</span>
            </div>
          </div>

          <aside aria-label={`${service.name} booking summary`} className="relative isolate flex min-h-[500px] w-full max-w-[460px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-[#12382f] text-white shadow-[0_24px_60px_rgba(19,61,50,.18)] sm:min-h-[560px] lg:justify-self-end">
            <Image src={service.image} alt="A home service professional at work" fill priority sizes="(min-width: 1024px) 390px, 100vw" className="-z-20 object-cover" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#10251e]/5 via-[#10251e]/15 to-[#10251e]/95" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3.5 py-2 text-xs font-semibold text-[#173b2e] shadow-sm sm:left-6 sm:top-6">
              <span className="size-2 rounded-full bg-[#168365]" /> {service.category}
            </div>
            <div className="relative p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b9e7d1]">Booking overview</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">A clear place to start.</h2>
              <p className="mt-2 text-sm leading-6 text-white/75">Choose an option below to see the details that fit your job.</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/15 bg-[#10251e]/65 p-4 backdrop-blur-sm">
                  <p className="text-xs font-medium text-white/65">Starting from</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight">Rs. {service.price}</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-[#10251e]/65 p-4 backdrop-blur-sm">
                  <p className="text-xs font-medium text-white/65">Estimated time</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">{service.duration}</p>
                </div>
              </div>

              <BookingPopup
                initialServiceId={service.id}
                initialCategoryId={service.subcategories[0].id}
                triggerLabel={`Book ${service.name}`}
                triggerContent={<span>Book {service.name}</span>}
                triggerClassName="mt-4 w-full rounded-full bg-[#b9e7d1] py-3.5 text-[#12382f] shadow-sm transition hover:bg-white"
              />
              <p className="mt-3 text-center text-xs leading-5 text-white/70">We’ll confirm availability and any additional work before it begins.</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="service-options" className="scroll-mt-28 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#168365]">Choose the right option</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">What do you need help with?</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[#626a64] sm:text-base sm:leading-7">Compare what each option covers, its starting price, and the expected visit time. Book the option that best matches the work you need.</p>
          </div>

          <div className="mt-6 grid gap-3 rounded-2xl border border-[#e4e9e3] bg-[#f7f8f5] p-4 sm:grid-cols-3 sm:p-5">
            {[
              `${service.subcategories.length} options to compare`,
              "Starting prices shown upfront",
              "Estimated visit times included",
            ].map((point) => (
              <p key={point} className="flex items-center gap-2.5 text-sm font-medium text-[#425249]">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#e3f0e8] text-[#176b50"><UiIcon name="check" className="size-3.5" /></span>
                {point}
              </p>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.subcategories.map((item, index) => (
              <article key={item.id} className="group flex h-full flex-col rounded-[1.4rem] border border-[#e4e8e2] bg-[#fbfaf7] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#b9d6c5] hover:bg-white hover:shadow-[0_18px_40px_rgba(20,38,31,.09)] sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#89958d]">{service.category}</p>
                    <p className="mt-1 text-xs font-semibold text-[#315c4c]">Service option {String(index + 1).padStart(2, "0")}</p>
                  </div>
                  <div className="relative size-[4.5rem] shrink-0 overflow-hidden rounded-[1.15rem] border-2 border-white bg-[#eaf3ed] shadow-[0_4px_14px_rgba(19,61,50,.15)] ring-1 ring-[#dce6df] sm:size-20">
                    <Image src={service.image} alt="" fill sizes="80px" className="object-cover transition duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col pt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-[#18221d] sm:text-2xl">{item.name}</h3>

                  <div className="mt-3 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#89958d]">Service details</p>
                    <p className="mt-1.5 text-sm leading-6 text-[#626a64]">{item.description}</p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#e7ebe5] bg-white p-3.5">
                      <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#89928c]">Starting at</p>
                      <p className="mt-1 text-xl font-semibold tracking-tight text-[#18221d]">Rs. {item.price}</p>
                    </div>
                    <div className="rounded-xl border border-[#e7ebe5] bg-white p-3.5">
                      <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#89928c]">Estimated time</p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#315c4c]"><UiIcon name="clock" className="size-4" />{item.duration}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[#77827b]">Any additional work is discussed before it begins.</p>

                  <BookingPopup
                    initialServiceId={service.id}
                    initialCategoryId={item.id}
                    triggerLabel={`Book ${item.name}`}
                    triggerClassName="mt-5 w-full rounded-full py-3.5"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f5f1] py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#168365]">Before the visit</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Know what to expect.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#626a64] sm:text-base sm:leading-7">Share the details that help the team understand your request. Any additional work or cost should be discussed with you before it begins.</p>
            <Link href="/#faq" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#176b50] hover:text-[#12382f]">See common questions <UiIcon name="arrow-right" className="size-4" /></Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {(service.includes ?? []).map((item, index) => (
              <div key={item} className="flex min-h-24 gap-4 rounded-2xl border border-[#e1e7e0] bg-white p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eaf3ed] text-sm font-bold text-[#176b50]">{String(index + 1).padStart(2, "0")}</span>
                <p className="pt-1 text-sm font-medium leading-6 text-[#34443a]">{item}</p>
              </div>
            ))}
            {(service.popularFor ?? []).map((item) => (
              <div key={item} className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#e1e7e0] bg-white p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eaf3ed] text-[#176b50]"><UiIcon name="wrench" className="size-4" /></span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.13em] text-[#89958d]">Common request</p>
                  <p className="mt-1 text-sm font-medium text-[#34443a]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#168365]">Explore more</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Other ways we can help.</h2>
              </div>
              <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#176b50] hover:text-[#12382f]">View all services <UiIcon name="arrow-right" className="size-4" /></Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((item) => (
                <Link key={item.id} href={`/services/${item.id}`} className="group flex items-center justify-between gap-4 rounded-2xl border border-[#e5e8e2] bg-[#fbfaf7] p-5 transition hover:border-[#b9d6c5] hover:bg-white hover:shadow-[0_12px_30px_rgba(20,38,31,.07)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.13em] text-[#89928c]">{item.category}</p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#1c2921]">{item.name}</h3>
                    <p className="mt-1 text-sm text-[#626a64]">From Rs. {item.price} <span className="px-1 text-[#a3aaa4]">·</span> {item.duration}</p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#dfe7e0] bg-white text-[#176b50] transition group-hover:bg-[#12382f] group-hover:text-white"><UiIcon name="arrow-right" className="size-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <PageCtaSection
        eyebrow="Your next step"
        title={`Ready to book ${service.name.toLowerCase()}?`}
        description="Choose the service option that matches your need. We’ll collect your preferred time and location in the booking form."
        actionLabel="Choose a service option"
        actionHref="#service-options"
        secondaryLabel="Call for help"
        secondaryHref="tel:+911234567890"
      />

      <Footer />
    </main>
  );
}
