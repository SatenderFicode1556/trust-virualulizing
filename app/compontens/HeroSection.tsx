import Image from "next/image";
import Button from "./Button";
import { metrics } from "./homeData";

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:py-20">
      <div className="flex flex-col justify-center">
        <p className="mb-3 w-fit rounded-full border border-[#dce8e0] bg-white px-4 py-2 text-xs font-semibold text-[#315c4c] shadow-sm sm:mb-5 sm:text-sm">
          Trusted services at your doorstep
        </p>
        <h1 className="max-w-3xl text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-[4.5rem]">
          Home servicing made simple, trusted, and on time.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#555e58] sm:mt-6 sm:text-lg sm:leading-8">
          We majorly provide AC service and repair, home deep cleaning, plumbing
          support, and salon-at-home care with clear prices, verified
          professionals, and convenient booking slots.
        </p>
        <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
          <Button href="/#services" className="text-center sm:px-5">
            Explore services
          </Button>
          <Button href="/#faq" variant="secondary" className="text-center sm:px-5">
            Common questions
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={label} className="rounded-md bg-white p-4 shadow-sm">
              <p className="text-2xl font-semibold">{value}</p>
              <p className="mt-1 text-sm text-black/58">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[#d8e6e0] shadow-2xl shadow-[#18372b]/15 sm:min-h-[460px] lg:min-h-[520px]">
        <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-3">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/services/ac-repair-photo.png"
              alt="AC repair home service"
              fill
              sizes="(min-width: 1024px) 280px, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/services/deep-cleaning-photo.png"
              alt="Deep cleaning home service"
              fill
              sizes="(min-width: 1024px) 280px, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/services/electrician-photo.png"
              alt="Electrician home service"
              fill
              sizes="(min-width: 1024px) 280px, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/services/home-painter-photo.png"
              alt="Home painter service"
              fill
              sizes="(min-width: 1024px) 280px, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-md bg-white/92 p-3 shadow-xl backdrop-blur sm:left-5 sm:top-5 sm:p-4">
          <p className="text-sm text-black/55">Most booked today</p>
          <p className="mt-1 font-semibold">AC repair, cleaning, electrician</p>
          <p className="mt-3 text-sm text-emerald-700">
            Verified professionals available nearby
          </p>
        </div>
        <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black p-4 text-white shadow-2xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-white/58">Today&apos;s availability</p>
              <p className="mt-1 text-xl font-semibold sm:text-2xl">Professionals nearby</p>
            </div>
            <span className="rounded-md bg-white px-2 py-2 text-xs font-semibold text-black sm:px-3 sm:text-sm">
              96 online
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5">
              {["Services", "Bookings", "Rating"].map((label, index) => (
                <div key={label} className="rounded-md bg-white/10 p-2 sm:p-3">
                  <p className="text-lg font-semibold sm:text-xl">
                  {[24, 76, "4.8"][index]}
                </p>
                <p className="text-xs text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
