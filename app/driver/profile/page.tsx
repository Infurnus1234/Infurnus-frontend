"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Car,
  Check,
  ChevronRight,
  FileText,
  HelpCircle,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Save,
  ShieldCheck,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export default function DriverProfilePage() {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [rideAlerts, setRideAlerts] = useState(true);

  const [name, setName] = useState("Aarav Singh");
  const [email, setEmail] = useState("aarav@example.com");
  const [phone, setPhone] = useState("+91 98XXXX4521");
  const [city, setCity] = useState("Bengaluru");

  const saveProfile = () => {
    setEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/driver"
            className="mr-4 rounded-xl p-2 text-slate-600 hover:bg-slate-100"
          >
            <ArrowLeft size={21} />
          </Link>

          <Link href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>

          <span className="ml-auto text-sm font-semibold text-slate-600">
            Profile & Settings
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6">
          <p className="text-sm text-slate-500">Driver account</p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            Profile & Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your personal information and account preferences.
          </p>
        </div>

        {/* Success */}
        {saved && (
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            <Check size={18} />
            Profile updated successfully.
          </div>
        )}

        {/* Profile Card */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="flex flex-col gap-5 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                AS
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  {name}
                </h2>

                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
                    Verified Driver
                  </span>

                  <span className="text-xs text-slate-500">
                    Driver since 2026
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setEditing(!editing)}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {editing ? <X size={16} /> : <User size={16} />}
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Personal Information */}
          <div className="p-5 sm:p-6">
            <h3 className="font-bold text-slate-950">
              Personal Information
            </h3>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <ProfileField
                icon={<User size={18} />}
                label="Full Name"
                value={name}
                editing={editing}
                onChange={setName}
              />

              <ProfileField
                icon={<Phone size={18} />}
                label="Mobile Number"
                value={phone}
                editing={editing}
                onChange={setPhone}
              />

              <ProfileField
                icon={<Mail size={18} />}
                label="Email Address"
                value={email}
                editing={editing}
                onChange={setEmail}
              />

              <ProfileField
                icon={<MapPin size={18} />}
                label="City"
                value={city}
                editing={editing}
                onChange={setCity}
              />
            </div>

            {editing && (
              <button
                onClick={saveProfile}
                className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                <Save size={17} />
                Save Changes
              </button>
            )}
          </div>
        </section>

        {/* Account Status */}
        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <h2 className="font-bold text-slate-950">
            Account Status
          </h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <StatusCard
              icon={<ShieldCheck size={20} />}
              title="KYC"
              value="Verified"
            />

            <StatusCard
              icon={<Car size={20} />}
              title="Vehicle"
              value="Verified"
            />

            <StatusCard
              icon={<Check size={20} />}
              title="Account"
              value="Active"
            />
          </div>
        </section>

        {/* Settings */}
        <section className="mt-6 rounded-2xl bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="font-bold text-slate-950">
              Preferences
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose how Infurnus communicates with you.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            <SettingRow
              icon={<Bell size={19} />}
              title="Push Notifications"
              description="Receive important account and ride notifications."
              enabled={notifications}
              onToggle={() => setNotifications(!notifications)}
            />

            <SettingRow
              icon={<Car size={19} />}
              title="New Ride Alerts"
              description="Get notified when nearby ride requests are available."
              enabled={rideAlerts}
              onToggle={() => setRideAlerts(!rideAlerts)}
            />
          </div>
        </section>

        {/* Account & Security */}
        <section className="mt-6 rounded-2xl bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="font-bold text-slate-950">
              Account & Security
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            <ActionRow
              icon={<Lock size={19} />}
              title="Change Password"
              description="Update your account password."
            />

            <ActionRow
              icon={<FileText size={19} />}
              title="Documents & KYC"
              description="Manage your verification documents."
              href="/driver/documents"
            />

            <ActionRow
              icon={<HelpCircle size={19} />}
              title="Help & Support"
              description="Get help with your driver account."
              href="/driver/support"
            />
          </div>
        </section>

        {/* Logout */}
        <section className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-bold text-red-800">
                Sign out of your account
              </h2>

              <p className="mt-1 text-sm text-red-600">
                You can sign back in anytime using your registered
                mobile number.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </section>

        {/* Back */}
        <div className="mt-6">
          <Link
            href="/driver"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={16} />
            Back to Driver Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

function ProfileField({
  icon,
  label,
  value,
  editing,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  editing: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          value={value}
          disabled={!editing}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none ${
            editing
              ? "border-slate-200 bg-white focus:border-blue-500"
              : "border-slate-100 bg-slate-50 text-slate-600"
          }`}
        />
      </div>
    </div>
  );
}

function StatusCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4">
      <div className="rounded-lg bg-green-50 p-2.5 text-green-600">
        {icon}
      </div>

      <div>
        <p className="text-xs text-slate-500">{title}</p>
        <p className="mt-0.5 font-semibold text-green-600">{value}</p>
      </div>
    </div>
  );
}

function SettingRow({
  icon,
  title,
  description,
  enabled,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
          {icon}
        </div>

        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <button
        onClick={onToggle}
        className={`relative h-6 w-11 flex-shrink-0 rounded-full transition ${
          enabled ? "bg-blue-600" : "bg-slate-300"
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

function ActionRow({
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
    <div className="flex items-center justify-between gap-4 p-5 hover:bg-slate-50 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-slate-100 p-2.5 text-slate-600">
          {icon}
        </div>

        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <ChevronRight size={19} className="text-slate-400" />
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button className="block w-full text-left">{content}</button>;
}