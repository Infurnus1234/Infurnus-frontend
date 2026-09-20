"use client";

import {
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I book a ride?",
    answer:
      "Open the customer booking page, enter your pickup and destination, select a vehicle and review the estimated fare before confirming the booking.",
  },
  {
    question: "What services does Infurnus provide?",
    answer:
      "Infurnus supports Passenger, Logistics, Service Vehicle and Premium Vehicle services.",
  },
  {
    question: "Can I schedule a ride?",
    answer:
      "Yes. The customer booking flow supports both Ride Now and scheduled bookings.",
  },
  {
    question: "How can I become a provider?",
    answer:
      "Select Become a Provider from the navigation and complete the provider registration flow.",
  },
  {
    question: "Can fleet owners manage drivers?",
    answer:
      "Yes. The provider platform includes vehicle and driver management functionality for fleet operations.",
  },
  {
    question: "How can I get help with a booking?",
    answer:
      "Use the support options on this page and provide your booking details so the issue can be reviewed.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-wider text-blue-400">
            SUPPORT
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            How can we help?
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Find answers to common questions or contact the Infurnus support
            team.
          </p>

        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">

          <SupportCard
            icon={MessageCircle}
            title="Live Support"
            text="Get assistance with your booking or account."
            action="Start a conversation"
          />

          <SupportCard
            icon={Mail}
            title="Email Support"
            text="Send us your query and relevant booking details."
            action="support@infurnus.com"
          />

          <SupportCard
            icon={Phone}
            title="Phone Support"
            text="Contact support for assistance with your service."
            action="+91 00000 00000"
          />

        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <HelpCircle size={24} />
            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-950">
              Frequently Asked Questions
            </h2>

            <p className="mt-2 text-slate-500">
              Find quick answers to common questions.
            </p>
          </div>

          <div className="mt-8 space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="font-semibold text-slate-950">
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
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                      <p className="text-sm leading-6 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-2xl font-bold text-slate-950">
            Still need help?
          </h2>

          <p className="mt-2 text-slate-500">
            Contact the Infurnus support team with your booking or account
            details.
          </p>

          <a
            href="mailto:support@infurnus.com"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <Mail size={18} />
            Email Support
          </a>

        </div>
      </section>

    </main>
  );
}

function SupportCard({
  icon: Icon,
  title,
  text,
  action,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  action: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={23} />
      </div>

      <h3 className="mt-5 font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>

      <p className="mt-4 text-sm font-semibold text-blue-600">
        {action}
      </p>

    </div>
  );
}