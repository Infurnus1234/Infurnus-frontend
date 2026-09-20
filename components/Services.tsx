"use client";

import { useRouter } from "next/navigation";

const services = [
  {
    icon: "🚗",
    title: "Ride Booking",
    description:
      "Book bikes, cabs and everyday rides quickly and easily for your daily travel.",
    features: ["Bike", "Cab", "City Ride", "Intercity"],
    button: "Book a Ride",
    route: "/customer/book",
  },

  {
    icon: "🚙",
    title: "Premium Vehicle",
    description:
      "Book premium SUVs such as Fortuner, Thar and other premium vehicles for your travel.",
    features: ["Fortuner", "Thar", "SUV", "Hourly"],
    button: "Explore Premium",
    route: "/customer/premium",
  },

  {
    icon: "📦",
    title: "Logistics",
    description:
      "Move parcels, goods and commercial loads with the right vehicle for your delivery.",
    features: ["Mini Truck", "Pickup", "Tata Ace", "Large Truck"],
    button: "Book Logistics",
    route: "/customer/logistics",
  },

  {
    icon: "🚑",
    title: "Service Vehicle",
    description:
      "Get specialized vehicles whenever you need emergency, recovery, construction or roadside services.",
    features: [
      "Ambulance",
      "Fire Brigade",
      "JCB",
      "Towing",
    ],
    button: "Book Service",
    route: "/customer/service",
  },
];

export default function Services() {
  const router = useRouter();

  // =========================================================
  // CHANGED: Navigate to service page
  // =========================================================
  const handleServiceClick = (route: string) => {
    router.push(route);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Everything You Need to Move
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            From everyday rides to premium vehicles, logistics and
            specialized service vehicles, Infurnus brings everything
            together in one platform.
          </p>

        </div>

        {/* =================================================
            SERVICE CARDS
        ================================================== */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (

            <div
              key={service.title}
              onClick={() => handleServiceClick(service.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleServiceClick(service.route);
                }
              }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >

              {/* =================================================
                  CARD TOP
              ================================================== */}

              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-md transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                {/* =================================================
                    FEATURES
                ================================================== */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {feature}
                    </span>
                  ))}

                </div>

                {/* =================================================
                    BUTTON
                ================================================== */}

                <button
                  type="button"
                  onClick={(e) => {
                    // CHANGED: Prevent card click from firing twice
                    e.stopPropagation();
                    handleServiceClick(service.route);
                  }}
                  className="mt-6 flex cursor-pointer items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3"
                >
                  {service.button}

                  <span>→</span>
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}