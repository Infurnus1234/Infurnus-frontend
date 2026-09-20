"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Car,
  CheckCircle2,
  Edit3,
  FileText,
  Fuel,
  Gauge,
  MapPin,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";

export default function DriverVehiclePage() {
  const [editing, setEditing] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState("KA 01 AB 1234");
  const [saved, setSaved] = useState(false);

  const saveChanges = () => {
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
            Vehicle Details
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6">
          <p className="text-sm text-slate-500">Driver account</p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            My Vehicle
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your registered vehicle information.
          </p>
        </div>

        {saved && (
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            <CheckCircle2 size={18} />
            Vehicle information updated successfully.
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Vehicle Main Card */}
          <section className="overflow-hidden rounded-2xl bg-white shadow-sm lg:col-span-2">
            {/* Vehicle Image Placeholder */}
            <div className="relative flex h-64 items-center justify-center bg-blue-50">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                  <Car size={48} />
                </div>

                <p className="mt-4 text-sm font-semibold text-slate-600">
                  Registered Vehicle
                </p>
              </div>

              <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Active
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm text-slate-500">Vehicle</p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-950">
                    Maruti Suzuki Dzire
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    White • Sedan • Petrol
                  </p>
                </div>

                <button
                  onClick={() => setEditing(!editing)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Edit3 size={16} />
                  Edit Vehicle
                </button>
              </div>

              {/* Vehicle Number */}
              <div className="mt-6 rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">
                  Registration Number
                </p>

                {editing ? (
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <input
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value)}
                      className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold outline-none focus:border-blue-500"
                    />

                    <button
                      onClick={saveChanges}
                      className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <p className="mt-1 text-xl font-bold tracking-wider text-slate-900">
                    {vehicleNumber}
                  </p>
                )}
              </div>

              {/* Details */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <VehicleDetail
                  icon={<Car size={19} />}
                  label="Vehicle Type"
                  value="Sedan"
                />

                <VehicleDetail
                  icon={<Gauge size={19} />}
                  label="Model Year"
                  value="2024"
                />

                <VehicleDetail
                  icon={<Fuel size={19} />}
                  label="Fuel Type"
                  value="Petrol"
                />

                <VehicleDetail
                  icon={<User size={19} />}
                  label="Seating Capacity"
                  value="4 Passengers"
                />

                <VehicleDetail
                  icon={<MapPin size={19} />}
                  label="Registered City"
                  value="Bengaluru"
                />

                <VehicleDetail
                  icon={<ShieldCheck size={19} />}
                  label="Vehicle Status"
                  value="Verified"
                />
              </div>
            </div>
          </section>

          {/* Right */}
          <aside className="space-y-6">
            {/* Verification */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3 text-green-600">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-950">
                    Vehicle Verification
                  </h2>

                  <p className="text-xs text-green-600">
                    All documents verified
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <DocumentStatus
                  title="RC / Registration Certificate"
                  status="Verified"
                />

                <DocumentStatus
                  title="Insurance"
                  status="Verified"
                />

                <DocumentStatus
                  title="Pollution Certificate"
                  status="Verified"
                />

                <DocumentStatus
                  title="Vehicle Permit"
                  status="Verified"
                />
              </div>

              <Link
                href="/driver/documents"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <FileText size={17} />
                Manage Documents
              </Link>
            </section>

            {/* Vehicle Rules */}
            <section className="rounded-2xl bg-slate-950 p-5 text-white">
              <h2 className="font-bold">Vehicle Requirements</h2>

              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p>✓ Keep insurance valid</p>
                <p>✓ Keep RC information updated</p>
                <p>✓ Maintain vehicle cleanliness</p>
                <p>✓ Complete periodic inspections</p>
              </div>
            </section>

            {/* Driver */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-bold text-slate-950">
                Assigned Driver
              </h2>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                  AS
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Aarav Singh
                  </p>

                  <p className="text-xs text-slate-500">
                    Primary Driver
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>

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

function VehicleDetail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4">
      <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="mt-0.5 font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function DocumentStatus({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-3">
      <div className="flex items-center gap-2">
        <FileText size={17} className="text-slate-400" />

        <span className="text-sm font-medium text-slate-700">
          {title}
        </span>
      </div>

      <span className="text-xs font-semibold text-green-600">
        {status}
      </span>
    </div>
  );
}