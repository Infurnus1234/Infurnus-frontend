"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowDownToLine,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  IndianRupee,
  TrendingUp,
  Wallet,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    date: "18 Sep 2026",
    time: "03:45 PM",
    type: "Ride Earnings",
    description: "HSR Layout → Koramangala",
    amount: "+₹285",
    status: "Completed",
  },
  {
    id: 2,
    date: "18 Sep 2026",
    time: "02:20 PM",
    type: "Ride Earnings",
    description: "Indiranagar → MG Road",
    amount: "+₹210",
    status: "Completed",
  },
  {
    id: 3,
    date: "18 Sep 2026",
    time: "12:15 PM",
    type: "Ride Earnings",
    description: "BTM Layout → HSR Layout",
    amount: "+₹165",
    status: "Completed",
  },
  {
    id: 4,
    date: "17 Sep 2026",
    time: "06:30 PM",
    type: "Ride Earnings",
    description: "Koramangala → Whitefield",
    amount: "+₹340",
    status: "Completed",
  },
  {
    id: 5,
    date: "16 Sep 2026",
    time: "07:10 PM",
    type: "Payout",
    description: "Bank Account ****4521",
    amount: "-₹2,500",
    status: "Paid",
  },
];

export default function DriverEarningsPage() {
  return (
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
              Financial Terminal
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Earnings & Payout Vault
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-2xl">
              Track real-time trip revenues, automated bank payouts, and daily driver incentive statements.
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

        {/* Top Earnings Metrics Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <EarningCard
            icon={<IndianRupee size={20} />}
            title="Today's Earnings"
            amount="₹1,850"
            note="+12.5% vs yesterday"
          />

          <EarningCard
            icon={<TrendingUp size={20} />}
            title="This Week"
            amount="₹9,420"
            note="58 completed trips"
          />

          <EarningCard
            icon={<CalendarDays size={20} />}
            title="This Month"
            amount="₹32,850"
            note="214 completed trips"
          />

          <EarningCard
            icon={<Wallet size={20} />}
            title="Available Balance"
            amount="₹4,250"
            note="Ready for payout"
          />
        </section>

        {/* Main Dashboard Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column: Transaction History */}
          <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6 lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000] uppercase">
                  Statement History
                </span>
                <h2 className="font-display text-xl font-bold text-[#3D4852] mt-2">
                  Transaction Audit Log
                </h2>
              </div>

              <button className="neu-btn px-4 py-2 rounded-xl text-xs font-bold text-[#3D4852] inline-flex items-center gap-2 self-start sm:self-auto">
                <CalendarDays size={15} />
                <span>This Month</span>
              </button>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="neu-inset-deep rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="neu-extruded p-3 rounded-xl text-[#000000]">
                      {transaction.type === "Payout" ? (
                        <ArrowDownToLine size={20} />
                      ) : (
                        <ArrowUpRight size={20} />
                      )}
                    </div>

                    <div>
                      <h3 className="font-bold text-sm text-[#3D4852]">
                        {transaction.type}
                      </h3>
                      <p className="text-xs text-[#6B7280] mt-0.5">
                        {transaction.description}
                      </p>
                      <p className="text-[11px] font-mono text-[#6B7280] mt-1">
                        {transaction.date} • {transaction.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                    <span className="font-mono text-base font-extrabold text-[#000000]">
                      {transaction.amount}
                    </span>

                    <span className="neu-inset-sm px-3 py-0.5 rounded-full text-[10px] font-bold text-[#000000]">
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right Sidebar: Withdrawals & Bank Accounts */}
          <aside className="space-y-8">
            {/* Withdrawal Card */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000] uppercase">
                Payout Vault
              </span>
              <div>
                <p className="text-xs text-[#6B7280] font-bold">Withdrawal Balance</p>
                <p className="text-3xl font-extrabold text-[#3D4852] mt-1">₹4,250</p>
              </div>
              <p className="text-[11px] text-[#6B7280]">Minimum settlement threshold: ₹500</p>

              <button className="neu-btn neu-btn-primary w-full py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2">
                <ArrowDownToLine size={18} />
                <span>Withdraw to Bank Account</span>
              </button>
            </section>

            {/* Payout Account */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-base text-[#3D4852]">Linked Payout Account</h2>
                <button className="neu-btn px-3 py-1 rounded-lg text-xs font-bold text-[#3D4852]">Edit</button>
              </div>

              <div className="neu-inset-deep p-5 rounded-2xl space-y-2">
                <p className="font-extrabold text-sm text-[#3D4852]">HDFC Bank Ltd.</p>
                <p className="text-xs text-[#6B7280]">Primary Savings Account</p>
                <p className="font-mono text-xs font-bold text-[#000000] tracking-wider pt-2">**** **** 4521</p>
                <span className="neu-inset-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#000000] inline-block mt-2">
                  KYC Verified
                </span>
              </div>
            </section>

            {/* Weekly Revenue Summary */}
            <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 space-y-4">
              <h2 className="font-bold text-base text-[#3D4852]">Weekly Revenue Summary</h2>

              <div className="neu-inset-deep p-5 rounded-2xl space-y-3">
                <Summary label="Trip Fares" value="₹8,650" />
                <Summary label="Driver Incentives" value="₹770" />
                <Summary label="Platform Commission" value="-₹1,120" />

                <div className="pt-3 border-t border-black/5 flex items-center justify-between font-extrabold text-sm text-[#3D4852]">
                  <span>Net Payout</span>
                  <span>₹8,300</span>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function EarningCard({
  icon,
  title,
  amount,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  amount: string;
  note: string;
}) {
  return (
    <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
          {title}
        </p>
        <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-extrabold text-[#3D4852]">{amount}</p>
      <span className="neu-inset-sm px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#000000] inline-block">
        {note}
      </span>
    </div>
  );
}

function Summary({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-xs font-semibold text-[#6B7280]">
      <span>{label}</span>
      <span className="text-[#3D4852] font-bold">{value}</span>
    </div>
  );
}