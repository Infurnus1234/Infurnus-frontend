"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowDownToLine,
  ArrowUpRight,
  CircleDollarSign,
  Wallet,
  CalendarDays,
  TrendingUp,
  CreditCard,
} from "lucide-react";
import { useState, useEffect } from "react";

// CHANGED: Added proper type for completed provider trips
type CompletedTrip = {
  id: string;
  service: string;
  customer?: string;
  pickup?: string;
  destination?: string;
  vehicleType?: string;
  amount?: number;
  estimatedFare?: number;
  date?: string;
  status?: string;
  distance?: string;
  estimatedTime?: string;
};

type Transaction = {
  id: string;
  date: string;
  description: string;
  tripId: string;
  amount: number;
  type: "credit" | "debit";
};

// CHANGED: Demo transactions are kept only as historical account activity.
// New completed trips are added dynamically.
const baseTransactions: Transaction[] = [
  {
    id: "TXN1001",
    date: "20 Sep 2026",
    description: "Passenger Trip",
    tripId: "INF1001",
    amount: 250,
    type: "credit",
  },
  {
    id: "TXN1002",
    date: "20 Sep 2026",
    description: "Logistics Trip",
    tripId: "INF1002",
    amount: 850,
    type: "credit",
  },
  {
    id: "TXN1003",
    date: "19 Sep 2026",
    description: "Premium Trip",
    tripId: "INF1003",
    amount: 650,
    type: "credit",
  },
  {
    id: "TXN1004",
    date: "19 Sep 2026",
    description: "Platform Fee",
    tripId: "INF1003",
    amount: -65,
    type: "debit",
  },
  {
    id: "TXN1005",
    date: "18 Sep 2026",
    description: "Payout to Bank",
    tripId: "PAYOUT01",
    amount: -5000,
    type: "debit",
  },
];

export default function ProviderEarningsPage() {
  const [completedTrips, setCompletedTrips] = useState<CompletedTrip[]>([]);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState("");
  const [withdrawMessage, setWithdrawMessage] = useState("");

  // CHANGED: Load completed trips from the same storage used
  // by Provider Active Trip page.
  const loadCompletedTrips = () => {
    try {
      const storedTrips = JSON.parse(
        localStorage.getItem("providerCompletedTrips") || "[]"
      );

      const validTrips = Array.isArray(storedTrips)
        ? storedTrips.filter(
            (trip: CompletedTrip) => trip?.status === "Completed"
          )
        : [];

      setCompletedTrips(validTrips);
    } catch (error) {
      console.error("Failed to load provider completed trips:", error);
      setCompletedTrips([]);
    }
  };

  useEffect(() => {
    loadCompletedTrips();

    // CHANGED: Refresh earnings when another provider/customer page
    // updates the booking flow.
    const handleStorage = () => {
      loadCompletedTrips();
    };

    const handleBookingUpdate = () => {
      loadCompletedTrips();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(
      "infurnusBookingUpdated",
      handleBookingUpdate
    );

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(
        "infurnusBookingUpdated",
        handleBookingUpdate
      );
    };
  }, []);

  // CHANGED: Supports both `amount` and `estimatedFare`
  // so the earnings page stays compatible with completed bookings.
  const getTripAmount = (trip: CompletedTrip) => {
    return Number(trip.amount ?? trip.estimatedFare ?? 0);
  };

  // CHANGED: Real completed-trip earnings
  const completedTripEarnings = completedTrips.reduce(
    (total, trip) => total + getTripAmount(trip),
    0
  );

  // CHANGED:
  // These are the existing demo account figures.
  // Real completed trips are added on top of them.
  const DEMO_AVAILABLE_BALANCE = 6250;
  const DEMO_TODAY_EARNINGS = 2450;
  const DEMO_WEEK_EARNINGS = 9420;
  const DEMO_MONTH_EARNINGS = 32850;
  const DEMO_TOTAL_EARNINGS = 284650;

  const availableBalance =
    DEMO_AVAILABLE_BALANCE + completedTripEarnings;

  // CHANGED: Convert completed trips into transaction records.
  const completedTripTransactions: Transaction[] = completedTrips.map(
    (trip) => ({
      id: `TRIP-${trip.id}`,
      date: trip.date
        ? new Date(trip.date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "Today",
      description: `${trip.service || "Trip"} Trip`,
      tripId: trip.id,
      amount: getTripAmount(trip),
      type: "credit",
    })
  );

  // CHANGED: Real completed trips appear first.
  const allTransactions = [
    ...completedTripTransactions,
    ...baseTransactions,
  ];

  // CHANGED: Calculate earnings for today from actual completed trips.
  const today = new Date();

  const todayCompletedTripEarnings = completedTrips
    .filter((trip) => {
      if (!trip.date) return false;

      const tripDate = new Date(trip.date);

      return (
        tripDate.getDate() === today.getDate() &&
        tripDate.getMonth() === today.getMonth() &&
        tripDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((total, trip) => total + getTripAmount(trip), 0);

  // CHANGED: Calculate current week earnings from actual completed trips.
  const startOfWeek = new Date(today);
  const day = startOfWeek.getDay();

  const diffToMonday = day === 0 ? 6 : day - 1;

  startOfWeek.setDate(today.getDate() - diffToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const weekCompletedTripEarnings = completedTrips
    .filter((trip) => {
      if (!trip.date) return false;

      const tripDate = new Date(trip.date);

      return tripDate >= startOfWeek && tripDate <= today;
    })
    .reduce((total, trip) => total + getTripAmount(trip), 0);

  // CHANGED: Calculate current month earnings from actual completed trips.
  const monthCompletedTripEarnings = completedTrips
    .filter((trip) => {
      if (!trip.date) return false;

      const tripDate = new Date(trip.date);

      return (
        tripDate.getMonth() === today.getMonth() &&
        tripDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((total, trip) => total + getTripAmount(trip), 0);

  const handleWithdraw = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const withdrawalAmount = Number(amount);

    if (!withdrawalAmount || withdrawalAmount <= 0) {
      setWithdrawMessage("Please enter a valid amount.");
      return;
    }

    if (withdrawalAmount > availableBalance) {
      setWithdrawMessage(
        "Withdrawal amount exceeds your available balance."
      );
      return;
    }

    setWithdrawMessage(
      `Withdrawal request of ₹${withdrawalAmount.toLocaleString(
        "en-IN"
      )} submitted successfully.`
    );

    setAmount("");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/provider"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            <ArrowLeft size={18} />
            Dashboard
          </Link>

          <Link
            href="/"
            className="ml-auto text-xl font-extrabold tracking-tight sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div>
          <p className="text-sm font-semibold text-blue-600">
            PROVIDER
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            Earnings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Track your earnings, payouts and transactions.
          </p>
        </div>

        {/* BALANCE */}
        <section className="mt-6 rounded-2xl bg-slate-950 p-6 text-white sm:p-7">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-300">
                Available Balance
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                ₹{availableBalance.toLocaleString("en-IN")}
              </h2>

              <p className="mt-2 text-xs text-slate-400">
                Available for withdrawal
              </p>
            </div>

            <button
              onClick={() => {
                setWithdrawMessage("");
                setShowWithdraw(true);
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
            >
              <ArrowUpRight size={18} />
              Withdraw
            </button>
          </div>
        </section>

        {/* CHANGED: Dynamic completed trip notice */}
        {completedTrips.length > 0 && (
          <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-semibold text-green-800">
              New completed trip earnings added
            </p>

            <p className="mt-1 text-sm text-green-700">
              {completedTrips.length} completed trip
              {completedTrips.length > 1 ? "s" : ""} • +₹
              {completedTripEarnings.toLocaleString("en-IN")}
            </p>
          </div>
        )}

        {/* STATS */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            title="Today"
            value={`₹${(
              DEMO_TODAY_EARNINGS + todayCompletedTripEarnings
            ).toLocaleString("en-IN")}`}
            note={
              todayCompletedTripEarnings > 0
                ? "Includes completed trips"
                : "+12% from yesterday"
            }
            icon={CircleDollarSign}
          />

          <Stat
            title="This Week"
            value={`₹${(
              DEMO_WEEK_EARNINGS + weekCompletedTripEarnings
            ).toLocaleString("en-IN")}`}
            note={
              weekCompletedTripEarnings > 0
                ? "Includes completed trips"
                : "Completed trip earnings included"
            }
            icon={CalendarDays}
          />

          <Stat
            title="This Month"
            value={`₹${(
              DEMO_MONTH_EARNINGS + monthCompletedTripEarnings
            ).toLocaleString("en-IN")}`}
            note="Current month earnings"
            icon={TrendingUp}
          />

          <Stat
            title="Total Earnings"
            value={`₹${(
              DEMO_TOTAL_EARNINGS + completedTripEarnings
            ).toLocaleString("en-IN")}`}
            note="Since joining"
            icon={Wallet}
          />
        </section>

        {/* WEEKLY SUMMARY */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-950">
                Weekly Summary
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your earnings for the current week
              </p>
            </div>

            <TrendingUp
              size={21}
              className="text-green-600"
            />
          </div>

          <div className="mt-6 grid grid-cols-7 gap-2 sm:gap-4">
            {[
              ["Mon", "₹1.2K", 55],
              ["Tue", "₹1.6K", 70],
              ["Wed", "₹1.1K", 48],
              ["Thu", "₹1.8K", 78],
              ["Fri", "₹1.4K", 62],
              ["Sat", "₹2.1K", 92],
              [
                "Sun",
                completedTripEarnings > 0
                  ? `₹${completedTripEarnings.toLocaleString("en-IN")}`
                  : "₹250",
                completedTripEarnings > 0 ? 40 : 20,
              ],
            ].map(([day, value, height]) => (
              <div
                key={day as string}
                className="flex flex-col items-center"
              >
                <div className="flex h-32 w-full items-end justify-center">
                  <div
                    className="w-full max-w-8 rounded-t-lg bg-blue-500"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                </div>

                <p className="mt-2 text-xs font-medium text-slate-500">
                  {day}
                </p>

                <p className="mt-1 text-[10px] font-semibold text-slate-700">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BANK ACCOUNT */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CreditCard size={21} />
              </div>

              <div>
                <p className="font-semibold text-slate-950">
                  HDFC Bank
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Account ending •••• 4521
                </p>
              </div>
            </div>

            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              Change Account
            </button>
          </div>
        </section>

        {/* TRANSACTIONS */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-950">
                Recent Transactions
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest account activity
              </p>
            </div>

            <Wallet
              size={21}
              className="text-slate-400"
            />
          </div>

          <div className="mt-5 divide-y divide-slate-100">
            {allTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      transaction.type === "credit"
                        ? "bg-green-50 text-green-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {transaction.type === "credit" ? (
                      <ArrowDownToLine size={18} />
                    ) : (
                      <ArrowUpRight size={18} />
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {transaction.description}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {transaction.tripId} • {transaction.date}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-sm font-bold ${
                    transaction.type === "credit"
                      ? "text-green-600"
                      : "text-slate-700"
                  }`}
                >
                  {transaction.type === "credit" ? "+" : "-"}₹
                  {Math.abs(
                    Number(transaction.amount)
                  ).toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>

          {allTransactions.length === 0 && (
            <div className="py-10 text-center text-sm text-slate-500">
              No transactions yet.
            </div>
          )}
        </section>
      </div>

      {/* WITHDRAW MODAL */}
      {showWithdraw && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6">
            <h2 className="text-xl font-bold text-slate-950">
              Withdraw Money
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Available balance: ₹
              {availableBalance.toLocaleString("en-IN")}
            </p>

            <form
              onSubmit={handleWithdraw}
              className="mt-5"
            >
              <label className="text-sm font-medium text-slate-700">
                Amount
              </label>

              <div className="relative mt-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                  ₹
                </span>

                <input
                  type="number"
                  min="1"
                  max={availableBalance}
                  required
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setWithdrawMessage("");
                  }}
                  placeholder="Enter amount"
                  className="w-full rounded-xl border border-slate-200 py-3 pl-9 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {withdrawMessage && (
                <div className="mt-3 rounded-xl bg-blue-50 p-3 text-sm text-blue-700">
                  {withdrawMessage}
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowWithdraw(false);
                    setAmount("");
                    setWithdrawMessage("");
                  }}
                  className="flex-1 rounded-xl border border-slate-200 py-3 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Request Withdrawal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function Stat({
  title,
  value,
  note,
  icon: Icon,
}: {
  title: string;
  value: string;
  note: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={18} />
        </div>
      </div>

      <p className="mt-3 text-2xl font-bold text-slate-950">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {note}
      </p>
    </div>
  );
}