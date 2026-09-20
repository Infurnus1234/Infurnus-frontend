const stats = [
  {
    number: "500K+",
    label: "Happy Customers",
    description: "People moving with Infurnus",
  },
  {
    number: "50K+",
    label: "Verified Drivers",
    description: "Trusted mobility partners",
  },
  {
    number: "10K+",
    label: "Business Partners",
    description: "Businesses using our platform",
  },
  {
    number: "1M+",
    label: "Trips & Deliveries",
    description: "Journeys completed successfully",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            Infurnus by the Numbers
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            Moving Millions, One Journey at a Time
          </h2>

          <p className="mt-5 text-slate-400">
            Our growing community of customers, drivers and businesses
            makes Infurnus a complete mobility ecosystem.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="text-3xl font-bold text-blue-500 md:text-5xl">
                {stat.number}
              </div>

              <h3 className="mt-3 font-bold text-white">
                {stat.label}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400 md:text-sm">
                {stat.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}