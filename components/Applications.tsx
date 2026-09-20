import Link from "next/link";

const applications = [
  {
    icon: "👤",
    title: "Customer App",
    description:
      "Book rides, rentals, parcels and logistics services from one place.",
    features: ["Ride Booking", "Rentals", "Logistics"],
    href: "/customer",
    button: "Explore Customer",
  },
  {
    icon: "🚗",
    title: "Driver / Rider App",
    description:
      "Manage bookings, rides, deliveries, earnings and availability.",
    features: ["Bookings", "Earnings", "Navigation"],
    href: "/driver",
    button: "Driver Portal",
  },
  {
    icon: "🚚",
    title: "Vehicle Owner App",
    description:
      "Manage your fleet, vehicles, drivers and logistics operations.",
    features: ["Fleet", "Drivers", "Revenue"],
    href: "/owner",
    button: "Owner Portal",
  },
  {
    icon: "🏢",
    title: "Business Vendor",
    description:
      "Manage bulk bookings, deliveries, branches, invoices and payments.",
    features: ["Bulk Booking", "Delivery", "Billing"],
    href: "/vendor",
    button: "Vendor Portal",
  },
  {
    icon: "⚙️",
    title: "Admin Panel",
    description:
      "Monitor users, bookings, vehicles, payments, reports and operations.",
    features: ["Analytics", "Management", "Security"],
    href: "/admin",
    button: "Admin Portal",
  },
];

export default function Applications() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Applications
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Solutions for Everyone
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            Dedicated applications and panels for customers, drivers,
            vehicle owners, businesses and administrators.
          </p>

        </div>


        {/* Application Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {applications.map((application) => (
            <div
              key={application.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition group-hover:bg-blue-100">
                {application.icon}
              </div>


              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {application.title}
              </h3>


              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {application.description}
              </p>


              {/* Features */}
              <div className="mt-5 space-y-2">

                {application.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="text-blue-600">✓</span>
                    {feature}
                  </div>
                ))}

              </div>


              {/* Button */}
              <div className="mt-auto pt-6">

                <Link
                  href={application.href}
                  className="block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
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