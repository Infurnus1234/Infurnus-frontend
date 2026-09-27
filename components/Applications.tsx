import Link from "next/link";

const applications = [
  {
    icon: "👤",
    title: "Customer App",
    description: "Book rides, rentals, parcels and logistics services from one place.",
    features: ["Ride Booking", "Rentals", "Logistics"],
    href: "/customer",
    button: "Explore Customer",
  },
  {
    icon: "🚗",
    title: "Driver / Rider App",
    description: "Manage bookings, rides, deliveries, earnings and availability.",
    features: ["Bookings", "Earnings", "Navigation"],
    href: "/driver",
    button: "Driver Portal",
  },
  {
    icon: "🚚",
    title: "Vehicle Owner App",
    description: "Manage your fleet, vehicles, drivers and logistics operations.",
    features: ["Fleet", "Drivers", "Revenue"],
    href: "/owner",
    button: "Owner Portal",
  },
];

export default function Applications() {
  return (
    <section className="bg-[#E0E5EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
            Our Applications
          </span>
          <h2 className="font-display mt-5 text-3xl font-extrabold text-[#3D4852] md:text-5xl tracking-tight">
            Solutions for Everyone
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] md:text-lg font-sans">
            Dedicated tactile applications and panels for customers, drivers, vehicle owners, businesses and administrators.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <div
              key={application.title}
              className="group flex flex-col rounded-[32px] bg-[#E0E5EC] neu-extruded neu-extruded-hover p-6 transition-all duration-300 justify-between"
            >
              <div>
                <div className="neu-inset-deep flex h-20 w-20 items-center justify-center rounded-2xl text-4xl transition-transform duration-300 group-hover:scale-105">
                  <div className="neu-extruded flex h-14 w-14 items-center justify-center rounded-xl bg-[#E0E5EC]">
                    {application.icon}
                  </div>
                </div>

                <h3 className="font-display mt-6 text-lg font-bold text-[#3D4852]">
                  {application.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#6B7280] font-sans">
                  {application.description}
                </p>

                <div className="mt-4 space-y-2">
                  {application.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs font-medium text-[#6B7280]"
                    >
                      <span className="text-[#38B2AC] font-bold">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href={application.href}
                  className="neu-btn neu-btn-primary block w-full text-center text-xs font-bold py-3"
                >
                  {application.button} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
