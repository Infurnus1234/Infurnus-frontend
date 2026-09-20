"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [userType, setUserType] = useState("Customer");

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden bg-slate-950 lg:flex lg:flex-col lg:justify-between p-12 text-white">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold">
              I
            </div>

            <span className="text-xl font-bold tracking-wide">
              INFURNUS
            </span>
          </Link>

          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Move • Rent • Deliver
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight xl:text-5xl">
              Everything you need to move smarter.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Book rides, rent vehicles, send packages and manage your
              transportation needs from one platform.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <p className="mt-1 text-sm text-slate-400">
                  Support
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <div className="text-2xl font-bold text-blue-400">
                  Live
                </div>
                <p className="mt-1 text-sm text-slate-400">
                  Tracking
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Infurnus
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-10 text-center lg:hidden">
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-slate-300">
                  I
                </div>

                <span className="text-xl font-bold text-slate-900">
                  INFURNUS
                </span>
              </Link>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Welcome back
              </h2>

              <p className="mt-2 text-slate-500">
                Login to continue to your Infurnus account.
              </p>
            </div>

            {/* User Type */}
            <div className="mt-8">
              <label className="text-sm font-semibold text-slate-700">
                Login as
              </label>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  "Customer",
                  "Driver",
                  "Owner",
                  "Business",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type)}
                    className={`rounded-lg border px-3 py-3 text-sm font-medium transition ${
                      userType === type
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="mt-7 space-y-5">

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700"
                >
                  Email or Mobile Number
                </label>

                <input
                  id="email"
                  type="text"
                  placeholder="Enter email or mobile number"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Login as {userType}
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm text-slate-400">
                OR
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* OTP */}
            <button
              type="button"
              className="w-full rounded-xl border border-blue-600 bg-white py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Login with OTP
            </button>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create an account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}