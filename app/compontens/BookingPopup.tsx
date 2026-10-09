"use client";

import type { FormEvent, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { services } from "./homeData";

type BookingPopupProps = {
  initialCategoryId?: string;
  initialServiceId?: string;
  triggerClassName?: string;
  triggerLabel?: string;
  triggerContent?: ReactNode;
};

const fieldClass = "mt-1.5 min-h-11 w-full rounded-lg border border-[#d9dfda] bg-white px-3.5 py-2.5 text-sm text-[#202a24] outline-none transition placeholder:text-[#929b95] focus:border-[#26745c] focus:ring-2 focus:ring-[#26745c]/15";

export default function BookingPopup({
  initialCategoryId,
  initialServiceId,
  triggerClassName = "",
  triggerLabel = "Book Service",
  triggerContent,
}: BookingPopupProps) {
  const defaultService = services[0];
  const [isOpen, setIsOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [serviceId, setServiceId] = useState(initialServiceId ?? defaultService.id);
  const [categoryId, setCategoryId] = useState(initialCategoryId ?? defaultService.subcategories[0].id);
  const [slot, setSlot] = useState("Morning (9 am - 12 pm)");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedService = services.find((service) => service.id === serviceId) ?? defaultService;
  const selectedCategory = selectedService.subcategories.find((category) => category.id === categoryId) ?? selectedService.subcategories[0];

  useEffect(() => setPortalRoot(document.body), []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  function openForm() {
    setSubmitted(false);
    setIsOpen(true);
  }

  function changeService(nextId: string) {
    const nextService = services.find((service) => service.id === nextId) ?? defaultService;
    setServiceId(nextService.id);
    setCategoryId(nextService.subcategories[0].id);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const modal = isOpen ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#10251e]/55 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}
    >
      <section role="dialog" aria-modal="true" aria-labelledby="booking-title" className="my-auto max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl border border-[#e7eae5] bg-white shadow-[0_24px_80px_rgba(10,30,20,.24)]">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e9ece7] bg-white px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#718078]">TrustonServices · Booking request</p>
            <h2 id="booking-title" className="mt-1 text-xl font-semibold tracking-tight text-[#1b2c23]">{submitted ? "Request prepared" : "Book a service"}</h2>
          </div>
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Close booking form" className="grid size-9 place-items-center rounded-full border border-[#dce1dc] text-lg leading-none text-[#52615a] transition hover:bg-[#f2f4f1]">×</button>
        </header>

        {submitted ? (
          <div aria-live="polite" className="p-5 sm:p-6">
            <div className="rounded-xl border border-[#dce9df] bg-[#f3f8f3] p-4 text-sm leading-6 text-[#43584a]">
              <p className="font-semibold text-[#1b4936]">Your details are ready.</p>
              <p className="mt-1">This website does not send or save booking requests yet. Call our team to check availability and confirm your service.</p>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="tel:+911234567890" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#133d32] px-4 text-sm font-semibold text-white transition hover:bg-[#0c3027]">Call to confirm</a>
              <button type="button" onClick={() => setIsOpen(false)} className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#d9dfda] px-4 text-sm font-semibold text-[#34463b] hover:bg-[#f7f8f6]">Close</button>
            </div>
          </div>
        ) : (
          <form onSubmit={submitForm} className="space-y-4 p-5 sm:p-6">
            <p className="text-sm leading-6 text-[#68756d]">Choose your service and share a few visit details. Our team will follow up to confirm availability.</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[#344239]">Service
                <select className={fieldClass} value={serviceId} onChange={(event) => changeService(event.target.value)}>
                  {services.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-[#344239]">Service type
                <select className={fieldClass} value={selectedCategory.id} onChange={(event) => setCategoryId(event.target.value)}>
                  {selectedService.subcategories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-[#344239]">Preferred time
                <select className={fieldClass} value={slot} onChange={(event) => setSlot(event.target.value)}>
                  <option>Morning (9 am - 12 pm)</option>
                  <option>Afternoon (12 pm - 4 pm)</option>
                  <option>Evening (4 pm - 8 pm)</option>
                  <option>Weekend</option>
                  <option>Flexible</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-[#344239]">Pincode
                <input className={fieldClass} inputMode="numeric" autoComplete="postal-code" maxLength={6} pattern="[0-9]{6}" placeholder="6-digit pincode" value={pincode} onChange={(event) => setPincode(event.target.value.replace(/\D/g, "").slice(0, 6))} required />
              </label>
              <label className="block text-sm font-medium text-[#344239] sm:col-span-2">Phone number
                <input className={fieldClass} type="tel" inputMode="tel" autoComplete="tel" placeholder="Your contact number" value={phone} onChange={(event) => setPhone(event.target.value)} required />
              </label>
              <label className="block text-sm font-medium text-[#344239] sm:col-span-2">Service address
                <textarea className={`${fieldClass} min-h-20 resize-y`} autoComplete="street-address" placeholder="House or flat, street, area and landmark" value={address} onChange={(event) => setAddress(event.target.value)} required />
              </label>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#e9ece7] pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#68756d]">From <span className="font-semibold text-[#263a31]">Rs. {selectedCategory.price}</span> <span aria-hidden="true">·</span> {selectedCategory.duration}</p>
              <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#133d32] px-6 text-sm font-semibold text-white transition hover:bg-[#0c3027]">Continue</button>
            </div>
            <p className="text-xs leading-5 text-[#7b837d]">No payment is taken here. Any additional work or cost is confirmed with you before it begins.</p>
          </form>
        )}
      </section>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        aria-label={triggerContent ? triggerLabel : undefined}
        className={triggerContent ? triggerClassName : `rounded-xl bg-[#133d32] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0c3027] ${triggerClassName}`}
        onClick={openForm}
      >
        {triggerContent ?? triggerLabel}
      </button>
      {portalRoot && modal ? createPortal(modal, portalRoot) : null}
    </>
  );
}
