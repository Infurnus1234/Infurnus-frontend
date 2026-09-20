"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Bell,
  Lock,
  CreditCard,
  MapPin,
  ShieldCheck,
  HelpCircle,
  LogOut,
  ChevronRight,
  Save,
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
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/provider"
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <ArrowLeft size={20} />
            </Link>

            <div>
              <h1 className="text-xl font-bold text-[#07111F]">
                Settings & Profile
              </h1>
              <p className="text-sm text-slate-500">
                Manage your provider account
              </p>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-[#1769E0] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Save size={17} />
            Save Changes
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        {/* Profile */}
        <section className="mb-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-[#1769E0]">
              VR
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#07111F]">
                Vikram Rao
              </h2>
              <p className="text-sm text-slate-500">
                Driver + Fleet Owner
              </p>

              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                <ShieldCheck size={14} />
                Verified Provider
              </span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Vikram Rao"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#1769E0]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mobile Number
              </label>
              <input
                type="text"
                defaultValue="+91 98765 43210"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#1769E0]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                defaultValue="vikram@example.com"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#1769E0]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                City
              </label>
              <input
                type="text"
                defaultValue="Patna"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#1769E0]"
              />
            </div>
          </div>
        </section>

        {/* Account Settings */}
        <section className="mb-6 rounded-2xl border bg-white shadow-sm">
          <div className="border-b p-6">
            <h2 className="text-lg font-bold text-[#07111F]">
              Account Settings
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage your account preferences
            </p>
          </div>

          <div className="divide-y">
            <SettingRow
              icon={<User size={19} />}
              title="Personal Information"
              description="Update your name, phone and email"
            />

            <SettingRow
              icon={<Lock size={19} />}
              title="Password & Security"
              description="Change password and security settings"
            />

            <SettingRow
              icon={<CreditCard size={19} />}
              title="Bank & Payment Details"
              description="Manage bank account and payout information"
            />

            <SettingRow
              icon={<MapPin size={19} />}
              title="Service Area"
              description="Manage your operating locations"
            />
          </div>
        </section>

        {/* Notification Settings */}
        <section className="mb-6 rounded-2xl border bg-white shadow-sm">
          <div className="border-b p-6">
            <h2 className="text-lg font-bold text-[#07111F]">
              Notifications
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose what notifications you receive
            </p>
          </div>

          <div className="divide-y">
            <ToggleRow
              icon={<Bell size={19} />}
              title="Push Notifications"
              description="Receive important account notifications"
              enabled={notifications}
              setEnabled={setNotifications}
            />

            <ToggleRow
              icon={<Bell size={19} />}
              title="Trip & Booking Alerts"
              description="Get notified about new trip requests"
              enabled={rideAlerts}
              setEnabled={setRideAlerts}
            />

            <ToggleRow
              icon={<MapPin size={19} />}
              title="Location Access"
              description="Allow location access while online"
              enabled={location}
              setEnabled={setLocation}
            />
          </div>
        </section>

        {/* Other */}
        <section className="mb-6 rounded-2xl border bg-white shadow-sm">
          <div className="divide-y">
            <SettingRow
              icon={<ShieldCheck size={19} />}
              title="Privacy & Security"
              description="Manage privacy and security preferences"
            />

            <SettingRow
              icon={<HelpCircle size={19} />}
              title="Help & Support"
              description="Get help with your provider account"
              href="/driver/support"
            />
          </div>
        </section>

        {/* Logout */}
        <button
          onClick={() => alert("Logout demo")}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 font-semibold text-red-600 hover:bg-red-50"
        >
          <LogOut size={18} />
          Logout
        </button>

        <p className="mt-6 text-center text-xs text-slate-400">
          Infurnus Provider App • Demo Version
        </p>
      </div>
    </main>
  );
}

function SettingRow({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center justify-between p-5 hover:bg-slate-50">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1769E0]">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-[#07111F]">{title}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>

      <ChevronRight size={19} className="text-slate-400" />
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button className="w-full text-left">{content}</button>;
}

function ToggleRow({
  icon,
  title,
  description,
  enabled,
  setEnabled,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1769E0]">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-[#07111F]">{title}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative h-6 w-11 rounded-full transition ${
          enabled ? "bg-[#1769E0]" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}