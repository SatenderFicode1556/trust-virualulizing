import Link from "next/link";
import UiIcon from "./UiIcon";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Home", "/"],
      ["About us", "/about"],
      ["Industries", "/#industries"],
      ["Customer questions", "/#faq"],
    ],
  },
  {
    title: "Services",
    links: [
      ["AC repair", "/services/ac-repair"],
      ["Deep cleaning", "/services/deep-cleaning"],
      ["Plumbing", "/services/plumbing"],
      ["Electrician", "/services/electrician"],
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/trustonservices",
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17" cy="7" r="1.2" fill="currentColor" /></svg>,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/trustonservices",
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" fill="currentColor" /></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/trustonservices",
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4"><path d="M6.5 9.5H3V20h3.5V9.5ZM4.8 4A2 2 0 1 0 4.8 8a2 2 0 0 0 0-4Zm5 5.5V20h3.5v-5.6c0-1.5.7-2.3 2-2.3 1.2 0 1.7.8 1.7 2.3V20h3.5v-6.2c0-3.1-1.6-4.7-4.2-4.7-1.5 0-2.5.7-3.1 1.6V9.5H9.8Z" fill="currentColor" /></svg>,
  },
  {
    label: "X",
    href: "https://x.com/trustonservices",
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4"><path d="M15 10.6 21 4h-2.7l-4.6 5.1L10 4H4l6.4 8.9L4 20h2.7l5-5.5 4 5.5H22l-7-9.4Zm-2 2.2-1.1-1.5L7.7 6h1.1l3.5 4.8 1.1 1.5 4.5 5.8h-1.2L13 12.8Z" fill="currentColor" /></svg>,
  },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className = "inline-flex w-fit items-center gap-1.5 text-sm text-white/65 transition hover:translate-x-0.5 hover:text-[#b9e7d1]";
  if (href.startsWith("/")) return <Link href={href} className={className}>{children}</Link>;
  return <a href={href} className={className}>{children}</a>;
}

export default function Footer() {
  return (
    <footer className="bg-[#12382f] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-9 sm:px-8 sm:py-11 lg:grid-cols-[1.35fr_0.7fr_0.7fr_1fr] lg:gap-12 lg:px-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid size-11 place-items-center rounded-2xl bg-[#b9e7d1] text-sm text-[#133d32]">TS</span>
            <span className="text-lg">Truston<span className="text-[#8fd4b0]">Services</span></span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/68">
            Explore home services, compare starting prices, and contact our team if you need help choosing an option.
            Choose a service, review its options, then share your area and preferred visit time. Contact us to confirm availability and clarify what the listed price includes.
          </p>

          <div className="mt-5 grid max-w-md gap-2 text-sm text-white/78 sm:grid-cols-3">
            {[
              ["Starting prices", "shown clearly"],
              ["Service options", "to compare"],
              ["Real support", "when you need it"],
            ].map(([title, detail]) => (
              <div key={title} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.05] p-3">
                <UiIcon name="check" className="mt-0.5 size-4 shrink-0 text-[#8fd4b0]" />
                <span><span className="block font-semibold text-white">{title}</span><span className="mt-0.5 block text-xs text-white/55">{detail}</span></span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={`Visit TrustonServices on ${item.label}`} className="grid size-10 place-items-center rounded-xl border border-white/15 text-white/70 transition hover:border-[#8fd4b0] hover:bg-white/10 hover:text-white">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9e7d1]">{group.title}</h2>
            <nav aria-label={`${group.title} footer links`} className="mt-4 grid gap-3">
              {group.links.map(([label, href]) => <FooterLink key={label} href={href}>{label}</FooterLink>)}
            </nav>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9e7d1]">Talk with our team</h2>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">Need help choosing a service, checking your area, or understanding a starting price? Our team can help you with the next step.</p>
          <div className="mt-4 grid gap-3">
            <FooterLink href="tel:+911234567890"><UiIcon name="phone" />+91 12345 67890</FooterLink>
            <FooterLink href="mailto:support@trustonservices.com"><UiIcon name="mail" />support@trustonservices.com</FooterLink>
          </div>
          <Link href="/#services" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#b9e7d1] px-4 py-2.5 text-sm font-semibold text-[#133d32] transition hover:bg-white">
            Browse services <UiIcon name="arrow-right" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 TrustonServices. All rights reserved.</p>
          <Link href="/#faq" className="inline-flex w-fit items-center gap-1.5 transition hover:text-[#b9e7d1]">Questions? Visit our FAQs <UiIcon name="arrow-right" className="size-3.5" /></Link>
        </div>
      </div>
    </footer>
  );
}
