"use client";

// CHANGED: Added useEffect and useState
import { useEffect, useState } from "react";

import Link from "next/link";
import {
  ArrowLeft,
  Car,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldAlert,
  Star,
  User,
} from "lucide-react";

// ============================================================
// CHANGED: Booking type
// ============================================================

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

// ============================================================
// CHANGED: Default ride steps are now generated dynamically
// ============================================================

function getRideSteps(status: string) {
  const currentStatus = status.toLowerCase();

  const bookingConfirmed = [
    "accepted",
    "arrived",
    "started",
    "completed",
  ].includes(currentStatus);

  const driverOnWay = [
    "accepted",
    "arrived",
    "started",
    "completed",
  ].includes(currentStatus);

  const driverArrived = [
    "arrived",
    "started",
    "completed",
  ].includes(currentStatus);

  const tripStarted = [
    "started",
    "completed",
  ].includes(currentStatus);

  return [
    {
      title: "Booking confirmed",
      description: bookingConfirmed
        ? "Your ride has been confirmed"
        : "Waiting for provider confirmation",
      completed: bookingConfirmed,
    },
    {
      title: "Driver is on the way",
      description: driverOnWay
        ? "Driver is heading to your pickup"
        : "Driver will start heading to pickup after accepting",
      completed: driverOnWay,
    },
    {
      title: "Driver arrived",
      description: driverArrived
        ? "Driver has arrived at your pickup"
        : "Driver will reach you shortly",
      completed: driverArrived,
    },
    {
      title: "Trip started",
      description: tripStarted
        ? "Your journey is currently in progress"
        : "Your journey will begin after pickup",
      completed: tripStarted,
    },
  ];
}

// ============================================================
// CHANGED: Main component
// ============================================================

export default function TrackingPage() {
  // CHANGED: Store booking dynamically
  const [booking, setBooking] = useState<Booking | null>(null);

  // CHANGED: Loading state
  const [loading, setLoading] = useState(true);

  // ==========================================================
  // CHANGED: Load booking from localStorage
  // ==========================================================

  useEffect(() => {
    const loadBooking = () => {
      try {
        const acceptedBooking = localStorage.getItem(
          "infurnusAcceptedBooking"
        );

        const currentBooking = localStorage.getItem(
          "infurnusCurrentBooking"
        );

        // Provider accepted booking
        if (acceptedBooking) {
          const parsedBooking = JSON.parse(
            acceptedBooking
          ) as Booking;

          setBooking(parsedBooking);
          return;
        }

        // Customer has booked but provider has not accepted yet
        if (currentBooking) {
          const parsedBooking = JSON.parse(
            currentBooking
          ) as Booking;

          setBooking(parsedBooking);
          return;
        }

        setBooking(null);
      } catch (error) {
        console.error(
          "Error loading Infurnus booking:",
          error
        );

        setBooking(null);
      } finally {
        setLoading(false);
      }
    };

    loadBooking();

    // CHANGED: Listen for booking changes
    window.addEventListener(
      "storage",
      loadBooking
    );

    window.addEventListener(
      "infurnusBookingUpdated",
      loadBooking
    );

    return () => {
      window.removeEventListener(
        "storage",
        loadBooking
      );

      window.removeEventListener(
        "infurnusBookingUpdated",
        loadBooking
      );
    };
  }, []);

  // ==========================================================
  // CHANGED: Loading screen
  // ==========================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

          <p className="mt-4 text-sm text-slate-500">
            Loading your ride...
          </p>
        </div>
      </main>
    );
  }

  // ==========================================================
  // CHANGED: No booking screen
  // ==========================================================

  if (!booking) {
    return (
      <main className="min-h-screen bg-slate-50">
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

        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <Car
                size={30}
                className="text-blue-600"
              />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              No active ride
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              You don't have an active booking right now.
            </p>

            <Link
              href="/customer/book"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              Book a Ride
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ==========================================================
  // CHANGED: Dynamic status
  // ==========================================================

  const currentStatus = booking.status.toLowerCase();

  const rideSteps = getRideSteps(
    booking.status
  );

  const isAccepted =
    currentStatus === "accepted" ||
    currentStatus === "arrived" ||
    currentStatus === "started" ||
    currentStatus === "completed";

  const isArrived =
    currentStatus === "arrived" ||
    currentStatus === "started" ||
    currentStatus === "completed";

  const isStarted =
    currentStatus === "started" ||
    currentStatus === "completed";

  const isCompleted =
    currentStatus === "completed";

  const providerName =
    booking.provider || "Provider";

  // ==========================================================
  // CHANGED: Dynamic provider initials
  // ==========================================================

  const providerInitials = providerName
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // ==========================================================
  // CHANGED: Dynamic heading/status
  // ==========================================================

  const getStatusLabel = () => {
    if (isCompleted) {
      return "Ride Completed";
    }

    if (isStarted) {
      return "Ride in Progress";
    }

    if (isArrived) {
      return "Driver Arrived";
    }

    if (isAccepted) {
      return "Ride Confirmed";
    }

    if (currentStatus === "requested") {
      return "Finding a driver";
    }

    if (currentStatus === "declined") {
      return "Ride Declined";
    }

    return booking.status;
  };

  const getHeading = () => {
    if (isCompleted) {
      return "Your ride is completed";
    }

    if (isStarted) {
      return "Your trip is in progress";
    }

    if (isArrived) {
      return "Your driver has arrived";
    }

    if (isAccepted) {
      return "Your driver is on the way";
    }

    if (currentStatus === "requested") {
      return "Finding a driver for you";
    }

    if (currentStatus === "declined") {
      return "Your ride was declined";
    }

    return "Your ride status";
  };

  // ==========================================================
  // UI
  // ==========================================================

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

          {/* CHANGED: Show booking ID */}
          <div className="hidden text-xs font-semibold text-slate-500 sm:block">
            {booking.id}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Heading */}
        <div>
          {/* CHANGED */}
          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              isCompleted
                ? "bg-green-50 text-green-600"
                : currentStatus === "declined"
                ? "bg-red-50 text-red-600"
                : currentStatus === "requested"
                ? "bg-yellow-50 text-yellow-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {getStatusLabel()}
          </span>

          {/* CHANGED */}
          <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            {getHeading()}
          </h1>

          <p className="mt-2 text-slate-500">
            Track your ride in real time.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* =================================================
              Map
          ================================================= */}
          <div className="relative min-h-[550px] overflow-hidden rounded-3xl bg-slate-900 lg:col-span-3">
            {/* Fake map background */}
            <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_48%,rgba(255,255,255,0.08)_49%,rgba(255,255,255,0.08)_51%,transparent_52%),linear-gradient(120deg,transparent_48%,rgba(255,255,255,0.06)_49%,rgba(255,255,255,0.06)_51%,transparent_52%)] bg-[size:90px_90px]" />

            {/* Roads */}
            <div className="absolute left-[-10%] top-[45%] h-8 w-[120%] rotate-12 bg-slate-700/60" />

            <div className="absolute left-[50%] top-[-10%] h-[120%] w-8 -rotate-12 bg-slate-700/50" />

            <div className="absolute bottom-[20%] left-[-10%] h-6 w-[120%] -rotate-6 bg-slate-700/50" />

            {/* Route line */}
            <div className="absolute left-[31%] top-[29%] h-[270px] w-1 rotate-[32deg] border-l-4 border-dashed border-blue-400" />

            {/* Pickup */}
            <div className="absolute left-[23%] top-[25%]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg">
                <MapPin
                  size={23}
                  className="text-white"
                />
              </div>

              <div className="mt-2 max-w-[150px] truncate rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-lg">
                {/* CHANGED */}
                {booking.pickup}
              </div>
            </div>

            {/* Driver */}
            {!isCompleted && (
              <div className="absolute left-[43%] top-[47%]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-xl">
                  <Car
                    size={25}
                    className="text-white"
                  />
                </div>

                <div className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-lg">
                  {/* CHANGED */}
                  {providerName}
                </div>
              </div>
            )}

            {/* Destination */}
            <div className="absolute bottom-[19%] right-[19%]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 shadow-lg">
                <MapPin
                  size={23}
                  className="text-white"
                />
              </div>

              <div className="mt-2 max-w-[150px] truncate rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-lg">
                {/* CHANGED */}
                {booking.destination}
              </div>
            </div>

            {/* ETA */}
            <div className="absolute left-5 top-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-xs text-slate-500">
                {isCompleted
                  ? "Trip status"
                  : isStarted
                  ? "Trip status"
                  : isArrived
                  ? "Driver status"
                  : isAccepted
                  ? "Driver arriving in"
                  : "Booking status"}
              </p>

              {/* CHANGED */}
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {isCompleted
                  ? "Completed"
                  : isStarted
                  ? "On trip"
                  : isArrived
                  ? "Arrived"
                  : isAccepted
                  ? booking.estimatedTime
                  : "Finding..."}
              </p>

              <p className="text-xs text-green-600">
                {isCompleted
                  ? "Thank you for riding with Infurnus"
                  : isStarted
                  ? "Trip in progress"
                  : isArrived
                  ? "Ready for pickup"
                  : isAccepted
                  ? "On schedule"
                  : "Please wait"}
              </p>
            </div>

            {/* Map notice */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-slate-950/80 px-4 py-3 text-center text-xs text-slate-300 backdrop-blur">
              Live GPS map will be connected here
            </div>
          </div>

          {/* =================================================
              Ride Details
          ================================================= */}
          <div className="space-y-5 lg:col-span-2">
            {/* Driver Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Your driver
                  </p>

                  {/* CHANGED */}
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    {providerName}
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  {/* CHANGED */}
                  {providerInitials ? (
                    <span className="text-lg font-bold text-blue-600">
                      {providerInitials}
                    </span>
                  ) : (
                    <User
                      size={28}
                      className="text-blue-600"
                    />
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star
                    size={17}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-semibold">
                    4.8
                  </span>
                </div>

                <span className="text-sm text-slate-400">
                  •
                </span>

                <span className="text-sm text-slate-500">
                  Provider
                </span>
              </div>

              {/* Vehicle */}
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Car
                      size={22}
                      className="text-blue-600"
                    />

                    <div>
                      {/* CHANGED */}
                      <p className="font-semibold text-slate-900">
                        {booking.vehicleType}
                      </p>

                      <p className="text-xs text-slate-500">
                        Vehicle ID: {booking.vehicleId}
                      </p>
                    </div>
                  </div>

                  {/* CHANGED */}
                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-900 shadow-sm">
                    {booking.vehicleId}
                  </span>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  <Phone size={17} />
                  Call
                </button>

                <button className="flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-100">
                  <MessageCircle size={17} />
                  Chat
                </button>
              </div>
            </div>

            {/* Trip Details */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-slate-900">
                Trip Details
              </h2>

              <div className="mt-5 space-y-5">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500" />

                    <div className="h-10 border-l border-dashed border-slate-300" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      PICKUP
                    </p>

                    {/* CHANGED */}
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {booking.pickup}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin
                    size={17}
                    className="text-red-500"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      DESTINATION
                    </p>

                    {/* CHANGED */}
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {booking.destination}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <div>
                  <p className="text-xs text-slate-400">
                    ESTIMATED FARE
                  </p>

                  {/* CHANGED */}
                  <p className="mt-1 text-xl font-bold text-slate-900">
                    ₹{booking.estimatedFare}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-slate-400">
                    ETA
                  </p>

                  {/* CHANGED */}
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-green-600">
                    <Clock3 size={15} />

                    {isCompleted
                      ? "Completed"
                      : isStarted
                      ? booking.estimatedTime
                      : isArrived
                      ? "Arrived"
                      : isAccepted
                      ? booking.estimatedTime
                      : "Waiting"}
                  </p>
                </div>
              </div>

              {/* CHANGED: Distance */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-400">
                  DISTANCE
                </span>

                <span className="text-sm font-semibold text-slate-700">
                  {booking.distance}
                </span>
              </div>

              {/* CHANGED: Scheduled ride information */}
              {booking.rideType === "schedule" &&
                booking.scheduledDate &&
                booking.scheduledTime && (
                  <div className="mt-4 rounded-xl bg-blue-50 p-3">
                    <p className="text-xs text-blue-500">
                      SCHEDULED RIDE
                    </p>

                    <p className="mt-1 text-sm font-semibold text-blue-700">
                      {booking.scheduledDate}{" "}
                      at {booking.scheduledTime}
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* =====================================================
            Ride Progress
        ===================================================== */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-slate-900">
              Ride Status
            </h2>

            {/* CHANGED */}
            <span className="text-sm font-semibold text-blue-600">
              {booking.status}
            </span>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-4">
            {rideSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative"
              >
                {index < rideSteps.length - 1 && (
                  <div
                    className={`absolute left-8 top-4 hidden h-px w-full md:block ${
                      step.completed
                        ? "bg-green-300"
                        : "bg-slate-200"
                    }`}
                  />
                )}

                <div className="relative">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      step.completed
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 size={19} />
                    ) : (
                      <span className="text-xs font-bold">
                        {index + 1}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CHANGED: Completed message
        ===================================================== */}

        {isCompleted && (
          <section className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2
                  className="text-green-600"
                  size={22}
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Trip completed successfully
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Fare: ₹{booking.estimatedFare}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Safety */}
        <section className="mt-6 flex flex-col gap-4 rounded-2xl border border-red-100 bg-red-50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100">
              <ShieldAlert
                className="text-red-600"
                size={22}
              />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Need emergency assistance?
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Contact Infurnus safety support immediately.
              </p>
            </div>
          </div>

          <button className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-700">
            SOS
          </button>
        </section>
      </div>
    </main>
  );
}