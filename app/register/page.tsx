"use client";

import Link from "next/link";
import { useState } from "react";

const userTypes = [
  {
    id: "customer",
    title: "Customer",
    description: "Book rides, rentals & deliveries",
    icon: "👤",
  },
  {
    id: "driver",
    title: "Driver / Rider",
    description: "Earn by completing trips",
    icon: "🚗",
  },
  {
    id: "owner",
    title: "Vehicle Owner",
    description: "Manage vehicles & drivers",
    icon: "🚚",
  },
  {
    id: "business",
    title: "Business",
    description: "Manage business transportation",
    icon: "🏢",
  },
];

export default function RegisterPage() {
  const [userType, setUserType] = useState("customer");

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-grey-300">
              I
            </div>

            <span className="text-xl font-bold tracking-wide text-slate-900">
              INFURNUS
            </span>
          </Link>

          <p className="hidden text-sm text-slate-500 sm:block">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Main */}
        <div className="mx-auto mt-12 max-w-4xl">

          <div className="text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Join Infurnus
            </span>

            <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Create your account
            </h1>

            <p className="mt-3 text-slate-500">
              Choose how you want to use Infurnus.
            </p>
          </div>

          {/* Account Type */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {userTypes.map((type) => {
              const active = userType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setUserType(type.id)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    active
                      ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <div className="text-3xl">{type.icon}</div>

                  <h3
                    className={`mt-4 font-bold ${
                      active ? "text-blue-700" : "text-slate-900"
                    }`}
                  >
                    {type.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-500">
                    {type.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Registration Form */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            <div className="mb-7">
              <h2 className="text-xl font-bold text-slate-900">
                {userTypes.find((type) => type.id === userType)?.title}{" "}
                Registration
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Enter your details to create your Infurnus account.
              </p>
            </div>

            <form className="grid gap-5 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Mobile */}
              <div>
                <label
                  htmlFor="mobile"
                  className="text-sm font-semibold text-slate-700"
                >
                  Mobile Number
                </label>

                <input
                  id="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-semibold text-slate-700"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="text-sm font-semibold text-slate-700"
                >
                  City
                </label>

                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Driver-specific fields */}
              {userType === "driver" && (
                <>
                  <div>
                    <label
                      htmlFor="license"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Driving License Number
                    </label>

                    <input
                      id="license"
                      type="text"
                      placeholder="Enter license number"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vehicle"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Vehicle Type
                    </label>

                    <select
                      id="vehicle"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-blue-600"
                    >
                      <option>Select vehicle type</option>
                      <option>Bike</option>
                      <option>Auto</option>
                      <option>Cab</option>
                      <option>Premium Car</option>
                      <option>Mini Truck</option>
                    </select>
                  </div>
                </>
              )}

              {/* Owner-specific fields */}
              {userType === "owner" && (
                <>
                  <div>
                    <label
                      htmlFor="fleet"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Fleet Size
                    </label>

                    <input
                      id="fleet"
                      type="number"
                      placeholder="Number of vehicles"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vehicleCategory"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Vehicle Category
                    </label>

                    <select
                      id="vehicleCategory"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-blue-600"
                    >
                      <option>Select category</option>
                      <option>Cars</option>
                      <option>Bikes</option>
                      <option>Commercial Vehicles</option>
                      <option>Trucks</option>
                    </select>
                  </div>
                </>
              )}

              {/* Business-specific fields */}
              {userType === "business" && (
                <>
                  <div>
                    <label
                      htmlFor="businessName"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Business Name
                    </label>

                    <input
                      id="businessName"
                      type="text"
                      placeholder="Enter business name"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gst"
                      className="text-sm font-semibold text-slate-700"
                    >
                      GST Number
                    </label>

                    <input
                      id="gst"
                      type="text"
                      placeholder="Enter GST number"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-600"
                    />
                  </div>
                </>
              )}

              {/* Terms */}
              <div className="md:col-span-2">
                <label className="flex items-start gap-3 text-sm text-slate-500">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />

                  <span>
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-blue-600"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-blue-600"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Create {userTypes.find((type) => type.id === userType)?.title}{" "}
                  Account
                </button>
              </div>
            </form>

            {/* Mobile Login */}
            <p className="mt-7 text-center text-sm text-slate-500 sm:hidden">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-600"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}