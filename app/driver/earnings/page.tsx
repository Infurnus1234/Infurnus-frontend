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

          <div className="ml-auto">
            <span className="text-sm font-semibold text-slate-600">
              Earnings & Payouts
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="mb-6">
          <p className="text-sm text-slate-500">Driver account</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            Earnings & Payouts
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track your earnings, payouts and ride income.
          </p>
        </div>

        {/* Earnings Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <EarningCard
            icon={<IndianRupee size={21} />}
            title="Today's Earnings"
            amount="₹1,850"
            note="+12.5% from yesterday"
          />

          <EarningCard
            icon={<TrendingUp size={21} />}
            title="This Week"
            amount="₹9,420"
            note="58 completed rides"
          />

          <EarningCard
            icon={<CalendarDays size={21} />}
            title="This Month"
            amount="₹32,850"
            note="214 completed rides"
          />

          <EarningCard
            icon={<Wallet size={21} />}
            title="Available Balance"
            amount="₹4,250"
            note="Ready for payout"
          />
        </section>

        {/* Main */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Transactions */}
          <section className="rounded-2xl bg-white shadow-sm lg:col-span-2">
            <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Earnings History
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your recent transactions
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <CalendarDays size={16} />
                This Month
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        transaction.type === "Payout"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {transaction.type === "Payout" ? (
                        <ArrowDownToLine size={20} />
                      ) : (
                        <ArrowUpRight size={20} />
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {transaction.type}
                      </p>

                      <p className="mt-0.5 text-sm text-slate-500">
                        {transaction.description}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {transaction.date} • {transaction.time}
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <p
                      className={`font-bold ${
                        transaction.amount.startsWith("+")
                          ? "text-green-600"
                          : "text-slate-900"
                      }`}
                    >
                      {transaction.amount}
                    </p>

                    <span className="text-xs text-slate-500">
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 p-4 text-center">
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                View All Transactions
              </button>
            </div>
          </section>

          {/* Payout */}
          <aside className="space-y-6">
            <section className="rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm text-slate-400">Available for payout</p>

              <div className="mt-2 flex items-center gap-1">
                <IndianRupee size={23} />
                <span className="text-3xl font-bold">4,250</span>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Minimum payout amount: ₹500
              </p>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-semibold text-slate-950 hover:bg-slate-100">
                <ArrowDownToLine size={18} />
                Withdraw Earnings
              </button>
            </section>

            {/* Bank Account */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-slate-950">
                  Payout Account
                </h2>

                <button className="text-sm font-semibold text-blue-600">
                  Edit
                </button>
              </div>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  HDFC Bank
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Savings Account
                </p>

                <p className="mt-3 font-mono text-sm tracking-wider text-slate-700">
                  **** **** 4521
                </p>

                <span className="mt-3 inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                  Verified
                </span>
              </div>
            </section>

            {/* Weekly Summary */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-bold text-slate-950">
                Weekly Summary
              </h2>

              <div className="mt-5 space-y-4">
                <Summary
                  label="Ride Earnings"
                  value="₹8,650"
                />

                <Summary
                  label="Incentives"
                  value="₹770"
                />

                <Summary
                  label="Platform Fee"
                  value="-₹1,120"
                />

                <div className="border-t border-slate-100 pt-4">
                  <Summary
                    label="Net Earnings"
                    value="₹8,300"
                    bold
                  />
                </div>
              </div>
            </section>
          </aside>
        </div>

        {/* Info */}
        <section className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <div className="rounded-xl bg-white p-2 text-blue-600">
            <Wallet size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">
              About your payouts
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-800">
              Earnings are transferred to your verified bank account after
              successful payout processing. Payout timing may vary depending
              on your bank.
            </p>
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
            <ChevronRight size={16} />
          </Link>
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
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="mt-4 text-sm text-slate-500">{title}</p>

      <p className="mt-1 text-2xl font-bold text-slate-950">
        {amount}
      </p>

      <p className="mt-1 text-xs text-slate-400">{note}</p>
    </div>
  );
}

function Summary({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`text-sm ${
          bold
            ? "font-semibold text-slate-900"
            : "text-slate-500"
        }`}
      >
        {label}
      </span>

      <span
        className={`${
          bold
            ? "font-bold text-slate-950"
            : "font-semibold text-slate-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
}