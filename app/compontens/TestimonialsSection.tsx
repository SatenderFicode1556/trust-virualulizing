import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-6 sm:py-8">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">Customer feedback</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">We&apos;re new here, and ready to earn your trust.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#59615b]">We are growing our customer community. As people share their experiences, we&apos;ll feature genuine reviews here&mdash;with their permission.</p>
        </div>
        <div className="rounded-2xl border border-[#e3e8e2] bg-[#f5f7f4] p-6 sm:p-7 lg:max-w-sm">
          <p className="text-sm font-semibold text-[#133d32]">Customer stories are just getting started.</p>
          <p className="mt-2 text-sm leading-6 text-[#626a64]">We&apos;ll feature genuine experiences as customers share them. In the meantime, explore the services and ask us questions before booking.</p>
          <Link href="/#services" className="mt-5 inline-flex rounded-full bg-[#133d32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3027]">Explore services</Link>
        </div>
      </div>
    </section>
  );
}
