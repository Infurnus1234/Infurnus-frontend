"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  HelpCircle,
  Search,
  MessageSquare,
  PhoneCall,
  Mail,
  ChevronDown,
  ChevronUp,
  FileQuestion,
  LifeBuoy,
  Send,
  CheckCircle,
} from "lucide-react";

export default function GeneralSupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const faqs = [
    {
      q: "How do I book a vehicle on Infurnus?",
      a: "Simply log in to your Infurnus account, select your preferred service type (City Ride, Logistics Cargo, Hourly Rental, or Emergency), enter your pickup & drop locations, choose a vehicle class, and confirm payment.",
    },
    {
      q: "What payment methods are supported?",
      a: "Infurnus supports UPI (Google Pay, PhonePe, Paytm), Credit & Debit cards, Net banking, Infurnus Wallet credits, and Cash on delivery for eligible routes.",
    },
    {
      q: "How does live tracking work?",
      a: "Once your booking is accepted by a driver or fleet partner, you receive a real-time GPS tracking link via SMS and in-app dashboard showing driver ETA and current route.",
    },
    {
      q: "How do I register as a driver or fleet owner?",
      a: "Click on 'Partner with Us' or visit /provider/register. Select your partner category, enter your vehicle/license credentials, and upload your documents for instant verification.",
    },
    {
      q: "What is the cancellation policy?",
      a: "Free cancellation is available up to 5 minutes after booking confirmation. Cancellations after driver arrival may incur a minor nominal waiting charge.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E0E5EC] flex flex-col justify-between">
      <main className="py-12 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
        <div className="mx-auto max-w-5xl space-y-12">
          
          {/* Header & Search */}
          <div className="neu-extruded rounded-[40px] bg-[#E0E5EC] p-8 sm:p-14 text-center space-y-6">
            <span className="inline-flex items-center gap-2 neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
              <LifeBuoy size={14} />
              Infurnus Help & Knowledge Base
            </span>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#3D4852]">
              How Can We Help You Today?
            </h1>

            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help topics, lost items, payment issues..."
                className="neu-input w-full pl-12 pr-4 py-4 rounded-2xl text-sm text-[#3D4852] outline-none placeholder:text-[#9CA3AF]"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
              <div className="neu-inset-deep p-3 rounded-2xl text-[#000000] w-fit">
                <PhoneCall size={24} />
              </div>
              <h3 className="font-bold text-[#3D4852]">Customer Helpline</h3>
              <p className="text-xs text-[#6B7280]">24/7 toll-free support line for urgent trip assistance.</p>
              <p className="font-extrabold text-[#000000] text-sm pt-2">1800-INFURNUS-HELP</p>
            </div>

            <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
              <div className="neu-inset-deep p-3 rounded-2xl text-[#000000] w-fit">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-[#3D4852]">Email Support</h3>
              <p className="text-xs text-[#6B7280]">Get detailed responses within 2 hours for billing or feedback.</p>
              <p className="font-extrabold text-[#000000] text-sm pt-2">support@infurnus.com</p>
            </div>

            <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
              <div className="neu-inset-deep p-3 rounded-2xl text-[#000000] w-fit">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-bold text-[#3D4852]">Live In-App Chat</h3>
              <p className="text-xs text-[#6B7280]">Chat with our AI support bot or live agent directly.</p>
              <Link href="/customer/support" className="inline-block font-extrabold text-[#000000] text-sm pt-2 hover:underline">
                Start Live Chat →
              </Link>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <FileQuestion size={24} />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#3D4852]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="neu-inset-deep rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 flex items-center justify-between font-bold text-sm text-[#3D4852]"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp size={18} className="text-[#000000]" /> : <ChevronDown size={18} className="text-[#6B7280]" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-[#6B7280] leading-relaxed border-t border-black/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ticket Submission Form */}
          <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                <HelpCircle size={24} />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#3D4852]">Submit a Support Ticket</h2>
            </div>

            {!ticketSubmitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setTicketSubmitted(true); }} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      className="neu-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      className="neu-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                    Issue Category
                  </label>
                  <select className="neu-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none bg-[#E0E5EC]">
                    <option>Trip & Fare Query</option>
                    <option>Payment & Refund</option>
                    <option>Lost Property Item</option>
                    <option>Driver Conduct Complaint</option>
                    <option>Account & App Access</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                    Message / Issue Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your issue with booking ID or transaction reference..."
                    className="neu-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="neu-btn neu-btn-primary px-8 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Submit Ticket</span>
                </button>
              </form>
            ) : (
              <div className="neu-inset-deep rounded-2xl p-6 text-center space-y-3">
                <CheckCircle size={36} className="text-[#000000] mx-auto" />
                <h3 className="font-bold text-[#3D4852]">Ticket Created Successfully</h3>
                <p className="text-xs text-[#6B7280]">Ticket ID #INF-{Math.floor(100000 + Math.random() * 900000)}. Our support team will respond to your registered email shortly.</p>
                <button
                  onClick={() => setTicketSubmitted(false)}
                  className="neu-btn px-4 py-2 text-xs font-bold mt-2"
                >
                  Submit Another Ticket
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
