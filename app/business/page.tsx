"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Building2,
  Users,
  Truck,
  BarChart3,
  ShieldCheck,
  Headphones,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Business Transportation",
    text: "Manage employee, customer and business transportation requirements effortlessly.",
  },
  {
    icon: Users,
    title: "Fleet Management",
    text: "Manage vehicles, drivers, and dispatch schedules from a unified platform.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    text: "Real-time tracking, usage analytics, earnings summaries, and operational reports.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Providers",
    text: "Build your operations around 100% verified, compliance-checked vehicles and drivers.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    text: "Priority 24/7 account support for all corporate and enterprise logistics needs.",
  },
  {
    icon: Building2,
    title: "Custom B2B Solutions",
    text: "Tailored transit workflows, monthly vehicle leasing, and direct API integrations.",
  },
];

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#E0E5EC] flex flex-col justify-between text-[#3D4852]">
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
            <Link href="/" className="hover:text-[#000000]">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#000000]">Infurnus Enterprise & Business</span>
          </div>

          {/* HERO */}
          <div className="neu-extruded rounded-[40px] bg-[#E0E5EC] p-8 sm:p-14 space-y-6">
            <span className="inline-flex items-center gap-2 neu-inset-sm px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
              <Sparkles size={14} />
              Infurnus Enterprise Platform
            </span>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#3D4852] max-w-3xl leading-tight">
              Mobility & Logistics Solutions Built for Business
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#6B7280] max-w-2xl leading-relaxed">
              Streamline employee commutes, commercial cargo transport, and fleet operations through one unified Neumorphic command platform.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/provider/register"
                className="neu-btn neu-btn-primary px-8 py-4 text-sm font-bold flex items-center gap-2"
              >
                <span>Partner With Us</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/support"
                className="neu-btn px-6 py-4 text-sm font-bold text-[#3D4852]"
              >
                Contact Business Sales
              </Link>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#3D4852]">
              Why Leading Enterprises Choose Infurnus
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="neu-extruded neu-extruded-hover rounded-[32px] bg-[#E0E5EC] p-8 space-y-4 transition-all duration-300"
                  >
                    <div className="neu-inset-deep p-4 rounded-2xl text-[#000000] w-fit">
                      <Icon size={28} />
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#3D4852]">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA CARD */}
          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 text-center space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
              Ready to Upgrade Your Corporate Fleet Operations?
            </h3>
            <p className="font-sans text-sm text-[#6B7280] max-w-xl mx-auto">
              Get in touch with our enterprise mobility specialists for custom pricing and SLA guarantees.
            </p>
            <div className="pt-2">
              <Link
                href="/support"
                className="neu-btn neu-btn-primary px-8 py-3.5 text-xs font-bold inline-flex items-center gap-2"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}