const steps = [
  {
    number: "01",
    icon: "👤",
    title: "Create Account",
    description: "Sign up using your mobile number and create your Infurnus account.",
  },
  {
    number: "02",
    icon: "📍",
    title: "Set Your Location",
    description: "Enter your pickup and destination to find available services.",
  },
  {
    number: "03",
    icon: "🚗",
    title: "Choose a Service",
    description: "Select a ride, rental, parcel or logistics service.",
  },
  {
    number: "04",
    icon: "💳",
    title: "Confirm & Go",
    description: "Review your booking, make payment and start your journey.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#E0E5EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
            How It Works
          </span>
          <h2 className="font-display mt-5 text-3xl font-extrabold text-[#3D4852] md:text-5xl tracking-tight">
            Get Started in Just a Few Steps
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] md:text-lg font-sans">
            Booking a ride or delivery with Infurnus is simple, quick, tactile, and completely hassle-free.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[10%] right-[10%] top-20 hidden h-3 neu-inset-sm rounded-full lg:block" />
          <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group neu-extruded neu-extruded-hover rounded-[32px] p-8 bg-[#E0E5EC] text-center transition-all duration-300 flex flex-col items-center"
              >
                <div className="relative mx-auto neu-inset-deep flex h-24 w-24 items-center justify-center rounded-2xl text-4xl transition-transform duration-300 group-hover:scale-105">
                  <div className="neu-extruded flex h-16 w-16 items-center justify-center rounded-xl bg-[#E0E5EC]">
                    {step.icon}
                  </div>
                  <span className="absolute -right-3 -top-3 neu-extruded flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] text-xs font-extrabold text-white shadow-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-xl font-bold text-[#3D4852]">
                  {step.title}
                </h3>
                <p className="font-sans mt-3 text-sm leading-relaxed text-[#6B7280]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
