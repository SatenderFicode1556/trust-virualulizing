import Link from "next/link";

const platformLinks = [
  ["About", "/about"],
  ["Career", "/jobs"],
  ["Services", "/#services"],
  ["Booking", "/#services"],
  ["Industries", "/#industries"],
  ["Reviews", "/#testimonials"],
];

const serviceLinks = [
  ["AC repair", "/services/ac-repair"],
  ["Deep cleaning", "/services/deep-cleaning"],
  ["Plumbing", "/services/plumbing"],
  ["Electrician", "/services/electrician"],
];

const supportLinks = [
  ["Call Now", "tel:+911234567890"],
  ["Email Support", "mailto:support@trustonservices.com"],
  ["FAQs", "/#faq"],
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/trustonservices",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/trustonservices",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/trustonservices",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          d="M6.5 9.5H3V20h3.5V9.5ZM4.8 4A2 2 0 1 0 4.8 8a2 2 0 0 0 0-4Zm5 5.5V20h3.5v-5.6c0-1.5.7-2.3 2-2.3 1.2 0 1.7.8 1.7 2.3V20h3.5v-6.2c0-3.1-1.6-4.7-4.2-4.7-1.5 0-2.5.7-3.1 1.6V9.5H9.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/trustonservices",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          d="M15 10.6 21 4h-2.7l-4.6 5.1L10 4H4l6.4 8.9L4 20h2.7l5-5.5 4 5.5H22l-7-9.4Zm-2 2.2-1.1-1.5L7.7 6h1.1l3.5 4.8 1.1 1.5 4.5 5.8h-1.2L13 12.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className="transition hover:text-black">
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className="transition hover:text-black">
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 py-12 lg:grid-cols-[1.35fr_0.7fr_0.7fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="grid size-10 place-items-center rounded-xl bg-[#133d32] text-white">
              TS
            </span>
            Truston<span className="text-[#168365]">Services</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-black/60">
            Reliable home services with booking, team assignment, and field
            operations built into one customer-friendly platform.
          </p>

          <div className="mt-5 grid max-w-md gap-3 sm:grid-cols-3">
            {[
              ["4.8", "rating"],
              ["7 days", "support"],
              ["12k+", "bookings"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md bg-[#f7f4ef] p-3">
                <p className="font-semibold">{value}</p>
                <p className="mt-1 text-xs text-black/50">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit TrustonServices on ${item.label}`}
                className="grid size-10 place-items-center rounded-md border border-black/10 text-black/65 transition hover:border-black/30 hover:bg-black hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Platform
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-black/65">
            {platformLinks.map(([label, href]) => (
              <FooterLink key={label} href={href} label={label} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Services
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-black/65">
            {serviceLinks.map(([label, href]) => (
              <FooterLink key={label} href={href} label={label} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Contact
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-black/65">
            {supportLinks.map(([label, href]) => (
              <FooterLink key={label} href={href} label={label} />
            ))}
            <p className="rounded-md bg-[#f7f4ef] p-3 leading-6 text-black/60">
              Same-day slots may be available based on your location and team
              capacity.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 TrustonServices. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#services" className="hover:text-black">
              Service catalog
            </Link>
            <a href="mailto:support@trustonservices.com" className="hover:text-black">
              support@trustonservices.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
