import { trustedPartners } from "./homeData";

export default function TrustedPartnersSection() {
  return (
    <section id="partners" className="bg-[#133d32] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b9e7d1]">
              Trust network
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              A service company backed by verified people and reliable systems.
            </h2>
          </div>
          <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-4 md:grid-cols-3">
            {[
              ["4.8", "average rating"],
              ["42", "active city zones"],
              ["12k+", "monthly bookings"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md bg-white/10 p-4">
                <p className="text-2xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustedPartners.map((partner) => (
            <article
              key={partner.name}
              className="rounded-lg border border-white/10 bg-white/[0.07] p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-md bg-[#a7e8c7] text-sm font-semibold text-black">
                  TS
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-black">
                  {partner.metric}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{partner.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">
                {partner.detail}
              </p>
              <p className="mt-5 rounded-md border border-white/10 px-3 py-2 text-sm font-semibold text-[#a7e8c7]">
                Verified network
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
