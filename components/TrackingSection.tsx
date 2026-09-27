export default function TrackingSection() {
  return (
    <section className="overflow-hidden bg-[#E0E5EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT - Tracking Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-md neu-extruded rounded-[44px] bg-[#E0E5EC] p-4">
              <div className="overflow-hidden rounded-[36px] bg-[#E0E5EC] p-3 space-y-3">

                {/* Phone Header */}
                <div className="flex items-center justify-between neu-inset-sm rounded-2xl bg-[#E0E5EC] px-5 py-4">
                  <div>
                    <p className="text-xs font-medium text-[#6B7280]">
                      Your Ride
                    </p>
                    <p className="font-display font-bold text-[#3D4852]">
                      On the way
                    </p>
                  </div>
                  <span className="neu-inset-sm px-3.5 py-1.5 text-xs font-bold text-[#38B2AC] rounded-full">
                    5 min away
                  </span>
                </div>

                {/* Inset Map Canvas */}
                <div className="relative h-[380px] overflow-hidden rounded-2xl neu-inset-deep bg-[#E0E5EC]">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-10 top-0 h-full w-px bg-[#3D4852]" />
                    <div className="absolute left-32 top-0 h-full w-px bg-[#3D4852]" />
                    <div className="absolute left-56 top-0 h-full w-px bg-[#3D4852]" />
                    <div className="absolute left-80 top-0 h-full w-px bg-[#3D4852]" />
                    <div className="absolute left-0 top-20 h-px w-full bg-[#3D4852]" />
                    <div className="absolute left-0 top-40 h-px w-full bg-[#3D4852]" />
                    <div className="absolute left-0 top-60 h-px w-full bg-[#3D4852]" />
                    <div className="absolute left-0 top-80 h-px w-full bg-[#3D4852]" />
                  </div>

                  <div className="absolute left-[45%] top-[20%] h-[220px] w-2 rotate-[28deg] rounded-full bg-[#000000] shadow-sm" />

                  <div className="absolute bottom-12 left-12 flex h-11 w-11 items-center justify-center rounded-full neu-extruded bg-[#E0E5EC] text-sm text-[#38B2AC]">
                    ●
                  </div>
                  <div className="absolute right-12 top-12 flex h-11 w-11 items-center justify-center rounded-full neu-extruded bg-[#E0E5EC] text-sm text-[#FF5A5F]">
                    ●
                  </div>
                  <div className="absolute left-[46%] top-[40%] flex h-14 w-14 items-center justify-center rounded-2xl neu-extruded bg-[#000000] text-2xl text-white">
                    🚗
                  </div>

                  <div className="absolute bottom-5 left-4 neu-extruded rounded-xl bg-[#E0E5EC] px-4 py-2.5">
                    <p className="text-[10px] uppercase font-bold text-[#6B7280]">Pickup</p>
                    <p className="text-xs font-bold text-[#3D4852]">HSR Layout</p>
                  </div>

                  <div className="absolute right-4 top-4 neu-extruded rounded-xl bg-[#E0E5EC] px-4 py-2.5">
                    <p className="text-[10px] uppercase font-bold text-[#6B7280]">Destination</p>
                    <p className="text-xs font-bold text-[#3D4852]">Koramangala</p>
                  </div>
                </div>

                {/* Driver Card */}
                <div className="neu-extruded rounded-2xl bg-[#E0E5EC] p-4">
                  <div className="flex items-center gap-4">
                    <div className="neu-inset-deep flex h-12 w-12 items-center justify-center rounded-xl text-2xl">
                      👨
                    </div>
                    <div className="flex-1">
                      <p className="font-display font-bold text-[#3D4852]">Aarav Singh</p>
                      <p className="text-xs text-[#6B7280]">⭐ 4.8 • KA 01 AB 1234</p>
                    </div>
                    <button className="neu-btn neu-btn-primary px-4 py-2 text-xs">Call</button>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="neu-btn text-xs font-semibold py-2.5">Call Driver</button>
                    <button className="neu-btn neu-btn-primary text-xs font-semibold py-2.5">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Info */}
          <div>
            <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
              Live Tracking
            </span>
            <h2 className="font-display mt-6 text-4xl font-extrabold leading-tight text-[#3D4852] md:text-5xl tracking-tight">
              Real-Time Tracking <br />
              <span className="text-[#000000]">for Peace of Mind</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#6B7280] font-sans">
              Track your ride or delivery live on the map, receive accurate ETA updates and share your trip with people you trust.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: "📍", title: "Live Ride & Delivery Tracking", desc: "See your vehicle location and journey progress in real time." },
                { icon: "⏱️", title: "Accurate ETA Prediction", desc: "Get estimated arrival times and booking status updates." },
                { icon: "🧠", title: "Smart Route Optimization", desc: "Intelligent route planning helps improve journey efficiency." },
                { icon: "🔗", title: "Trip & Location Sharing", desc: "Share your live trip information with friends and family." },
              ].map((item) => (
                <div key={item.title} className="neu-extruded rounded-2xl p-4 bg-[#E0E5EC] flex gap-4 items-center">
                  <div className="neu-inset-deep flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#3D4852]">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-[#6B7280] font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="neu-btn neu-btn-primary mt-10 px-8 py-4 font-bold text-base">
              Explore Tracking →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
