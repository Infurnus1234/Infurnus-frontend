import Link from "next/link";
import {
  ArrowRight,
  Car,
  Package,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Passenger",
    subtitle: "Everyday rides made simple",
    description:
      "Book a ride from your pickup location to your destination with transparent estimated fares.",
    icon: Car,
    color: "blue",
    examples: ["Bike", "Auto", "Mini / Compact", "Sedan", "SUV"],
    pricing: "Base Fare + Distance + Time + Waiting + Applicable Charges",
  },
  {
    title: "Logistics",
    subtitle: "Move goods with ease",
    description:
      "Book commercial vehicles for furniture, parcels, business goods and other transportation needs.",
    icon: Package,
    color: "green",
    examples: [
      "Mini Truck",
      "Pickup",
      "Tata Ace",
      "Delivery Vehicle",
      "Large Truck",
    ],
    pricing:
      "Base Fare + Distance + Vehicle Type + Load + Waiting + Loading / Unloading",
  },
  {
    title: "Service Vehicle",
    subtitle: "Help when you need it",
    description:
      "Request specialized vehicles such as ambulances, towing vans, JCBs and recovery vehicles.",
    icon: ShieldCheck,
    color: "orange",
    examples: [
      "Ambulance",
      "Towing Van",
      "JCB",
      "Recovery Vehicle",
      "Roadside Assistance",
    ],
    pricing: "Trip Based Pricing",
  },
  {
    title: "Premium Vehicle",
    subtitle: "Travel in comfort",
    description:
      "Book premium SUVs and vehicles for personal travel, events, business use and hourly requirements.",
    icon: Car,
    color: "purple",
    examples: ["Fortuner", "Thar", "Premium SUV", "Luxury Vehicles"],
    pricing: "Vehicle × Hours",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-wider text-blue-400">
            INFURNUS SERVICES
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            One platform for every mobility need.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            From everyday passenger rides to logistics, emergency service
            vehicles and premium travel, Infurnus connects customers with
            the right vehicle for every requirement.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/customer/book"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Book a Ride
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/provider/register"
              className="rounded-xl border border-slate-600 px-5 py-3 font-semibold text-white hover:bg-slate-900"
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              OUR SERVICES
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Choose what you need
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-500">
              Select a service based on your transportation requirement.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-950">
                        {service.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-blue-600">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Vehicle Types
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.examples.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-400">
                      PRICING MODEL
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {service.pricing}
                    </p>
                  </div>

                  <Link
                    href="/customer/book"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Book this service
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950">
              How Infurnus works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            {[
              {
                icon: MapPin,
                title: "Enter Location",
                text: "Add your pickup and destination.",
              },
              {
                icon: Car,
                title: "Choose Vehicle",
                text: "Select the vehicle that fits your requirement.",
              },
              {
                icon: Clock,
                title: "Confirm Booking",
                text: "Review the estimated fare and confirm.",
              },
              {
                icon: CheckCircle2,
                title: "Complete Trip",
                text: "Track your trip and complete the payment.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <div className="mt-4 text-xs font-bold text-blue-600">
                    STEP {index + 1}
                  </div>

                  <h3 className="mt-1 font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

    </main>
  );
}