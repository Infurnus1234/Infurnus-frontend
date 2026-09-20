export default function TrackingSection() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT - Tracking Preview */}
          <div className="relative">

            {/* Background */}
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[40px] border-8 border-slate-900 bg-slate-100 shadow-2xl">

              {/* Phone Header */}
              <div className="flex items-center justify-between bg-white px-5 py-5">
                <div>
                  <p className="text-xs text-slate-500">
                    Your Ride
                  </p>

                  <p className="font-bold text-slate-900">
                    On the way
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                  5 min away
                </span>
              </div>


              {/* Fake Map */}
              <div className="relative h-[430px] overflow-hidden bg-blue-50">

                {/* Map Grid */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-10 top-0 h-full w-px bg-blue-200" />
                  <div className="absolute left-32 top-0 h-full w-px bg-blue-200" />
                  <div className="absolute left-56 top-0 h-full w-px bg-blue-200" />
                  <div className="absolute left-80 top-0 h-full w-px bg-blue-200" />

                  <div className="absolute left-0 top-20 h-px w-full bg-blue-200" />
                  <div className="absolute left-0 top-40 h-px w-full bg-blue-200" />
                  <div className="absolute left-0 top-60 h-px w-full bg-blue-200" />
                  <div className="absolute left-0 top-80 h-px w-full bg-blue-200" />
                  <div className="absolute left-0 top-[400px] h-px w-full bg-blue-200" />
                </div>


                {/* Route */}
                <div className="absolute left-[45%] top-[20%] h-[250px] w-1 rotate-[28deg] rounded-full bg-blue-600" />

                {/* Pickup */}
                <div className="absolute bottom-16 left-16 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl text-white shadow-lg">
                  ●
                </div>

                {/* Destination */}
                <div className="absolute right-16 top-16 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xl text-white shadow-lg">
                  ●
                </div>

                {/* Vehicle */}
                <div className="absolute left-[46%] top-[43%] flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-2xl shadow-xl">
                  🚗
                </div>


                {/* Location labels */}
                <div className="absolute bottom-6 left-5 rounded-xl bg-white px-4 py-3 shadow-lg">
                  <p className="text-xs text-slate-500">
                    Pickup
                  </p>

                  <p className="text-sm font-semibold">
                    HSR Layout
                  </p>
                </div>

                <div className="absolute right-5 top-5 rounded-xl bg-white px-4 py-3 shadow-lg">
                  <p className="text-xs text-slate-500">
                    Destination
                  </p>

                  <p className="text-sm font-semibold">
                    Koramangala
                  </p>
                </div>

              </div>


              {/* Driver Card */}
              <div className="bg-white p-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-2xl">
                    👨
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-slate-900">
                      Aarav Singh
                    </p>

                    <p className="text-sm text-slate-500">
                      ⭐ 4.8 • KA 01 AB 1234
                    </p>
                  </div>

                  <button className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                    Call
                  </button>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <button className="rounded-xl border py-3 text-sm font-semibold">
                    Call Driver
                  </button>

                  <button className="rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white">
                    Message
                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT - Information */}
          <div>

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Live Tracking
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Real-Time Tracking
              <br />
              <span className="text-blue-600">
                for Peace of Mind
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Track your ride or delivery live on the map, receive
              accurate ETA updates and share your trip with people
              you trust.
            </p>


            {/* Features */}
            <div className="mt-8 space-y-5">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Live Ride & Delivery Tracking
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    See your vehicle location and journey progress in real time.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
                  ⏱️
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Accurate ETA Prediction
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Get estimated arrival times and booking status updates.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl">
                  🧠
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Smart Route Optimization
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Intelligent route planning helps improve journey efficiency.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl">
                  🔗
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Trip & Location Sharing
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Share your live trip information with friends and family.
                  </p>
                </div>

              </div>

            </div>


            <button className="mt-10 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Explore Tracking →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}