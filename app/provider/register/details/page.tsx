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

export default function ProviderRegisterDetailsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    licenseNumber: "",
    fleetSize: "1-5",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-12 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-3xl space-y-8">
        
        {/* Navigation & Header */}
        <div className="flex items-center justify-between">
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

        {!submitted ? (
          <form onSubmit={handleSubmit} className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                Full Legal Name / Business Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Rahul Sharma or Apex Logistics Ltd"
                  className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
                />
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
              </div>
            </div>

            {/* Email & Phone grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="partner@infurnus.com"
                    className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
                  />
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
                  />
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                </div>
              </div>
            </div>

            {/* Operating City & Driving License */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                  Primary Operating City
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Mumbai, Delhi, Bengaluru..."
                    className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
                  />
                  <Building size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                  Driving License / Transport GST No.
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.licenseNumber}
                    onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                    placeholder="DL-1420110012345"
                    className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
                  />
                  <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                </div>
              </div>
            </div>

            {/* Document Upload Mock */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                Upload Identification & Registration Documents
              </label>
              <div className="neu-inset-deep p-6 rounded-2xl border-2 border-dashed border-black/10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-black/5 transition-colors">
                <Upload size={32} className="text-[#000000] mb-2" />
                <p className="text-xs font-bold text-[#3D4852]">Click to upload Driving License / Vehicle RC PDF or Image</p>
                <p className="text-[11px] text-[#6B7280] mt-1">Supports PNG, JPG, PDF up to 10MB</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="neu-btn neu-btn-primary w-full py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 mt-4"
            >
              <span>Submit Provider Application</span>
              <ArrowRight size={18} />
            </button>

          </form>
        ) : (
          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 text-center space-y-6">
            <div className="neu-inset-deep inline-flex p-5 rounded-3xl text-[#000000]">
              <CheckCircle size={48} />
            </div>
            <h2 className="font-display text-3xl font-extrabold text-[#3D4852]">
              Registration Submitted!
            </h2>
            <p className="font-sans text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
              Thank you for registering with Infurnus. Our partner verification team will review your credentials within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/provider" className="neu-btn neu-btn-primary px-8 py-3.5 text-xs font-bold">
                Go to Provider Dashboard
              </Link>
              <Link href="/" className="neu-btn px-6 py-3.5 text-xs font-bold">
                Return to Homepage
              </Link>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
