import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-blue-700 px-6 py-14 text-center md:px-16">

          {/* Decorative circles */}
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-blue-500/30" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-blue-800/40" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              Your Journey Starts Here
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
              Ready to Move With Infurnus?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
              Whether you need a ride, want to rent a vehicle, send a
              package, or grow your business, Infurnus is built to move
              you forward.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Get Started
              </Link>

              <Link
                href="/business"
                className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/20"
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