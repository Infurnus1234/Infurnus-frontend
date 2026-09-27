const features = [
  { icon: "⚡", title: "Instant Fares", desc: "Upfront pricing" },
  { icon: "📍", desc: "Real-time updates", title: "Live Tracking" },
  { icon: "🛡️", desc: "100% verified", title: "Safety First" },
  { icon: "💳", desc: "Multiple options", title: "Easy Payment" },
];

export default function FeatureBar() {
  return (
    <section className="bg-[#E0E5EC] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="neu-extruded rounded-2xl bg-[#E0E5EC] p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="neu-inset-deep mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">
                {item.icon}
              </div>
              <h3 className="font-display mt-4 font-bold text-[#3D4852]">
                {item.title}
              </h3>
              <p className="font-sans mt-1 text-xs font-medium text-[#6B7280]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
