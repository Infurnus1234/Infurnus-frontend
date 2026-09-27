"use client";

import Link from "next/link";
import {
  ShieldAlert,
  Ambulance,
  Truck,
  Wrench,
  Construction,
  Sparkles,
  ArrowRight,
  PhoneCall,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

export default function CustomerServicePage() {
  const specializedServices = [
    {
      id: "ambulance",
      title: "Medical Ambulance",
      badge: "24/7 Emergency",
      desc: "ICU, BLS, and ALS specialized ambulances with trained paramedics.",
      icon: Ambulance,
      eta: "< 15 mins",
      link: "/customer/book?type=ambulance",
    },
    {
      id: "towing",
      title: "Roadside Towing",
      badge: "Breakdown Assist",
      desc: "Flatbed and hydraulic wheel-lift towing for cars, bikes & heavy trucks.",
      icon: Truck,
      eta: "< 25 mins",
      link: "/customer/book?type=towing",
    },
    {
      id: "crane",
      title: "Crane & Heavy Lift",
      badge: "Industrial & Recovery",
      desc: "Mobile hydraulic cranes, recovery rigs, and high-tonnage lifting equipment.",
      icon: Construction,
      eta: "< 45 mins",
      link: "/customer/book?type=crane",
    },
    {
      id: "utility",
      title: "Utility & Sanitation",
      badge: "Municipal & Commercial",
      desc: "Water tankers, septic suction tankers, and municipal utility vehicles.",
      icon: Wrench,
      eta: "Scheduled",
      link: "/customer/book?type=utility",
    },
  ];

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-12 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-6xl space-y-10">

        {/* Breadcrumbs & Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
            <Link href="/customer" className="hover:text-[#000000]">Customer Dashboard</Link>
            <ChevronRight size={14} />
            <span className="text-[#000000]">Specialized Services</span>
          </div>

          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 border border-white/60">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <span className="inline-flex items-center gap-2 neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
                  <ShieldAlert size={14} />
                  Infurnus Specialized Fleet
                </span>
                <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#3D4852] tracking-tight">
                  Emergency & Heavy Vehicle Services
                </h1>
                <p className="font-sans text-[#6B7280] text-base sm:text-lg leading-relaxed">
                  Instant dispatch for medical ambulances, roadside breakdown towing, mobile heavy cranes, and municipal water/sanitation vehicles.
                </p>
              </div>

              {/* Emergency SOS Call Box */}
              <div className="neu-inset-deep p-6 rounded-[28px] space-y-3 min-w-[280px]">
                <div className="flex items-center gap-3">
                  <div className="p-3 neu-extruded rounded-2xl text-[#000000]">
                    <PhoneCall size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">SOS Emergency Hotline</span>
                    <p className="font-extrabold text-xl text-[#3D4852]">1800-INFURNUS</p>
                  </div>
                </div>
                <p className="text-xs text-[#6B7280]">Direct 24/7 priority line to emergency response dispatch team.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializedServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="neu-extruded neu-extruded-hover rounded-[32px] bg-[#E0E5EC] p-8 flex flex-col justify-between space-y-6 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="neu-inset-deep p-4 rounded-2xl text-[#000000]">
                      <Icon size={32} />
                    </div>
                    <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#3D4852]">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-semibold text-[#3D4852] pt-2">
                    <span className="flex items-center gap-1">
                      <CheckCircle size={14} className="text-[#000000]" /> GPS Tracked
                    </span>
                    <span className="flex items-center gap-1">
                      <Sparkles size={14} className="text-[#000000]" /> Average ETA: {srv.eta}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <Link
                    href={srv.link}
                    className="neu-btn neu-btn-primary w-full py-4 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <span>Request {srv.title} Now</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
