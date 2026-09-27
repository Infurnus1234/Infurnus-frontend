"use client";

import Link from "next/link";
import {
  Car,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  FileText,
  MapPin,
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
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
              Fleet Owner Command Portal
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Welcome back, Vikram Rao 👋
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-2xl">
              Monitor live vehicles, manage driver assignments, and audit total fleet revenue metrics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="neu-inset-sm px-4 py-2.5 rounded-2xl text-xs font-bold text-[#000000] inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#000000] animate-pulse" />
              <span>Fleet Active (4 Vehicles)</span>
            </span>
            <Link
              href="/provider/vehicles"
              className="neu-btn neu-btn-primary px-6 py-3 rounded-2xl text-xs font-bold"
            >
              Manage Fleet
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Car size={20} />}
            title="Total Fleet"
            value="12 Vehicles"
            note="10 Active on Road"
          />

          <StatCard
            icon={<Users size={20} />}
            title="Assigned Drivers"
            value="10 Drivers"
            note="8 Currently Online"
          />

          <StatCard
            icon={<CircleDollarSign size={20} />}
            title="Today's Revenue"
            value="₹12,850"
            note="+14.2% vs yesterday"
          />

          <StatCard
            icon={<Wallet size={20} />}
            title="Pending Settlement"
            value="₹28,450"
            note="Settlement Friday"
          />
        </section>

        {/* Main Content Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Fleet Overview Card */}
          <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000] uppercase">
                  Live Dispatch
                </span>
                <h2 className="font-display text-xl font-bold text-[#3D4852] mt-2">
                  Fleet Vehicle Monitoring
                </h2>
              </div>

              <Link
                href="/provider/vehicles"
                className="neu-btn px-4 py-2 rounded-xl text-xs font-bold text-[#3D4852]"
              >
                Full Fleet Directory
              </Link>
            </div>

            <div className="space-y-4">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.number}
                  className="neu-inset-deep rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                >
                  {/* Vehicle Details */}
                  <div className="flex items-center gap-4 min-w-[210px]">
                    <div className="neu-extruded p-3 rounded-xl text-[#000000] shrink-0">
                      <Car size={20} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-sm text-[#3D4852]">
                        {vehicle.model}
                      </h3>
                      <p className="text-xs font-mono font-bold text-[#6B7280] mt-0.5">
                        {vehicle.number}
                      </p>
                    </div>
                  </div>

                  {/* Driver & Location Info */}
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    <div className="neu-inset-sm p-3 rounded-xl">
                      <p className="text-[10px] font-bold uppercase text-[#6B7280]">Driver</p>
                      <p className="text-xs font-bold text-[#3D4852] truncate">{vehicle.driver}</p>
                    </div>

                    <div className="neu-inset-sm p-3 rounded-xl">
                      <p className="text-[10px] font-bold uppercase text-[#6B7280]">Location</p>
                      <p className="text-xs font-bold text-[#3D4852] truncate">{vehicle.location}</p>
                    </div>
                  </div>

                  {/* Status & Earnings */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 min-w-[170px]">
                    <span className="neu-inset-sm px-3 py-1 rounded-full text-xs font-extrabold text-[#000000]">
                      {vehicle.status}
                    </span>

                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase text-[#6B7280]">Today</p>
                      <p className="text-sm font-extrabold text-[#3D4852]">{vehicle.earnings}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <Link
                href="/provider/vehicles"
                className="neu-btn block w-full py-3.5 rounded-2xl text-center text-xs font-bold text-[#3D4852]"
              >
                View All 12 Vehicles in Fleet
              </Link>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="space-y-8">
            {/* Monthly Revenue Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase text-[#6B7280]">Monthly Gross Revenue</p>
                  <p className="text-3xl font-extrabold text-[#3D4852] mt-1">₹3,84,650</p>
                </div>
                <div className="neu-inset-deep p-3 rounded-2xl text-[#000000]">
                  <TrendingUp size={24} />
                </div>
              </div>

              <div className="neu-inset-sm p-3 rounded-2xl flex items-center gap-2 text-xs font-bold text-[#000000]">
                <TrendingUp size={16} />
                <span>+18.5% Growth vs last month</span>
              </div>

              <Link
                href="/provider/earnings"
                className="neu-btn neu-btn-primary block w-full py-3.5 rounded-2xl text-center text-xs font-bold"
              >
                View Financial Statement
              </Link>
            </section>

            {/* Quick Actions Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <h2 className="font-bold text-lg text-[#3D4852]">
                Fleet Control Menu
              </h2>

              <div className="space-y-3">
                <QuickLink
                  href="/provider/vehicles"
                  icon={<Car size={18} />}
                  title="Manage Vehicles"
                />

                <QuickLink
                  href="/provider/drivers"
                  icon={<Users size={18} />}
                  title="Manage Drivers"
                />

                <QuickLink
                  href="/provider/trips"
                  icon={<ClipboardList size={18} />}
                  title="Fleet Bookings"
                />

                <QuickLink
                  href="/provider/earnings"
                  icon={<Wallet size={18} />}
                  title="Earnings & Settlements"
                />

                <QuickLink
                  href="/provider/documents"
                  icon={<FileText size={18} />}
                  title="Fleet Documents"
                />

                <QuickLink
                  href="/provider/settings"
                  icon={<Settings size={18} />}
                  title="Fleet Settings"
                />
              </div>
            </section>

            {/* Verification Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#3D4852]">Fleet Verification State</h3>
                  <p className="text-[11px] text-[#000000] font-bold">100% Fully Compliant</p>
                </div>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                All commercial vehicles, insurances, and driver KYC records are validated.
              </p>
            </section>
          </aside>
        </div>

        {/* Recent Activity Section */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000] uppercase">
                Real-time Audit
              </span>
              <h2 className="font-display text-xl font-bold text-[#3D4852] mt-2">
                Recent Fleet Operations
              </h2>
            </div>

            <Link
              href="/provider/trips"
              className="neu-btn px-4 py-2 rounded-xl text-xs font-bold text-[#3D4852]"
            >
              View Full Logs
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Activity
              title="Trip Completed"
              description="Aarav Singh completed passenger trip #INF-8842"
              time="5 min ago"
            />

            <Activity
              title="Driver Shift Started"
              description="Rahul Verma toggled status to ONLINE"
              time="18 min ago"
            />

            <Activity
              title="Payout Settlement"
              description="₹25,000 processed to HDFC Account ****4521"
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
    <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
          {title}
        </p>
        <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-extrabold text-[#3D4852]">{value}</p>
      <span className="neu-inset-sm px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#000000] inline-block">
        {note}
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
    <div className="neu-inset-deep p-5 rounded-2xl space-y-2">
      <p className="font-bold text-xs text-[#3D4852]">{title}</p>
      <p className="text-xs text-[#6B7280] leading-relaxed">{description}</p>
      <p className="text-[11px] text-[#000000] font-mono font-bold pt-1">{time}</p>
    </div>
  );
}