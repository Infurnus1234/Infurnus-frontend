export default function FeatureBar() {
  const features = [
    {
      title: "Safe & Secure",
      text: "Verified drivers & vehicles",
    },
    {
      title: "Fast & Reliable",
      text: "On-time, every time",
    },
    {
      title: "Multiple Payments",
      text: "UPI, Cards, Wallet & more",
    },
    {
      title: "24/7 Support",
      text: "We are always here for you",
    },
  ];

  return (
    <section className="border-b bg-white py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">

        {features.map((feature) => (
          <div key={feature.title}>
            <h3 className="font-bold text-slate-900">
              {feature.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {feature.text}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}