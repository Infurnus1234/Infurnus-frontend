"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Car,
  ChevronRight,
  IndianRupee,
  MapPin,
  Search,
  Star,
} from "lucide-react";
import { useState } from "react";

const rides = [
  {
    id: 1,
    customer: "Rahul Kumar",
    pickup: "HSR Layout",
    destination: "Koramangala",
    date: "18 Sep 2026",
    time: "3:20 PM",
    fare: "₹320",
    earning: "₹285",
    status: "Completed",
    rating: "5.0",
  },
  {
    id: 2,
    customer: "Priya Sharma",
    pickup: "Indiranagar",
    destination: "Electronic City",
    date: "18 Sep 2026",
    time: "1:45 PM",
    fare: "₹420",
    earning: "₹375",
    status: "Completed",
    rating: "4.8",
  },
  {
    id: 3,
    customer: "Amit Verma",
    pickup: "BTM Layout",
    destination: "HSR Layout",
    date: "18 Sep 2026",
    time: "11:30 AM",
    fare: "₹210",
    earning: "₹185",
    status: "Completed",
    rating: "5.0",
  },
  {
    id: 4,
    customer: "Sneha Gupta",
    pickup: "MG Road",
    destination: "Whitefield",
    date: "17 Sep 2026",
    time: "7:10 PM",
    fare: "₹380",
    earning: "₹340",
    status: "Completed",
    rating: "4.9",
  },
  {
    id: 5,
    customer: "Rohit Singh",
    pickup: "Koramangala",
    destination: "Marathahalli",
    date: "17 Sep 2026",
    time: "5:40 PM",
    fare: "₹290",
    earning: "₹255",
    status: "Cancelled",
    rating: "-",
  },
];

export default function DriverRidesPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredRides = rides.filter((ride) => {
    const matchesFilter =
      filter === "All" || ride.status === filter;

    const searchText =
      `${ride.customer} ${ride.pickup} ${ride.destination}`.toLowerCase();

    return matchesFilter && searchText.includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/driver"
            className="mr-4 rounded-xl p-2 text-slate-600 hover:bg-slate-100"
          >
            <ArrowLeft size={21} />
          </Link>

          <Link href="/" className="text-xl font-extrabold">
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>

          <span className="ml-auto text-sm font-semibold text-slate-600">
            Ride History
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6">
          <p className="text-sm text-slate-500">Driver account</p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            Ride History
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            View your completed and cancelled rides.
          </p>
        </div>

        {/* Summary */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <SummaryCard
            icon={<Car size={20} />}
            label="Total Rides"
            value="214"
          />

          <SummaryCard
            icon={<IndianRupee size={20} />}
            label="Total Earnings"
            value="₹32,850"
          />

          <SummaryCard
            icon={<Star size={20} />}
            label="Average Rating"
            value="4.8"
          />

          <SummaryCard
            icon={<CalendarDays size={20} />}
            label="This Month"
            value="58"
          />
        </section>

        {/* Filters */}
        <section className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto">
              {["All", "Completed", "Cancelled"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold ${
                    filter === item
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search rides..."
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Ride List */}
        <section className="mt-6 space-y-4">
          {filteredRides.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <Car
                size={35}
                className="mx-auto text-slate-300"
              />

              <h2 className="mt-4 font-bold text-slate-800">
                No rides found
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your filter or search.
              </p>
            </div>
          ) : (
            filteredRides.map((ride) => (
              <div
                key={ride.id}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                  {/* Customer */}
                  <div className="flex min-w-[210px] items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                      {ride.customer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {ride.customer}
                      </p>

                      <p className="text-xs text-slate-500">
                        {ride.date} • {ride.time}
                      </p>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="flex flex-1 gap-3">
                    <div className="flex flex-col items-center pt-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                      <span className="h-8 border-l border-dashed border-slate-300" />

                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-xs text-slate-400">
                          Pickup
                        </p>

                        <p className="font-medium text-slate-800">
                          {ride.pickup}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          Destination
                        </p>

                        <p className="font-medium text-slate-800">
                          {ride.destination}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fare */}
                  <div className="min-w-[130px] lg:text-right">
                    <p className="text-xs text-slate-500">
                      Customer Fare
                    </p>

                    <p className="text-lg font-bold text-slate-950">
                      {ride.fare}
                    </p>

                    <p className="text-xs text-green-600">
                      You earned {ride.earning}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between gap-4 lg:min-w-[130px] lg:justify-end">
                    <div className="lg:text-right">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          ride.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {ride.status}
                      </span>

                      {ride.rating !== "-" && (
                        <div className="mt-2 flex items-center gap-1 text-xs text-slate-500 lg:justify-end">
                          <Star
                            size={13}
                            className="fill-yellow-400 text-yellow-400"
                          />
                          {ride.rating}
                        </div>
                      )}
                    </div>

                    <button className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-blue-600">
                      <ChevronRight size={19} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

        {/* Back */}
        <div className="mt-6">
          <Link
            href="/driver"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={16} />
            Back to Driver Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

function SummaryCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="mt-4 text-sm text-slate-500">{label}</p>

      <p className="mt-1 text-2xl font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}