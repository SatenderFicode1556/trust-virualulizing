import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../compontens/Footer";
import Header from "../compontens/Header";
import HighlightsSection from "../compontens/HighlightsSection";
import AboutServiceGuide from "../compontens/AboutServiceGuide";
import PageCtaSection from "../compontens/PageCtaSection";
import UiIcon from "../compontens/UiIcon";
import { SITE_IMAGE } from "../compontens/homeData";

export const metadata: Metadata = {
  title: "About TrustonServices | Company and Team",
  description:
    "Learn about TrustonServices, the home services we offer, how booking works, and how to contact our team.",
};

const teamMembers = [
  {
    role: "Booking coordination",
    icon: "clock" as const,
    detail:
      "Helps organize service requests, preferred times, and customer follow-up.",
  },
  {
    role: "Service information",
    icon: "check" as const,
    detail:
      "Keeps service descriptions, starting prices, and work expectations clear.",
  },
  {
    role: "Customer support",
    icon: "phone" as const,
    detail:
      "Helps customers choose a service and find answers before they book.",
  },
];

const companyDetails: { title: string; detail: string; icon: "home" | "clock" | "map-pin" | "check" }[] = [
  { title: "What we do", detail: "Home and property services with clear booking, assignment, and support workflows.", icon: "home" },
  { title: "How we work", detail: "We use your selected service, location, and preferred time to understand your request.", icon: "clock" },
  { title: "Where we help", detail: "Residential societies, corporate offices, hotels, restaurants, stores, and individual homes.", icon: "map-pin" },
  { title: "Customer promise", detail: "Starting prices are visible, and extra work is discussed before it begins.", icon: "check" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#181818]">
      <Header />

      <section className="overflow-hidden bg-[#f7f8f4]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-12 lg:py-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#dce8df] bg-white px-3.5 py-2 text-sm font-medium text-[#31584a] shadow-sm">
              <span className="grid size-6 place-items-center rounded-full bg-[#e8f3ed] text-[#168365]"><UiIcon name="sparkle" className="size-3.5" /></span>
              A more straightforward way to book
            </p>
            <h1 className="mt-5 max-w-[720px] text-[clamp(2.6rem,5vw,4.6rem)] font-semibold leading-[1] tracking-[-0.05em] text-[#17211c]">
              Home services with <span className="text-[#168365]">clear choices</span> from the start.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#59645d] sm:text-lg sm:leading-8">
              TrustonServices brings home and property services together in one
              place. Compare service options, review starting prices, and get
              help choosing what fits your needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#services" className="inline-flex items-center rounded-full bg-[#133d32] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(19,61,50,.16)] transition hover:-translate-y-0.5 hover:bg-[#0d3027]">
                Explore services <UiIcon name="arrow-right" className="ml-2 size-4" />
              </Link>
              <a href="tel:+911234567890" className="inline-flex items-center rounded-full border border-[#d8dfd9] bg-white px-5 py-3 text-sm font-semibold text-[#20382e] transition hover:bg-[#f4f8f5]">
                <UiIcon name="phone" className="mr-2 size-4" />Call our team
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#e1e7e1] pt-4 text-sm font-medium text-[#45584e]">
              {["Service details", "Starting prices", "Human support"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><UiIcon name="check" className="size-4 text-[#168365]" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#dceae1] sm:-inset-4" />
            <div className="relative overflow-hidden rounded-[1.6rem] bg-[#d9e4dc] shadow-[0_24px_60px_rgba(25,50,39,.16)]">
            <div className="relative aspect-[4/3] sm:aspect-[5/4]">
              <Image
                src={SITE_IMAGE}
                alt="TrustonServices professional at work"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251e]/75 via-transparent to-transparent" />
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3.5 py-2 text-xs font-semibold text-[#31584a] shadow-lg backdrop-blur sm:right-5 sm:top-5 sm:text-sm">
                <UiIcon name="check" className="size-4 text-[#168365]" />
                Clear options before booking
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#168365]">Home services, all in one place</p>
                <p className="mt-1 text-lg font-semibold text-[#17211c]">Choose the work that fits your home.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <AboutServiceGuide />

      <section className="bg-[#fbfaf7] py-6 sm:py-8">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">
            Company details
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#17211c] md:text-4xl">
            Organized service delivery from booking to completion.
          </h2>
          <p className="mt-4 leading-7 text-[#59615b]">
            Our process is designed for homes, offices, hotels, restaurants,
            retail stores, and managed properties that need dependable service
            teams.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {companyDetails.map(({ title, detail, icon }) => (
            <article key={title} className="rounded-2xl border border-[#e3e8e2] bg-white p-5 shadow-[0_3px_14px_rgba(20,38,31,.04)]">
              <span className="grid size-10 place-items-center rounded-xl bg-[#e8f3ed] text-[#176b50]"><UiIcon name={icon} className="size-5" /></span>
              <h3 className="mt-4 text-lg font-semibold text-[#17211c]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#626a64]">{detail}</p>
            </article>
          ))}
        </div>
        </div>
      </section>

      <HighlightsSection
        eyebrow="Our service standards"
        title="A dependable experience starts with good information."
        description="We want customers to understand the service, expected timing, and next steps before a visit is confirmed."
        items={[
          { title: "Clear service scope", detail: "Service options describe the work so customers can choose the right starting point.", tag: "Before booking" },
          { title: "Careful coordination", detail: "Requests are reviewed against the selected service, location, and preferred time.", tag: "During booking" },
          { title: "Follow-up support", detail: "Customers can contact the team for questions and help after the visit.", tag: "After service" },
        ]}
        tone="white"
      />

      <section className="bg-[#fbfaf7] py-6 sm:py-8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">
              How we support your request
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#17211c] md:text-4xl">
              Clear roles behind a smoother service experience.
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-[#59615b]">
            From describing the service to answering questions, each part of the
            process should make it easier to understand what happens next.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.role} className="rounded-2xl border border-[#e3e8e2] bg-white p-5 shadow-[0_3px_14px_rgba(20,38,31,.04)]">
              <span className="grid size-10 place-items-center rounded-xl bg-[#e8f3ed] text-[#176b50]"><UiIcon name={member.icon} className="size-5" /></span>
              <h3 className="mt-4 text-lg font-semibold text-[#17211c]">{member.role}</h3>
              <p className="mt-2 text-sm leading-6 text-[#626a64]">
                {member.detail}
              </p>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-6 sm:py-8">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">
              Contact us
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#17211c] md:text-4xl">
              Share your requirement and we will help you book the right service.
            </h2>
            <p className="mt-4 leading-7 text-[#59615b]">
              Fill this form for service questions, company enquiries, employee
              coordination, or urgent booking support.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-[#45584e]">
              <a href="tel:+911234567890" className="inline-flex items-center gap-3 font-semibold text-[#133d32]">
                <span className="grid size-10 place-items-center rounded-xl bg-[#e8f3ed]"><UiIcon name="phone" className="size-4" /></span>
                +91 12345 67890
              </a>
              <a
                href="mailto:support@trustonservices.com"
                className="inline-flex items-center gap-3 font-semibold text-[#133d32]"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-[#e8f3ed]"><UiIcon name="mail" className="size-4" /></span>
                support@trustonservices.com
              </a>
              <p className="text-sm text-[#626a64]">Call or email us to confirm support hours.</p>
            </div>
          </div>

          <form
            action="mailto:support@trustonservices.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-[#e3e8e2] bg-[#f7f8f4] p-5 shadow-[0_3px_14px_rgba(20,38,31,.04)] sm:p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium">
                Full name
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-[#dce3dd] bg-white px-4 py-3"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium">
                Phone number
                <input
                  name="phone"
                  required
                  inputMode="tel"
                  className="mt-2 w-full rounded-xl border border-[#dce3dd] bg-white px-4 py-3"
                  placeholder="+91 98765 43210"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium">
                Email
                <input
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-[#dce3dd] bg-white px-4 py-3"
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-sm font-medium">
                Service need
                <select
                  name="service"
                  className="mt-2 w-full rounded-xl border border-[#dce3dd] bg-white px-4 py-3"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  <option>AC repair</option>
                  <option>Deep cleaning</option>
                  <option>Plumbing</option>
                  <option>Electrician</option>
                  <option>Company enquiry</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium">
              Message
              <textarea
                name="message"
                required
                className="mt-2 min-h-32 w-full rounded-xl border border-[#dce3dd] bg-white px-4 py-3"
                placeholder="Tell us your service requirement, address area, preferred time, or enquiry details."
              />
            </label>

            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="text-sm leading-6 text-black/55">
                Our support team will review your details and contact you for
                confirmation.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#133d32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3027]"
              >
                Send enquiry <UiIcon name="arrow-right" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <PageCtaSection
        eyebrow="We are here to help"
        title="Let's find the right service for your property."
        description="Tell our team what you need, or browse the service catalog and choose an option that fits."
        actionLabel="Browse services"
        actionHref="/#services"
        secondaryLabel="Contact the team"
        secondaryHref="tel:+911234567890"
      />

      <Footer />
    </main>
  );
}
