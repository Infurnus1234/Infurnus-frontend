"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Car,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldAlert,
  User,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function DriverRidePage() {
  const [rideStarted, setRideStarted] = useState(false);
  const [rideCompleted, setRideCompleted] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const startRide = () => {
    if (otp !== "4821") {
      setError("Incorrect OTP. Ask the customer for the 4-digit OTP.");
      return;
    }

    setError("");
    setRideStarted(true);
  };

  const completeRide = () => {
    setRideCompleted(true);
  };

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/driver"
              className="neu-btn p-3 rounded-2xl text-[#3D4852] inline-flex items-center justify-center"
            >
              <ArrowLeft size={20} />
            </Link>

            <div>
              <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000] uppercase">
                Active Ride Terminal
              </span>
              <h1 className="font-display text-xl sm:text-2xl font-extrabold text-[#3D4852] mt-1">
                Trip #INF-8842
              </h1>
            </div>
          </div>

          <span className="neu-inset-deep px-4 py-2 rounded-2xl text-xs font-extrabold text-[#000000]">
            {rideStarted ? "ON TRIP" : "EN ROUTE TO PICKUP"}
          </span>
        </div>

        {/* Completed Ride State */}
        {rideCompleted ? (
          <div className="mx-auto max-w-xl neu-extruded rounded-[36px] bg-[#E0E5EC] p-10 text-center space-y-6">
            <div className="neu-inset-deep mx-auto inline-flex p-5 rounded-3xl text-[#000000]">
              <Check size={40} />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
                Ride Completed!
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
                The trip has been successfully ended and settlement queued.
              </p>
            </div>

            <div className="neu-inset-deep p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#6B7280] uppercase">Total Fare</span>
                <span className="text-2xl font-extrabold text-[#3D4852]">₹320</span>
              </div>

              <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-bold text-[#6B7280] uppercase">Driver Earnings</span>
                <span className="text-sm font-extrabold text-[#000000]">₹285</span>
              </div>
            </div>

            <Link
              href="/driver"
              className="neu-btn neu-btn-primary block w-full py-4 rounded-2xl font-bold text-xs"
            >
              Back to Driver Command Center
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Navigation & OTP Panel */}
            <div className="space-y-8 lg:col-span-2">
              
              {/* Trip Status Banner */}
              <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] uppercase">Current Trip Phase</p>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#3D4852] mt-1">
                    {rideStarted ? "Ride in Progress — En Route to Destination" : "Heading to Pickup Location"}
                  </h2>
                </div>

                <span className="neu-inset-sm px-4 py-2 rounded-full text-xs font-extrabold text-[#000000] uppercase">
                  {rideStarted ? "ON TRIP" : "PICKUP EN ROUTE"}
                </span>
              </section>

              {/* Live Map Preview Card */}
              <section className="neu-inset-deep rounded-[36px] h-80 relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute left-0 top-20 h-px w-full rotate-6 bg-[#000000]" />
                  <div className="absolute left-0 top-40 h-px w-full -rotate-6 bg-[#000000]" />
                  <div className="absolute left-20 top-0 h-full w-px rotate-12 bg-[#000000]" />
                  <div className="absolute right-32 top-0 h-full w-px -rotate-12 bg-[#000000]" />
                </div>

                <div className="absolute left-[30%] top-[40%] flex h-12 w-12 items-center justify-center rounded-2xl neu-extruded text-[#000000]">
                  <Navigation size={22} />
                </div>

                <div className="absolute right-[25%] top-[30%] flex h-12 w-12 items-center justify-center rounded-2xl neu-inset-deep text-[#000000]">
                  <MapPin size={22} />
                </div>

                <div className="neu-extruded bg-[#E0E5EC] text-[#3D4852] text-xs font-bold px-4 py-3 rounded-2xl absolute bottom-4 left-4 shadow-md border border-black/5">
                  <p className="text-[10px] font-bold text-[#6B7280] uppercase">Target</p>
                  <p className="font-extrabold text-sm text-[#3D4852]">
                    {rideStarted ? "Koramangala 5th Block" : "HSR Layout Sector 1"}
                  </p>
                  <p className="text-[11px] font-mono text-[#000000] mt-0.5">
                    {rideStarted ? "3.8 km remaining (Est 9 min)" : "1.2 km away (Est 3 min)"}
                  </p>
                </div>
              </section>

              {/* Trip Route Details */}
              <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
                <h2 className="font-display text-xl font-bold text-[#3D4852]">
                  Trip Waypoints & Directions
                </h2>

                <div className="neu-inset-deep p-6 rounded-2xl space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="neu-extruded p-2.5 rounded-xl text-[#000000] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#6B7280]">Pickup Point</p>
                      <p className="font-extrabold text-sm text-[#3D4852]">HSR Layout Sector 1, Bengaluru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-3 border-t border-black/5">
                    <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000] shrink-0">
                      <Navigation size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#6B7280]">Drop-off Destination</p>
                      <p className="font-extrabold text-sm text-[#3D4852]">Koramangala 5th Block, Bengaluru</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* OTP Verification / Ride Actions */}
              {!rideStarted ? (
                <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="neu-inset-deep p-3 rounded-2xl text-[#000000] shrink-0">
                      <ShieldAlert size={24} />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-[#3D4852]">
                        Customer OTP Verification
                      </h2>
                      <p className="font-sans text-xs sm:text-sm text-[#6B7280] mt-1">
                        Ask the passenger for their 4-digit PIN before starting the vehicle trip.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      maxLength={4}
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value.replace(/\D/g, ""));
                        setError("");
                      }}
                      placeholder="ENTER 4-DIGIT OTP"
                      className="neu-input flex-1 px-5 py-4 rounded-2xl text-center text-xl font-mono font-extrabold tracking-[0.4em] text-[#3D4852] outline-none placeholder:tracking-normal placeholder:text-xs placeholder:font-sans"
                    />

                    <button
                      onClick={startRide}
                      className="neu-btn neu-btn-primary px-8 py-4 rounded-2xl font-bold text-xs shrink-0"
                    >
                      Start Ride Now
                    </button>
                  </div>

                  <p className="text-xs font-mono text-[#6B7280]">
                    Demo Verification OTP Code: <strong className="text-[#000000]">4821</strong>
                  </p>

                  {error && (
                    <div className="neu-inset p-3 rounded-xl text-xs font-bold text-red-600">
                      {error}
                    </div>
                  )}
                </section>
              ) : (
                <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
                  <div className="neu-inset-deep p-5 rounded-2xl flex items-center gap-4">
                    <div className="neu-extruded p-3 rounded-xl text-[#000000]">
                      <Check size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#3D4852]">Trip In Progress</h3>
                      <p className="text-xs text-[#6B7280]">Follow safely along designated navigation routes.</p>
                    </div>
                  </div>

                  <button
                    onClick={completeRide}
                    className="neu-btn neu-btn-primary w-full py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <Check size={18} />
                    <span>Complete & End Ride</span>
                  </button>
                </section>
              )}
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-8">
              {/* Customer Details Card */}
              <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-6">
                <h2 className="font-display text-lg font-bold text-[#3D4852]">
                  Passenger Details
                </h2>

                <div className="neu-inset-deep p-5 rounded-2xl flex items-center gap-4">
                  <div className="neu-extruded h-12 w-12 rounded-2xl flex items-center justify-center font-extrabold text-sm text-[#000000]">
                    RK
                  </div>

                  <div>
                    <h3 className="font-extrabold text-sm text-[#3D4852]">
                      Rahul Kumar
                    </h3>
                    <p className="text-xs text-[#6B7280] font-medium mt-0.5">
                      4.8 ★ Rated Passenger
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="neu-btn py-3.5 px-4 rounded-2xl text-xs font-bold text-[#3D4852] flex items-center justify-center gap-2">
                    <Phone size={16} />
                    <span>Call</span>
                  </button>

                  <button className="neu-btn py-3.5 px-4 rounded-2xl text-xs font-bold text-[#3D4852] flex items-center justify-center gap-2">
                    <MessageCircle size={16} />
                    <span>Chat</span>
                  </button>
                </div>
              </section>

              {/* Trip Summary Card */}
              <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
                <h2 className="font-display text-lg font-bold text-[#3D4852]">
                  Fare & Trip Breakdown
                </h2>

                <div className="neu-inset-deep p-5 rounded-2xl space-y-4">
                  <SummaryRow
                    icon={<Clock size={16} />}
                    label="Est. Duration"
                    value="18 mins"
                  />

                  <SummaryRow
                    icon={<Navigation size={16} />}
                    label="Distance"
                    value="4.2 km"
                  />

                  <SummaryRow
                    icon={<Car size={16} />}
                    label="Vehicle"
                    value="Maruti Dzire"
                  />

                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#6B7280] uppercase">Estimated Fare</span>
                    <span className="text-xl font-extrabold text-[#3D4852]">₹320</span>
                  </div>
                </div>
              </section>

              {/* Emergency Banner */}
              <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4 border border-red-500/20">
                <div className="flex items-center gap-3">
                  <div className="neu-inset-deep p-3 rounded-2xl text-red-600">
                    <ShieldAlert size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#3D4852]">Emergency Assistance</h3>
                    <p className="text-[11px] text-[#6B7280]">Dispatch immediate alert</p>
                  </div>
                </div>

                <button className="neu-btn w-full py-3.5 rounded-2xl text-xs font-extrabold text-red-600 hover:text-red-700">
                  SOS Emergency Signal
                </button>
              </section>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5 text-[#000000]">
        {icon}
        <span className="text-xs font-semibold text-[#6B7280]">{label}</span>
      </div>

      <span className="text-xs font-bold text-[#3D4852]">
        {value}
      </span>
    </div>
  );
}