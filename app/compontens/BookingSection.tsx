import { bookingSteps } from "./homeData";

export default function BookingSection() {
  return (
    <section
      id="booking"
      className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:py-8 lg:grid-cols-[0.78fr_1.22fr]"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
          Booking process
        </p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
          Request a home service in a few simple steps.
        </h2>
        <p className="mt-4 text-black/62">
          Choose a service, tell us what you need, pick a preferred time, and
          review your details before sending a request.
        </p>
        <div className="mt-6 rounded-lg bg-black p-5 text-white">
          <p className="text-sm text-white/55">Before you send a request</p>
          <p className="mt-2 text-2xl font-semibold">Know the starting price</p>
          <p className="mt-3 text-sm leading-6 text-white/62">
            Compare listed service options, starting prices, and estimated visit times.
          </p>
        </div>
      </div>
      <div className="rounded-lg bg-white p-5 shadow-sm">
        <div className="grid gap-3 md:grid-cols-4">
          {bookingSteps.map((step, index) => (
            <div
              key={step}
              className="relative min-h-36 rounded-md border border-black/10 bg-[#f7f4ef] p-4"
            >
              <span className="grid size-9 place-items-center rounded-md bg-black text-sm font-semibold text-white">
                0{index + 1}
              </span>
              <p className="mt-5 font-semibold">{step}</p>
              <p className="mt-2 text-sm leading-5 text-black/55">
                {[
                  "Browse the available service categories.",
                  "Choose the type of work you need.",
                  "Share your preferred time and service area.",
                  "Review your details before confirming.",
                ][index]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-4 rounded-md border border-black/10 bg-[#fbfaf7] p-4 md:grid-cols-3">
          <label className="text-sm font-medium">
            Service
            <select className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3">
              <option>AC repair</option>
              <option>Deep cleaning</option>
              <option>Salon at home</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Slot
            <select className="mt-2 w-full rounded-md border border-black/15 bg-white px-3 py-3">
              <option>Today, 4:00 PM</option>
              <option>Tomorrow, 10:00 AM</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Pincode
            <input
              className="mt-2 w-full rounded-md border border-black/15 px-3 py-3"
              placeholder="110001"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
