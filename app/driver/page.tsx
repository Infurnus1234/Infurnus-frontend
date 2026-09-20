"use client";

import Link from "next/link";
import {
  Bell,
  Car,
  ChevronRight,
  Clock3,
  FileText,
  HelpCircle,
  MapPin,
  Menu,
  Navigation,
  Power,
  Star,
  User,
  Wallet,
  X,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function DriverDashboard() {
  const [online, setOnline] = useState(true);
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      pickup: "Koramangala",
      destination: "Indiranagar",
      distance: "4.2 km",
      fare: "₹185",
      time: "2 min ago",
    },
    {
      id: 2,
      name: "Priya Sharma",
      pickup: "HSR Layout",
      destination: "Electronic City",
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
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>

          <div className="flex items-center gap-3">
            <button className="relative rounded-xl p-2 text-slate-600 hover:bg-slate-100">
              <Bell size={20} />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="hidden items-center gap-3 border-l border-slate-200 pl-4 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                AS
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Aarav Singh
                </p>
                <p className="text-xs text-slate-500">Driver</p>
              </div>
            </div>

            <button className="rounded-xl p-2 text-slate-600 sm:hidden">
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Welcome + Online Status */}
        <section className="mb-6 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">Welcome back</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-950">
              Aarav Singh 👋
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage your rides and earnings from here.
            </p>
          </div>

          <button
            onClick={() => setOnline(!online)}
            className={`flex items-center gap-3 self-start rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              online
                ? "bg-green-100 text-green-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            <span
              className={`h-3 w-3 rounded-full ${
                online ? "bg-green-500" : "bg-slate-400"
              }`}
            />
            {online ? "You're Online" : "You're Offline"}
            <Power size={17} />
          </button>
        </section>

        {/* Notification */}
        {message && (
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            <Check size={18} />
            {message}
          </div>
        )}

        {/* Stats */}
        <section className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={<Wallet size={21} />}
            label="Today's Earnings"
            value="₹1,850"
            change="+12.5%"
          />

          <StatCard
            icon={<Car size={21} />}
            label="Completed Rides"
            value="12"
            change="Today"
          />

          <StatCard
            icon={<Star size={21} />}
            label="Rating"
            value="4.8"
            change="Excellent"
          />

          <StatCard
            icon={<Clock3 size={21} />}
            label="Pending Payout"
            value="₹4,250"
            change="This week"
          />
        </section>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            {/* Active Ride */}
            <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    Active Ride
                  </h2>
                  <p className="text-sm text-slate-500">
                    Your current trip
                  </p>
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  IN PROGRESS
                </span>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-52 overflow-hidden bg-blue-50">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-0 top-16 h-px w-full rotate-6 bg-slate-400" />
                  <div className="absolute left-0 top-32 h-px w-full -rotate-12 bg-slate-400" />
                  <div className="absolute left-20 top-0 h-full w-px rotate-12 bg-slate-400" />
                  <div className="absolute right-24 top-0 h-full w-px -rotate-12 bg-slate-400" />
                </div>

                <div className="absolute left-[25%] top-[35%] flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <Navigation size={19} />
                </div>

                <div className="absolute right-[25%] bottom-[25%] flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg">
                  <MapPin size={20} />
                </div>

                <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-2 text-xs font-semibold shadow-md">
                  3.8 km remaining
                </div>
              </div>

              <div className="p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                    <div>
                      <p className="text-xs text-slate-500">Pickup</p>
                      <p className="font-semibold text-slate-900">
                        HSR Layout
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-red-500" />
                    <div>
                      <p className="text-xs text-slate-500">Destination</p>
                      <p className="font-semibold text-slate-900">
                        Koramangala
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                    <Navigation size={18} />
                    Navigate
                  </button>

                  <Link
  href="/driver/ride"
  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
>
  View Details
</Link>
                </div>
              </div>
            </section>

            {/* Ride Requests */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    New Ride Requests
                  </h2>
                  <p className="text-sm text-slate-500">
                    Nearby bookings waiting for you
                  </p>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  {requests.length} New
                </span>
              </div>

              <div className="space-y-4">
                {requests.length === 0 ? (
                  <div className="rounded-xl bg-slate-50 py-10 text-center">
                    <Car className="mx-auto mb-3 text-slate-400" size={32} />
                    <p className="font-semibold text-slate-700">
                      No new requests
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      New ride requests will appear here.
                    </p>
                  </div>
                ) : (
                  requests.map((ride) => (
                    <div
                      key={ride.id}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                            {ride.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>

                          <div>
                            <p className="font-semibold text-slate-900">
                              {ride.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {ride.time}
                            </p>
                          </div>
                        </div>

                        <p className="text-lg font-bold text-slate-900">
                          {ride.fare}
                        </p>
                      </div>

                      <div className="mt-4 rounded-xl bg-slate-50 p-3">
                        <div className="flex gap-3">
                          <div className="flex flex-col items-center pt-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <span className="h-8 border-l border-dashed border-slate-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                          </div>

                          <div className="space-y-4 text-sm">
                            <div>
                              <p className="text-xs text-slate-500">Pickup</p>
                              <p className="font-medium text-slate-800">
                                {ride.pickup}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs text-slate-500">
                                Destination
                              </p>
                              <p className="font-medium text-slate-800">
                                {ride.destination}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Approx. {ride.distance}
                        </span>

                        <div className="flex gap-2">
                          <button
                            onClick={() => declineRide(ride.id)}
                            className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                          >
                            <X size={15} />
                            Decline
                          </button>

                          <button
                            onClick={() => acceptRide(ride.id)}
                            className="flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                          >
                            <Check size={15} />
                            Accept
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Vehicle */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-bold text-slate-950">My Vehicle</h2>
                <Car size={20} className="text-blue-600" />
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-lg font-bold text-slate-900">
                  Maruti Suzuki Dzire
                </p>
                <p className="mt-1 text-sm text-slate-500">White Sedan</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-lg bg-white px-3 py-2 text-sm font-bold tracking-wider text-slate-800">
                    KA 01 AB 1234
                  </span>

                  <span className="text-xs font-semibold text-green-600">
                    Active
                  </span>
                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-bold text-slate-950">
                Quick Actions
              </h2>

              <div className="divide-y divide-slate-100">
                <QuickLink
                  href="/driver/earnings"
                  icon={<Wallet size={19} />}
                  title="Earnings & Payouts"
                />

                <QuickLink
                  href="/driver/rides"
                  icon={<Car size={19} />}
                  title="Ride History"
                />

                <QuickLink
                  href="/driver/vehicle"
                  icon={<Car size={19} />}
                  title="Vehicle Details"
                />

                <QuickLink
                  href="/driver/documents"
                  icon={<FileText size={19} />}
                  title="Documents & KYC"
                />

                <QuickLink
                  href="/driver/profile"
                  icon={<User size={19} />}
                  title="My Profile"
                />

                <QuickLink
                  href="/driver/support"
                  icon={<HelpCircle size={19} />}
                  title="Help & Support"
                />
              </div>
            </section>

            {/* Safety */}
            <section className="rounded-2xl bg-slate-950 p-5 text-white">
              <h2 className="font-bold">Safety First</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Follow traffic rules and keep your vehicle documents updated.
              </p>

              <button className="mt-4 w-full rounded-xl bg-white py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
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
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

        <span className="text-xs font-semibold text-green-600">{change}</span>
      </div>

      <p className="mt-4 text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-950">{value}</p>
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
      className="flex items-center justify-between py-3.5 hover:text-blue-600"
    >
      <div className="flex items-center gap-3">
        <span className="text-slate-500">{icon}</span>
        <span className="text-sm font-medium text-slate-700">{title}</span>
      </div>

      <ChevronRight size={17} className="text-slate-400" />
    </Link>
  );
}