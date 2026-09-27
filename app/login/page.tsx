"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [userType, setUserType] = useState("Customer");

  return (
    <main className="min-h-screen bg-[#E0E5EC]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden bg-[#E0E5EC] lg:flex lg:flex-col lg:justify-between p-12 text-[#3D4852] border-r border-[#A3B1C6]/30">
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

          <div className="max-w-lg neu-extruded rounded-[40px] bg-[#E0E5EC] p-10">
            <span className="inline-block neu-inset-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
              Move • Rent • Deliver
            </span>

            <h1 className="font-display mt-6 text-4xl font-extrabold leading-tight text-[#3D4852] xl:text-5xl">
              Everything you need to move smarter.
            </h1>

            <p className="font-sans mt-5 text-base leading-relaxed text-[#6B7280]">
              Book rides, rent vehicles, send packages and manage your
              transportation needs from one unified tactile platform.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="neu-inset-deep rounded-2xl p-5 text-center bg-[#E0E5EC]">
                <div className="font-display text-2xl font-extrabold text-[#000000]">24/7</div>
                <p className="font-sans mt-1 text-xs font-bold text-[#6B7280]">
                  Support
                </p>
              </div>

              <div className="neu-inset-deep rounded-2xl p-5 text-center bg-[#E0E5EC]">
                <div className="font-display text-2xl font-extrabold text-[#000000]">
                  Live
                </div>
                <p className="font-sans mt-1 text-xs font-bold text-[#6B7280]">
                  Tracking
                </p>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs font-bold text-[#6B7280]">
            © {new Date().getFullYear()} Infurnus. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md neu-extruded rounded-[40px] bg-[#E0E5EC] p-8 md:p-10">

            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <div className="neu-inset-deep flex h-11 w-11 items-center justify-center rounded-2xl overflow-hidden p-1">
                  <Image
                    src="/logo.png"
                    alt="Infurnus Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>

                <span className="font-display text-xl font-extrabold text-[#3D4852]">
                  INFURNUS
                </span>
              </Link>
            </div>

            {/* Heading */}
            <div>
              <h2 className="font-display text-3xl font-extrabold text-[#3D4852]">
                Welcome back
              </h2>

              <p className="font-sans mt-2 text-sm text-[#6B7280]">
                Login to continue to your Infurnus account.
              </p>
            </div>

            {/* User Type Tab Bar */}
            <div className="mt-8">
              <label className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                Login as
              </label>

              <div className="mt-3 neu-inset-deep p-1.5 rounded-2xl grid grid-cols-2 gap-1 sm:grid-cols-4 bg-[#E0E5EC]">
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
                    className={`rounded-xl py-2.5 text-xs font-bold transition-all duration-200 ${userType === type
                      ? "neu-btn-primary"
                      : "text-[#6B7280] hover:text-[#3D4852]"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-5">

              <div>
                <label
                  htmlFor="email"
                  className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                >
                  Email or Mobile Number
                </label>

                <input
                  id="email"
                  type="text"
                  placeholder="Enter email or mobile number"
                  className="neu-input mt-2 w-full text-sm font-sans"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="font-display text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-bold text-[#000000] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="neu-input mt-2 w-full text-sm font-sans"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="neu-btn neu-btn-primary w-full py-4 text-sm font-bold mt-2"
              >
                Login as {userType}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 neu-inset-sm" />
              <span className="font-display text-xs font-bold text-[#6B7280]">
                OR
              </span>
              <div className="h-px flex-1 neu-inset-sm" />
            </div>

            {/* OTP */}
            <button
              type="button"
              className="neu-btn w-full py-3.5 text-sm font-bold text-[#3D4852]"
            >
              Login with OTP
            </button>

            {/* Register */}
            <p className="font-sans mt-6 text-center text-xs text-[#6B7280]">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-[#000000] hover:underline"
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
