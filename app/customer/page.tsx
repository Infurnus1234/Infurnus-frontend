"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bell,
  Car,
  ChevronRight,
  Clock3,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Wallet,
} from "lucide-react";

// ============================================================
// CHANGED: Booking type
// ============================================================

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

  status: string;
  createdAt: string;

  acceptedAt?: string;
  declinedAt?: string;
  completedAt?: string;
  provider?: string;
};

// ============================================================
// Services
// ============================================================

const services = [
  {
    title: "Ride",
    description: "Book a bike, cab or premium ride",
    icon: Car,
    href: "/customer/book",
  },
  {
    title: "Rental",
    description: "Rent a vehicle by hour or day",
    icon: Clock3,
    href: "/customer/book",
  },
  {
    title: "Logistics",
    description: "Send packages and goods",
    icon: Package,
    href: "/customer/book",
  },
];

// ============================================================
// CHANGED: Helper to identify active booking
// ============================================================

function isActiveBooking(status: string) {
  const activeStatuses = [
    "requested",
    "accepted",
    "arrived",
    "started",
  ];

  return activeStatuses.includes(
    status.toLowerCase()
  );
}

// ============================================================
// CHANGED: Get booking display status
// ============================================================

function getStatusLabel(status: string) {
  switch (status.toLowerCase()) {
    case "requested":
      return "Finding Driver";

    case "accepted":
      return "Driver Accepted";

    case "arrived":
      return "Driver Arrived";

    case "started":
      return "Trip Started";

    case "completed":
      return "Completed";

    case "declined":
      return "Declined";

    case "cancelled":
      return "Cancelled";

    default:
      return status;
  }
}

// ============================================================
// CHANGED: Get booking icon
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

  return Car;
}

// ============================================================
// CHANGED: Format booking date
// ============================================================

function formatBookingDate(
  booking: Booking
) {
  const dateSource =
    booking.completedAt ||
    booking.scheduledDate ||
    booking.createdAt;

  const date = new Date(dateSource);

  if (Number.isNaN(date.getTime())) {
    return "Date unavailable";
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ============================================================
// CHANGED: Main Dashboard
// ============================================================

export default function CustomerDashboard() {
  const [currentBooking, setCurrentBooking] =
    useState<Booking | null>(null);

  const [completedBookings, setCompletedBookings] =
    useState<Booking[]>([]);

  const [loading, setLoading] =
    useState(true);

  // ==========================================================
  // CHANGED:
  // Load actual customer booking data
  // ==========================================================

  useEffect(() => {
    const loadBookings = () => {
      try {
        let current: Booking | null = null;

        // ----------------------------------------------------
        // Current booking
        // ----------------------------------------------------

        const currentBookingData =
          localStorage.getItem(
            "infurnusCurrentBooking"
          );

        if (currentBookingData) {
          current =
            JSON.parse(
              currentBookingData
            ) as Booking;
        }

        // ----------------------------------------------------
        // Accepted booking
        // ----------------------------------------------------

        const acceptedBookingData =
          localStorage.getItem(
            "infurnusAcceptedBooking"
          );

        if (acceptedBookingData) {
          const accepted =
            JSON.parse(
              acceptedBookingData
            ) as Booking;

          // Accepted booking should take priority
          if (
            accepted.status !== "Completed" &&
            accepted.status !== "Declined" &&
            accepted.status !== "Cancelled"
          ) {
            current = accepted;
          }
        }

        // ----------------------------------------------------
        // Set active booking
        // ----------------------------------------------------

        if (
          current &&
          isActiveBooking(current.status)
        ) {
          setCurrentBooking(current);
        } else {
          setCurrentBooking(null);
        }

        // ----------------------------------------------------
        // Completed bookings
        // ----------------------------------------------------

        const completedData =
          localStorage.getItem(
            "providerCompletedTrips"
          );

        if (completedData) {
          const trips =
            JSON.parse(
              completedData
            ) as Booking[];

          setCompletedBookings(trips);
        } else {
          setCompletedBookings([]);
        }
      } catch (error) {
        console.error(
          "Unable to load customer bookings:",
          error
        );

        setCurrentBooking(null);
        setCompletedBookings([]);
      } finally {
        setLoading(false);
      }
    };

    loadBookings();

    // ========================================================
    // CHANGED:
    // Listen for booking/provider updates
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
  // Create recent activity list
  // ==========================================================

  const recentBookings =
    completedBookings
      .slice()
      .sort(
        (a, b) =>
          new Date(
            b.completedAt ||
              b.createdAt
          ).getTime() -
          new Date(
            a.completedAt ||
              a.createdAt
          ).getTime()
      )
      .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              I
            </div>

            <span className="font-bold tracking-wide text-slate-900">
              INFURNUS
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/customer/notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100"
            >
              <Bell
                size={20}
                className="text-slate-600"
              />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </Link>

            <Link
              href="/customer/profile"
              className="flex items-center gap-3 border-l pl-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                T
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">
                  Tripti
                </p>

                <p className="text-xs text-slate-500">
                  Customer
                </p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Welcome */}
        <div>
          <p className="text-sm font-medium text-blue-600">
            Good evening 👋
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Where are you going?
          </h1>

          <p className="mt-2 text-slate-500">
            Book a ride, rental or delivery in just a few steps.
          </p>
        </div>

        {/* ====================================================
            CHANGED:
            Active booking card
        ==================================================== */}

        {currentBooking && (
          <section className="mt-6 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
            <div className="bg-blue-600 px-6 py-4 text-white">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">
                    Active Booking
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    {getStatusLabel(
                      currentBooking.status
                    )}
                  </h2>
                </div>

                <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">
                  {currentBooking.id}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-5 md:grid-cols-3">
                {/* Route */}
                <div className="md:col-span-2">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Your Trip
                  </p>

                  <div className="mt-4 flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500" />

                      <div className="h-8 border-l border-dashed border-slate-300" />

                      <div className="h-3 w-3 rounded-full bg-red-500" />
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="text-xs text-slate-400">
                          PICKUP
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          {currentBooking.pickup}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          DESTINATION
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          {currentBooking.destination}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fare */}
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs text-slate-400">
                    ESTIMATED FARE
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    ₹{currentBooking.estimatedFare}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Car size={16} />

                    {currentBooking.vehicleType}
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    {currentBooking.estimatedTime}
                  </p>
                </div>
              </div>

              {/* Track */}
              <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-slate-400">
                    CURRENT STATUS
                  </p>

                  <p className="mt-1 font-semibold text-blue-600">
                    {getStatusLabel(
                      currentBooking.status
                    )}
                  </p>
                </div>

                <Link
                  href="/customer/tracking"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Track Ride
                  <ChevronRight size={17} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Search / Booking Card */}
        <section className="mt-8 rounded-3xl bg-slate-950 p-6 text-white md:p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                Quick Booking
              </span>

              <h2 className="mt-5 text-2xl font-bold md:text-3xl">
                Book your next journey
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Enter your pickup and destination to find available
                Infurnus services.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-slate-900">
              {/* Pickup */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <MapPin
                  className="text-green-600"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Pickup location"
                  className="w-full bg-transparent outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Destination */}
              <div className="mt-4 flex items-center gap-3">
                <MapPin
                  className="text-red-500"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full bg-transparent outline-none placeholder:text-slate-400"
                />
              </div>

              <Link
                href="/customer/book"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                <Search size={18} />
                Find a Ride
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                What do you need?
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Choose an Infurnus service
              </p>
            </div>

            <Link
              href="/services"
              className="text-sm font-semibold text-blue-600"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={24} />
                    </div>

                    <ChevronRight
                      size={20}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Wallet + Safety */}
        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Wallet size={23} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Infurnus Wallet
                </p>

                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  ₹1,250
                </h3>
              </div>
            </div>

            <Link
              href="/customer/wallet"
              className="mt-5 block w-full rounded-xl border border-blue-600 py-3 text-center font-semibold text-blue-600 hover:bg-blue-50"
            >
              Manage Wallet
            </Link>
          </div>

          <div className="rounded-2xl bg-blue-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600">
              <ShieldCheck size={23} />
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              Safety & Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Get 24/7 support, emergency assistance and help with
              your bookings.
            </p>

            <Link
              href="/customer/support"
              className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Open Support
            </Link>
          </div>
        </section>

        {/* Recent Bookings */}
        <section className="mt-10 pb-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recent Activity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest rides and deliveries
              </p>
            </div>

            <Link
              href="/customer/bookings"
              className="text-sm font-semibold text-blue-600"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {/* ==================================================
                CHANGED:
                Real completed bookings
            ================================================== */}

            {loading ? (
              <div className="p-8 text-center text-sm text-slate-500">
                Loading activity...
              </div>
            ) : recentBookings.length === 0 ? (
              <div className="p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <Clock3 className="text-slate-400" />
                </div>

                <p className="mt-3 font-semibold text-slate-900">
                  No recent activity
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Your completed rides and deliveries will appear here.
                </p>
              </div>
            ) : (
              recentBookings.map(
                (booking, index) => {
                  const Icon =
                    getBookingIcon(
                      booking.service,
                      booking.vehicleType
                    );

                  return (
                    <div
                      key={booking.id}
                      className={`flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between ${
                        index !==
                        recentBookings.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon size={20} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {booking.service ===
                            "Passenger"
                              ? `${booking.vehicleType} Ride`
                              : booking.service}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {booking.pickup} →{" "}
                            {booking.destination}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {formatBookingDate(
                              booking
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-6 md:justify-end">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                          Completed
                        </span>

                        <span className="font-bold text-slate-900">
                          ₹
                          {
                            booking.estimatedFare
                          }
                        </span>
                      </div>
                    </div>
                  );
                }
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
}