"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I accept a ride?",
    answer:
      "When you are online, nearby ride requests will appear on your dashboard. Review the pickup, destination and estimated fare, then select Accept.",
  },
  {
    question: "When will I receive my earnings?",
    answer:
      "Completed ride earnings are added to your driver balance. Eligible payouts can be transferred to your verified bank account.",
  },
  {
    question: "What should I do if a customer does not arrive?",
    answer:
      "Wait at the pickup location and use the in-app support options if the customer does not arrive. Follow the cancellation policy before cancelling.",
  },
  {
    question: "How can I update my documents?",
    answer:
      "Open Documents & KYC from your Driver Dashboard and select Update next to the document you want to replace.",
  },
];

export default function DriverSupportPage() {
  const [sosOpen, setSosOpen] = useState(false);
  const [sosSent, setSosSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activateSOS = () => {
    setSosSent(true);

    setTimeout(() => {
      setSosSent(false);
      setSosOpen(false);
    }, 3000);
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
            Help & Support
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6">
          <p className="text-sm text-slate-500">Driver account</p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            Help & Support
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Get assistance with rides, payments, documents and safety.
          </p>
        </div>

        {/* SOS */}
        <section className="rounded-2xl bg-red-600 p-5 text-white shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white/15 p-3">
                <ShieldAlert size={25} />
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  Emergency Assistance
                </h2>

                <p className="mt-1 max-w-xl text-sm leading-6 text-red-100">
                  If you are in immediate danger or need urgent assistance,
                  use the SOS option.
                </p>
              </div>
            </div>

            <button
              onClick={() => setSosOpen(true)}
              className="rounded-xl bg-white px-6 py-3 font-bold text-red-600 hover:bg-red-50"
            >
              SOS Emergency
            </button>
          </div>
        </section>

        {/* Contact Support */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <SupportCard
            icon={<Phone size={22} />}
            title="Call Support"
            description="Talk to an Infurnus support representative."
            button="Call Support"
          />

          <SupportCard
            icon={<MessageCircle size={22} />}
            title="Chat Support"
            description="Chat with our support team about your issue."
            button="Start Chat"
          />
        </section>

        {/* Help Topics */}
        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-950">
            Help Topics
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Find answers to common driver questions.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Topic
              icon={<ShieldCheck size={20} />}
              title="Safety & Emergency"
            />

            <Topic
              icon={<HelpCircle size={20} />}
              title="Ride & Booking Issues"
            />

            <Topic
              icon={<MessageCircle size={20} />}
              title="Customer Issues"
            />

            <Topic
              icon={<AlertTriangle size={20} />}
              title="Payment & Earnings"
            />
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-6 rounded-2xl bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-slate-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 sm:p-6"
                  >
                    <span className="font-semibold text-slate-800">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`flex-shrink-0 text-slate-400 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <p className="rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Safety */}
        <section className="mt-6 rounded-2xl bg-slate-950 p-5 text-white sm:p-6">
          <h2 className="font-bold">Driver Safety Guidelines</h2>

          <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <p>✓ Follow traffic rules at all times.</p>
            <p>✓ Never drive under the influence.</p>
            <p>✓ Keep your vehicle documents valid.</p>
            <p>✓ Verify customer details before starting.</p>
            <p>✓ Do not share sensitive account information.</p>
            <p>✓ Use SOS when immediate help is required.</p>
          </div>
        </section>

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

      {/* SOS Modal */}
      {sosOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            {!sosSent ? (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <ShieldAlert size={28} />
                </div>

                <h2 className="mt-5 text-center text-xl font-bold text-slate-950">
                  Activate Emergency SOS?
                </h2>

                <p className="mt-2 text-center text-sm leading-6 text-slate-500">
                  This demo will simulate sending an emergency alert to
                  Infurnus support.
                </p>

                <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                  <p className="font-semibold">
                    Emergency alert will include:
                  </p>

                  <ul className="mt-2 space-y-1">
                    <li>• Driver account details</li>
                    <li>• Current ride information</li>
                    <li>• Current location</li>
                  </ul>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSosOpen(false)}
                    className="rounded-xl border border-slate-200 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={activateSOS}
                    className="rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
                  >
                    Confirm SOS
                  </button>
                </div>
              </>
            ) : (
              <div className="py-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <ShieldCheck size={28} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-slate-950">
                  Emergency Alert Sent
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Infurnus support has been notified in this demo.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function SupportCard({
  icon,
  title,
  description,
  button,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  button: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h2 className="mt-4 font-bold text-slate-950">{title}</h2>

      <p className="mt-1 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <button className="mt-4 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
        {button}
      </button>
    </div>
  );
}

function Topic({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-left hover:border-blue-200 hover:bg-blue-50">
      <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
        {icon}
      </div>

      <span className="font-semibold text-slate-800">
        {title}
      </span>
    </button>
  );
}