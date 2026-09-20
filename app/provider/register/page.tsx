"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Car,
  Check,
  ChevronRight,
  Building2,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const providerTypes = [
  {
    id: "driver",
    title: "Driver",
    description: "I drive a vehicle owned by someone else.",
    example: "Example: Rahul drives Amit's vehicle.",
    icon: UserRound,
  },
  {
    id: "owner",
    title: "Fleet Owner",
    description: "I own one or more vehicles and manage drivers.",
    example: "Example: Amit owns 10 vehicles.",
    icon: Building2,
  },
  {
    id: "driver-owner",
    title: "Driver + Fleet Owner",
    description: "I own my vehicle and also drive it myself.",
    example: "Example: Rahul owns and drives his car.",
    icon: Car,
  },
];

export default function ProviderRegisterPage() {
  const [selected, setSelected] = useState("driver");

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-950"
          >
            <ArrowLeft size={19} />
            <span className="text-sm font-medium">Back</span>
          </Link>

          <Link
            href="/"
            className="ml-auto text-xl font-extrabold tracking-tight sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">
            PROVIDER REGISTRATION
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
            How will you work with Infurnus?
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Select the option that best describes your role. You can manage
            your vehicles, drivers and bookings based on your provider type.
          </p>
        </div>

        {/* Provider Cards */}
        <section className="mt-8 grid gap-4">
          {providerTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selected === type.id;

            return (
              <button
                key={type.id}
                onClick={() => setSelected(type.id)}
                className={`relative w-full rounded-2xl border-2 bg-white p-5 text-left transition sm:p-6 ${
                  isSelected
                    ? "border-blue-600 shadow-md"
                    : "border-slate-200 hover:border-blue-300"
                }`}
              >
                {/* Selected */}
                {isSelected && (
                  <div className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={15} />
                  </div>
                )}

                <div className="flex items-start gap-4 pr-8">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${
                      isSelected
                        ? "bg-blue-100 text-blue-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-950">
                      {type.title}
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {type.description}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      {type.example}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </section>

        {/* Selected Role */}
        <section className="mt-6 rounded-2xl bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            Selected Provider Type
          </p>

          <p className="mt-1 text-lg font-bold text-slate-950">
            {
              providerTypes.find((type) => type.id === selected)
                ?.title
            }
          </p>
        </section>

        {/* Continue */}
        <Link
          href={`/provider/register/details?type=${selected}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700"
        >
          Continue Registration
          <ChevronRight size={19} />
        </Link>

        <p className="mt-4 text-center text-xs text-slate-400">
          Your provider type determines which features are available in your
          Infurnus dashboard.
        </p>
      </div>
    </main>
  );
}