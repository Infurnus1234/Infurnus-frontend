import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Users,
  Truck,
  BarChart3,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Business Transportation",
    text: "Manage employee, customer and business transportation requirements.",
  },
  {
    icon: Users,
    title: "Fleet Management",
    text: "Manage vehicles and drivers from a unified provider platform.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    text: "Track trips, usage, earnings and operational activity.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Providers",
    text: "Build your operations around registered vehicles and drivers.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    text: "Get assistance for your business transportation requirements.",
  },
  {
    icon: Building2,
    title: "Business Solutions",
    text: "Create transportation workflows suited to your organization.",
  },
];

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-400">
              INFURNUS FOR BUSINESS
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Mobility solutions built for businesses.
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Manage transportation, logistics and fleet operations through
              one connected platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
              >
                Talk to Infurnus
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/provider/register"
                className="rounded-xl border border-slate-600 px-5 py-3 font-semibold hover:bg-slate-900"
              >
                Become a Provider
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              BUSINESS PLATFORM
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Everything your transportation operation needs
            </h2>

            <p className="mt-3 text-slate-500">
              Infurnus brings customer bookings, vehicles, drivers and
              operational visibility together.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950">
              Who can use Infurnus?
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Companies",
                text: "Transportation support for employees, customers and business operations.",
              },
              {
                title: "Fleet Owners",
                text: "Manage vehicles, drivers, trips and fleet earnings.",
              },
              {
                title: "Service Providers",
                text: "Offer specialized vehicles such as towing, ambulance and utility services.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-6 py-12 text-center text-white sm:px-12">

          <h2 className="text-3xl font-bold">
            Need a transportation solution for your business?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Contact the Infurnus team to discuss your requirements.
          </p>

          <Link
            href="/support"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Contact Support
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}