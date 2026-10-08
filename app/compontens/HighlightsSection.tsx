type Highlight = {
  title: string;
  detail: string;
  tag: string;
};

type HighlightsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Highlight[];
  tone?: "light" | "white";
};

export default function HighlightsSection({
  eyebrow,
  title,
  description,
  items,
  tone = "light",
}: HighlightsSectionProps) {
  return (
    <section className={tone === "white" ? "bg-white py-16 sm:py-20" : "bg-[#f2f5f1] py-16 sm:py-20"}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168365]">{eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#59615b] lg:justify-self-end">{description}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-[#e3e8e2] bg-white p-6 shadow-[0_3px_14px_rgba(20,38,31,.04)] sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-[#e8f3ed] text-sm font-bold text-[#176b50]">0{index + 1}</span>
                <span className="rounded-full bg-[#f3f6f3] px-3 py-1.5 text-xs font-semibold text-[#557263]">{item.tag}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#626a64]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
