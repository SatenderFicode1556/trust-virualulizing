import Link from "next/link";
import UiIcon from "./UiIcon";

const steps = [
  {
    number: "01",
    title: "Choose your service",
    detail: "Browse the service you need and compare available options and starting prices.",
  },
  {
    number: "02",
    title: "Pick a time that works",
    detail: "Share your area and preferred slot so the right team can be assigned.",
  },
  {
    number: "03",
    title: "Get it taken care of",
    detail: "Your professional visits, explains the work, and confirms any extra cost first.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#f2f5f1] py-6 sm:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">Simple from the start</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A better service visit, in three steps.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#59615b] lg:justify-self-end">
            Know what you are booking, what it starts at, and what happens next. Our team helps coordinate the details from the first request through follow-up.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-[#e0e6e0] bg-white p-5 shadow-[0_3px_14px_rgba(20,38,31,.04)] sm:p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#e8f3ed] text-sm font-bold text-[#176b50]">{step.number}</span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#626a64]">{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-5 rounded-2xl bg-[#133d32] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold text-[#b9e7d1]">Need help choosing?</p>
            <p className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">Talk to our service team before you book.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"><UiIcon name="phone" />Call our team</a>
            <Link href="/#services" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#133d32] transition hover:bg-[#eaf4ee]">Browse services <UiIcon name="arrow-right" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
