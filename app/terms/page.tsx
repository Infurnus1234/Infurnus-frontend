"use client";

import Link from "next/link";
import { FileText, ShieldAlert, Scale, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#E0E5EC] py-12 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* Navigation Top */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
          <Link href="/" className="hover:text-[#000000] flex items-center gap-1">
            <ArrowLeft size={14} /> Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#000000]">Terms of Service</span>
        </div>

        {/* Hero Section */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-4">
          <span className="inline-flex items-center gap-2 neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
            <Scale size={14} />
            Legal Agreement
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#3D4852]">
            Infurnus Terms of Service
          </h1>
          <p className="font-sans text-sm text-[#6B7280]">
            Last updated: September 27, 2026 • Please read carefully before using our platform.
          </p>
        </div>

        {/* Content Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-10">
          
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <FileText size={20} />
              </div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">1. Acceptance of Terms</h2>
            </div>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
              By creating an account, downloading the Infurnus mobile application, or requesting mobility, logistics, hourly rental, or emergency services, you agree to be bound by these binding terms and conditions.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <CheckCircle2 size={20} />
              </div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">2. Service Offerings & Dispatch</h2>
            </div>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
              Infurnus operates as a technology platform connecting users with independent licensed transportation and fleet operators. While Infurnus enforces rigorous background verification and vehicle safety standards, trip completion schedules depend on real-time traffic and weather conditions.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <Scale size={20} />
              </div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">3. Fares, Payments & Cancellations</h2>
            </div>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
              Fares are computed transparently based on distance, duration, vehicle type, and applicable toll taxes. Payment must be fulfilled immediately upon booking or trip completion via designated digital channels or cash. Cancellation fees apply after driver arrival as outlined in our cancellation schedule.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <ShieldAlert size={20} />
              </div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">4. User Conduct & Prohibited Cargo</h2>
            </div>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
              Users must refrain from abusive behavior toward drivers, damaging vehicles, or requesting transport of hazardous, illegal, or contraband substances. Infurnus reserves the right to terminate accounts violating these standards without refund.
            </p>
          </section>

          <div className="p-6 rounded-2xl neu-inset-deep space-y-2">
            <h3 className="font-bold text-[#3D4852]">Legal Inquiries</h3>
            <p className="text-xs text-[#6B7280]">
              For formal legal communications or compliance inquiries, please write to legal@infurnus.com.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
