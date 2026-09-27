"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Bell,
  Lock,
  CreditCard,
  ShieldCheck,
  LogOut,
  ChevronRight,
  Save,
  CheckCircle,
} from "lucide-react";

export default function ProviderSettings() {
  const [notifications, setNotifications] = useState(true);
  const [rideAlerts, setRideAlerts] = useState(true);
  const [location, setLocation] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-8 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-5xl space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8">
          <div className="space-y-1">
            <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
              PROVIDER DASHBOARD
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
              Settings & Account Preferences
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
              Manage profile info, security settings, dispatch alerts, and bank details.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/provider"
              className="neu-btn px-4 py-3 text-xs font-bold flex items-center gap-2 w-fit"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>
            <button
              onClick={handleSave}
              className="neu-btn neu-btn-primary px-5 py-3 text-xs font-bold flex items-center gap-2"
            >
              <Save size={16} />
              <span>{saved ? "Saved!" : "Save Changes"}</span>
            </button>
          </div>
        </div>

        {saved && (
          <div className="neu-inset-deep p-4 rounded-2xl flex items-center gap-2 text-xs font-bold text-[#000000]">
            <CheckCircle size={16} />
            Your provider settings have been saved successfully.
          </div>
        )}

        {/* Profile Info */}
        <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="neu-inset-deep flex h-16 w-16 items-center justify-center rounded-2xl text-[#000000] font-extrabold text-xl">
              VR
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">Vikram Rao</h2>
              <p className="text-xs text-[#6B7280]">Driver + Fleet Owner</p>
              <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#000000] inline-flex items-center gap-1 mt-2">
                <ShieldCheck size={14} /> Verified Partner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-black/5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                Full Legal Name
              </label>
              <input
                type="text"
                defaultValue="Vikram Rao"
                className="neu-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                defaultValue="+91 98765 43210"
                className="neu-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="vikram@example.com"
                className="neu-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                Primary Operating City
              </label>
              <input
                type="text"
                defaultValue="Mumbai"
                className="neu-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Dispatch Preferences Toggle */}
        <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-8 space-y-4">
          <h2 className="font-display text-xl font-bold text-[#3D4852]">Notification & Dispatch Alerts</h2>

          <div className="space-y-4 pt-2">
            <div className="neu-inset-deep p-4 rounded-2xl flex items-center justify-between">
              <div>
                <p className="font-bold text-xs text-[#3D4852]">New Trip Dispatch Alerts</p>
                <p className="text-[11px] text-[#6B7280]">Receive instant audio notifications for incoming customer bookings.</p>
              </div>
              <button
                onClick={() => setRideAlerts(!rideAlerts)}
                className={`w-12 h-6 rounded-full transition-colors ${rideAlerts ? "bg-[#000000]" : "bg-black/20"} relative p-1`}
              >
                <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${rideAlerts ? "translate-x-6" : "translate-x-0"}`} />
              </button>
            </div>

            <div className="neu-inset-deep p-4 rounded-2xl flex items-center justify-between">
              <div>
                <p className="font-bold text-xs text-[#3D4852]">SMS & Email Statements</p>
                <p className="text-[11px] text-[#6B7280]">Get daily summary reports of earnings and completed trips.</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition-colors ${notifications ? "bg-[#000000]" : "bg-black/20"} relative p-1`}
              >
                <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${notifications ? "translate-x-6" : "translate-x-0"}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Danger zone / logout */}
        <div className="pt-2 flex justify-end">
          <Link
            href="/login"
            className="neu-btn px-6 py-3 rounded-2xl text-xs font-bold text-red-600 flex items-center gap-2"
          >
            <LogOut size={16} />
            <span>Sign Out of Provider Account</span>
          </Link>
        </div>

      </div>
    </main>
  );
}