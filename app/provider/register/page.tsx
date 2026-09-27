"use client";

import Link from "next/link";
import Image from "next/image";
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
    description: "I drive a vehicle owned by someone else or a fleet operator.",
    example: "Example: Rahul drives Amit's vehicle.",
    icon: UserRound,
  },
  {
    id: "owner",
    title: "Fleet Owner",
    description: "I own one or more vehicles and manage drivers.",
    example: "Example: Amit owns 10 commercial vehicles.",
    icon: Building2,
  },
  {
    id: "driver-owner",
    title: "Driver + Fleet Owner",
    description: "I own my vehicle and also drive it myself.",
    example: "Example: Rahul owns and drives his cab or truck.",
    icon: Car,
  },
];

export default function ProviderRegisterPage() {
  const [selected, setSelected] = useState("driver");

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-12 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="neu-btn px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 text-[#3D4852]"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <div className="neu-inset-deep flex h-10 w-10 items-center justify-center rounded-xl p-1">
              <Image
                src="/logo.png"
                alt="Infurnus Logo"
                width={36}
                height={36}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <span className="font-display font-extrabold text-lg tracking-wider text-[#3D4852]">
              INFURNUS
            </span>
          </Link>
        </div>

        {/* Heading Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 text-center space-y-3">
          <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
            Provider Registration Step 1
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#3D4852]">
            How will you work with Infurnus?
          </h1>
          <p className="font-sans text-sm text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Select the option that best describes your role. You can manage your vehicles, drivers, and earnings based on your provider type.
          </p>
        </div>

        {/* Provider Type Selection */}
        <div className="grid gap-6">
          {providerTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selected === type.id;

            return (
              <button
                key={type.id}
                onClick={() => setSelected(type.id)}
                className={`w-full rounded-[30px] p-6 text-left transition-all duration-300 ${
                  isSelected
                    ? "neu-inset border-2 border-[#000000]/20 bg-[#E0E5EC]"
                    : "neu-extruded neu-extruded-hover bg-[#E0E5EC]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-4 rounded-2xl flex-shrink-0 ${
                      isSelected
                        ? "neu-inset-deep text-[#000000]"
                        : "neu-extruded text-[#3D4852]"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-lg font-bold text-[#3D4852]">
                        {type.title}
                      </h2>
                      {isSelected && (
                        <div className="bg-[#000000] text-white p-1 rounded-full">
                          <Check size={16} />
                        </div>
                      )}
                    </div>

                    <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
                      {type.description}
                    </p>

                    <p className="mt-2 text-[11px] font-semibold text-[#000000]">
                      {type.example}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href={`/provider/register/details?type=${selected}`}
            className="neu-btn neu-btn-primary w-full py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2"
          >
            <span>Continue Registration</span>
            <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </main>
  );
}