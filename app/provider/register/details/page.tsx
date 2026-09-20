"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  Building2,
  UserRound,
  Upload,
} from "lucide-react";
import { useMemo, useState } from "react";

export default function ProviderRegisterDetailsPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "driver";

  const [submitted, setSubmitted] = useState(false);

  const providerInfo = useMemo(() => {
    if (type === "owner") {
      return {
        title: "Fleet Owner Registration",
        description:
          "Tell us about yourself and the vehicles you own or manage.",
        icon: Building2,
      };
    }

    if (type === "driver-owner") {
      return {
        title: "Driver + Fleet Owner Registration",
        description:
          "Tell us about yourself, your driving details and your vehicle.",
        icon: Car,
      };
    }

    return {
      title: "Driver Registration",
      description:
        "Tell us about yourself and the vehicle you will drive.",
      icon: UserRound,
    };
  }, [type]);

  const Icon = providerInfo.icon;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight"
            >
              <span className="text-slate-950">INFUR</span>
              <span className="text-blue-600">NUS</span>
            </Link>
          </div>
        </header>

        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <h1 className="mt-6 text-2xl font-bold text-slate-950">
              Registration Submitted
            </h1>

            <p className="mt-3 leading-6 text-slate-500">
              Your provider registration has been submitted successfully.
              Our team will verify your details and documents.
            </p>

            <Link
              href="/provider"
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700"
            >
              Go to Provider Dashboard
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

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
            href="/"
            className="ml-auto text-xl font-extrabold tracking-tight sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Icon size={27} />
          </div>

          <h1 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">
            {providerInfo.title}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            {providerInfo.description}
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
                are accurate and genuine. I agree to Infurnus's{" "}
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

/* ---------------- Components ---------------- */

function Input({
  label,
  placeholder,
  type = "text",
  required = false,
  min,
}: {
  label: string;
  placeholder: string;
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