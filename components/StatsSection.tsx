const stats = [
  { number: "500K+", label: "Happy Customers", description: "People moving with Infurnus" },
  { number: "50K+", label: "Verified Drivers", description: "Trusted mobility partners" },
  { number: "10K+", label: "Business Partners", description: "Businesses using our platform" },
  { number: "1M+", label: "Trips & Deliveries", description: "Journeys completed successfully" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#E0E5EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
            Infurnus by the Numbers
          </span>
          <h2 className="font-display mt-5 text-3xl font-extrabold text-[#3D4852] md:text-5xl tracking-tight">
            Moving Millions, One Journey at a Time
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] font-sans">
            Our growing community of customers, drivers and businesses makes Infurnus a complete mobility ecosystem.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="neu-extruded neu-extruded-hover rounded-[32px] bg-[#E0E5EC] p-8 text-center transition-all duration-300 flex flex-col justify-center items-center"
            >
              <div className="font-display text-4xl font-extrabold text-[#000000] md:text-5xl tracking-tight">
                {stat.number}
              </div>
              <h3 className="font-display mt-3 font-bold text-[#3D4852] text-lg">
                {stat.label}
              </h3>
              <p className="font-sans mt-2 text-xs leading-relaxed text-[#6B7280] md:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
