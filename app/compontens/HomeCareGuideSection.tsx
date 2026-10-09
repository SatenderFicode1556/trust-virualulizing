import Link from "next/link";
import UiIcon from "./UiIcon";

const guides = [
  {
    number: "01",
    label: "BEFORE YOU BOOK",
    title: "Start with the issue you need solved.",
    detail: "Choose a service, compare the available options, and share a few details about the work.",
    icon: "home" as const,
    href: "/#services",
    action: "Browse services",
  },
  {
    number: "02",
    label: "PRICE CLARITY",
    title: "Know what to ask about the price.",
    detail: "Review the listed starting price and confirm any extra work or cost before it begins.",
    icon: "check" as const,
    href: "/#faq",
    action: "Read common questions",
  },
  {
    number: "03",
    label: "PLAN YOUR VISIT",
    title: "Share a time and area that work for you.",
    detail: "Add your location and preferred visit time so the team can follow up about arrangements.",
    icon: "clock" as const,
    href: "/#services",
    action: "Find a service",
  },
];

export default function HomeCareGuideSection() {
  return (
    <section aria-labelledby="home-care-guide-title" className="overflow-hidden bg-[#f5f3ed] py-14 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#176b50]">
              <span className="size-2 rounded-full bg-[#d78a43]" /> A clearer service visit
            </p>
            <h2 id="home-care-guide-title" className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#17211c] sm:text-4xl lg:text-5xl">
              Good home care starts with <span className="text-[#176b50]">clear choices.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#626a64] sm:text-base sm:leading-7">
            A few practical pointers to help you choose a service, understand the next steps, and feel ready to book.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <article className="relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-[#12382f] p-6 text-white sm:min-h-[360px] sm:p-9">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full border-[42px] border-white/[0.06]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#b9e7d1]">
                <UiIcon name="sparkle" className="size-4" /> A simple guide
              </span>
              <p className="mt-8 text-sm font-semibold text-white/55">01 / MAKE A CONFIDENT START</p>
              <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                The right service begins with knowing what you need.
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                Browse the service options, check the starting price, and choose the visit details that suit your home.
              </p>
            </div>
            <Link href="/#services" className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#b9e7d1] px-5 py-3 text-sm font-semibold text-[#12382f] transition hover:bg-white">
              Explore services <UiIcon name="arrow-right" className="size-4" />
            </Link>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {guides.slice(1).map((guide) => (
              <article key={guide.number} className="flex min-h-[170px] flex-col justify-between rounded-[1.5rem] border border-[#e5e3dc] bg-white p-5 shadow-[0_8px_24px_rgba(20,38,31,.04)] sm:min-h-0 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#87928a]">{guide.label}</p>
                    <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-[#17211c]">{guide.title}</h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#eaf3ed] text-[#176b50]">
                    <UiIcon name={guide.icon} className="size-5" />
                  </span>
                </div>
                <div>
                  <p className="mt-3 text-sm leading-6 text-[#626a64]">{guide.detail}</p>
                  <Link href={guide.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#176b50] hover:text-[#12382f]">
                    {guide.action} <UiIcon name="arrow-right" className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
