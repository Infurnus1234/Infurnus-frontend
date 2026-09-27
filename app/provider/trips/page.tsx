"use client";

import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Navigation,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

// CHANGED: Common booking structure used across Provider pages.
type Booking = {
  id: string;
  customer: string;
  service: string;
  pickup: string;
  destination: string;
  vehicleType?: string;
  vehicleId?: string;
  estimatedFare?: number;
  amount?: number;
  distance?: string;
  estimatedTime?: string;
  rideType?: "now" | "schedule";
  scheduledDate?: string | null;
  scheduledTime?: string | null;
  status: string;
  createdAt?: string;
  acceptedAt?: string;
  completedAt?: string;
  provider?: string;
};

// CHANGED: Display structure used by this page.
type Trip = {
  id: string;
  service: string;
  customer: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  amount: string;
  status: "Completed" | "In Progress" | "Cancelled";
  originalStatus: string;
  vehicleType?: string;
};

export default function ProviderTripsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // CHANGED: Real provider trip data.
  const [trips, setTrips] = useState<Trip[]>([]);

  // CHANGED: Load all provider trips from localStorage.
  const loadTrips = () => {
    try {
      const currentBooking: Booking | null = JSON.parse(
        localStorage.getItem("infurnusCurrentBooking") || "null"
      );

      const acceptedBooking: Booking | null = JSON.parse(
        localStorage.getItem("infurnusAcceptedBooking") || "null"
      );

      const completedTrips: Booking[] = JSON.parse(
        localStorage.getItem("providerCompletedTrips") || "[]"
      );

      const bookingMap = new Map<string, Booking>();

      // CHANGED: Completed trips are the source of truth for history.
      if (Array.isArray(completedTrips)) {
        completedTrips.forEach((trip) => {
          if (trip?.id) {
            bookingMap.set(trip.id, {
              ...trip,
              status: "Completed",
            });
          }
        });
      }

      // CHANGED: Add accepted/current booking if it is not completed.
      if (
        acceptedBooking?.id &&
        acceptedBooking.status !== "Completed" &&
        acceptedBooking.status !== "Declined"
      ) {
        bookingMap.set(acceptedBooking.id, acceptedBooking);
      }

      // CHANGED: Current booking can represent Requested/Declined/active states.
      if (
        currentBooking?.id &&
        currentBooking.status !== "Completed"
      ) {
        const existing = bookingMap.get(currentBooking.id);

        // Accepted booking has priority over an older current-booking state.
        if (!existing || currentBooking.status === "Declined") {
          bookingMap.set(currentBooking.id, currentBooking);
        }
      }

      const convertedTrips: Trip[] = Array.from(bookingMap.values())
        .map((booking) => {
          const amount = Number(
            booking.amount ?? booking.estimatedFare ?? 0
          );

          const dateSource =
            booking.completedAt ||
            booking.acceptedAt ||
            booking.createdAt;

          let date = "—";
          let time = "—";

          if (dateSource) {
            const parsedDate = new Date(dateSource);

            if (!Number.isNaN(parsedDate.getTime())) {
              date = parsedDate.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });

              time = parsedDate.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              });
            }
          }

          // CHANGED: Map actual booking statuses to the existing UI statuses.
          let displayStatus: Trip["status"];

          if (booking.status === "Completed") {
            displayStatus = "Completed";
          } else if (
            booking.status === "Declined" ||
            booking.status === "Cancelled"
          ) {
            displayStatus = "Cancelled";
          } else {
            // Requested / Accepted / Arrived / Started
            displayStatus = "In Progress";
          }

          return {
            id: booking.id,
            service: booking.service || "Trip",
            customer: booking.customer || "Customer",
            pickup: booking.pickup || "—",
            destination: booking.destination || "—",
            date,
            time,
            amount: `₹${amount.toLocaleString("en-IN")}`,
            status: displayStatus,
            originalStatus: booking.status,
            vehicleType: booking.vehicleType,
          };
        })
        // CHANGED: Newest trips first.
        .sort((a, b) => {
          const aDate = new Date(`${a.date} ${a.time}`).getTime();
          const bDate = new Date(`${b.date} ${b.time}`).getTime();

          return bDate - aDate;
        });

      setTrips(convertedTrips);
    } catch (error) {
      console.error("Failed to load provider trips:", error);
      setTrips([]);
    }
  };

  useEffect(() => {
    loadTrips();

    // CHANGED: Listen for booking updates from Provider Active Trip
    // and Customer Booking pages.
    const handleStorage = () => {
      loadTrips();
    };

    const handleBookingUpdate = () => {
      loadTrips();
    };

    window.addEventListener("storage", handleStorage);

    window.addEventListener(
      "infurnusBookingUpdated",
      handleBookingUpdate
    );

    return () => {
      window.removeEventListener("storage", handleStorage);

      window.removeEventListener(
        "infurnusBookingUpdated",
        handleBookingUpdate
      );
    };
  }, []);

  // CHANGED: Dynamic filtering.
  const filteredTrips = trips.filter((trip) => {
    const matchesFilter =
      filter === "All" || trip.status === filter;

    const searchTerm = search.toLowerCase().trim();

    const matchesSearch =
      !searchTerm ||
      trip.customer.toLowerCase().includes(searchTerm) ||
      trip.pickup.toLowerCase().includes(searchTerm) ||
      trip.destination.toLowerCase().includes(searchTerm) ||
      trip.id.toLowerCase().includes(searchTerm) ||
      trip.service.toLowerCase().includes(searchTerm);

    return matchesFilter && matchesSearch;
  });

  // CHANGED: Dynamic summary counts.
  const totalTrips = trips.length;

  const completedCount = trips.filter(
    (trip) => trip.status === "Completed"
  ).length;

  const cancelledCount = trips.filter(
    (trip) => trip.status === "Cancelled"
  ).length;

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-8 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* HEADER / TITLE */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8">
          <div className="space-y-1">
            <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
              PROVIDER DASHBOARD
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
              Trip & Dispatch History
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
              View, filter, and track all your active and past provider trips.
            </p>
          </div>

          <Link
            href="/provider"
            className="neu-btn px-4 py-3 text-xs font-bold flex items-center gap-2 w-fit"
          >
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        {/* SUMMARY */}
        <div className="grid gap-4 sm:grid-cols-3">
          <SummaryCard
            title="Total Trips"
            value={String(totalTrips)}
            icon={Navigation}
          />
          <SummaryCard
            title="Completed"
            value={String(completedCount)}
            icon={CheckCircle2}
          />
          <SummaryCard
            title="Cancelled"
            value={String(cancelledCount)}
            icon={XCircle}
          />
        </div>

        {/* FILTERS */}
        <section className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {[
                "All",
                "Completed",
                "In Progress",
                "Cancelled",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    filter === item
                      ? "neu-inset text-[#000000] border border-[#000000]/20"
                      : "neu-btn text-[#3D4852]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search trips..."
                className="neu-input w-full pl-11 pr-4 py-2.5 rounded-2xl text-xs text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
              />
            </div>
          </div>
        </section>

        {/* TRIPS LIST */}
        <section className="space-y-4">
          {filteredTrips.length === 0 ? (
            <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-10 text-center space-y-3">
              <div className="neu-inset-deep inline-flex p-4 rounded-2xl text-[#000000]">
                <Navigation size={28} />
              </div>
              <p className="font-bold text-[#3D4852]">
                No trips found
              </p>
              <p className="text-xs text-[#6B7280]">
                {trips.length === 0
                  ? "Completed and active provider trips will appear here."
                  : "Try another filter or search term."}
              </p>
            </div>
          ) : (
            filteredTrips.map((trip) => (
              <div
                key={trip.id}
                className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-4"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="neu-inset-deep p-3 rounded-2xl text-[#000000] flex-shrink-0">
                      <Navigation size={22} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-base text-[#3D4852]">
                          {trip.service}
                        </h3>
                        <Status status={trip.status} />
                      </div>

                      <p className="text-xs text-[#6B7280] font-mono mt-1">
                        Trip ID: {trip.id}
                      </p>

                      <p className="text-xs font-bold text-[#3D4852] mt-1">
                        Customer: {trip.customer}
                      </p>

                      {trip.vehicleType && (
                        <p className="text-[11px] text-[#6B7280]">
                          Vehicle: {trip.vehicleType}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 text-xs">
                    <div>
                      <p className="text-[11px] font-bold text-[#6B7280] uppercase">
                        Date & Time
                      </p>
                      <p className="font-bold text-[#3D4852] mt-0.5">
                        {trip.date}
                      </p>
                      <p className="text-[#6B7280]">
                        {trip.time}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-[#6B7280] uppercase">
                        Earnings
                      </p>
                      <p className="font-extrabold text-[#3D4852] text-sm mt-0.5">
                        {trip.amount}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 neu-inset-deep p-4 rounded-2xl sm:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-[#000000] mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold text-[#6B7280] uppercase">Pickup Location</p>
                      <p className="text-xs font-semibold text-[#3D4852]">{trip.pickup}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-[#000000] mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold text-[#6B7280] uppercase">Destination</p>
                      <p className="text-xs font-semibold text-[#3D4852]">{trip.destination}</p>
                    </div>
                  </div>
                </div>

                {trip.status === "In Progress" && (
                  <div className="pt-2">
                    <Link
                      href="/provider/trips/active"
                      className="neu-btn neu-btn-primary px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2"
                    >
                      <span>Open Active Navigation</span>
                    </Link>
                  </div>
                )}
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
}

function SummaryCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
          {title}
        </p>
        <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
          <Icon size={20} />
        </div>
      </div>
      <p className="text-2xl font-extrabold text-[#3D4852]">
        {value}
      </p>
    </div>
  );
}

function Status({ status }: { status: string }) {
  if (status === "Completed") {
    return (
      <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#000000] inline-flex items-center gap-1">
        <CheckCircle2 size={13} />
        Completed
      </span>
    );
  }

  if (status === "In Progress") {
    return (
      <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#000000] inline-flex items-center gap-1">
        <Clock size={13} />
        In Progress
      </span>
    );
  }

  return (
    <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#6B7280] inline-flex items-center gap-1">
      <XCircle size={13} />
      Cancelled
    </span>
  );
}