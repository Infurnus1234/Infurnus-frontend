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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            How It Works
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Get Started in Just a Few Steps
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            Booking a ride or delivery with Infurnus is simple,
            quick and hassle-free.
          </p>

        </div>


        {/* Steps */}
        <div className="relative mt-16">

          {/* Connecting line - desktop */}
          <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-blue-200 lg:block" />

          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.number}
                className="group text-center"
              >

                {/* Icon */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-blue-50 text-3xl shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                  {step.icon}

                  {/* Number */}
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>


                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
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