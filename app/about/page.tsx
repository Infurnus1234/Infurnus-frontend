import Link from "next/link";
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Users,
  MapPinned,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-wider text-blue-400">
            ABOUT INFURNUS
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Connecting people, vehicles and businesses.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Infurnus is designed as a unified mobility and logistics platform
            connecting customers with drivers, fleet owners and specialized
            service providers.
          </p>

        </div>
      </section>

      {/* MISSION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              OUR MISSION
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Make transportation simple and connected.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Infurnus brings multiple transportation requirements into one
              platform. Customers can request passenger rides, logistics
              vehicles, service vehicles and premium vehicles based on their
              needs.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Providers can manage their driving activities, vehicles,
              drivers, trips and earnings from a unified provider platform.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore our services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl bg-blue-600 p-8 text-white sm:p-10">
            <MapPinned size={38} />

            <h3 className="mt-6 text-2xl font-bold">
              One platform. Multiple transportation needs.
            </h3>

            <p className="mt-3 leading-7 text-blue-100">
              From a daily commute to moving goods or requesting a specialized
              vehicle, Infurnus is designed around different mobility needs.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950">
              What we focus on
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {[
              {
                icon: Target,
                title: "Simplicity",
                text: "Keep the booking and provider experience straightforward.",
              },
              {
                icon: ShieldCheck,
                title: "Trust",
                text: "Build a platform around registered providers, vehicles and operational information.",
              },
              {
                icon: Users,
                title: "Connection",
                text: "Connect customers, drivers, fleet owners and businesses.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold text-slate-950">
            Ready to get started?
          </h2>

          <p className="mt-3 text-slate-500">
            Book a service or join Infurnus as a provider.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <Link
              href="/customer/book"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Book a Ride
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/provider/register"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Become a Provider
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}