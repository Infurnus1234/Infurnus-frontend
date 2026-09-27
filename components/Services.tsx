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
    features: ["Ambulance", "Fire Brigade", "JCB", "Towing"],
    button: "Book Service",
    route: "/customer/service",
  },
];

export default function Services() {
  const router = useRouter();

  const handleServiceClick = (route: string) => {
    router.push(route);
  };

  return (
    <section className="bg-[#E0E5EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
            Our Services
          </span>
          <h2 className="font-display mt-5 text-3xl font-extrabold text-[#3D4852] md:text-5xl tracking-tight">
            Everything You Need to Move
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] md:text-lg font-sans">
            From everyday rides to premium vehicles, logistics and specialized service vehicles, Infurnus brings everything together in one tactile platform.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              className="group cursor-pointer bg-[#E0E5EC] neu-extruded neu-extruded-hover rounded-[32px] p-6 transition-all duration-300 flex flex-col justify-between focus:outline-none"
            >
              <div>
                <div className="neu-inset-deep rounded-2xl h-44 flex items-center justify-center p-4">
                  <div className="neu-extruded h-24 w-24 rounded-2xl flex items-center justify-center text-5xl bg-[#E0E5EC] transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-xl font-bold text-[#3D4852]">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-[80px] text-sm leading-6 text-[#6B7280] font-sans">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="neu-inset-sm px-3 py-1 text-xs font-semibold text-[#6B7280] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(service.route);
                }}
                className="neu-btn neu-btn-primary mt-6 w-full justify-center text-sm py-3"
              >
                <span>{service.button}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
