"use client";

import { useState } from "react";
import { faqs } from "../data/Faq.data";
import UiIcon from "./UiIcon";

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#f4f7f3] py-8 sm:py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div className="h-fit lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dce8df] bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#176b50] shadow-sm">
            <UiIcon name="sparkle" className="size-4" /> Help center
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#17211c] sm:text-4xl">
            Answers before you book.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#626a64] sm:text-base sm:leading-7">
            Find practical details about service options, starting prices, visit timing, and getting help with a booking.
          </p>

          <div className="mt-6 rounded-2xl bg-[#133d32] p-5 text-white shadow-[0_14px_35px_rgba(19,61,50,.15)] sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-[#b9e7d1]"><UiIcon name="phone" className="size-5" /></span>
            <p className="mt-4 text-base font-semibold">Prefer to speak with our team?</p>
            <p className="mt-1 text-sm leading-6 text-white/70">Call us if you need help choosing a service or confirming the next step.</p>
            <a href="tel:+911234567890" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#b9e7d1] px-4 py-2.5 text-sm font-semibold text-[#133d32] transition hover:bg-white">
              <UiIcon name="phone" className="size-4" /> +91 12345 67890
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#87928a]">Common questions</p>
          <div className="space-y-2">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article key={item.question} className={`rounded-2xl border transition-colors ${isOpen ? "border-[#c7ddcf] bg-white shadow-[0_8px_24px_rgba(20,38,31,.06)]" : "border-[#e3e9e3] bg-white/70 hover:border-[#cad9ce] hover:bg-white"}`}>
                  <button
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3.5 text-left sm:px-5"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className={`text-sm font-semibold leading-6 sm:text-[15px] ${isOpen ? "text-[#133d32]" : "text-[#25332b]"}`}>{item.question}</span>
                    <span className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-[#133d32] text-white" : "bg-[#eaf2ec] text-[#176b50]"}`}>
                      <UiIcon name="plus" className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
                    </span>
                  </button>
                  <div id={answerId} hidden={!isOpen} className="mx-4 border-t border-[#e8eee8] px-1 pb-4 pt-3 sm:mx-5 sm:px-0">
                    <p className="max-w-xl text-sm leading-6 text-[#626a64]">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
