import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingPopup from "../../../compontens/BookingPopup";
import Footer from "../../../compontens/Footer";
import Header from "../../../compontens/Header";
import HighlightsSection from "../../../compontens/HighlightsSection";
import PageCtaSection from "../../../compontens/PageCtaSection";
import {
  getServiceCategory,
  services,
} from "../../../compontens/homeData";

type ServiceCategory = (typeof services)[number]["subcategories"][number];

type CategoryPageProps = {
  params: Promise<{ id: string; categoryId: string }>;
};

function getCategoryImage(category: ServiceCategory, fallbackImage: string) {
  return (category as ServiceCategory & { image?: string }).image ?? fallbackImage;
}

export function generateStaticParams() {
  return services.flatMap((service) =>
    service.subcategories.map((category) => ({
      id: service.id,
      categoryId: category.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { id, categoryId } = await params;
  const result = getServiceCategory(id, categoryId);

  if (!result) {
    return {
      title: "Category not found | TrustonServices",
    };
  }

  return {
    title: `${result.category.name} | ${result.service.name} | TrustonServices`,
    description: `${result.category.description} Starting at Rs. ${result.category.price}.`,
  };
}

export default async function ServiceCategoryPage({ params }: CategoryPageProps) {
  const { id, categoryId } = await params;
  const result = getServiceCategory(id, categoryId);

  if (!result) {
    notFound();
  }

  const { service, category } = result;
  const otherCategories = service.subcategories.filter(
    (item) => item.id !== category.id,
  );

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#181818]">
      <Header />

      <section className="relative overflow-hidden bg-[#edf3ef]">
        <div className="pointer-events-none absolute -right-24 -top-36 size-[30rem] rounded-full bg-[#d6e9dd] blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] gap-9 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_410px] lg:items-center lg:px-12 lg:py-16">
          <div>
            <Link
              href={`/services/${service.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#315c4c] transition hover:text-[#133d32]"
            >
              <span aria-hidden="true">←</span> {service.name}
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">{service.category}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {category.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555e58]">
              {category.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Service type", service.category],
                ["Duration", category.duration],
                ["Rating", service.rating],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white bg-white/80 p-4 shadow-sm">
                  <p className="text-sm text-[#737c75]">{label}</p>
                  <p className="mt-2 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit overflow-hidden rounded-[1.75rem] border border-white bg-white p-2.5 shadow-[0_24px_60px_rgba(19,61,50,.16)]">
            <div className="relative aspect-[1.5] overflow-hidden rounded-[1.25rem]">
              <Image
                src={getCategoryImage(category, service.image)}
                alt={`${category.name} photo`}
                fill
                sizes="390px"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#168365]">
                Book this service
              </p>
              <div className="mt-4 rounded-xl bg-[#f2f5f1] p-4">
                <p className="text-sm text-black/55">Selected category</p>
                <p className="mt-1 text-xl font-semibold">{category.name}</p>
                <p className="mt-3 text-sm text-black/60">{service.eta}</p>
              </div>
              <div className="mt-5 space-y-3 text-sm text-black/65">
                <p className="flex justify-between gap-4">
                  <span>Starter price</span>
                <span className="font-semibold text-black">
                    Rs. {category.price}
                  </span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Estimated time</span>
                  <span className="font-semibold text-black">
                    {category.duration}
                  </span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Visit inspection</span>
                  <span className="font-semibold text-emerald-700">Included</span>
                </p>
              </div>
              <BookingPopup
                initialCategoryId={category.id}
                initialServiceId={service.id}
                triggerClassName="mt-6 block w-full rounded-full bg-[#133d32] py-3.5 text-center shadow-none hover:bg-[#0d3027]"
                triggerLabel={`Book ${category.name}`}
              />
              <a
                href="tel:+911234567890"
                className="mt-3 block rounded-full border border-[#d8dfd9] px-4 py-3 text-center text-sm font-semibold text-[#315c4c] transition hover:bg-[#f2f5f1]"
              >
                Call to book
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Details
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            What is included in this category.
          </h2>
          <p className="mt-4 text-black/62">
            Final cost depends on condition, scope, required materials, and
            add-ons confirmed before work begins.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold">Service basics</h3>
            <div className="mt-5 space-y-3">
              {service.includes.map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm text-black/65">
                  <span className="grid size-7 place-items-center rounded-md bg-black text-xs text-white">
                    OK
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-lg bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold">Other {service.name} options</h3>
            <div className="mt-5 grid gap-3">
              {otherCategories.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${service.id}/${item.id}`}
                  className="rounded-md border border-black/10 bg-[#f7f4ef] p-3 transition hover:border-black/25 hover:bg-white"
                >
                  <span className="block font-semibold">{item.name}</span>
                  <span className="mt-1 block text-sm text-black/55">
                    Rs. {item.price} - {item.duration}
                  </span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <HighlightsSection
        eyebrow="Before your visit"
        title={`What to expect from ${category.name.toLowerCase()}.`}
        description="Review the scope and timing, and ask about any additional work before it starts."
        items={[
          { title: "Understand the service", detail: category.description, tag: service.name },
          { title: "Plan for the visit", detail: `Estimated duration: ${category.duration}. The team will confirm visit details with you.`, tag: "Timing" },
          { title: "Confirm extra work first", detail: "If the professional finds work outside the listed scope, the additional cost is discussed before proceeding.", tag: "Price clarity" },
        ]}
        tone="white"
      />

      <PageCtaSection
        eyebrow="Take the next step"
        title={`Book ${category.name.toLowerCase()} at a time that works.`}
        description={`Starting at Rs. ${category.price} · Estimated time ${category.duration}. Submit a request and the team will help confirm the visit.`}
        actionLabel="Book this service"
        actionHref={`/services/${service.id}`}
        booking={{ serviceId: service.id, categoryId: category.id }}
        secondaryLabel="Call to book"
        secondaryHref="tel:+911234567890"
      />

      <Footer />
    </main>
  );
}
