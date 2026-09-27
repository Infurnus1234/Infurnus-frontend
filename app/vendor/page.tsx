"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Truck,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle2,
  Clock,
  Plus,
  ArrowRight,
  ChevronRight,
  Filter,
  BarChart3,
  Wrench,
} from "lucide-react";

export default function VendorPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const fleetStats = [
    { label: "Active Vehicles", value: "24 / 28", icon: Truck },
    { label: "Monthly Gross Revenue", value: "₹4,85,200", icon: DollarSign },
    { label: "Assigned Drivers", value: "32 Drivers", icon: Users },
    { label: "On-Time Dispatch", value: "98.4%", icon: TrendingUp },
  ];

  const recentOrders = [
    { id: "ORD-9821", vehicle: "Tata Ace (MH-02-CW-1234)", route: "Bhiwandi to Thane Hub", fare: "₹1,850", status: "In Transit" },
    { id: "ORD-9820", vehicle: "Eicher 14ft (MH-04-EX-9988)", route: "Navi Mumbai to Pune", fare: "₹6,400", status: "Delivered" },
    { id: "ORD-9819", vehicle: "Mahindra Bolero (MH-12-AB-4567)", route: "Andheri to BKC", fare: "₹950", status: "Completed" },
    { id: "ORD-9818", vehicle: "Tata 407 (MH-01-DR-5544)", route: "Vashi to Panvel", fare: "₹2,200", status: "Scheduled" },
  ];

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
              <Link href="/" className="hover:text-[#000000]">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[#000000]">Vendor Portal</span>
            </div>
            <h1 className="font-display text-3xl font-extrabold text-[#3D4852]">
              Fleet Vendor Command Center
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/provider/register/details"
              className="neu-btn neu-btn-primary px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2"
            >
              <Plus size={16} />
              <span>Add New Vehicle</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-[#3D4852]">
                  {stat.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Dispatch List */}
          <div className="lg:col-span-2 neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-[#3D4852]">
                Active Fleet Dispatches & Cargo Trips
              </h2>
              <button className="neu-btn px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                <Filter size={14} /> Filter
              </button>
            </div>

            <div className="space-y-4">
              {recentOrders.map((ord) => (
                <div key={ord.id} className="neu-inset-deep rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs text-[#000000] bg-black/5 px-2 py-0.5 rounded-md">
                        {ord.id}
                      </span>
                      <span className="text-xs text-[#6B7280] font-semibold">{ord.vehicle}</span>
                    </div>
                    <p className="font-bold text-sm text-[#3D4852]">{ord.route}</p>
                  </div>

                  <div className="flex items-center gap-4 sm:text-right">
                    <div>
                      <p className="font-extrabold text-sm text-[#3D4852]">{ord.fare}</p>
                      <span className="text-[11px] font-bold text-[#000000]">{ord.status}</span>
                    </div>
                    <Link href={`/customer/tracking`} className="neu-btn p-2.5 rounded-xl text-[#3D4852]">
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="space-y-6">
            <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 space-y-4">
              <h3 className="font-display text-lg font-bold text-[#3D4852] flex items-center gap-2">
                <BarChart3 className="text-[#000000]" size={20} />
                Vendor Tools
              </h3>

              <div className="space-y-3 pt-2">
                <Link
                  href="/provider/vehicles"
                  className="neu-inset-sm hover:neu-inset w-full p-4 rounded-2xl flex items-center justify-between font-bold text-xs text-[#3D4852] transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Truck size={16} className="text-[#000000]" /> Manage Fleet Vehicles
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link
                  href="/provider/drivers"
                  className="neu-inset-sm hover:neu-inset w-full p-4 rounded-2xl flex items-center justify-between font-bold text-xs text-[#3D4852] transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-[#000000]" /> Driver Allocations
                  </span>
                  <ChevronRight size={16} />
                </Link>

                <Link
                  href="/provider/earnings"
                  className="neu-inset-sm hover:neu-inset w-full p-4 rounded-2xl flex items-center justify-between font-bold text-xs text-[#3D4852] transition-all"
                >
                  <span className="flex items-center gap-2">
                    <DollarSign size={16} className="text-[#000000]" /> Payout & Settlement History
                  </span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="neu-inset p-2.5 rounded-xl text-[#000000]">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#3D4852]">Fleet Insurance & Permits</h4>
                  <p className="text-[11px] text-[#6B7280]">2 vehicles due for permit renewal in 15 days.</p>
                </div>
              </div>
              <Link href="/provider/documents" className="neu-btn w-full py-2.5 rounded-xl text-xs font-bold text-center block">
                Update Documents
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
