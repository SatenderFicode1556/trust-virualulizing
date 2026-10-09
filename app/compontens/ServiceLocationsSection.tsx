"use client";

import { useState } from "react";
import UiIcon from "./UiIcon";

const locations = [
  "Afzalgarh", "Agra", "Ahmedabad", "Alipur", "Antu",
  "Bawana", "Begusarai", "Bhojpur", "Central Delhi", "Chandigarh",
  "Delhi", "Deoli", "Dwarka", "East Delhi", "Faizabad",
  "Faridabad", "Farrukhnagar", "Fatehabad", "Gahlon", "Gandhinagar",
  "Gaya", "Ghaziabad", "Ghazipur", "Greater Noida", "Gurgaon",
];

const initialLocationCount = 15;

export default function ServiceLocationsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleLocations = showAll ? locations : locations.slice(0, initialLocationCount);

  return (
    <section id="service-locations" className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf4ee] px-4 py-2 text-sm font-semibold text-[#176b50]">
            <UiIcon name="map-pin" className="size-4" /> Service locations
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#17211c] sm:text-4xl">Check if we serve your area.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#626a64] sm:text-base">
            Browse the locations listed below, then call our team to confirm service availability for your address.
          </p>
        </div>

        <ul className="mx-auto mt-7 grid max-w-6xl grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-5">
          {visibleLocations.map((location) => (
            <li key={location} className="flex min-h-11 items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm font-medium text-[#33443a] transition hover:bg-[#f5f8f5] sm:text-base">
              <UiIcon name="map-pin" className="size-4 shrink-0 text-[#168365]" />
              <span>{location}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {locations.length > initialLocationCount ? (
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll((value) => !value)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#133d32] px-5 text-sm font-semibold text-white transition hover:bg-[#0d3027]"
            >
              {showAll ? "Show fewer locations" : "View all listed locations"}
              <UiIcon name="arrow-right" className={`size-4 rotate-90 transition-transform ${showAll ? "-rotate-90" : ""}`} />
            </button>
          ) : null}
          <a href="tel:+911234567890" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d8dfd9] bg-white px-5 text-sm font-semibold text-[#20382e] transition hover:bg-[#f4f8f5]">
            <UiIcon name="phone" className="size-4" /> Confirm your area
          </a>
        </div>
      </div>
    </section>
  );
}
