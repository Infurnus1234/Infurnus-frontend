"use client";

import Link from "next/link";
import {
  Bell,
  Car,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  FileText,
  MapPin,
  Menu,
  Settings,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";

const vehicles = [
  {
    number: "KA 01 AB 1234",
    model: "Maruti Suzuki Dzire",
    driver: "Aarav Singh",
    status: "On Trip",
    location: "HSR Layout",
    earnings: "₹1,850",
  },
  {
    number: "KA 03 CD 5678",
    model: "Hyundai Aura",
    driver: "Rahul Verma",
    status: "Available",
    location: "Koramangala",
    earnings: "₹1,420",
  },
  {
    number: "KA 05 EF 9012",
    model: "Tata Tigor",
    driver: "Amit Kumar",
    status: "Offline",
    location: "Garage",
    earnings: "₹980",
  },
  {
    number: "KA 09 GH 3456",
    model: "Maruti Suzuki Ertiga",
    driver: "Priya Singh",
    status: "On Trip",
    location: "Electronic City",
    earnings: "₹2,140",
  },
];

export default function OwnerDashboard() {
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
                VR
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Vikram Rao
                </p>

                <p className="text-xs text-slate-500">
                  Fleet Owner
                </p>
              </div>
            </div>

            <button className="rounded-xl p-2 text-slate-600 sm:hidden">
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Welcome */}
        <section className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm text-slate-500">Fleet Management</p>

          <div className="mt-1 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-950">
                Welcome, Vikram 👋
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage your vehicles, drivers and fleet operations.
              </p>
            </div>

            <span className="flex w-fit items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Fleet Active
            </span>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={<Car size={21} />}
            title="Total Vehicles"
            value="12"
            note="10 active"
          />

          <StatCard
            icon={<Users size={21} />}
            title="Total Drivers"
            value="10"
            note="8 online"
          />

          <StatCard
            icon={<CircleDollarSign size={21} />}
            title="Today's Revenue"
            value="₹12,850"
            note="+14.2%"
          />

          <StatCard
            icon={<Wallet size={21} />}
            title="Pending Settlement"
            value="₹28,450"
            note="Available soon"
          />
        </section>

        {/* Main */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Fleet */}
          <section className="rounded-2xl bg-white shadow-sm lg:col-span-2">
            <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Fleet Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Monitor your vehicles and assigned drivers.
                </p>
              </div>

              <Link
                href="/owner/vehicles"
                className="text-sm font-semibold text-blue-600"
              >
                Manage Fleet
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.number}
                  className="p-5"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                    {/* Vehicle */}
                    <div className="flex flex-1 items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Car size={21} />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          {vehicle.model}
                        </p>

                        <p className="mt-1 text-xs font-medium tracking-wide text-slate-500">
                          {vehicle.number}
                        </p>
                      </div>
                    </div>

                    {/* Driver */}
                    <div className="flex items-center gap-2 lg:w-40">
                      <UserRound
                        size={17}
                        className="text-slate-400"
                      />

                      <div>
                        <p className="text-xs text-slate-400">
                          Driver
                        </p>

                        <p className="text-sm font-semibold text-slate-800">
                          {vehicle.driver}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 lg:w-40">
                      <MapPin
                        size={17}
                        className="text-slate-400"
                      />

                      <div>
                        <p className="text-xs text-slate-400">
                          Location
                        </p>

                        <p className="text-sm font-medium text-slate-700">
                          {vehicle.location}
                        </p>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="lg:w-28">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                          vehicle.status === "On Trip"
                            ? "bg-blue-100 text-blue-700"
                            : vehicle.status === "Available"
                              ? "bg-green-100 text-green-700"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {vehicle.status}
                      </span>
                    </div>

                    {/* Earnings */}
                    <div className="lg:w-24 lg:text-right">
                      <p className="text-xs text-slate-400">
                        Today
                      </p>

                      <p className="font-bold text-slate-900">
                        {vehicle.earnings}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 p-4 text-center">
              <Link
                href="/owner/vehicles"
                className="text-sm font-semibold text-blue-600"
              >
                View All Vehicles
              </Link>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Revenue */}
            <section className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    This Month
                  </p>

                  <p className="mt-1 text-3xl font-bold">
                    ₹3,84,650
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                  <TrendingUp size={22} />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-green-400">
                <TrendingUp size={16} />
                18.5% higher than last month
              </div>

              <Link
                href="/owner/earnings"
                className="mt-5 block rounded-xl bg-white py-3 text-center text-sm font-semibold text-slate-950 hover:bg-slate-100"
              >
                View Earnings
              </Link>
            </section>

            {/* Quick Actions */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-bold text-slate-950">
                Quick Actions
              </h2>

              <div className="mt-3 divide-y divide-slate-100">
                <QuickLink
                  href="/owner/vehicles"
                  icon={<Car size={18} />}
                  title="Manage Vehicles"
                />

                <QuickLink
                  href="/owner/drivers"
                  icon={<Users size={18} />}
                  title="Manage Drivers"
                />

                <QuickLink
                  href="/owner/bookings"
                  icon={<ClipboardList size={18} />}
                  title="Fleet Bookings"
                />

                <QuickLink
                  href="/owner/earnings"
                  icon={<Wallet size={18} />}
                  title="Earnings & Settlements"
                />

                <QuickLink
                  href="/owner/documents"
                  icon={<FileText size={18} />}
                  title="Documents"
                />

                <QuickLink
                  href="/owner/settings"
                  icon={<Settings size={18} />}
                  title="Fleet Settings"
                />
              </div>
            </section>

            {/* Verification */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3 text-green-600">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-950">
                    Fleet Verification
                  </h2>

                  <p className="mt-1 text-xs text-green-600">
                    Account verified
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                All required fleet documents are currently verified.
              </p>
            </section>
          </aside>
        </div>

        {/* Activity */}
        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-950">
                Recent Fleet Activity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Latest updates from your fleet.
              </p>
            </div>

            <Link
              href="/owner/activity"
              className="text-sm font-semibold text-blue-600"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Activity
              title="Ride Completed"
              description="Aarav completed a ride"
              time="5 min ago"
            />

            <Activity
              title="Driver Online"
              description="Rahul is now online"
              time="18 min ago"
            />

            <Activity
              title="Payout Processed"
              description="₹25,000 transferred"
              time="1 hour ago"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  icon,
  title,
  value,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

        <span className="text-xs font-semibold text-green-600">
          {note}
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-500">{title}</p>

      <p className="mt-1 text-2xl font-bold text-slate-950">
        {value}
      </p>
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
      className="flex items-center justify-between py-3.5 hover:bg-slate-50"
    >
      <div className="flex items-center gap-3">
        <span className="text-slate-500">{icon}</span>

        <span className="text-sm font-medium text-slate-700">
          {title}
        </span>
      </div>

      <ChevronRight size={17} className="text-slate-400" />
    </Link>
  );
}

function Activity({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="font-semibold text-slate-800">{title}</p>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>

      <p className="mt-2 text-xs text-slate-400">{time}</p>
    </div>
  );
}