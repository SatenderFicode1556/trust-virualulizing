import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingPopup from "../compontens/BookingPopup";
import Footer from "../compontens/Footer";
import Header from "../compontens/Header";
import HighlightsSection from "../compontens/HighlightsSection";
import PageCtaSection from "../compontens/PageCtaSection";

export const metadata: Metadata = {
  title: "About TrustonServices | Company and Team",
  description:
    "Learn about TrustonServices, our owner, verified service professionals, operating process, and customer-first home service standards.",
};

const companyStats = [
  ["12k+", "monthly service bookings"],
  ["42", "active city zones"],
  ["4.8", "average customer rating"],
  ["7 days", "customer support"],
];

const teamMembers = [
  {
    role: "Operations Manager",
    name: "Rohit Sharma",
    detail:
      "Coordinates daily bookings, team capacity, professional assignment, and visit timing.",
  },
  {
    role: "Service Quality Lead",
    name: "Priya Mehta",
    detail:
      "Reviews job checklists, customer feedback, safety standards, and service completion quality.",
  },
  {
    role: "Customer Support Lead",
    name: "Aman Verma",
    detail:
      "Helps customers choose the right service type, resolve issues, and manage follow-up support.",
  },
];

const workStandards = [
  "Verified professionals for each service category",
  "Clear starter pricing before booking",
  "Manual assignment review for the right professional",
  "Customer support before and after service",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#181818]">
      <Header />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_420px] lg:items-center lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">
              About TrustonServices
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
              A home service company built around trust and quick support.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/62">
              TrustonServices helps customers book verified professionals for AC
              repair, cleaning, plumbing, electrical work, appliance care, salon
              services, and property maintenance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookingPopup triggerLabel="Book a Service" />
              <Link
                href="/#services"
                className="rounded-md border border-black/15 px-5 py-3 text-sm font-semibold"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#202622] shadow-xl shadow-black/10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/services/ac-repair-photo.png"
                alt="TrustonServices professional at work"
                fill
                sizes="420px"
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3 p-4">
              {companyStats.map(([value, label]) => (
                <div key={label} className="rounded-md bg-white/10 p-4 text-white">
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="mt-1 text-sm text-white/58">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Company details
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Organized service delivery from booking to completion.
          </h2>
          <p className="mt-4 text-black/62">
            Our process is designed for homes, offices, hotels, restaurants,
            retail stores, and managed properties that need dependable service
            teams.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["What we do", "Home and property services with clear booking, assignment, and support workflows."],
            ["How we work", "Each request is matched with the right service type, time slot, location, and available professional."],
            ["Where we help", "Residential societies, corporate offices, hotels, restaurants, stores, and individual homes."],
            ["Customer promise", "Transparent starting prices, verified teams, and support if the service needs follow-up."],
          ].map(([title, detail]) => (
            <article key={title} className="rounded-lg bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/62">{detail}</p>
            </article>
          ))}
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

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Owner details
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Led by a customer-first service operator.
            </h2>
          </div>

          <article className="rounded-lg border border-black/10 bg-[#f7f4ef] p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="grid size-20 shrink-0 place-items-center rounded-lg bg-black text-2xl font-semibold text-white">
                TS
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/45">
                  Founder & Owner
                </p>
                <h3 className="mt-1 text-2xl font-semibold">TrustonServices Team</h3>
                <p className="mt-2 text-sm leading-6 text-black/62">
                  Focused on building a reliable home service platform with
                  verified professionals, simple booking, and accountable field
                  operations.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Employee details
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Teams that keep every booking moving.
            </h2>
          </div>
          <p className="max-w-xl text-black/60">
            Every role supports a smoother customer experience, from confirming
            requirements to assigning professionals and reviewing service quality.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.role} className="rounded-lg bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/45">
                {member.role}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{member.name}</h3>
              <p className="mt-3 text-sm leading-6 text-black/62">
                {member.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#202622] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Work standards
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Built for reliable service, not random visits.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {workStandards.map((item) => (
              <p
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.07] p-4 text-sm font-semibold text-white/82"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Contact us
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Share your requirement and we will help you book the right service.
            </h2>
            <p className="mt-4 text-black/62">
              Fill this form for service questions, company enquiries, employee
              coordination, or urgent booking support.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-black/65">
              <a href="tel:+911234567890" className="font-semibold text-black">
                +91 12345 67890
              </a>
              <a
                href="mailto:support@trustonservices.com"
                className="font-semibold text-black"
              >
                support@trustonservices.com
              </a>
              <p>Available 7 days a week</p>
            </div>
          </div>

          <form
            action="mailto:support@trustonservices.com"
            method="post"
            encType="text/plain"
            className="rounded-lg border border-black/10 bg-[#f7f4ef] p-5 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium">
                Full name
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium">
                Phone number
                <input
                  name="phone"
                  required
                  inputMode="tel"
                  className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3"
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
                  className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3"
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-sm font-medium">
                Service need
                <select
                  name="service"
                  className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3"
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
                className="mt-2 min-h-32 w-full rounded-md border border-black/15 bg-white px-3 py-3"
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
                className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <PageCtaSection
        eyebrow="We are here to help"
        title="Let’s find the right service for your property."
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
