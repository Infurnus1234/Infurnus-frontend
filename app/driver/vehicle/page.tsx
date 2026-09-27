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
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
              Fleet Management
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Assigned Vehicle Details
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-2xl">
              View vehicle specifications, registration records, and document compliance status.
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
            <CheckCircle2 size={18} />
            Vehicle registration details updated successfully.
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Vehicle Info */}
          <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6 lg:col-span-2">
            {/* Graphic Badge */}
            <div className="neu-inset-deep rounded-[28px] p-8 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="neu-extruded h-20 w-20 rounded-3xl flex items-center justify-center text-[#000000]">
                <Car size={40} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#3D4852]">Maruti Suzuki Dzire</h3>
                <p className="text-xs text-[#6B7280] font-mono mt-0.5">Primary Assigned Cab</p>
              </div>
              <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
                Status: VERIFIED FLEET
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-extrabold text-[#3D4852]">
                    Specification Overview
                  </h2>
                  <p className="text-xs text-[#6B7280]">White • Sedan • Petrol • AC Premier</p>
                </div>

                <button
                  onClick={() => setEditing(!editing)}
                  className="neu-btn px-5 py-2.5 rounded-2xl text-xs font-bold text-[#3D4852] inline-flex items-center justify-center gap-2"
                >
                  <Edit3 size={15} />
                  <span>{editing ? "Cancel" : "Edit Plate"}</span>
                </button>
              </div>

              {/* Vehicle Registration Number Input/Display */}
              <div className="neu-inset-deep p-6 rounded-2xl space-y-3">
                <p className="text-[11px] font-bold uppercase text-[#6B7280]">Vehicle Plate Number</p>

                {editing ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value)}
                      className="neu-input flex-1 px-4 py-3 rounded-xl text-xs font-mono font-bold text-[#3D4852] outline-none"
                    />
                    <button
                      onClick={saveChanges}
                      className="neu-btn neu-btn-primary px-6 py-3 rounded-xl text-xs font-bold"
                    >
                      Save Plate
                    </button>
                  </div>
                ) : (
                  <p className="font-mono text-2xl font-extrabold text-[#000000] tracking-wider">
                    {vehicleNumber}
                  </p>
                )}
              </div>

              {/* Grid Specification Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                <VehicleDetail
                  icon={<Car size={18} />}
                  label="Vehicle Category"
                  value="4-Seater Sedan"
                />

                <VehicleDetail
                  icon={<Gauge size={18} />}
                  label="Model Year"
                  value="2024 Model"
                />

                <VehicleDetail
                  icon={<Fuel size={18} />}
                  label="Fuel Specification"
                  value="Petrol / CNG"
                />

                <VehicleDetail
                  icon={<User size={18} />}
                  label="Capacity"
                  value="4 Passengers + Driver"
                />

                <VehicleDetail
                  icon={<MapPin size={18} />}
                  label="Registered Hub"
                  value="Bengaluru Metro"
                />

                <VehicleDetail
                  icon={<ShieldCheck size={18} />}
                  label="Verification State"
                  value="100% Compliant"
                />
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="space-y-8">
            {/* Document Compliance */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h2 className="font-bold text-base text-[#3D4852]">
                    Document Audit
                  </h2>
                  <p className="text-[11px] text-[#6B7280]">Verification Active</p>
                </div>
              </div>

              <div className="neu-inset-deep p-5 rounded-2xl space-y-3">
                <DocumentStatus title="Registration Certificate (RC)" status="Valid" />
                <DocumentStatus title="Commercial Insurance" status="Valid" />
                <DocumentStatus title="Pollution Check (PUC)" status="Valid" />
                <DocumentStatus title="State Transport Permit" status="Valid" />
              </div>

              <Link
                href="/driver/documents"
                className="neu-btn block w-full py-3.5 rounded-2xl text-center text-xs font-bold text-[#3D4852]"
              >
                Upload / Update Documents
              </Link>
            </section>

            {/* Compliance Guidelines */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <h2 className="font-bold text-base text-[#3D4852]">Fleet Standards</h2>
              <ul className="space-y-2 text-xs text-[#6B7280]">
                <li className="flex items-center gap-2"><span className="neu-inset-sm h-2 w-2 rounded-full bg-[#000000]" /> Clean vehicle exterior & interior daily</li>
                <li className="flex items-center gap-2"><span className="neu-inset-sm h-2 w-2 rounded-full bg-[#000000]" /> Keep Commercial Insurance updated</li>
                <li className="flex items-center gap-2"><span className="neu-inset-sm h-2 w-2 rounded-full bg-[#000000]" /> Maintain AC system functionality</li>
              </ul>
            </section>

            {/* Assigned Driver Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <h2 className="font-bold text-base text-[#3D4852]">Assigned Operator</h2>
              <div className="neu-inset-deep p-4 rounded-2xl flex items-center gap-3">
                <div className="neu-extruded h-10 w-10 rounded-xl flex items-center justify-center font-bold text-xs text-[#000000]">
                  AS
                </div>
                <div>
                  <p className="font-extrabold text-sm text-[#3D4852]">Aarav Singh</p>
                  <p className="text-[11px] text-[#6B7280]">Primary Licensed Driver</p>
                </div>
              </div>
            </section>
          </aside>
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
    <div className="neu-inset-deep p-4 rounded-2xl flex items-center gap-3">
      <div className="neu-extruded p-2.5 rounded-xl text-[#000000] shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase text-[#6B7280]">{label}</p>
        <p className="font-bold text-xs text-[#3D4852] mt-0.5">{value}</p>
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
    <div className="flex items-center justify-between gap-3 text-xs font-bold text-[#3D4852]">
      <div className="flex items-center gap-2">
        <FileText size={15} className="text-[#000000]" />
        <span>{title}</span>
      </div>
      <span className="neu-inset-sm px-2.5 py-0.5 rounded-full text-[10px] text-[#000000]">
        {status}
      </span>
    </div>
  );
}