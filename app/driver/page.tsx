"use client";

import Link from "next/link";
import {
  Car,
  ChevronRight,
  Clock3,
  FileText,
  HelpCircle,
  MapPin,
  Navigation,
  Power,
  Star,
  User,
  Wallet,
  X,
  Check,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export default function DriverDashboard() {
  const [online, setOnline] = useState(true);
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      pickup: "Koramangala 5th Block",
      destination: "Indiranagar 100ft Road",
      distance: "4.2 km",
      fare: "₹185",
      time: "2 min ago",
    },
    {
      id: 2,
      name: "Priya Sharma",
      pickup: "HSR Layout Sector 1",
      destination: "Electronic City Phase 1",
      distance: "8.5 km",
      fare: "₹320",
      time: "5 min ago",
    },
  ]);

  const [message, setMessage] = useState("");

  const acceptRide = (id: number) => {
    setRequests((prev) => prev.filter((ride) => ride.id !== id));
    setMessage("Ride accepted successfully!");
    setTimeout(() => setMessage(""), 2500);
  };

  const declineRide = (id: number) => {
    setRequests((prev) => prev.filter((ride) => ride.id !== id));
    setMessage("Ride declined.");
    setTimeout(() => setMessage(""), 2500);
  };

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Driver Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
              Driver Command Center
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Welcome back, Aarav Singh 👋
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-2xl">
              Manage live ride requests, navigate active routes, and track your daily earnings in real-time.
            </p>
          </div>

          <button
            onClick={() => setOnline(!online)}
            className={`px-6 py-4 rounded-2xl text-xs font-bold flex items-center gap-3 transition-all ${
              online
                ? "neu-inset text-[#000000] border border-black/10"
                : "neu-btn text-[#6B7280]"
            }`}
          >
            <span
              className={`h-3 w-3 rounded-full ${
                online ? "bg-[#000000] animate-pulse" : "bg-[#6B7280]"
              }`}
            />
            <span>{online ? "Status: ONLINE" : "Status: OFFLINE"}</span>
            <Power size={16} />
          </button>
        </div>

        {/* Notification Alert */}
        {message && (
          <div className="neu-inset p-4 rounded-2xl flex items-center gap-3 text-xs font-bold text-[#000000]">
            <Check size={18} />
            {message}
          </div>
        )}

        {/* Key Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Wallet size={20} />}
            label="Today's Earnings"
            value="₹1,850"
            change="+12.5% vs yesterday"
          />

          <StatCard
            icon={<Car size={20} />}
            label="Completed Rides"
            value="12 Trips"
            change="Today"
          />

          <StatCard
            icon={<Star size={20} />}
            label="Driver Rating"
            value="4.8 ★"
            change="500+ Trips Rated"
          />

          <StatCard
            icon={<Clock3 size={20} />}
            label="Pending Payout"
            value="₹4,250"
            change="Settlement Friday"
          />
        </section>

        {/* Main Content Dashboard Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column: Active Navigation & Live Requests */}
          <div className="space-y-8 lg:col-span-2">
            
            {/* Active Ride Navigation Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000] uppercase">
                    Live Trip Status
                  </span>
                  <h2 className="font-display text-xl font-bold text-[#3D4852] mt-2">
                    Active Ride Navigation
                  </h2>
                </div>

                <span className="neu-inset-sm px-3 py-1 rounded-xl text-xs font-extrabold text-[#000000]">
                  IN PROGRESS
                </span>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="neu-inset-deep rounded-2xl h-52 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute left-0 top-16 h-px w-full rotate-6 bg-[#000000]" />
                  <div className="absolute left-0 top-32 h-px w-full -rotate-12 bg-[#000000]" />
                  <div className="absolute left-20 top-0 h-full w-px rotate-12 bg-[#000000]" />
                  <div className="absolute right-24 top-0 h-full w-px -rotate-12 bg-[#000000]" />
                </div>

                <div className="absolute left-[30%] top-[40%] flex h-11 w-11 items-center justify-center rounded-2xl neu-extruded text-[#000000]">
                  <Navigation size={20} />
                </div>

                <div className="absolute right-[30%] bottom-[30%] flex h-11 w-11 items-center justify-center rounded-2xl neu-inset-deep text-[#000000]">
                  <MapPin size={20} />
                </div>

                <div className="neu-extruded bg-[#E0E5EC] text-[#3D4852] text-xs font-bold px-4 py-2 rounded-xl absolute bottom-3 left-3 shadow-md border border-black/5">
                  3.8 km remaining (Est. 9 mins)
                </div>
              </div>

              {/* Ride Route Details */}
              <div className="neu-inset-deep p-6 rounded-2xl space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="neu-extruded p-2 rounded-xl text-[#000000] mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#6B7280]">Pickup Location</p>
                      <p className="font-bold text-sm text-[#3D4852]">HSR Layout Sector 1</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="neu-inset-deep p-2 rounded-xl text-[#000000] mt-0.5">
                      <Navigation size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#6B7280]">Destination</p>
                      <p className="font-bold text-sm text-[#3D4852]">Koramangala 5th Block</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs text-[#6B7280] font-semibold">Passenger: <strong className="text-[#3D4852]">Vikram Seth</strong></span>
                  <span className="text-xs text-[#6B7280] font-semibold">Fare: <strong className="text-[#3D4852]">₹240</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 neu-btn neu-btn-primary py-3.5 px-6 rounded-2xl text-xs font-bold inline-flex items-center justify-center gap-2">
                  <Navigation size={18} />
                  <span>Start Navigation</span>
                </button>

                <Link
                  href="/driver/ride"
                  className="flex-1 neu-btn py-3.5 px-6 rounded-2xl text-xs font-bold text-[#3D4852] inline-flex items-center justify-center gap-2 text-center"
                >
                  <span>View Trip Details</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </section>

            {/* Ride Requests Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000] uppercase">
                    Dispatch Queue
                  </span>
                  <h2 className="font-display text-xl font-bold text-[#3D4852] mt-2">
                    Nearby Ride Requests
                  </h2>
                </div>

                <span className="neu-inset-sm px-3 py-1 rounded-full text-xs font-extrabold text-[#000000]">
                  {requests.length} Pending
                </span>
              </div>

              <div className="space-y-4">
                {requests.length === 0 ? (
                  <div className="neu-inset-deep rounded-2xl p-10 text-center space-y-3">
                    <div className="neu-extruded inline-flex p-4 rounded-2xl text-[#000000]">
                      <Car size={32} />
                    </div>
                    <p className="font-bold text-[#3D4852]">No Pending Requests</p>
                    <p className="text-xs text-[#6B7280]">New rider requests in your dispatch radius will show up here.</p>
                  </div>
                ) : (
                  requests.map((ride) => (
                    <div
                      key={ride.id}
                      className="neu-inset-deep rounded-2xl p-5 space-y-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="neu-extruded h-12 w-12 rounded-2xl flex items-center justify-center font-extrabold text-sm text-[#000000]">
                            {ride.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>

                          <div>
                            <h3 className="font-bold text-sm text-[#3D4852]">
                              {ride.name}
                            </h3>
                            <p className="text-xs text-[#6B7280]">
                              {ride.time} • Approx {ride.distance}
                            </p>
                          </div>
                        </div>

                        <span className="text-xl font-extrabold text-[#3D4852]">
                          {ride.fare}
                        </span>
                      </div>

                      <div className="neu-inset-sm p-4 rounded-xl space-y-2">
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="text-[#000000] shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold uppercase text-[#6B7280]">Pickup</p>
                            <p className="text-xs font-semibold text-[#3D4852]">{ride.pickup}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                          <Navigation size={16} className="text-[#000000] shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold uppercase text-[#6B7280]">Destination</p>
                            <p className="text-xs font-semibold text-[#3D4852]">{ride.destination}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-3 pt-1">
                        <button
                          onClick={() => declineRide(ride.id)}
                          className="neu-btn px-5 py-2.5 rounded-xl text-xs font-bold text-[#6B7280] hover:text-[#000000] inline-flex items-center gap-1.5"
                        >
                          <X size={15} />
                          <span>Decline</span>
                        </button>

                        <button
                          onClick={() => acceptRide(ride.id)}
                          className="neu-btn neu-btn-primary px-6 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                        >
                          <Check size={15} />
                          <span>Accept Ride</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>

          {/* Right Column: Vehicle Info, Quick Actions & Safety */}
          <aside className="space-y-8">
            
            {/* Vehicle Info Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg text-[#3D4852]">My Assigned Vehicle</h2>
                <div className="neu-inset-deep p-2 rounded-xl text-[#000000]">
                  <Car size={18} />
                </div>
              </div>

              <div className="neu-inset-deep p-5 rounded-2xl space-y-3">
                <p className="text-base font-extrabold text-[#3D4852]">
                  Maruti Suzuki Dzire
                </p>
                <p className="text-xs text-[#6B7280]">White Sedan • AC Premier</p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="neu-extruded px-3 py-1 rounded-xl text-xs font-mono font-bold text-[#000000]">
                    KA 01 AB 1234
                  </span>

                  <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#000000]">
                    Active Fleet
                  </span>
                </div>
              </div>
            </section>

            {/* Quick Actions Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <h2 className="font-bold text-lg text-[#3D4852]">
                Driver Quick Menu
              </h2>

              <div className="space-y-3">
                <QuickLink
                  href="/driver/earnings"
                  icon={<Wallet size={18} />}
                  title="Earnings & Payouts"
                />

                <QuickLink
                  href="/driver/rides"
                  icon={<Car size={18} />}
                  title="Ride History"
                />

                <QuickLink
                  href="/driver/vehicle"
                  icon={<Car size={18} />}
                  title="Vehicle & Maintenance"
                />

                <QuickLink
                  href="/driver/documents"
                  icon={<FileText size={18} />}
                  title="Documents & KYC"
                />

                <QuickLink
                  href="/driver/profile"
                  icon={<User size={18} />}
                  title="Driver Profile"
                />

                <QuickLink
                  href="/driver/support"
                  icon={<HelpCircle size={18} />}
                  title="24/7 Driver Support"
                />
              </div>
            </section>

            {/* Safety Banner */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#3D4852]">Driver Safety Guidelines</h3>
                  <p className="text-[11px] text-[#6B7280]">Safety First on Every Trip</p>
                </div>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Adhere to speed limits, keep digital driving licenses current, and report emergency incidents immediately.
              </p>
              <button className="neu-btn neu-btn-primary w-full py-3 rounded-2xl text-xs font-bold">
                Safety Center
              </button>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
  change,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
          {label}
        </p>
        <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-extrabold text-[#3D4852]">{value}</p>
      <span className="neu-inset-sm px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#000000] inline-block">
        {change}
      </span>
    </div>
  );
}

function QuickLink({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="neu-inset-sm hover:neu-btn w-full p-3.5 rounded-2xl flex items-center justify-between font-bold text-xs text-[#3D4852] transition-all"
    >
      <div className="flex items-center gap-3">
        <span className="text-[#000000]">{icon}</span>
        <span className="font-bold text-[#3D4852]">{title}</span>
      </div>
      <ChevronRight size={16} className="text-[#6B7280]" />
    </Link>
  );
}