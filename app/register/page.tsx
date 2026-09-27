"use client";

import Link from "next/link";
import Image from "next/image";
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
    <main className="min-h-screen bg-[#E0E5EC] py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="neu-inset-deep flex h-12 w-12 items-center justify-center rounded-2xl overflow-hidden p-1">
              <Image
                src="/logo.png"
                alt="Infurnus Logo"
                width={44}
                height={44}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>

            <span className="font-display text-xl font-extrabold tracking-tight text-[#3D4852]">
              INFURNUS
            </span>
          </Link>

          <p className="hidden font-sans text-sm font-medium text-[#6B7280] sm:block">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-[#000000] hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Main */}
        <div className="mx-auto mt-12 max-w-4xl">

          <div className="text-center">
            <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
              JOIN INFURNUS
            </span>

            <h1 className="font-display mt-5 text-3xl font-extrabold text-[#3D4852] md:text-4xl">
              Create your account
            </h1>

            <p className="font-sans mt-3 text-base text-[#6B7280]">
              Choose how you want to use Infurnus.
            </p>
          </div>

          {/* Account Type Selector */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {userTypes.map((type) => {
              const active = userType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setUserType(type.id)}
                  className={`rounded-[28px] p-6 text-left transition-all duration-300 ${
                    active
                      ? "neu-inset-deep bg-[#E0E5EC]"
                      : "neu-extruded neu-extruded-hover bg-[#E0E5EC]"
                  }`}
                >
                  <div className="text-3xl">{type.icon}</div>

                  <h3
                    className={`font-display mt-4 text-lg font-bold ${
                      active ? "text-[#000000]" : "text-[#3D4852]"
                    }`}
                  >
                    {type.title}
                  </h3>

                  <p className="font-sans mt-2 text-xs leading-relaxed text-[#6B7280]">
                    {type.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Registration Form */}
          <div className="mt-10 neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 md:p-12">

            <div className="mb-8">
              <h2 className="font-display text-2xl font-extrabold text-[#3D4852]">
                {userTypes.find((type) => type.id === userType)?.title}{" "}
                Registration
              </h2>

              <p className="font-sans mt-1 text-sm text-[#6B7280]">
                Enter your details to create your Infurnus account.
              </p>
            </div>

            <form className="grid gap-6 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="neu-input mt-2 w-full text-sm font-sans"
                />
              </div>

              {/* Mobile */}
              <div>
                <label
                  htmlFor="mobile"
                  className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                >
                  Mobile Number
                </label>

                <input
                  id="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="neu-input mt-2 w-full text-sm font-sans"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="neu-input mt-2 w-full text-sm font-sans"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  className="neu-input mt-2 w-full text-sm font-sans"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="neu-input mt-2 w-full text-sm font-sans"
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                >
                  City
                </label>

                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  className="neu-input mt-2 w-full text-sm font-sans"
                />
              </div>

              {/* Driver-specific fields */}
              {userType === "driver" && (
                <>
                  <div>
                    <label
                      htmlFor="license"
                      className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                    >
                      Driving License Number
                    </label>

                    <input
                      id="license"
                      type="text"
                      placeholder="Enter license number"
                      className="neu-input mt-2 w-full text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vehicle"
                      className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                    >
                      Vehicle Type
                    </label>

                    <select
                      id="vehicle"
                      className="neu-input mt-2 w-full text-sm font-sans cursor-pointer"
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
                      className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                    >
                      Fleet Size
                    </label>

                    <input
                      id="fleet"
                      type="number"
                      placeholder="Number of vehicles"
                      className="neu-input mt-2 w-full text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vehicleCategory"
                      className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                    >
                      Vehicle Category
                    </label>

                    <select
                      id="vehicleCategory"
                      className="neu-input mt-2 w-full text-sm font-sans cursor-pointer"
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
                      className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                    >
                      Business Name
                    </label>

                    <input
                      id="businessName"
                      type="text"
                      placeholder="Enter business name"
                      className="neu-input mt-2 w-full text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gst"
                      className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                    >
                      GST Number
                    </label>

                    <input
                      id="gst"
                      type="text"
                      placeholder="Enter GST number"
                      className="neu-input mt-2 w-full text-sm font-sans"
                    />
                  </div>
                </>
              )}

              {/* Terms */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-3 text-xs font-medium text-[#6B7280] font-sans">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#000000] rounded"
                  />

                  <span>
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-bold text-[#000000] hover:underline"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-bold text-[#000000] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  className="neu-btn neu-btn-primary w-full py-4 text-sm font-bold"
                >
                  Create {userTypes.find((type) => type.id === userType)?.title}{" "}
                  Account
                </button>
              </div>
            </form>

            {/* Mobile Login */}
            <p className="mt-6 text-center text-xs font-sans text-[#6B7280] sm:hidden">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-[#000000] hover:underline"
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
