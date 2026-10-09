const serviceStandards = [
  {
    title: "Choose the work you need",
    detail: "Review service options and descriptions before sending a booking request.",
    marker: "01",
  },
  {
    title: "See a starting price first",
    detail: "Starting prices are shown with each service option to help you plan.",
    marker: "02",
  },
  {
    title: "Discuss extra work before it starts",
    detail: "If the job needs anything beyond the selected service, ask for the cost before proceeding.",
    marker: "03",
  },
];

export default function TrustedPartnersSection() {
  return (
    <section id="partners" className="bg-[#133d32] py-6 text-white sm:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b9e7d1]">A clear service experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Know what to expect before you book.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">We are building TrustonServices around straightforward choices and clear communication at every step.</p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {serviceStandards.map((item) => (
            <article key={item.marker} className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 sm:p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-[#b9e7d1] text-sm font-bold text-[#133d32]">{item.marker}</span>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
