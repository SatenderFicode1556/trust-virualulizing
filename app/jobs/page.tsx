import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../compontens/Footer";
import Header from "../compontens/Header";
import HighlightsSection from "../compontens/HighlightsSection";
import PageCtaSection from "../compontens/PageCtaSection";

export const metadata: Metadata = {
  title: "Apply for Jobs | TrustonServices",
  description:
    "Apply for technician, support, operations, and field service roles at TrustonServices.",
};

const openings = [
  {
    title: "AC Technician",
    type: "Field role",
    location: "Delhi NCR",
    detail:
      "Service, repair, installation, gas refill checks, and customer visit support for split and window AC units.",
  },
  {
    title: "Cleaning Professional",
    type: "Field role",
    location: "Delhi NCR",
    detail:
      "Home, kitchen, bathroom, office, and move-in cleaning with checklist-based quality completion.",
  },
  {
    title: "Electrician / Plumber",
    type: "Field role",
    location: "Delhi NCR",
    detail:
      "Small repair jobs, fittings, safety checks, leakage fixes, and customer-facing service visits.",
  },
  {
    title: "Customer Support Executive",
    type: "Office role",
    location: "Hybrid",
    detail:
      "Handle booking calls, customer follow-ups, service coordination, and issue resolution.",
  },
];

const benefits = [
  "Daily job assignment support",
  "Clear service checklists",
  "Customer support coordination",
  "Growth across service categories",
];

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#181818]">
      <Header />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_420px] lg:items-center lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">
              Careers
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
              Apply for service jobs at TrustonServices.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/62">
              Join our service network as a technician, cleaning professional,
              operations teammate, or customer support executive.
            </p>
            <a
              href="#apply"
              className="mt-8 inline-flex rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Apply now
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#202622] shadow-xl shadow-black/10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/services/electrician-photo.png"
                alt="TrustonServices field professional"
                fill
                sizes="420px"
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3 p-4 text-white">
              {[
                ["4", "open roles"],
                ["7 days", "work support"],
                ["42", "city zones"],
                ["12k+", "monthly bookings"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md bg-white/10 p-4">
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="mt-1 text-sm text-white/58">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Current openings
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Roles available for service and support teams.
            </h2>
          </div>
          <p className="max-w-xl text-black/60">
            We look for reliable, polite, and skilled people who can represent
            TrustonServices professionally at customer locations.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {openings.map((opening) => (
            <article key={opening.title} className="rounded-lg bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/45">
                {opening.type}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{opening.title}</h3>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                {opening.location}
              </p>
              <p className="mt-4 text-sm leading-6 text-black/62">
                {opening.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Why join
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Work with a team that keeps jobs organized.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {benefits.map((benefit) => (
              <p
                key={benefit}
                className="rounded-md border border-black/10 bg-[#f7f4ef] p-4 text-sm font-semibold text-black/75"
              >
                {benefit}
              </p>
            ))}
          </div>
        </div>
      </section>

      <HighlightsSection
        eyebrow="Working with us"
        title="Good service depends on a team that works well together."
        description="Our field and support roles coordinate each booking, from understanding the request to helping the customer after a visit."
        items={[
          { title: "Know the job before you go", detail: "Service details and checklists help teams prepare for customer visits.", tag: "Clear expectations" },
          { title: "Work with coordinated support", detail: "Operations and customer support help keep assignments and follow-ups moving.", tag: "Teamwork" },
          { title: "Build practical experience", detail: "Work across home services and develop customer-facing and technical skills.", tag: "Career growth" },
        ]}
      />

      <PageCtaSection
        eyebrow="Join the team"
        title="Interested in one of our open roles?"
        description="Share your experience and the kind of work you are looking for. Our team will review your application."
        actionLabel="View application form"
        actionHref="/jobs#apply"
        secondaryLabel="Call hiring support"
        secondaryHref="tel:+911234567890"
      />

      <section id="apply" className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Apply now
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Send your details for the right opening.
          </h2>
          <p className="mt-4 text-black/62">
            Fill this basic application form. Our team will review your profile
            and call you if your experience matches an available role.
          </p>
        </div>

        <form
          action="mailto:jobs@trustonservices.com"
          method="post"
          encType="text/plain"
          className="rounded-lg border border-black/10 bg-white p-5 shadow-sm"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Full name
              <input
                name="name"
                required
                className="mt-2 w-full rounded-md border border-black/15 px-3 py-3"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-medium">
              Phone number
              <input
                name="phone"
                required
                inputMode="tel"
                className="mt-2 w-full rounded-md border border-black/15 px-3 py-3"
                placeholder="+91 98765 43210"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Applying for
              <select
                name="role"
                required
                className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3"
                defaultValue=""
              >
                <option value="" disabled>
                  Select role
                </option>
                {openings.map((opening) => (
                  <option key={opening.title}>{opening.title}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium">
              Experience
              <select
                name="experience"
                required
                className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3"
                defaultValue=""
              >
                <option value="" disabled>
                  Select experience
                </option>
                <option>Fresher</option>
                <option>1-2 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </label>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Area / City
              <input
                name="area"
                required
                className="mt-2 w-full rounded-md border border-black/15 px-3 py-3"
                placeholder="Delhi, Noida, Gurugram"
              />
            </label>
            <label className="text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                className="mt-2 w-full rounded-md border border-black/15 px-3 py-3"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium">
            Skills or work details
            <textarea
              name="skills"
              required
              className="mt-2 min-h-32 w-full rounded-md border border-black/15 px-3 py-3"
              placeholder="Tell us about your skills, tools, previous work, or availability."
            />
          </label>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="text-sm leading-6 text-black/55">
              You can also call us directly for urgent hiring questions.
            </p>
            <button
              type="submit"
              className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Submit application
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}
