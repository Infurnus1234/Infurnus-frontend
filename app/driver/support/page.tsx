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
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
              24/7 Driver Help Desk
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Driver Support & Safety
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-2xl">
              Get immediate assistance with active trips, account issues, payout disputes, or emergency SOS dispatches.
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

        {/* SOS Emergency Alert Banner */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-red-500/30">
          <div className="flex items-center gap-4">
            <div className="neu-inset-deep p-3.5 rounded-2xl text-red-600">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">
                Emergency SOS Incident Dispatch
              </h2>
              <p className="text-xs text-[#6B7280] mt-1 max-w-lg">
                Press to send live GPS tracking coordinates and dispatch alerts to Infurnus safety response unit.
              </p>
            </div>
          </div>

          <button
            onClick={() => setSosOpen(true)}
            className="neu-btn px-6 py-3.5 rounded-2xl text-xs font-extrabold text-red-600 hover:text-red-700 self-start sm:self-auto shrink-0"
          >
            SOS Emergency Signal
          </button>
        </section>

        {/* Contact Support Options */}
        <section className="grid gap-6 sm:grid-cols-2">
          <SupportCard
            icon={<Phone size={22} />}
            title="Driver Phone Helpline"
            description="Direct audio connection to Infurnus driver dispatch supervisor."
            button="Call Support Now"
          />

          <SupportCard
            icon={<MessageCircle size={22} />}
            title="Instant Live Chat"
            description="Chat live with our 24/7 driver resolution center."
            button="Start Live Chat"
          />
        </section>

        {/* Help Topics */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <h2 className="font-display text-xl font-bold text-[#3D4852]">
            Browse Support Categories
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Topic icon={<ShieldCheck size={20} />} title="Safety & Collision Support" />
            <Topic icon={<HelpCircle size={20} />} title="Navigation & Route Disputes" />
            <Topic icon={<MessageCircle size={20} />} title="Rider Conduct & Ratings" />
            <Topic icon={<AlertTriangle size={20} />} title="Weekly Payout Statements" />
          </div>
        </section>

        {/* FAQs Accordion Card */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <h2 className="font-display text-xl font-bold text-[#3D4852]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question} className="neu-inset-deep rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left font-bold text-xs text-[#3D4852]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#6B7280] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#6B7280] leading-relaxed border-t border-black/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Driver Safety Rules Card */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-4">
          <h2 className="font-display text-xl font-bold text-[#3D4852]">Driver Safety Guidelines</h2>

          <div className="grid gap-3 text-xs text-[#6B7280] sm:grid-cols-2">
            <p className="flex items-center gap-2"><span className="neu-inset-sm h-2 w-2 rounded-full bg-[#000000]" /> Follow all state & metro traffic regulations.</p>
            <p className="flex items-center gap-2"><span className="neu-inset-sm h-2 w-2 rounded-full bg-[#000000]" /> Zero tolerance for driving while fatigued.</p>
            <p className="flex items-center gap-2"><span className="neu-inset-sm h-2 w-2 rounded-full bg-[#000000]" /> Keep Commercial RC & Permits active.</p>
            <p className="flex items-center gap-2"><span className="neu-inset-sm h-2 w-2 rounded-full bg-[#000000]" /> Verify passenger OTP before trip start.</p>
          </div>
        </section>
      </div>

      {/* SOS Modal */}
      {sosOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 max-w-md w-full space-y-6 text-center">
            {!sosSent ? (
              <>
                <div className="neu-inset-deep inline-flex p-4 rounded-2xl text-red-600">
                  <ShieldAlert size={36} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-extrabold text-[#3D4852]">
                    Activate Emergency SOS?
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    This action will alert emergency services and transmit real-time vehicle GPS coordinates.
                  </p>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    onClick={() => setSosOpen(false)}
                    className="flex-1 neu-btn py-3.5 rounded-2xl text-xs font-bold text-[#3D4852]"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={activateSOS}
                    className="flex-1 neu-btn py-3.5 rounded-2xl text-xs font-extrabold text-red-600 hover:text-red-700"
                  >
                    Confirm SOS
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-4 py-4">
                <div className="neu-inset-deep inline-flex p-4 rounded-2xl text-[#000000]">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[#3D4852]">
                  Emergency Alert Transmitted
                </h3>
                <p className="text-xs text-[#6B7280]">
                  Infurnus safety team is actively monitoring your vehicle location.
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
    <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-6 space-y-4">
      <div className="neu-inset-deep inline-flex p-3 rounded-xl text-[#000000]">
        {icon}
      </div>
      <h3 className="font-bold text-base text-[#3D4852]">{title}</h3>
      <p className="text-xs text-[#6B7280] leading-relaxed">{description}</p>
      <button className="neu-btn w-full py-3 rounded-2xl text-xs font-bold text-[#3D4852]">
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
    <div className="neu-inset-deep p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:neu-extruded transition-all">
      <div className="neu-extruded p-2.5 rounded-xl text-[#000000]">
        {icon}
      </div>
      <span className="font-bold text-xs text-[#3D4852]">{title}</span>
    </div>
  );
}