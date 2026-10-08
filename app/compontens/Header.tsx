import Link from "next/link";
import BookingPopup from "./BookingPopup";

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/#services"],
  ["Industries", "/#industries"],
  ["Jobs", "/jobs"],
  ["Call", "tel:+911234567890"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e7e3dc] bg-[#fbfaf7]/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 px-5 py-3 sm:px-8 lg:flex lg:justify-between lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3 font-semibold tracking-tight">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#133d32] text-sm text-white shadow-sm sm:size-11 sm:text-base">TS</span>
          <span className="truncate text-base sm:text-lg">Truston<span className="text-[#168365]">Services</span></span>
        </Link>

        <div className="order-3 col-span-2 -mx-1 flex items-center gap-0.5 overflow-x-auto whitespace-nowrap text-xs font-medium text-[#565b57] sm:gap-1 sm:text-sm lg:order-none lg:mx-0">
          {navLinks.map(([label, href]) => (
            href.startsWith("/") ? (
              <Link key={label} href={href} className="rounded-full px-2.5 py-2 transition hover:bg-[#edf3ef] hover:text-[#133d32] sm:px-3.5">
                {label}
              </Link>
            ) : (
              <a key={label} href={href} className="rounded-full px-2.5 py-2 transition hover:bg-[#edf3ef] hover:text-[#133d32] sm:px-3.5">
                {label}
              </a>
            )
          ))}
        </div>

        <div className="col-start-2 row-start-1 flex items-center gap-2 lg:order-3">
          <a href="tel:+911234567890" className="hidden rounded-full px-3 py-2 text-sm font-semibold text-[#133d32] sm:inline-flex">+91 12345 67890</a>
          <BookingPopup triggerClassName="rounded-full bg-[#133d32] px-4 py-2.5 shadow-none hover:bg-[#0d3027] sm:px-5" />
        </div>
      </nav>
    </header>
  );
}
