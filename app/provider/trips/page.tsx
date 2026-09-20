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
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/provider"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            <ArrowLeft size={18} />
            Dashboard
          </Link>

          <Link
            href="/"
            className="ml-auto text-xl font-extrabold tracking-tight sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div>
          <p className="text-sm font-semibold text-blue-600">
            PROVIDER
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            My Trips
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            View and manage your trip history.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    filter === item
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search trips..."
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </section>

        {/* TRIPS */}
        <section className="mt-5 space-y-4">
          {filteredTrips.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Navigation size={21} />
              </div>

              <p className="mt-4 font-semibold text-slate-700">
                No trips found
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {trips.length === 0
                  ? "Completed and active provider trips will appear here."
                  : "Try another filter or search term."}
              </p>
            </div>
          ) : (
            filteredTrips.map((trip) => (
              <div
                key={trip.id}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Navigation size={20} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-bold text-slate-950">
                          {trip.service}
                        </p>

                        <Status status={trip.status} />
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        Trip ID: {trip.id}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-slate-800">
                        {trip.customer}
                      </p>

                      {/* CHANGED: Show vehicle when available */}
                      {trip.vehicleType && (
                        <p className="mt-1 text-xs text-slate-400">
                          Vehicle: {trip.vehicleType}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm">
                    <div>
                      <p className="text-xs text-slate-400">
                        Date & Time
                      </p>

                      <p className="mt-1 font-medium text-slate-700">
                        {trip.date}
                      </p>

                      <p className="text-xs text-slate-500">
                        {trip.time}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Earnings
                      </p>

                      <p className="mt-1 font-bold text-slate-950">
                        {trip.amount}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 rounded-xl bg-slate-50 p-4 sm:grid-cols-2">
                  <div className="flex gap-2">
                    <MapPin
                      size={17}
                      className="mt-0.5 flex-shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-xs text-slate-400">
                        Pickup
                      </p>

                      <p className="text-sm font-medium text-slate-700">
                        {trip.pickup}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <MapPin
                      size={17}
                      className="mt-0.5 flex-shrink-0 text-green-600"
                    />

                    <div>
                      <p className="text-xs text-slate-400">
                        Destination
                      </p>

                      <p className="text-sm font-medium text-slate-700">
                        {trip.destination}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CHANGED: Active trips can be opened directly */}
                {trip.status === "In Progress" && (
                  <div className="mt-4">
                    <Link
                      href="/provider/trips/active"
                      className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Open Active Trip
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
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={18} />
        </div>
      </div>

      <p className="mt-3 text-2xl font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}

function Status({ status }: { status: string }) {
  if (status === "Completed") {
    return (
      <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
        <CheckCircle2 size={13} />
        Completed
      </span>
    );
  }

  if (status === "In Progress") {
    return (
      <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
        <Clock size={13} />
        In Progress
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
      <XCircle size={13} />
      Cancelled
    </span>
  );
}