const testimonials = [
  {
    name: "Priya Sharma",
    role: "Infurnus Customer",
    rating: "★★★★★",
    text: "Booking a ride with Infurnus is simple and hassle-free. The tracking feature gives me complete peace of mind.",
  },
  {
    name: "Rahul Kumar",
    role: "Driver Partner",
    rating: "★★★★★",
    text: "Infurnus makes it easy to manage rides and track my earnings. The platform is simple and convenient.",
  },
  {
    name: "Amit Verma",
    role: "Business Partner",
    rating: "★★★★★",
    text: "We use Infurnus for our regular deliveries and bulk bookings. Tracking and reporting have made our operations much easier.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            What People Say
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Trusted by Our Community
          </h2>

          <p className="mt-5 text-slate-500">
            Customers, drivers and businesses choose Infurnus for reliable
            mobility and logistics.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="text-lg tracking-wide text-yellow-500">
                {testimonial.rating}
              </div>

              {/* Text */}
              <p className="mt-5 text-base leading-7 text-slate-600">
                “{testimonial.text}”
              </p>

              {/* User */}
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}