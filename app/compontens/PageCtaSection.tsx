import Link from "next/link";
import BookingPopup from "./BookingPopup";

type PageCtaSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  booking?: { serviceId: string; categoryId: string };
  secondaryLabel?: string;
  secondaryHref?: string;
};

function ActionLink({ href, children, secondary = false }: { href: string; children: string; secondary?: boolean }) {
  const className = secondary
    ? "inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
    : "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#133d32] transition hover:bg-[#eaf4ee]";

  if (href.startsWith("/")) {
    return <Link href={href} className={className}>{children}</Link>;
  }

  return <a href={href} className={className}>{children}</a>;
}

export default function PageCtaSection({
  eyebrow = "Next step",
  title,
  description,
  actionLabel,
  actionHref,
  booking,
  secondaryLabel,
  secondaryHref,
}: PageCtaSectionProps) {
  return (
    <section className="bg-white px-5 py-4 sm:px-8 sm:py-6 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 overflow-hidden rounded-[1.75rem] bg-[#133d32] p-6 text-white shadow-[0_20px_50px_rgba(19,61,50,.14)] sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-9">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b9e7d1]">{eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">{description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          {booking ? (
            <BookingPopup
              initialServiceId={booking.serviceId}
              initialCategoryId={booking.categoryId}
              triggerLabel={actionLabel}
              triggerClassName="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#133d32] shadow-none transition hover:bg-[#eaf4ee]"
            />
          ) : <ActionLink href={actionHref}>{actionLabel}</ActionLink>}
          {secondaryLabel && secondaryHref ? <ActionLink href={secondaryHref} secondary>{secondaryLabel}</ActionLink> : null}
        </div>
      </div>
    </section>
  );
}
