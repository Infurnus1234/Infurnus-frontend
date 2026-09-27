import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#E0E5EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-[#E0E5EC] neu-extruded px-6 py-16 text-center md:px-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full neu-inset-deep flex items-center justify-center pointer-events-none opacity-60">
            <div className="h-44 w-44 rounded-full neu-extruded bg-[#E0E5EC] flex items-center justify-center">
              <div className="h-28 w-28 rounded-full neu-inset-sm bg-[#E0E5EC]" />
            </div>
          </div>

          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full neu-inset-deep flex items-center justify-center pointer-events-none opacity-60">
            <div className="h-52 w-52 rounded-full neu-extruded bg-[#E0E5EC] flex items-center justify-center">
              <div className="h-32 w-32 rounded-full neu-inset-sm bg-[#E0E5EC]" />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
              Your Journey Starts Here
            </span>

            <h2 className="font-display mt-6 text-3xl font-extrabold text-[#3D4852] md:text-5xl tracking-tight">
              Ready to Move With Infurnus?
            </h2>

            <p className="font-sans mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6B7280] md:text-lg">
              Whether you need a ride, want to rent a vehicle, send a package, or grow your business, Infurnus is built to move you forward with tactile precision.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/register"
                className="neu-btn neu-btn-primary px-8 py-4 font-bold text-base"
              >
                Get Started
              </Link>

              <Link
                href="/business"
                className="neu-btn px-8 py-4 font-bold text-base text-[#3D4852]"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
