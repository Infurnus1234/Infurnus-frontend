"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Car,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldAlert,
  User,
} from "lucide-react";
import { useState } from "react";

export default function DriverRidePage() {
  const [rideStarted, setRideStarted] = useState(false);
  const [rideCompleted, setRideCompleted] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const startRide = () => {
    if (otp !== "4821") {
      setError("Incorrect OTP. Ask the customer for the 4-digit OTP.");
      return;
    }

    setError("");
    setRideStarted(true);
  };

  const completeRide = () => {
    setRideCompleted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/driver"
              className="rounded-xl p-2 text-slate-600 hover:bg-slate-100"
            >
              <ArrowLeft size={21} />
            </Link>

            <Link href="/" className="text-xl font-extrabold tracking-tight">
              <span className="text-slate-950">INFUR</span>
              <span className="text-blue-600">NUS</span>
            </Link>
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
            ACTIVE RIDE
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Completed */}
        {rideCompleted ? (
          <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check size={32} />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-slate-950">
              Ride Completed
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              The ride has been successfully completed.
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Total Fare</span>
                <span className="text-xl font-bold text-slate-950">
                  ₹320
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Your Earnings
                </span>
                <span className="font-semibold text-green-600">
                  ₹285
                </span>
              </div>
            </div>

            <Link
              href="/driver"
              className="mt-6 block rounded-xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700"
            >
              Back to Dashboard
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main */}
            <div className="space-y-6 lg:col-span-2">
              {/* Status */}
              <section className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm text-slate-500">Current status</p>

                    <h1 className="mt-1 text-2xl font-bold text-slate-950">
                      {rideStarted
                        ? "Ride in Progress"
                        : "Head to Pickup"}
                    </h1>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${
                      rideStarted
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {rideStarted ? "ON TRIP" : "PICKUP"}
                  </span>
                </div>
              </section>

              {/* Map */}
              <section className="relative h-80 overflow-hidden rounded-2xl bg-blue-50 shadow-sm">
                {/* Fake map roads */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-0 top-20 h-px w-full rotate-6 bg-slate-400" />
                  <div className="absolute left-0 top-40 h-px w-full -rotate-6 bg-slate-400" />
                  <div className="absolute left-20 top-0 h-full w-px rotate-12 bg-slate-400" />
                  <div className="absolute right-32 top-0 h-full w-px -rotate-12 bg-slate-400" />
                  <div className="absolute left-1/3 top-0 h-full w-px rotate-45 bg-slate-300" />
                </div>

                {/* Driver */}
                <div className="absolute left-[28%] top-[45%]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <Navigation size={21} />
                  </div>
                </div>

                {/* Pickup / destination */}
                <div className="absolute right-[25%] top-[25%]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-white shadow-lg">
                    <MapPin size={21} />
                  </div>
                </div>

                <div className="absolute bottom-[20%] right-[18%]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
                    <MapPin size={21} />
                  </div>
                </div>

                {/* Map info */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-lg">
                  <p className="text-xs text-slate-500">
                    {rideStarted ? "Destination" : "Pickup"}
                  </p>

                  <p className="font-semibold text-slate-900">
                    {rideStarted ? "Koramangala" : "HSR Layout"}
                  </p>

                  <p className="mt-1 text-xs text-blue-600">
                    {rideStarted ? "3.8 km remaining" : "1.2 km away"}
                  </p>
                </div>
              </section>

              {/* Route */}
              <section className="rounded-2xl bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold text-slate-950">
                  Trip Route
                </h2>

                <div className="mt-5 flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-3 w-3 rounded-full bg-blue-600" />
                    <span className="h-16 border-l border-dashed border-slate-300" />
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                  </div>

                  <div className="flex-1 space-y-8">
                    <div>
                      <p className="text-xs text-slate-500">Pickup</p>
                      <p className="mt-1 font-semibold text-slate-900">
                        HSR Layout, Bengaluru
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">Destination</p>
                      <p className="mt-1 font-semibold text-slate-900">
                        Koramangala, Bengaluru
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* OTP / Start / Complete */}
              {!rideStarted ? (
                <section className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <ShieldAlert size={21} />
                    </div>

                    <div>
                      <h2 className="font-bold text-slate-950">
                        Start Ride With OTP
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Ask the customer for the 4-digit OTP before starting
                        the ride.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      maxLength={4}
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value.replace(/\D/g, ""));
                        setError("");
                      }}
                      placeholder="Enter OTP"
                      className="rounded-xl border border-slate-200 px-4 py-3 text-center text-lg font-bold tracking-[0.4em] outline-none focus:border-blue-500"
                    />

                    <button
                      onClick={startRide}
                      className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                      Start Ride
                    </button>
                  </div>

                  <p className="mt-3 text-xs text-slate-400">
                    Demo OTP: 4821
                  </p>

                  {error && (
                    <p className="mt-3 text-sm font-medium text-red-600">
                      {error}
                    </p>
                  )}
                </section>
              ) : (
                <section className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="rounded-xl bg-green-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-green-100 p-2 text-green-600">
                        <Check size={19} />
                      </div>

                      <div>
                        <p className="font-bold text-green-800">
                          Ride Started
                        </p>
                        <p className="text-sm text-green-700">
                          Drive safely to the destination.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={completeRide}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white hover:bg-green-700"
                  >
                    <Check size={19} />
                    Complete Ride
                  </button>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Customer */}
              <section className="rounded-2xl bg-white p-5 shadow-sm">
                <h2 className="font-bold text-slate-950">
                  Customer Details
                </h2>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    RK
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Rahul Kumar
                    </p>

                    <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                      <User size={13} />
                      4.8 rating
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    <Phone size={17} />
                    Call
                  </button>

                  <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    <MessageCircle size={17} />
                    Chat
                  </button>
                </div>
              </section>

              {/* Trip Summary */}
              <section className="rounded-2xl bg-white p-5 shadow-sm">
                <h2 className="font-bold text-slate-950">
                  Trip Summary
                </h2>

                <div className="mt-4 space-y-4">
                  <SummaryRow
                    icon={<Clock size={18} />}
                    label="Estimated Time"
                    value="18 min"
                  />

                  <SummaryRow
                    icon={<Navigation size={18} />}
                    label="Distance"
                    value="4.2 km"
                  />

                  <SummaryRow
                    icon={<Car size={18} />}
                    label="Vehicle"
                    value="Dzire"
                  />
                </div>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      Estimated Fare
                    </span>

                    <span className="text-xl font-bold text-slate-950">
                      ₹320
                    </span>
                  </div>
                </div>
              </section>

              {/* Emergency */}
              <section className="rounded-2xl bg-red-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-red-100 p-3 text-red-600">
                    <ShieldAlert size={21} />
                  </div>

                  <div>
                    <h2 className="font-bold text-red-800">
                      Emergency
                    </h2>

                    <p className="text-xs text-red-600">
                      Need immediate help?
                    </p>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700">
                  SOS Emergency
                </button>
              </section>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-slate-400">{icon}</span>
        <span className="text-sm text-slate-500">{label}</span>
      </div>

      <span className="text-sm font-semibold text-slate-900">
        {value}
      </span>
    </div>
  );
}