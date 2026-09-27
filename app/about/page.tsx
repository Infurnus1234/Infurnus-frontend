import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Users,
  MapPinned,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#E0E5EC]">

      {/* HERO */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl neu-extruded rounded-[40px] bg-[#E0E5EC] p-10 md:p-16">

          <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
            ABOUT INFURNUS
          </span>

          <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-[#3D4852] sm:text-5xl">
            Connecting people, vehicles and businesses.
          </h1>

          <p className="font-sans mt-5 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            Infurnus is designed as a unified tactile mobility and logistics platform
            connecting customers with drivers, fleet owners and specialized
            service providers.
          </p>

        </div>
      </section>

      {/* MISSION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
              OUR MISSION
            </span>

            <h2 className="font-display mt-5 text-3xl font-extrabold text-[#3D4852] md:text-4xl">
              Make transportation simple and connected.
            </h2>

            <p className="font-sans mt-5 leading-relaxed text-[#6B7280]">
              Infurnus brings multiple transportation requirements into one
              tactile platform. Customers can request passenger rides, logistics
              vehicles, service vehicles and premium vehicles based on their
              needs.
            </p>

            <p className="font-sans mt-4 leading-relaxed text-[#6B7280]">
              Providers can manage their driving activities, vehicles,
              drivers, trips and earnings from a unified provider platform.
            </p>

            <Link
              href="/services"
              className="neu-btn neu-btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3 font-bold text-sm"
            >
              <span>Explore our services</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-8 sm:p-10 text-[#3D4852]">
            <div className="neu-inset-deep flex h-16 w-16 items-center justify-center rounded-2xl text-[#000000]">
              <MapPinned size={32} />
            </div>

            <h3 className="font-display mt-6 text-2xl font-bold text-[#3D4852]">
              One platform. Multiple transportation needs.
            </h3>

            <p className="font-sans mt-3 leading-relaxed text-[#6B7280]">
              From a daily commute to moving goods or requesting a specialized
              vehicle, Infurnus is designed around different mobility needs.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
              OUR CORE FOCUS
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold text-[#3D4852]">
              What we focus on
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {[
              {
                icon: Target,
                title: "Simplicity",
                text: "Keep the booking and provider experience straightforward and tactile.",
              },
              {
                icon: ShieldCheck,
                title: "Trust",
                text: "Build a platform around registered providers, vehicles and operational information.",
              },
              {
                icon: Users,
                title: "Connection",
                text: "Connect customers, drivers, fleet owners and businesses seamlessly.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="neu-extruded neu-extruded-hover rounded-[32px] bg-[#E0E5EC] p-8 transition-all duration-300"
                >
                  <div className="neu-inset-deep flex h-14 w-14 items-center justify-center rounded-2xl text-[#000000]">
                    <Icon size={26} />
                  </div>

                  <h3 className="font-display mt-6 text-xl font-bold text-[#3D4852]">
                    {item.title}
                  </h3>

                  <p className="font-sans mt-3 text-sm leading-relaxed text-[#6B7280]">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl neu-extruded rounded-[36px] bg-[#E0E5EC] p-12 text-center">

          <h2 className="font-display text-3xl font-extrabold text-[#3D4852] md:text-4xl">
            Ready to get started?
          </h2>

          <p className="font-sans mt-3 text-base text-[#6B7280]">
            Book a service or join Infurnus as a provider today.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/customer/book"
              className="neu-btn neu-btn-primary inline-flex items-center gap-2 px-7 py-4 font-bold text-sm"
            >
              <span>Book a Ride</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/provider/register"
              className="neu-btn px-7 py-4 font-bold text-sm text-[#3D4852]"
            >
              Become a Provider
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
