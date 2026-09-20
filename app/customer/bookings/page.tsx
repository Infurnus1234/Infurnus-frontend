"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bike,
  Car,
  ChevronRight,
  Clock3,
  MapPin,
  Package,
  Truck,
} from "lucide-react";

// ============================================================
// CHANGED: Booking type
// ============================================================

type BookingStatus =
  | "Requested"
  | "Accepted"
  | "Arrived"
  | "Started"
  | "Completed"
  | "Cancelled"
  | "Declined";

type Booking = {
  id: string;
  customer?: string;
  service: string;
  pickup: string;
  destination: string;
  vehicleType: string;
  vehicleId?: string;
  estimatedFare: number;
  distance: string;
  estimatedTime: string;

  rideType?: "now" | "schedule";
  scheduledDate?: string | null;
  scheduledTime?: string | null;

  status: BookingStatus | string;
  createdAt: string;

  acceptedAt?: string;
  declinedAt?: string;
  completedAt?: string;
  provider?: string;
};

// ============================================================
// CHANGED: UI booking type
// ============================================================

type DisplayBooking = {
  id: string;
  type: string;
  icon: typeof Car;
  from: string;
  to: string;
  date: string;
  time: string;
  amount: string;
  status: "Upcoming" | "Completed" | "Cancelled";
  originalStatus: string;
};

// ============================================================
// CHANGED: Demo bookings kept as fallback
// These will be shown only when there are no real bookings.
// ============================================================

const demoBookings: DisplayBooking[] = [
  {
    id: "INF-10245",
    type: "Cab Ride",
    icon: Car,
    from: "HSR Layout",
    to: "Koramangala",
    date: "18 Sep 2026",
    time: "6:30 PM",
    amount: "₹245",
    status: "Completed",
    originalStatus: "Completed",
  },
  {
    id: "INF-10244",
    type: "Parcel Delivery",
    icon: Package,
    from: "Indiranagar",
    to: "Whitefield",
    date: "17 Sep 2026",
    time: "2:15 PM",
    amount: "₹180",
    status: "Completed",
    originalStatus: "Completed",
  },
  {
    id: "INF-10243",
    type: "Bike Ride",
    icon: Bike,
    from: "Koramangala",
    to: "MG Road",
    date: "19 Sep 2026",
    time: "10:00 AM",
    amount: "₹95",
    status: "Upcoming",
    originalStatus: "Upcoming",
  },
  {
    id: "INF-10242",
    type: "Premium Ride",
    icon: Car,
    from: "Airport",
    to: "Whitefield",
    date: "16 Sep 2026",
    time: "8:00 PM",
    amount: "₹620",
    status: "Cancelled",
    originalStatus: "Cancelled",
  },
];

// ============================================================
// CHANGED: Tabs remain the same
// ============================================================

const tabs = [
  "All",
  "Upcoming",
  "Completed",
  "Cancelled",
];

// ============================================================
// CHANGED: Convert service/vehicle to icon
// ============================================================

function getBookingIcon(
  service: string,
  vehicleType: string
) {
  const value =
    `${service} ${vehicleType}`.toLowerCase();

  if (
    value.includes("logistics") ||
    value.includes("truck") ||
    value.includes("delivery") ||
    value.includes("parcel")
  ) {
    return Package;
  }

  if (
    value.includes("bike") ||
    value.includes("two")
  ) {
    return Bike;
  }

  if (
    value.includes("premium") ||
    value.includes("suv") ||
    value.includes("fortuner") ||
    value.includes("thar")
  ) {
    return Car;
  }

  return Car;
}

// ============================================================
// CHANGED: Convert real booking status into UI tab status
// ============================================================

function getDisplayStatus(
  status: string
): "Upcoming" | "Completed" | "Cancelled" {
  const normalizedStatus =
    status.toLowerCase();

  if (
    normalizedStatus === "completed"
  ) {
    return "Completed";
  }

  if (
    normalizedStatus === "cancelled" ||
    normalizedStatus === "declined"
  ) {
    return "Cancelled";
  }

  return "Upcoming";
}

// ============================================================
// CHANGED: Convert real booking into UI booking
// ============================================================

function convertBooking(
  booking: Booking
): DisplayBooking {
  const dateSource =
    booking.scheduledDate ||
    booking.completedAt ||
    booking.createdAt;

  const date = new Date(dateSource);

  const formattedDate =
    Number.isNaN(date.getTime())
      ? booking.scheduledDate || "Date unavailable"
      : date.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

  const formattedTime =
    booking.scheduledTime ||
    (
      !Number.isNaN(date.getTime())
        ? date.toLocaleTimeString("en-IN", {
            hour: "numeric",
            minute: "2-digit",
          })
        : "Time unavailable"
    );

  return {
    id: booking.id,
    type:
      booking.service === "Passenger"
        ? `${booking.vehicleType} Ride`
        : booking.service,
    icon: getBookingIcon(
      booking.service,
      booking.vehicleType
    ),
    from: booking.pickup,
    to: booking.destination,
    date: formattedDate,
    time: formattedTime,
    amount: `₹${booking.estimatedFare}`,
    status: getDisplayStatus(
      booking.status
    ),
    originalStatus: booking.status,
  };
}

// ============================================================
// Main page
// ============================================================

export default function BookingsPage() {
  const [activeTab, setActiveTab] =
    useState("All");

  // ==========================================================
  // CHANGED: Real bookings state
  // ==========================================================

  const [realBookings, setRealBookings] =
    useState<DisplayBooking[]>([]);

  const [loading, setLoading] =
    useState(true);

  // ==========================================================
  // CHANGED: Load bookings
  // ==========================================================

  useEffect(() => {
    const loadBookings = () => {
      try {
        const bookingsMap =
          new Map<string, DisplayBooking>();

        // ----------------------------------------------------
        // 1. Current booking
        // ----------------------------------------------------

        const currentBooking =
          localStorage.getItem(
            "infurnusCurrentBooking"
          );

        if (currentBooking) {
          const parsed =
            JSON.parse(
              currentBooking
            ) as Booking;

          if (
            parsed.customer === undefined ||
            parsed.customer === "Tripti Rani"
          ) {
            bookingsMap.set(
              parsed.id,
              convertBooking(parsed)
            );
          }
        }

        // ----------------------------------------------------
        // 2. Accepted booking
        // ----------------------------------------------------

        const acceptedBooking =
          localStorage.getItem(
            "infurnusAcceptedBooking"
          );

        if (acceptedBooking) {
          const parsed =
            JSON.parse(
              acceptedBooking
            ) as Booking;

          if (
            parsed.customer === undefined ||
            parsed.customer === "Tripti Rani"
          ) {
            bookingsMap.set(
              parsed.id,
              convertBooking(parsed)
            );
          }
        }

        // ----------------------------------------------------
        // 3. Completed provider trips
        // ----------------------------------------------------

        const completedTrips =
          localStorage.getItem(
            "providerCompletedTrips"
          );

        if (completedTrips) {
          const parsedTrips =
            JSON.parse(
              completedTrips
            ) as Booking[];

          parsedTrips.forEach((trip) => {
            if (
              trip.customer === undefined ||
              trip.customer === "Tripti Rani"
            ) {
              bookingsMap.set(
                trip.id,
                convertBooking({
                  ...trip,
                  status: "Completed",
                })
              );
            }
          });
        }

        // ----------------------------------------------------
        // CHANGED:
        // Current real bookings are displayed.
        // If none exist, show demo data.
        // ----------------------------------------------------

        setRealBookings(
          Array.from(bookingsMap.values())
        );
      } catch (error) {
        console.error(
          "Unable to load bookings:",
          error
        );

        setRealBookings([]);
      } finally {
        setLoading(false);
      }
    };

    loadBookings();

    // ========================================================
    // CHANGED: Listen for provider/customer updates
    // ========================================================

    window.addEventListener(
      "storage",
      loadBookings
    );

    window.addEventListener(
      "infurnusBookingUpdated",
      loadBookings
    );

    return () => {
      window.removeEventListener(
        "storage",
        loadBookings
      );

      window.removeEventListener(
        "infurnusBookingUpdated",
        loadBookings
      );
    };
  }, []);

  // ==========================================================
  // CHANGED:
  // Use real bookings when available.
  // Otherwise use the existing demo bookings.
  // ==========================================================

  const bookings =
    realBookings.length > 0
      ? realBookings
      : demoBookings;

  const filteredBookings =
    activeTab === "All"
      ? bookings
      : bookings.filter(
          (booking) =>
            booking.status === activeTab
        );

  // ==========================================================
  // Loading
  // ==========================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

          <p className="mt-4 text-sm text-slate-500">
            Loading your bookings...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/customer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={19} />
            Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              I
            </div>

            <span className="font-bold text-slate-900">
              INFURNUS
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Heading */}
        <div>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            My Activity
          </span>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            My Bookings
          </h1>

          <p className="mt-2 text-slate-500">
            View and manage your rides and deliveries.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-2 overflow-x-auto rounded-xl bg-white p-2 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              className={`whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ====================================================
            Booking List
        ==================================================== */}

        <div className="mt-6 space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <Clock3 className="text-slate-400" />
              </div>

              <h2 className="mt-5 font-bold text-slate-900">
                No bookings found
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                You don't have any{" "}
                {activeTab.toLowerCase()}{" "}
                bookings.
              </p>
            </div>
          ) : (
            filteredBookings.map(
              (booking) => {
                const Icon =
                  booking.icon;

                return (
                  <div
                    key={booking.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md md:p-6"
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon size={23} />
                        </div>

                        <div>
                          <h2 className="font-bold text-slate-900">
                            {booking.type}
                          </h2>

                          <p className="mt-1 text-xs text-slate-400">
                            Booking ID:{" "}
                            {booking.id}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          booking.status ===
                          "Completed"
                            ? "bg-green-50 text-green-600"
                            : booking.status ===
                              "Upcoming"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    {/* ==================================================
                        CHANGED: Show actual provider status
                    ================================================== */}

                    {booking.status ===
                      "Upcoming" &&
                      booking.originalStatus !==
                        "Upcoming" && (
                        <div className="mt-4 rounded-xl bg-blue-50 px-4 py-3">
                          <p className="text-xs font-semibold uppercase text-blue-500">
                            Current Status
                          </p>

                          <p className="mt-1 text-sm font-bold text-blue-700">
                            {booking.originalStatus}
                          </p>
                        </div>
                      )}

                    {/* Route */}
                    <div className="mt-6 rounded-xl bg-slate-50 p-4">
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="h-3 w-3 rounded-full bg-green-500" />

                          <div className="h-8 border-l border-dashed border-slate-300" />
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            PICKUP
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {booking.from}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <MapPin
                          size={17}
                          className="text-red-500"
                        />

                        <div>
                          <p className="text-xs text-slate-400">
                            DESTINATION
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {booking.to}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex gap-8">
                        <div>
                          <p className="text-xs text-slate-400">
                            DATE & TIME
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {booking.date}
                          </p>

                          <p className="text-xs text-slate-500">
                            {booking.time}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            AMOUNT
                          </p>

                          <p className="mt-1 text-sm font-bold text-slate-900">
                            {booking.amount}
                          </p>
                        </div>
                      </div>

                      {/* =================================================
                          CHANGED:
                          Requested / Accepted / Arrived / Started
                          all go to tracking.
                      ================================================= */}

                      {booking.status ===
                      "Upcoming" ? (
                        <Link
                          href="/customer/tracking"
                          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                        >
                          Track Ride
                          <ChevronRight
                            size={17}
                          />
                        </Link>
                      ) : (
                        <button
                          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                        >
                          View Details
                          <ChevronRight
                            size={17}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                );
              }
            )
          )}
        </div>

        {/* New Booking */}
        <div className="mt-8 rounded-2xl bg-blue-600 p-6 text-white md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Need another ride?
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              Book your next journey with Infurnus.
            </p>
          </div>

          <Link
            href="/customer/book"
            className="mt-5 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 md:mt-0"
          >
            Book a Ride
          </Link>
        </div>
      </div>
    </main>
  );
}