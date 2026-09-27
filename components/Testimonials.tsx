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
    <section className="bg-[#E0E5EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
            What People Say
          </span>
          <h2 className="font-display mt-5 text-3xl font-extrabold text-[#3D4852] md:text-5xl tracking-tight">
            Trusted by Our Community
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] font-sans">
            Customers, drivers and businesses choose Infurnus for reliable mobility and logistics.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#E0E5EC] neu-extruded neu-extruded-hover rounded-[32px] p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-xl tracking-widest text-[#FFB800]">
                  {testimonial.rating}
                </div>
                <p className="mt-5 text-base leading-relaxed text-[#6B7280] font-sans">
                  “{testimonial.text}”
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="neu-inset-deep flex h-14 w-14 items-center justify-center rounded-2xl p-1">
                  <div className="neu-extruded flex h-full w-full items-center justify-center rounded-xl bg-[#000000] font-bold text-white text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#3D4852]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-medium text-[#6B7280]">
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
