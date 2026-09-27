"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  MapPin,
  Navigation,
  Phone,
  User,
  Car,
} from "lucide-react";

/*
 * =========================================================
 * 🟢 NEW:
 * Trip status now controls the complete provider flow.
 * =========================================================
 */
type TripStatus =
  | "accepted"
  | "arrived"
  | "started"
  | "completed";

/*
 * =========================================================
 * 🟢 NEW:
 * Booking structure coming from customer booking.
 * =========================================================
 */
type Booking = {
  id: string;
  customer: string;
  service: string;
  pickup: string;
  destination: string;
  vehicleType: string;
  vehicleId: string;
  estimatedFare: number;
  distance: string;
  estimatedTime: string;
  rideType?: "now" | "schedule";
  scheduledDate?: string | null;
  scheduledTime?: string | null;
  status: string;
  createdAt: string;
  acceptedAt?: string;
  provider?: string;
};

export default function ActiveTripPage() {
  /*
   * =========================================================
   * 🔴 CHANGED:
   * Start with accepted status because this page is opened
   * after provider clicks Accept.
   * =========================================================
   */
  const [status, setStatus] =
    useState<TripStatus>("accepted");

  /*
   * =========================================================
   * 🟢 NEW:
   * Store the actual accepted customer booking.
   * =========================================================
   */
  const [booking, setBooking] =
    useState<Booking | null>(null);

  /*
   * =========================================================
   * 🟢 NEW:
   * Loading state while reading localStorage.
   * =========================================================
   */
  const [loading, setLoading] = useState(true);

  /*
   * =========================================================
   * 🟢 NEW:
   * Read the booking accepted by provider.
   * =========================================================
   */
  useEffect(() => {
    const loadAcceptedBooking = () => {
      const savedBooking = localStorage.getItem(
        "infurnusAcceptedBooking"
      );

      /*
       * If there is no accepted booking, try the current booking.
       * This makes the page a little more robust.
       */
      if (!savedBooking) {
        const currentBooking =
          localStorage.getItem(
            "infurnusCurrentBooking"
          );

        if (!currentBooking) {
          setBooking(null);
          setLoading(false);
          return;
        }

        try {
          const parsedBooking =
            JSON.parse(currentBooking);

          /*
           * Only use it if provider has accepted it.
           */
          if (parsedBooking.status === "Accepted") {
            setBooking(parsedBooking);
          } else {
            setBooking(null);
          }
        } catch (error) {
          console.error(
            "Failed to read current booking:",
            error
          );

          setBooking(null);
        }

        setLoading(false);
        return;
      }

      try {
        const parsedBooking =
          JSON.parse(savedBooking);

        setBooking(parsedBooking);

        /*
         * =====================================================
         * 🟢 NEW:
         * If the booking already has a progress status,
         * restore that status.
         * =====================================================
         */
        if (parsedBooking.status === "Arrived") {
          setStatus("arrived");
        } else if (
          parsedBooking.status === "Started"
        ) {
          setStatus("started");
        } else if (
          parsedBooking.status === "Completed"
        ) {
          setStatus("completed");
        } else {
          setStatus("accepted");
        }
      } catch (error) {
        console.error(
          "Failed to read accepted booking:",
          error
        );

        setBooking(null);
      }

      setLoading(false);
    };

    loadAcceptedBooking();

    /*
     * 🟢 NEW:
     * Listen for booking updates.
     */
    window.addEventListener(
      "infurnusBookingUpdated",
      loadAcceptedBooking
    );

    window.addEventListener(
      "storage",
      loadAcceptedBooking
    );

    return () => {
      window.removeEventListener(
        "infurnusBookingUpdated",
        loadAcceptedBooking
      );

      window.removeEventListener(
        "storage",
        loadAcceptedBooking
      );
    };
  }, []);

  /*
   * =========================================================
   * 🟢 NEW:
   * Status labels.
   * =========================================================
   */
  const statusText = {
    accepted: "Heading to pickup",
    arrived: "Arrived at pickup",
    started: "Trip in progress",
    completed: "Trip completed",
  };

  /*
   * =========================================================
   * 🟢 NEW:
   * Handle Arrived → Start → Complete.
   * =========================================================
   */
  const handleAction = () => {
    if (!booking) return;

    /*
     * =======================================================
     * ACCEPTED → ARRIVED
     * =======================================================
     */
    if (status === "accepted") {
      const updatedBooking = {
        ...booking,
        status: "Arrived",
      };

      /*
       * Save updated booking
       */
      localStorage.setItem(
        "infurnusAcceptedBooking",
        JSON.stringify(updatedBooking)
      );

      localStorage.setItem(
        "infurnusCurrentBooking",
        JSON.stringify(updatedBooking)
      );

      setBooking(updatedBooking);
      setStatus("arrived");

      window.dispatchEvent(
        new Event("infurnusBookingUpdated")
      );

      return;
    }

    /*
     * =======================================================
     * ARRIVED → STARTED
     * =======================================================
     */
    if (status === "arrived") {
      const updatedBooking = {
        ...booking,
        status: "Started",
      };

      localStorage.setItem(
        "infurnusAcceptedBooking",
        JSON.stringify(updatedBooking)
      );

      localStorage.setItem(
        "infurnusCurrentBooking",
        JSON.stringify(updatedBooking)
      );

      setBooking(updatedBooking);
      setStatus("started");

      window.dispatchEvent(
        new Event("infurnusBookingUpdated")
      );

      return;
    }

    /*
     * =======================================================
     * STARTED → COMPLETED
     * =======================================================
     */
    if (status === "started") {
      const updatedBooking = {
        ...booking,
        status: "Completed",
        completedAt: new Date().toISOString(),
      };

      /*
       * Save final booking status
       */
      localStorage.setItem(
        "infurnusAcceptedBooking",
        JSON.stringify(updatedBooking)
      );

      localStorage.setItem(
        "infurnusCurrentBooking",
        JSON.stringify(updatedBooking)
      );

      /*
       * =====================================================
       * 🔴 CHANGED:
       * Completed trip now uses ACTUAL booking information.
       * =====================================================
       */
      const completedTrip = {
        id: booking.id,
        service: booking.service,
        customer: booking.customer,
        pickup: booking.pickup,
        destination: booking.destination,
        vehicleType: booking.vehicleType,
        amount: booking.estimatedFare,
        distance: booking.distance,
        estimatedTime: booking.estimatedTime,
        date: new Date().toISOString(),
        status: "Completed",
      };

      /*
       * Read previous completed trips
       */
      let existingTrips: any[] = [];

      try {
        existingTrips = JSON.parse(
          localStorage.getItem(
            "providerCompletedTrips"
          ) || "[]"
        );
      } catch (error) {
        console.error(
          "Failed to read completed trips:",
          error
        );

        existingTrips = [];
      }

      /*
       * 🟢 NEW:
       * Prevent duplicate completed trips.
       */
      const alreadyCompleted =
        existingTrips.some(
          (trip) => trip.id === completedTrip.id
        );

      if (!alreadyCompleted) {
        localStorage.setItem(
          "providerCompletedTrips",
          JSON.stringify([
            ...existingTrips,
            completedTrip,
          ])
        );
      }

      setBooking(updatedBooking);
      setStatus("completed");

      window.dispatchEvent(
        new Event("infurnusBookingUpdated")
      );
    }
  };

  /*
   * =========================================================
   * 🟢 NEW:
   * Loading screen
   * =========================================================
   */
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#E0E5EC] p-4 text-[#3D4852]">
        <div className="neu-extruded p-10 rounded-[32px] text-center space-y-4">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#A3B1C6] border-t-[#000000]" />
          <p className="text-sm font-bold text-[#6B7280]">
            Loading active trip details...
          </p>
        </div>
      </main>
    );
  }

  if (!booking) {
    return (
      <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <Link
              href="/provider"
              className="neu-btn p-3 rounded-2xl text-[#3D4852]"
            >
              <ArrowLeft size={18} />
            </Link>
            <h1 className="font-display text-2xl font-extrabold text-[#3D4852]">
              Active Trip Navigation
            </h1>
          </div>

          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-10 text-center space-y-4">
            <div className="neu-inset-deep inline-flex p-5 rounded-3xl text-[#000000]">
              <Navigation size={36} />
            </div>

            <h2 className="font-display text-2xl font-extrabold text-[#3D4852]">
              No Active Trip Found
            </h2>

            <p className="mx-auto max-w-md text-xs text-[#6B7280] leading-relaxed">
              There is currently no accepted booking assigned. Accept a new request from your provider dashboard to initialize trip navigation.
            </p>

            <div className="pt-2">
              <Link
                href="/provider"
                className="neu-btn neu-btn-primary px-8 py-3.5 text-xs font-bold"
              >
                Return to Provider Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const customerInitials = booking.customer
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-8 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between neu-extruded rounded-[28px] bg-[#E0E5EC] p-6">
          <div className="flex items-center gap-3">
            <Link
              href="/provider"
              className="neu-btn p-3 rounded-2xl text-[#3D4852]"
            >
              <ArrowLeft size={18} />
            </Link>
            <div>
              <h1 className="font-display text-xl font-bold text-[#3D4852]">
                Active Trip Execution
              </h1>
              <p className="text-xs text-[#6B7280] font-mono">
                Booking ID: {booking.id}
              </p>
            </div>
          </div>
          <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#000000]">
            {booking.service}
          </span>
        </div>

        {/* STATUS */}
        <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
                {booking.service}
              </span>

              <h2 className="font-display text-2xl font-extrabold text-[#3D4852] mt-3">
                {statusText[status]}
              </h2>

              {/* 🔴 CHANGED:
                  Actual booking ID */}
              <p className="mt-1 text-sm text-slate-500">
                Booking ID: {booking.id}
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              {status === "completed" ? (
                <CheckCircle2 size={28} />
              ) : (
                <Navigation size={28} />
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            CUSTOMER
            ===================================================== */}
        <section className="mb-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-bold text-slate-950">
            Customer Details
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* 🔴 CHANGED:
                  Actual customer initials */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                {customerInitials}
              </div>

              <div>
                {/* 🔴 CHANGED:
                    Actual customer name */}
                <p className="font-semibold text-slate-950">
                  {booking.customer}
                </p>

                <p className="text-sm text-slate-500">
                  Passenger
                </p>
              </div>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-600"
              onClick={() => {
                /*
                 * Phone functionality can be connected later
                 * when the customer phone number is available.
                 */
                alert(
                  "Customer contact will be available after phone integration."
                );
              }}
            >
              <Phone size={19} />
            </button>
          </div>
        </section>

        {/* =====================================================
            VEHICLE
            ===================================================== */}
        <section className="mb-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-bold text-slate-950">
            Vehicle
          </h2>

          <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Car size={23} />
            </div>

            <div>
              <p className="font-semibold text-slate-950">
                {booking.vehicleType}
              </p>

              <p className="text-sm text-slate-500">
                Selected for this booking
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            ROUTE
            ===================================================== */}
        <section className="mb-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-bold text-slate-950">
            Trip Route
          </h2>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-blue-600" />

                <div className="h-12 w-px bg-slate-300" />
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  PICKUP
                </p>

                {/* 🔴 CHANGED:
                    Actual pickup */}
                <p className="font-semibold text-slate-950">
                  {booking.pickup}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-green-600" />

              <div>
                <p className="text-xs text-slate-400">
                  DESTINATION
                </p>

                {/* 🔴 CHANGED:
                    Actual destination */}
                <p className="font-semibold text-slate-950">
                  {booking.destination}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TRIP DETAILS
            ===================================================== */}
        <section className="mb-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-bold text-slate-950">
            Trip Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <Detail
              icon={<MapPin size={18} />}
              title="Distance"
              value={booking.distance}
            />

            <Detail
              icon={<Clock size={18} />}
              title="Estimated Time"
              value={booking.estimatedTime}
            />

            {/* 🔴 CHANGED:
                Actual fare */}
            <Detail
              icon={<User size={18} />}
              title="Fare"
              value={`₹${booking.estimatedFare}`}
            />
          </div>
        </section>

        {/* =====================================================
            MAP
            ===================================================== */}
        <section className="mb-6 rounded-2xl border bg-white p-4 shadow-sm">
          <div className="relative h-64 overflow-hidden rounded-xl bg-slate-200">
            <div className="absolute left-[20%] top-[30%] h-4 w-4 rounded-full bg-blue-600 shadow-lg" />

            <div className="absolute bottom-[25%] right-[20%] h-4 w-4 rounded-full bg-green-600 shadow-lg" />

            <div className="absolute left-[23%] top-[32%] h-1 w-[55%] rotate-12 bg-blue-400" />

            <div className="absolute bottom-4 left-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold shadow">
              Live Navigation
            </div>
          </div>
        </section>

        {/* =====================================================
            ACTION
            ===================================================== */}
        {status !== "completed" ? (
          <button
            type="button"
            onClick={handleAction}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700"
          >
            {status === "accepted" && (
              <>
                <Navigation size={20} />
                I&apos;ve Arrived at Pickup
              </>
            )}

            {status === "arrived" && (
              <>
                <Navigation size={20} />
                Start Trip
              </>
            )}

            {status === "started" && (
              <>
                <CheckCircle2 size={20} />
                Complete Trip
              </>
            )}
          </button>
        ) : (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center">
            <CheckCircle2
              className="mx-auto text-green-600"
              size={30}
            />

            <h2 className="mt-2 font-bold text-green-800">
              Trip Completed
            </h2>

            {/* 🔴 CHANGED:
                Actual fare */}
            <p className="mt-1 text-sm text-green-700">
              ₹{booking.estimatedFare} has been added to
              your earnings.
            </p>

            <Link
              href="/provider/earnings"
              className="mt-4 inline-block rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white"
            >
              View Earnings
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

/* =========================================================
   DETAIL COMPONENT
   ========================================================= */

function Detail({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="mb-2 flex items-center gap-2 text-blue-600">
        {icon}

        <span className="text-xs font-semibold text-slate-500">
          {title}
        </span>
      </div>

      <p className="font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}