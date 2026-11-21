"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle,
  FileText,
  Building,
  Upload,
  ArrowRight,
} from "lucide-react";
import { Suspense, useMemo, useState } from "react";

function ProviderRegisterDetailsContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "driver";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href={`/provider/register`}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href="/provider/register"
            className="neu-btn px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 text-[#3D4852]"
          >
            <ArrowLeft size={16} />
            <span>Back to Role Selection</span>
          </Link>
          <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
            Step 2 of 2: Provider Profile
          </span>
        </div>

        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-3 text-center sm:text-left">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#3D4852]">
            Provider Registration Details
          </h1>
          <p className="font-sans text-sm text-[#6B7280]">
            Complete your onboarding details to access the Infurnus Fleet & Partner Dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Personal Information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h2 className="text-lg font-bold text-slate-950">
              Personal Information
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                required
              />

              <Input
                label="Mobile Number"
                placeholder="Enter mobile number"
                type="tel"
                required
              />

              <Input
                label="Email Address"
                placeholder="Enter email address"
                type="email"
                required
              />

              <Input
                label="City"
                placeholder="Enter your city"
                required
              />
            </div>
          </section>

          {/* Driver Information */}
          {(type === "driver" || type === "driver-owner") && (
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-lg font-bold text-slate-950">
                Driving Information
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Input
                  label="Driving Licence Number"
                  placeholder="Enter licence number"
                  required
                />

                <Input
                  label="Licence Expiry Date"
                  type="date"
                  required
                />

                <Select
                  label="Driving Experience"
                  options={[
                    "Less than 1 year",
                    "1 - 3 years",
                    "3 - 5 years",
                    "5 - 10 years",
                    "10+ years",
                  ]}
                />

                <Select
                  label="Vehicle Type You Drive"
                  options={[
                    "Bike",
                    "Auto",
                    "Mini / Compact",
                    "Sedan",
                    "SUV",
                    "Logistics Vehicle",
                    "Service Vehicle",
                    "Premium Vehicle",
                  ]}
                />
              </div>

              <div className="mt-5">
                <UploadBox
                  label="Driving Licence"
                  description="Upload a clear PDF, JPG or PNG"
                />
              </div>
            </section>
          )}

          {/* Fleet Owner Information */}
          {(type === "owner" || type === "driver-owner") && (
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-lg font-bold text-slate-950">
                {type === "driver-owner"
                  ? "Vehicle Ownership"
                  : "Fleet Information"}
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Input
                  label="Fleet / Business Name"
                  placeholder="Enter fleet or business name"
                  required
                />

                <Input
                  label="Number of Vehicles"
                  placeholder="Example: 5"
                  type="number"
                  min="1"
                  required
                />

                <Select
                  label="Vehicle Category"
                  options={[
                    "Passenger",
                    "Logistics",
                    "Service Vehicle",
                    "Premium Vehicle",
                    "Multiple Categories",
                  ]}
                />

                <Input
                  label="Business Address"
                  placeholder="Enter business address"
                  required
                />

                <Input
                  label="GST Number"
                  placeholder="Enter GST number (if applicable)"
                />

                <Input
                  label="PAN Number"
                  placeholder="Enter PAN number"
                  required
                />
              </div>
            </section>
          )}

          {/* Vehicle Details */}
          {type === "driver-owner" && (
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-lg font-bold text-slate-950">
                Your Vehicle
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Input
                  label="Vehicle Number"
                  placeholder="Example: BR01AB1234"
                  required
                />

                <Input
                  label="Vehicle Model"
                  placeholder="Example: Maruti Suzuki Dzire"
                  required
                />

                <Select
                  label="Vehicle Category"
                  options={[
                    "Passenger",
                    "Logistics",
                    "Service Vehicle",
                    "Premium Vehicle",
                  ]}
                />

                <Select
                  label="Fuel Type"
                  options={[
                    "Petrol",
                    "Diesel",
                    "CNG",
                    "Electric",
                    "Hybrid",
                  ]}
                />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <UploadBox
                  label="Vehicle RC"
                  description="Upload vehicle registration certificate"
                />

                <UploadBox
                  label="Vehicle Insurance"
                  description="Upload valid insurance document"
                />
              </div>
            </section>
          )}

          {/* Documents */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h2 className="text-lg font-bold text-slate-950">
              Verification Documents
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Upload the documents required for provider verification.
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <UploadBox
                label="Aadhaar Card"
                description="Upload clear front and back"
              />

              {type === "owner" && (
                <UploadBox
                  label="PAN Card"
                  description="Upload your PAN card"
                />
              )}

              <UploadBox
                label="Address Proof"
                description="Upload a valid address proof"
              />

              <UploadBox
                label="Profile Photo"
                description="Upload a recent passport-size photo"
              />
            </div>
          </section>

          {/* Terms */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />

              <span className="text-sm leading-6 text-slate-600">
                I confirm that the information and documents provided by me
                are accurate and genuine. I agree to Infurnus&apos;s{" "}
                <span className="font-semibold text-blue-600">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-600">
                  Provider Agreement
                </span>
                .
              </span>
            </label>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Submit Registration
            <ArrowRight size={19} />
          </button>

          <p className="text-center text-xs text-slate-400">
            This is currently a frontend demo. Document verification and
            backend registration will be connected later.
          </p>
        </form>
      </div>
    </main>
  );
}

export default function ProviderRegisterDetailsPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50" />}>
      <ProviderRegisterDetailsContent />
    </Suspense>
  );
}

/* ---------------- Components ---------------- */

function Input({
  label,
  placeholder,
  type = "text",
  required = false,
  min,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <select
        required
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        defaultValue=""
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function UploadBox({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <label className="block cursor-pointer">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </span>

      <div className="rounded-xl border-2 border-dashed border-slate-200 p-5 text-center transition hover:border-blue-400 hover:bg-blue-50/30">
        <Upload className="mx-auto text-slate-400" size={22} />

        <p className="mt-2 text-sm font-medium text-slate-700">
          Click to upload
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {description}
        </p>
      </div>

      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
      />
    </label>
  );
}