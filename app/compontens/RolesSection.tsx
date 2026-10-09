import Button from "./Button";
import { roleCards } from "./homeData";

export default function RolesSection() {
  return (
    <section id="roles" className="bg-[#202622] py-6 text-white sm:py-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Role dashboards
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Customer app outside. CTO-grade control inside.
            </h2>
          </div>
          <Button href="tel:+911234567890" variant="light" className="w-fit">
            Call Now
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roleCards.map((card) => (
            <article
              key={card.role}
              className="rounded-lg border border-white/12 bg-white/[0.07] p-5"
            >
              <p className="text-sm font-semibold text-[#a7e8c7]">{card.role}</p>
              <h3 className="mt-3 min-h-16 text-xl font-semibold">
                {card.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/68">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#a7e8c7]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
