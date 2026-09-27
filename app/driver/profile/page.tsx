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
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
              Account Terminal
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Driver Profile & Settings
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-2xl">
              Update personal identity info, emergency contact preferences, and push notification settings.
            </p>
          </div>

          <Link
            href="/driver"
            className="neu-btn px-6 py-3.5 rounded-2xl text-xs font-bold text-[#3D4852] inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <ArrowLeft size={16} />
            <span>Dashboard</span>
          </Link>
        </div>

        {saved && (
          <div className="neu-inset p-4 rounded-2xl flex items-center gap-3 text-xs font-bold text-[#000000]">
            <Check size={18} />
            Driver profile updated successfully.
          </div>
        )}

        {/* Profile Details Card */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/5">
            <div className="flex items-center gap-4">
              <div className="neu-extruded h-16 w-16 rounded-2xl flex items-center justify-center font-extrabold text-xl text-[#000000]">
                AS
              </div>

              <div>
                <h2 className="font-display text-xl font-extrabold text-[#3D4852]">
                  {name}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="neu-inset-sm px-3 py-0.5 rounded-full text-[11px] font-bold text-[#000000]">
                    Verified Driver
                  </span>
                  <span className="text-xs text-[#6B7280]">Member since 2026</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setEditing(!editing)}
              className="neu-btn px-5 py-2.5 rounded-2xl text-xs font-bold text-[#3D4852] inline-flex items-center justify-center gap-2 self-start sm:self-auto"
            >
              {editing ? <X size={16} /> : <User size={16} />}
              <span>{editing ? "Cancel" : "Edit Details"}</span>
            </button>
          </div>

          {/* Input Fields Grid */}
          <div className="space-y-6">
            <h3 className="font-bold text-base text-[#3D4852]">Personal Credentials</h3>

            <div className="grid gap-6 sm:grid-cols-2">
              <ProfileField
                icon={<User size={18} />}
                label="Full Name"
                value={name}
                editing={editing}
                onChange={setName}
              />

              <ProfileField
                icon={<Phone size={18} />}
                label="Mobile Phone"
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
                label="Primary City"
                value={city}
                editing={editing}
                onChange={setCity}
              />
            </div>

            {editing && (
              <button
                onClick={saveProfile}
                className="neu-btn neu-btn-primary px-8 py-3.5 rounded-2xl text-xs font-bold inline-flex items-center gap-2"
              >
                <Save size={16} />
                <span>Save Profile Changes</span>
              </button>
            )}
          </div>
        </section>

        {/* Verification Badges Card */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-4">
          <h2 className="font-bold text-base text-[#3D4852]">Account Audit Badges</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatusCard icon={<ShieldCheck size={18} />} title="KYC Compliance" value="Verified" />
            <StatusCard icon={<Car size={18} />} title="Vehicle Specs" value="Verified" />
            <StatusCard icon={<Check size={18} />} title="Dispatch Status" value="Active" />
          </div>
        </section>

        {/* Preferences Toggles Card */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <h2 className="font-bold text-base text-[#3D4852]">Notification Preferences</h2>
          <div className="space-y-4">
            <SettingRow
              icon={<Bell size={18} />}
              title="Push Notifications"
              description="Receive instant app alerts for trip updates and earnings payouts."
              enabled={notifications}
              onToggle={() => setNotifications(!notifications)}
            />

            <SettingRow
              icon={<Car size={18} />}
              title="New Dispatch Alerts"
              description="Sound loud alerts when new ride requests appear in your radius."
              enabled={rideAlerts}
              onToggle={() => setRideAlerts(!rideAlerts)}
            />
          </div>
        </section>

        {/* Account Actions */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-4">
          <h2 className="font-bold text-base text-[#3D4852]">Quick Account Links</h2>
          <div className="space-y-3">
            <ActionRow
              icon={<Lock size={18} />}
              title="Security & Password"
              description="Manage account authentication PIN"
            />

            <ActionRow
              icon={<FileText size={18} />}
              title="Documents & KYC Vault"
              description="View uploaded permits and licenses"
              href="/driver/documents"
            />

            <ActionRow
              icon={<HelpCircle size={18} />}
              title="Driver Help Center"
              description="24/7 driver support desk"
              href="/driver/support"
            />
          </div>
        </section>

        {/* Sign Out Card */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-red-500/20">
          <div>
            <h3 className="font-bold text-sm text-[#3D4852]">Sign Out of Driver Terminal</h3>
            <p className="text-xs text-[#6B7280]">Your active session will be safely closed.</p>
          </div>

          <button className="neu-btn px-6 py-3 rounded-2xl text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-2 self-start sm:self-auto">
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </section>
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
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
          {icon}
        </span>
        <input
          value={value}
          disabled={!editing}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full pl-11 pr-4 py-3.5 rounded-2xl text-xs font-bold text-[#3D4852] outline-none transition-all ${
            editing ? "neu-input" : "neu-inset-deep opacity-80"
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
    <div className="neu-inset-deep p-4 rounded-2xl flex items-center gap-3">
      <div className="neu-extruded p-2.5 rounded-xl text-[#000000]">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase text-[#6B7280]">{title}</p>
        <p className="font-extrabold text-xs text-[#000000] mt-0.5">{value}</p>
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
    <div className="neu-inset-deep p-5 rounded-2xl flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="neu-extruded p-2.5 rounded-xl text-[#000000]">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-xs text-[#3D4852]">{title}</h4>
          <p className="text-[11px] text-[#6B7280]">{description}</p>
        </div>
      </div>

      <button
        onClick={onToggle}
        className={`neu-btn px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
          enabled ? "text-[#000000] border border-black/10" : "text-[#6B7280]"
        }`}
      >
        {enabled ? "ENABLED" : "DISABLED"}
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
    <div className="neu-inset-sm hover:neu-btn p-4 rounded-2xl flex items-center justify-between gap-4 transition-all">
      <div className="flex items-center gap-3">
        <div className="neu-extruded p-2.5 rounded-xl text-[#000000]">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-xs text-[#3D4852]">{title}</h4>
          <p className="text-[11px] text-[#6B7280]">{description}</p>
        </div>
      </div>

      <ChevronRight size={16} className="text-[#6B7280]" />
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button className="w-full text-left">{content}</button>;
}