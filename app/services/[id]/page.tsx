import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingPopup from "../../compontens/BookingPopup";
import Footer from "../../compontens/Footer";
import Header from "../../compontens/Header";
import HighlightsSection from "../../compontens/HighlightsSection";
import PageCtaSection from "../../compontens/PageCtaSection";
import { getServiceById, services, SITE_IMAGE } from "../../compontens/homeData";

type ServicePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "Service not found | TrustonServices",
    };
  }

  return {
    title: `${service.name} | TrustonServices`,
    description: `${service.description} Starting at Rs. ${service.price}.`,
  };
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.id !== service.id);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#181818]">
      <Header />

      <section className="relative overflow-hidden bg-[#edf3ef]">
        <div className="pointer-events-none absolute -right-24 -top-36 size-[30rem] rounded-full bg-[#d6e9dd] blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1fr_430px] lg:gap-16 lg:px-12 lg:py-10">
          <div>
            <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#315c4c] transition hover:text-[#133d32]">
              <span aria-hidden="true">←</span> All services
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">{service.category}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl md:text-6xl">{service.name}, done right.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555e58]">{service.description} Choose the option that fits your home and see clear pricing before you book.</p>
            <div className="mt-7 flex flex-wrap gap-2.5 text-sm font-medium text-[#315c4c]">
              {["Compare service options", "Starting prices shown", "Choose a preferred time"].map((item) => <span key={item} className="rounded-full border border-[#c9d9d0] bg-white/75 px-4 py-2">{item}</span>)}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <span className="text-sm text-[#657069]">Available service types</span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#176b50] shadow-sm">{service.subcategories.length} options</span>
            </div>
          </div>

          <aside className="overflow-hidden rounded-[1.75rem] border border-white bg-white p-2.5 shadow-[0_24px_60px_rgba(19,61,50,.16)]">
            <div className="relative aspect-[1.5] overflow-hidden rounded-[1.25rem]">
              <Image src={SITE_IMAGE} alt="" fill priority sizes="(min-width: 1024px) 430px, 100vw" className="object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-[#133d32] shadow-sm">{service.category}</span>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#768079]">Starting from</p>
                  <p className="mt-1 text-3xl font-semibold tracking-tight">Rs. {service.price}</p>
                </div>
                <p className="pb-1 text-sm text-[#68716b]">{service.duration}</p>
              </div>
              <BookingPopup
                initialServiceId={service.id}
                initialCategoryId={service.subcategories[0].id}
                triggerLabel={`Book ${service.name}`}
                triggerClassName="mt-5 block w-full rounded-full bg-[#133d32] py-3.5 shadow-none hover:bg-[#0d3027]"
              />
              <p className="mt-3 text-center text-xs leading-5 text-[#7b837d]">Final cost is confirmed with you before any additional work begins.</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="service-types" className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">Choose a service type</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Find the right {service.name.toLowerCase()} service.</h2>
          <p className="mt-3 text-[#555e58]">Compare what’s included, estimated time and starting price before booking.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {service.subcategories.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-[#e8e7e2] bg-white shadow-[0_3px_12px_rgba(20,38,31,.05)] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[4/3] bg-[#f7f4ef]">
                <Image
                  src={SITE_IMAGE}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-black/62">
                  {item.description}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-md bg-[#f7f4ef] p-3">
                    <p className="font-semibold">Rs. {item.price}</p>
                    <p className="mt-1 text-xs text-black/50">starts</p>
                  </div>
                  <div className="rounded-md bg-[#f7f4ef] p-3">
                    <p className="font-semibold">{item.duration}</p>
                    <p className="mt-1 text-xs text-black/50">duration</p>
                  </div>
                </div>
                <BookingPopup
                  initialServiceId={service.id}
                  initialCategoryId={item.id}
                  triggerLabel="Book this"
                  triggerClassName="mt-5 w-full rounded-full py-3"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <HighlightsSection
        eyebrow={`${service.name} booking guide`}
        title={`Choose the ${service.name.toLowerCase()} option that fits.`}
        description="Compare the service details and estimated time, then share your preferred visit slot. The team can help if you are unsure which option to select."
        items={[
          { title: "Compare service types", detail: `Explore ${service.subcategories.length} options for ${service.name.toLowerCase()} and review what each one covers.`, tag: "Find your fit" },
          { title: "Review price and duration", detail: "Each option shows a starting price and estimated duration before you book.", tag: "Plan ahead" },
          { title: "Choose a preferred time", detail: "Share a visit time that works for you. The team will confirm availability.", tag: "Scheduling" },
        ]}
        tone="white"
      />

      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                More services
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Other categories customers book.
              </h2>
            </div>
            <Link href="/#services" className="text-sm font-semibold">
              View all services
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}`}
                className="overflow-hidden rounded-lg border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={SITE_IMAGE}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-black/50">{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm text-black/60">
                    Starts at Rs. {item.price} - {item.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCtaSection
        eyebrow="Book with confidence"
        title={`Ready to book ${service.name.toLowerCase()}?`}
        description="Choose the service type that matches your need and check the details before sending a booking request."
        actionLabel="Choose a service type"
        actionHref="#service-types"
        secondaryLabel="Call for help"
        secondaryHref="tel:+911234567890"
      />

      <Footer />
    </main>
  );
}
