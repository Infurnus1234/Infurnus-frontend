"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  ChevronRight,
  CreditCard,
  Edit3,
  HelpCircle,
  Lock,
  LogOut,
  MapPin,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react";

const settings = [
  {
    title: "Saved Locations",
    description: "Home, work and other saved places",
    icon: MapPin,
  },
  {
    title: "Payment Methods",
    description: "UPI, cards and other payment options",
    icon: CreditCard,
  },
  {
    title: "Wallet",
    description: "Manage your Infurnus wallet",
    icon: Wallet,
  },
  {
    title: "Notifications",
    description: "Manage booking and account alerts",
    icon: Bell,
  },
  {
    title: "Privacy & Security",
    description: "Password and account security",
    icon: Lock,
  },
  {
    title: "Help & Support",
    description: "Get help with your account or booking",
    icon: HelpCircle,
  },
];

export default function CustomerProfile() {
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
            Account
          </span>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Profile & Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your Infurnus account and preferences.
          </p>
        </div>

        {/* Profile Card */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">

          <div className="bg-slate-950 px-6 py-8 md:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
                T
              </div>

              <div className="flex-1">
                <p className="text-sm text-blue-400">
                  Customer Account
                </p>

                <h2 className="mt-1 text-2xl font-bold text-white">
                  Tripti Rani
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  tripti@example.com
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900">
                <Edit3 size={17} />
                Edit Profile
              </button>

            </div>
          </div>

          {/* Personal Details */}
          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Full Name
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Tripti Rani
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Mobile Number
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Email
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                tripti@example.com
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                City
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                Bengaluru
              </p>
            </div>

          </div>
        </section>

        {/* Account Settings */}
        <section className="mt-8">

          <h2 className="text-xl font-bold text-slate-900">
            Account Settings
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">

            {settings.map((setting, index) => {
              const Icon = setting.icon;

              return (
                <Link
                  key={setting.title}
                  href="#"
                  className={`flex items-center gap-4 p-5 transition hover:bg-slate-50 ${
                    index !== settings.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">
                      {setting.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {setting.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={19}
                    className="text-slate-300"
                  />
                </Link>
              );
            })}

          </div>
        </section>

        {/* Safety */}
        <section className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-6">

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
              <ShieldCheck
                size={22}
                className="text-green-600"
              />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Your account is protected
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Your personal information and payment details are
                protected by Infurnus security systems.
              </p>
            </div>
          </div>

        </section>

        {/* Logout */}
        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white py-3.5 font-semibold text-red-600 transition hover:bg-red-50">
          <LogOut size={18} />
          Logout
        </button>

        <p className="mt-5 pb-8 text-center text-xs text-slate-400">
          Infurnus Customer App • Version 1.0
        </p>

      </div>
    </main>
  );
}