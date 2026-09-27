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
    <main className="min-h-screen bg-[#E0E5EC] py-8 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Header Bar */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
              CUSTOMER DASHBOARD
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852] mt-2">
              Welcome Back, Tripti 👋
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
              Book rides, rentals, logistics, or emergency vehicles in one click.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/customer/notifications"
              className="neu-btn p-3 rounded-2xl text-[#3D4852] relative"
            >
              <Bell size={18} />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#000000]" />
            </Link>
            <Link
              href="/customer/wallet"
              className="neu-btn px-4 py-3 text-xs font-bold flex items-center gap-2"
            >
              <Wallet size={16} />
              <span>Wallet: ₹2,450</span>
            </Link>
            <Link
              href="/customer/profile"
              className="neu-btn neu-btn-primary px-4 py-3 text-xs font-bold"
            >
              My Account
            </Link>
          </div>
        </div>

        {/* Active Booking Banner */}
        {currentBooking && (
          <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-4 border border-black/10">
            <div className="flex items-center justify-between">
              <div>
                <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000] uppercase">
                  Active Booking
                </span>
                <h2 className="font-display text-xl font-bold text-[#3D4852] mt-2">
                  {getStatusLabel(currentBooking.status)}
                </h2>
              </div>
              <span className="font-mono text-xs font-bold text-[#000000] neu-inset-sm px-3 py-1 rounded-xl">
                {currentBooking.id}
              </span>
            </div>

            <div className="neu-inset-deep p-6 rounded-2xl space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#000000] mt-0.5" />
                <div>
                  <p className="text-[11px] font-bold uppercase text-[#6B7280]">Pickup</p>
                  <p className="text-xs font-semibold text-[#3D4852]">{currentBooking.pickup}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-black/5">
                <MapPin size={18} className="text-[#000000] mt-0.5" />
                <div>
                  <p className="text-[11px] font-bold uppercase text-[#6B7280]">Destination</p>
                  <p className="text-xs font-semibold text-[#3D4852]">{currentBooking.destination}</p>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#6B7280] uppercase">Estimated Fare</p>
                <p className="text-xl font-extrabold text-[#3D4852]">₹{currentBooking.estimatedFare}</p>
              </div>
              <Link
                href="/customer/tracking"
                className="neu-btn neu-btn-primary px-6 py-3 text-xs font-bold inline-flex items-center gap-2"
              >
                <span>Track Active Booking</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </section>
        )}
               {/* Quick Booking Card */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-lg">
              <span className="inline-flex items-center gap-2 neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
                <Search size={14} />
                Instant Booking Search
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
                Book Your Next Journey
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
                Enter your pickup and destination to find available Infurnus cabs, hourly rentals, or cargo mini-trucks.
              </p>
            </div>

            <div className="neu-inset-deep p-6 rounded-[28px] space-y-4 w-full lg:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter pickup location..."
                  className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-xs text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
                />
                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Where to? (Destination)..."
                  className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-xs text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
                />
                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]" />
              </div>

              <Link
                href="/customer/book"
                className="neu-btn neu-btn-primary w-full py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <Search size={16} />
                <span>Search Available Vehicles</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#3D4852]">
                Choose Service Category
              </h2>
              <p className="text-xs text-[#6B7280] mt-1">
                Select your transit or logistics requirement
              </p>
            </div>

            <Link
              href="/services"
              className="neu-btn px-4 py-2 rounded-xl text-xs font-bold text-[#3D4852]"
            >
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="neu-extruded neu-extruded-hover rounded-[32px] bg-[#E0E5EC] p-6 flex flex-col justify-between space-y-4 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="neu-inset-deep p-3.5 rounded-2xl text-[#000000]">
                      <Icon size={26} />
                    </div>
                    <div className="neu-btn p-2 rounded-xl text-[#3D4852]">
                      <ChevronRight size={18} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-[#3D4852]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Wallet & Safety Banner */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="neu-inset-deep p-4 rounded-2xl text-[#000000]">
                <Wallet size={28} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                  Infurnus Wallet Balance
                </p>
                <h3 className="font-display text-2xl font-extrabold text-[#3D4852] mt-0.5">
                  ₹2,450
                </h3>
              </div>
            </div>

            <Link
              href="/customer/wallet"
              className="neu-btn neu-btn-primary w-full py-3.5 rounded-2xl text-xs font-bold text-center block"
            >
              Manage Balance & Payment Methods
            </Link>
          </div>

          <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="neu-inset-deep p-4 rounded-2xl text-[#000000]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                  24/7 Safety & SOS Helpline
                </p>
                <h3 className="font-display text-lg font-bold text-[#3D4852] mt-0.5">
                  Emergency Support & Tracking
                </h3>
              </div>
            </div>

            <Link
              href="/customer/support"
              className="neu-btn w-full py-3.5 rounded-2xl text-xs font-bold text-center block"
            >
              Open Customer Support Portal
            </Link>
          </div>
        </section>

        {/* Recent Activity Card */}
        <section className="space-y-6 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#3D4852]">
                Recent Trip Activity
              </h2>
              <p className="text-xs text-[#6B7280] mt-1">
                Your latest bookings and delivery receipts
              </p>
            </div>

            <Link
              href="/customer/bookings"
              className="neu-btn px-4 py-2 rounded-xl text-xs font-bold text-[#3D4852]"
            >
              View All History
            </Link>
          </div>

          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
            {loading ? (
              <div className="p-8 text-center text-xs text-[#6B7280]">
                Loading recent trip history...
              </div>
            ) : recentBookings.length === 0 ? (
              <div className="p-8 text-center space-y-3">
                <div className="neu-inset-deep inline-flex p-4 rounded-2xl text-[#000000]">
                  <Clock3 size={28} />
                </div>
                <p className="font-bold text-[#3D4852]">No Recent Activity</p>
                <p className="text-xs text-[#6B7280]">Your completed rides, rentals, and parcel deliveries will appear here.</p>
              </div>
            ) : (
              recentBookings.map((booking) => {
                const Icon = getBookingIcon(booking.service, booking.vehicleType);
                return (
                  <div
                    key={booking.id}
                    className="neu-inset-deep rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="neu-extruded p-3 rounded-xl text-[#000000]">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-[#3D4852]">
                          {booking.service === "Passenger" ? `${booking.vehicleType} Ride` : booking.service}
                        </h3>
                        <p className="text-xs text-[#6B7280] mt-0.5">
                          {booking.pickup} → {booking.destination}
                        </p>
                        <p className="text-[11px] text-[#6B7280] font-mono mt-1">
                          {formatBookingDate(booking)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:text-right">
                      <span className="neu-inset-sm px-3 py-1 rounded-full text-xs font-bold text-[#000000]">
                        Completed
                      </span>
                      <span className="font-extrabold text-sm text-[#3D4852]">
                        ₹{booking.estimatedFare}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

      </div>
    </main>
  );
}