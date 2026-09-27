"use client";

import Link from "next/link";
import { Shield, Lock, Eye, FileText, ChevronRight, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#E0E5EC] py-12 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* Navigation Top */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
          <Link href="/" className="hover:text-[#000000] flex items-center gap-1">
            <ArrowLeft size={14} /> Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#000000]">Privacy Policy</span>
        </div>

        {/* Hero Section */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-4">
          <span className="inline-flex items-center gap-2 neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
            <Shield size={14} />
            Data Protection & Security
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#3D4852]">
            Infurnus Privacy Policy
          </h1>
          <p className="font-sans text-sm text-[#6B7280]">
            Last updated: September 27, 2026 • Effective Date: January 1, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-10">
          
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <Eye size={20} />
              </div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">1. Information We Collect</h2>
            </div>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
              We collect information to provide seamless mobility, logistics, and emergency dispatch services. This includes personal identification details (name, email, phone number), real-time precise geolocation data during active rides/deliveries, payment vehicle details, and device metadata.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <Lock size={20} />
              </div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">2. How We Use Your Information</h2>
            </div>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
              Your data is utilized strictly for route navigation, driver matching, automated dispatching, fraud prevention, safety telemetry, customer support verification, and legally mandated compliance checks. We never sell your personal contact information to third-party ad networks.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <FileText size={20} />
              </div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">3. Location & Background Tracking</h2>
            </div>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
              Location access is requested for trip pickups, active navigation, and safety emergency monitoring. Driver partners consent to continuous background location tracking while set to "Online" status to ensure passenger safety and accurate customer arrival estimates.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <Shield size={20} />
              </div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">4. Data Protection & Security</h2>
            </div>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
              Infurnus implements industry-standard 256-bit SSL encryption, tokenized payment gateway processing (PCI-DSS level 1 compliant), and strict row-level authorization models to protect your sensitive financial and trip records.
            </p>
          </section>

          <div className="p-6 rounded-2xl neu-inset-deep space-y-2">
            <h3 className="font-bold text-[#3D4852]">Questions or Data Rights Requests?</h3>
            <p className="text-xs text-[#6B7280]">
              To request account deletion or data exports, contact our Data Protection Officer at privacy@infurnus.com or visit our <Link href="/support" className="text-[#000000] underline font-bold">Support Portal</Link>.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
