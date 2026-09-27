"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Car,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function CustomerRentalPage() {
  const [selectedDuration, setSelectedDuration] = useState("4");
  const [selectedCategory, setSelectedCategory] = useState("sedan");

  const durationOptions = [
    { id: "2", label: "2 Hours", mileage: "25 km included" },
    { id: "4", label: "4 Hours", mileage: "50 km included" },
    { id: "8", label: "8 Hours", mileage: "100 km included" },
    { id: "12", label: "12 Hours", mileage: "150 km included" },
    { id: "24", label: "Full Day", mileage: "250 km included" },
  ];

  const categories = [
    {
      id: "hatchback",
      name: "Hatchback Rental",
      desc: "Compact & economical for city errands",
      price: "₹499",
      perHr: "₹120/hr extra",
      features: ["AC & Power Windows", "Free Fuel Included", "Professional Driver"],
    },
    {
      id: "sedan",
      name: "Premium Sedan",
      desc: "Comfortable Executive travel & business meetings",
      price: "₹899",
      perHr: "₹180/hr extra",
      features: ["Extra Legroom & Wi-Fi", "Free Fuel Included", "Top Rated Chauffeur"],
    },
    {
      id: "suv",
      name: "Luxury SUV",
      desc: "Spacious 6-7 seaters for family trips",
      price: "₹1,499",
      perHr: "₹250/hr extra",
      features: ["7 Leather Seats", "Luggage Carrier", "Experienced Highway Driver"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-12 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-6xl space-y-10">
        
        {/* Header Breadcrumb & Title */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
            <Link href="/customer" className="hover:text-[#000000]">Customer Dashboard</Link>
            <ChevronRight size={14} />
            <span className="text-[#000000]">Hourly Rentals</span>
          </div>
          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
                <Clock size={14} />
                Flexible Hourly Chauffeur Rentals
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#3D4852]">
                Rent a Car & Driver By The Hour
              </h1>
              <p className="font-sans text-[#6B7280] leading-relaxed">
                Keep a dedicated vehicle and driver with you as long as you need. Unlimited stops, free fuel, and zero stress.
              </p>
            </div>
            <div className="neu-inset-deep p-6 rounded-3xl flex items-center gap-4 border border-white/50">
              <div className="neu-extruded p-3.5 rounded-2xl text-[#000000]">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider font-bold">Guarantee</p>
                <p className="font-extrabold text-[#3D4852]">Sanitized & On-Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: Choose Duration */}
        <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <h2 className="font-display text-xl font-bold text-[#3D4852] flex items-center gap-2">
            <Calendar className="text-[#000000]" size={20} />
            1. Select Package Duration
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {durationOptions.map((dur) => {
              const active = selectedDuration === dur.id;
              return (
                <button
                  key={dur.id}
                  onClick={() => setSelectedDuration(dur.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                    active
                      ? "neu-inset text-[#000000] border border-[#000000]/20"
                      : "neu-extruded neu-extruded-hover text-[#3D4852]"
                  }`}
                >
                  <div className="font-extrabold text-lg">{dur.label}</div>
                  <div className="text-xs text-[#6B7280] mt-1">{dur.mileage}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Choose Vehicle Category */}
        <div className="space-y-6">
          <h2 className="font-display text-xl font-bold text-[#3D4852] flex items-center gap-2">
            <Car className="text-[#000000]" size={20} />
            2. Choose Vehicle Class
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer rounded-[28px] p-6 transition-all duration-300 flex flex-col justify-between ${
                    active
                      ? "neu-inset border-2 border-[#000000]/20 bg-[#E0E5EC]"
                      : "neu-extruded neu-extruded-hover bg-[#E0E5EC]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg font-bold text-[#3D4852]">
                        {cat.name}
                      </span>
                      {active && (
                        <span className="bg-[#000000] text-white p-1 rounded-full">
                          <CheckCircle2 size={16} />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                    
                    <div className="my-6 p-4 rounded-2xl neu-inset-deep">
                      <span className="text-2xl font-extrabold text-[#3D4852]">
                        {cat.price}
                      </span>
                      <span className="text-xs text-[#6B7280] ml-2">/ base package</span>
                      <div className="text-xs text-[#000000] font-semibold mt-1">
                        {cat.perHr}
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {cat.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#3D4852]">
                          <Sparkles size={13} className="text-[#000000]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/5">
                    <Link
                      href={`/customer/book?type=rental&duration=${selectedDuration}&vehicle=${cat.id}`}
                      className={`w-full text-center py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 ${
                        active ? "neu-btn neu-btn-primary" : "neu-btn"
                      }`}
                    >
                      <span>Book {cat.name}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Banner */}
        <div className="neu-extruded rounded-3xl bg-[#E0E5EC] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="neu-inset p-3.5 rounded-2xl text-[#000000]">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[#3D4852]">Need an Outstation Intercity Booking?</h3>
              <p className="text-xs text-[#6B7280]">Book one-way or round-trips for out-of-city travel with fixed transparent rates.</p>
            </div>
          </div>
          <Link href="/customer/book?type=outstation" className="neu-btn px-6 py-3 text-xs font-bold whitespace-nowrap">
            View Outstation Packages
          </Link>
        </div>

      </div>
    </main>
  );
}
