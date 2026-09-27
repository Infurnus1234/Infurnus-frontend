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
  Navigation,
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
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
              Trip History Terminal
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Driver Ride History
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-2xl">
              Inspect past completed rides, customer ratings, fare earnings, and cancelled trip logs.
            </p>
          </div>

          <Link
            href="/driver"
            className="neu-btn px-6 py-3.5 rounded-2xl text-xs font-bold text-[#3D4852] inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <ArrowLeft size={16} />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Summary Stats Grid */}
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
            value="4.8 ★"
          />

          <SummaryCard
            icon={<CalendarDays size={20} />}
            label="This Month"
            value="58 Trips"
          />
        </section>

        {/* Filter and Search Bar */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Filter Tabs */}
            <div className="flex gap-3 overflow-x-auto pb-1 sm:pb-0">
              {["All", "Completed", "Cancelled"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
                    filter === item
                      ? "neu-inset text-[#000000] border border-black/10"
                      : "neu-btn text-[#6B7280]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by customer or route..."
                className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-xs text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
              />
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]"
              />
            </div>
          </div>
        </section>

        {/* Ride History Cards List */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-4">
          {filteredRides.length === 0 ? (
            <div className="neu-inset-deep rounded-2xl p-10 text-center space-y-3">
              <div className="neu-extruded inline-flex p-4 rounded-2xl text-[#000000]">
                <Car size={32} />
              </div>
              <p className="font-bold text-[#3D4852]">No Rides Found</p>
              <p className="text-xs text-[#6B7280]">Try adjusting your search criteria or status filter.</p>
            </div>
          ) : (
            filteredRides.map((ride) => (
              <div
                key={ride.id}
                className="neu-inset-deep rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Customer Details */}
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className="neu-extruded h-12 w-12 rounded-2xl flex items-center justify-center font-extrabold text-sm text-[#000000]">
                    {ride.customer
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <h3 className="font-extrabold text-sm text-[#3D4852]">
                      {ride.customer}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      {ride.date} • {ride.time}
                    </p>
                  </div>
                </div>

                {/* Route Info */}
                <div className="neu-inset-sm p-4 rounded-xl flex-1 max-w-md space-y-2">
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

                {/* Fare & Earnings */}
                <div className="flex items-center justify-between lg:justify-end gap-6 min-w-[180px]">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-[#6B7280]">Customer Fare</p>
                    <p className="text-base font-extrabold text-[#3D4852]">{ride.fare}</p>
                    <p className="text-xs font-bold text-[#000000] mt-0.5">Earned {ride.earning}</p>
                  </div>

                  <div className="text-right">
                    <span className="neu-inset-sm px-3 py-1 rounded-full text-xs font-bold text-[#000000]">
                      {ride.status}
                    </span>
                    {ride.rating !== "-" && (
                      <p className="text-xs font-bold text-[#3D4852] mt-1.5">
                        {ride.rating} ★ Rated
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
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
    </div>
  );
}