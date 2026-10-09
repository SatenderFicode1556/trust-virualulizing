export default function CentralLoader() {
  return (
    <div role="status" aria-label="Loading page" className="grid min-h-[100svh] place-items-center bg-[#133d32]/20 px-5 backdrop-blur-md">
      <section className="w-full">
        <div className="" aria-hidden="true">
          <span className="loader" />
        </div>
      </section>
    </div>
  );
}
