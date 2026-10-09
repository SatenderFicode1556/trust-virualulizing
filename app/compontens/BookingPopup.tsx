"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { services, SITE_IMAGE } from "./homeData";

type BookingPopupProps = {
  initialCategoryId?: string;
  initialServiceId?: string;
  triggerClassName?: string;
  triggerLabel?: string;
};

const slots = [
  "Morning (9:00 AM–12:00 PM)",
  "Afternoon (12:00–4:00 PM)",
  "Evening (4:00–8:00 PM)",
  "Weekend",
  "Flexible",
];

const bookingSteps = [
  { title: "Service", helper: "Choose the work type" },
  { title: "Schedule", helper: "Pick slot and area" },
  { title: "Details", helper: "Add contact and address" },
  { title: "Review", helper: "Confirm request" },
];

export default function BookingPopup({
  initialCategoryId,
  initialServiceId,
  triggerClassName = "",
  triggerLabel = "Book Service",
}: BookingPopupProps) {
  const fallbackService = services[0];
  const [isOpen, setIsOpen] = useState(false);
  const [serviceId, setServiceId] = useState(
    initialServiceId ?? fallbackService.id,
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [slot, setSlot] = useState(slots[0]);
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const selectedService =
    services.find((service) => service.id === serviceId) ?? fallbackService;

  const fallbackCategory = selectedService.subcategories[0];
  const [categoryId, setCategoryId] = useState(
    initialCategoryId ?? fallbackCategory.id,
  );

  const selectedCategory = useMemo(() => {
    return (
      selectedService.subcategories.find((category) => category.id === categoryId) ??
      selectedService.subcategories[0]
    );
  }, [categoryId, selectedService]);

  const canContinue =
    currentStep === 0 ||
    (currentStep === 1 && pincode.trim().length >= 6) ||
    (currentStep === 2 &&
      phone.trim().length >= 10 &&
      address.trim().length >= 12) ||
    currentStep === 3;

  function handleServiceChange(nextServiceId: string) {
    const nextService =
      services.find((service) => service.id === nextServiceId) ?? fallbackService;

    setServiceId(nextService.id);
    setCategoryId(nextService.subcategories[0].id);
  }

  function handleOpen() {
    setCurrentStep(0);
    setIsConfirmed(false);
    setIsOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (currentStep < bookingSteps.length - 1) {
      if (canContinue) {
        setCurrentStep((step) => step + 1);
      }
      return;
    }

    setIsConfirmed(true);
  }

  return (
    <>
      <button
        type="button"
        className={`rounded-md bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm ${triggerClassName}`}
        onClick={handleOpen}
      >
        {triggerLabel}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/55 px-4 py-5 backdrop-blur-sm">
          <div className="mx-auto flex min-h-full max-w-4xl items-center justify-center">
            <div className="max-h-[92vh] w-full overflow-y-auto rounded-lg bg-white shadow-2xl">
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-black/10 bg-white px-5 py-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    Booking details
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    Tell us what you need
                  </h2>
                </div>
                <button
                  type="button"
                  className="grid size-9 place-items-center rounded-md border border-black/15 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close booking popup"
                >
                  x
                </button>
              </div>

              <form className="grid gap-5 p-5" onSubmit={handleSubmit}>
                {isConfirmed ? (
                  <div className="grid gap-5 py-6 text-center">
                    <div className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-100 text-xl font-semibold text-emerald-700">
                      OK
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">
                        One last step to confirm
                      </h3>
                      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-black/58">
                        Your details have not been sent from this website. Call
                        our team and share your selected service and preferred
                        time to confirm the request.
                      </p>
                    </div>
                    <div className="mx-auto flex flex-wrap justify-center gap-3">
                      <a href="tel:+911234567890" className="rounded-full bg-[#133d32] px-5 py-3 text-sm font-semibold text-white">Call to confirm</a>
                      <button type="button" className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold" onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-3 md:grid-cols-4">
                      {bookingSteps.map((step, index) => {
                        const isActive = index === currentStep;
                        const isDone = index < currentStep;
                        const isLocked = index > currentStep;

                        return (
                          <button
                            key={step.title}
                            type="button"
                            className={`rounded-md border p-3 text-left transition disabled:cursor-not-allowed disabled:opacity-50 ${
                              isActive
                                ? "border-black bg-black text-white"
                                : isDone
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                  : "border-black/10 bg-[#f7f4ef] text-black"
                            }`}
                            disabled={isLocked}
                            onClick={() => setCurrentStep(index)}
                          >
                            <span className="text-xs font-semibold uppercase tracking-[0.14em] opacity-65">
                              Step 0{index + 1}
                            </span>
                            <span className="mt-2 block font-semibold">
                              {step.title}
                            </span>
                            <span className="mt-1 block text-xs opacity-65">
                              {step.helper}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="overflow-hidden rounded-lg bg-[#f7f4ef]">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={SITE_IMAGE}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 330px, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-black/55">
                            Selected package
                          </p>
                          <p className="mt-1 text-xl font-semibold">
                            {selectedCategory.name}
                          </p>
                          <p className="mt-1 text-sm text-black/60">
                            Estimated visit: {selectedCategory.duration}
                          </p>
                          <p className="mt-3 text-2xl font-semibold">
                            Rs. {selectedCategory.price}
                          </p>
                        </div>
                      </div>

                      <div className="grid content-start gap-4">
                        {currentStep === 0 ? (
                          <>
                            <label className="text-sm font-medium">
                              Service
                              <select
                                className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3"
                                value={serviceId}
                                onChange={(event) =>
                                  handleServiceChange(event.target.value)
                                }
                              >
                                {services.map((service) => (
                                  <option key={service.id} value={service.id}>
                                    {service.name}
                                  </option>
                                ))}
                              </select>
                            </label>

                            <div>
                              <p className="text-sm font-medium">Service type</p>
                              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                                {selectedService.subcategories.map((category) => (
                                  <button
                                    key={category.id}
                                    type="button"
                                    className={`rounded-md border p-3 text-left ${
                                      category.id === selectedCategory.id
                                        ? "border-black bg-black text-white"
                                        : "border-black/10 bg-white"
                                    }`}
                                    onClick={() => setCategoryId(category.id)}
                                  >
                                    <span className="font-semibold">
                                      {category.name}
                                    </span>
                                    <span className="mt-1 block text-sm opacity-65">
                                      Rs. {category.price} - {category.duration}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : null}

                        {currentStep === 1 ? (
                          <div className="grid gap-4 sm:grid-cols-2">
                            <label className="text-sm font-medium">
                                Preferred time
                              <select
                                className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3"
                                value={slot}
                                onChange={(event) => setSlot(event.target.value)}
                              >
                                {slots.map((slotOption) => (
                                  <option key={slotOption}>{slotOption}</option>
                                ))}
                              </select>
                            </label>
                            <label className="text-sm font-medium">
                              Pincode
                              <input
                                className="mt-2 w-full rounded-md border border-black/15 px-3 py-3"
                                inputMode="numeric"
                                maxLength={6}
                                placeholder="110001"
                                value={pincode}
                                onChange={(event) => setPincode(event.target.value)}
                              />
                            </label>
                          </div>
                        ) : null}

                        {currentStep === 2 ? (
                          <>
                            <label className="text-sm font-medium">
                              Phone
                              <input
                                className="mt-2 w-full rounded-md border border-black/15 px-3 py-3"
                                inputMode="tel"
                                placeholder="+91 98765 43210"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                              />
                            </label>
                            <label className="text-sm font-medium">
                              Full address
                              <textarea
                                className="mt-2 min-h-28 w-full rounded-md border border-black/15 px-3 py-3"
                                placeholder="House number, street, landmark, city"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                              />
                            </label>
                          </>
                        ) : null}

                        {currentStep === 3 ? (
                          <div className="rounded-lg border border-black/10 bg-[#fbfaf7] p-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/45">
                              Review booking
                            </p>
                            <div className="mt-4 grid gap-3 text-sm text-black/65">
                              <p className="flex justify-between gap-4">
                                <span>Service</span>
                                <span className="font-semibold text-black">
                                  {selectedCategory.name}
                                </span>
                              </p>
                              <p className="flex justify-between gap-4">
                                <span>Slot</span>
                                <span className="font-semibold text-black">
                                  {slot}
                                </span>
                              </p>
                              <p className="flex justify-between gap-4">
                                <span>Pincode</span>
                                <span className="font-semibold text-black">
                                  {pincode || "Not added"}
                                </span>
                              </p>
                              <p className="flex justify-between gap-4">
                                <span>Phone</span>
                                <span className="font-semibold text-black">
                                  {phone || "Not added"}
                                </span>
                              </p>
                              <p className="border-t border-black/10 pt-3">
                                <span className="block text-black/50">Address</span>
                                <span className="mt-1 block font-semibold text-black">
                                  {address || "Not added"}
                                </span>
                              </p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto]">
                      <button
                        type="button"
                        className="rounded-md border border-black/15 px-5 py-3 text-sm font-semibold disabled:opacity-40"
                        disabled={currentStep === 0}
                        onClick={() => setCurrentStep((step) => step - 1)}
                      >
                        Back
                      </button>
                      <a
                        href="tel:+911234567890"
                        className="rounded-md border border-black/15 px-5 py-3 text-center text-sm font-semibold"
                      >
                        Call Now
                      </a>
                      <button
                        type="submit"
                        className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white disabled:opacity-45"
                        disabled={!canContinue}
                      >
                        {currentStep === bookingSteps.length - 1
                          ? "Review booking details"
                          : "Continue"}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
