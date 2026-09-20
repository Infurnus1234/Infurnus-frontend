"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Car,
  ChevronDown,
  ChevronRight,
  Clock3,
  CreditCard,
  Headphones,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const helpTopics = [
  {
    title: "Ride & Booking",
    description: "Problems with booking, driver or trip",
    icon: Car,
  },
  {
    title: "Payments",
    description: "Payment, refund or wallet issues",
    icon: CreditCard,
  },
  {
    title: "Logistics & Delivery",
    description: "Parcel, delivery or tracking issues",
    icon: Package,
  },
  {
    title: "Account",
    description: "Profile, login or account issues",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "How do I cancel a ride?",
    answer:
      "Open My Bookings, select the active booking and choose the cancellation option. Any applicable cancellation charges will be shown before confirmation.",
  },
  {
    question: "How can I get a refund?",
    answer:
      "Open the relevant booking and contact support. The support team can review the payment and refund eligibility.",
  },
  {
    question: "How do I contact my driver?",
    answer:
      "During an active ride, open Live Tracking and use the Call or Chat option on the driver card.",
  },
  {
    question: "What should I do during an emergency?",
    answer:
      "Use the SOS option on the active ride screen for emergency assistance. Contact local emergency services when immediate emergency assistance is required.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSos, setShowSos] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

          <Link
            href="/customer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={19} />
            Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              I
            </div>

            <span className="font-bold text-slate-900">
              INFURNUS
            </span>
          </div>

        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">

        {/* Heading */}
        <div>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Help Center
          </span>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            How can we help?
          </h1>

          <p className="mt-2 text-slate-500">
            Get help with rides, deliveries, payments and your account.
          </p>
        </div>

        {/* Emergency Card */}
        <section className="mt-8 overflow-hidden rounded-3xl bg-red-600 p-6 text-white md:p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <ShieldAlert size={28} />
              </div>

              <div>
                <p className="text-sm font-semibold text-red-100">
                  Emergency Assistance
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Are you in an emergency?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-red-100">
                  Use SOS to request emergency assistance during an
                  active Infurnus trip.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowSos(true)}
              className="rounded-xl bg-white px-7 py-3.5 font-bold text-red-600 transition hover:bg-red-50"
            >
              🚨 SOS
            </button>

          </div>
        </section>

        {/* Help Topics */}
        <section className="mt-10">

          <h2 className="text-xl font-bold text-slate-900">
            What do you need help with?
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            {helpTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <button
                  key={topic.title}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">
                      {topic.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {topic.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={19}
                    className="text-slate-300"
                  />
                </button>
              );
            })}

          </div>
        </section>

        {/* Contact Support */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Headphones size={21} />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  Contact Infurnus Support
                </h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Our support team can help with bookings, payments,
                deliveries and account-related issues.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <Phone size={17} />
                Call Support
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                <MessageCircle size={17} />
                Chat Support
              </button>

            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10 pb-10">

          <h2 className="text-xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-slate-100 last:border-0"
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold text-slate-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-slate-400 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-6 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </section>

      </div>

      {/* SOS Modal */}
      {showSos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-6">

          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle
                size={30}
                className="text-red-600"
              />
            </div>

            <h2 className="mt-5 text-center text-2xl font-bold text-slate-900">
              Emergency Assistance
            </h2>

            <p className="mt-3 text-center text-sm leading-6 text-slate-500">
              This demo will display the emergency assistance
              workflow. In production, this should connect to your
              emergency-response backend.
            </p>

            <div className="mt-6 space-y-3">

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 font-bold text-white hover:bg-red-700">
                <Phone size={18} />
                Contact Emergency Support
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3.5 font-semibold text-slate-700 hover:bg-slate-50">
                <MapPin size={18} />
                Share Current Location
              </button>

            </div>

            <button
              onClick={() => setShowSos(false)}
              className="mt-4 w-full rounded-xl py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </main>
  );
}