"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  Plus,
  ShieldCheck,
  Smartphone,
  Wallet,
  X,
} from "lucide-react";

// ============================================================
// CHANGED: Transaction type
// ============================================================

type Transaction = {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
  bookingId?: string;
};

// ============================================================
// CHANGED: Payment methods kept as existing UI data
// ============================================================

const paymentMethods = [
  {
    type: "UPI",
    name: "tripti@upi",
    icon: Smartphone,
  },
  {
    type: "Card",
    name: "•••• •••• •••• 4582",
    icon: CreditCard,
  },
];

// ============================================================
// CHANGED: Initial wallet balance
// This replaces the hardcoded ₹1,250.
// ============================================================

const INITIAL_BALANCE = 1250;

// ============================================================
// CHANGED: Initial transactions
// These are used only the first time the wallet is opened.
// After that, localStorage becomes the source of truth.
// ============================================================

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: "demo-ride-1",
    title: "Ride Payment",
    date: "18 Sep 2026 • 6:42 PM",
    amount: 245,
    type: "debit",
  },
  {
    id: "demo-topup-1",
    title: "Wallet Top-up",
    date: "18 Sep 2026 • 10:15 AM",
    amount: 500,
    type: "credit",
  },
  {
    id: "demo-delivery-1",
    title: "Parcel Delivery",
    date: "17 Sep 2026 • 2:28 PM",
    amount: 180,
    type: "debit",
  },
  {
    id: "demo-topup-2",
    title: "Wallet Top-up",
    date: "15 Sep 2026 • 9:30 AM",
    amount: 1000,
    type: "credit",
  },
];

// ============================================================
// CHANGED: Booking type
// Used to read completed provider trips.
// ============================================================

type CompletedBooking = {
  id: string;
  service: string;
  pickup: string;
  destination: string;
  vehicleType: string;
  estimatedFare: number;
  status: string;
  createdAt: string;
  completedAt?: string;
};

// ============================================================
// Helper: Format transaction date
// ============================================================

function formatTransactionDate(
  dateValue: string
) {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

// ============================================================
// Main Wallet Page
// ============================================================

export default function WalletPage() {
  const [showAddMoney, setShowAddMoney] =
    useState(false);

  const [amount, setAmount] =
    useState("");

  // ==========================================================
  // CHANGED: Dynamic balance
  // ==========================================================

  const [balance, setBalance] =
    useState(INITIAL_BALANCE);

  // ==========================================================
  // CHANGED: Dynamic transactions
  // ==========================================================

  const [transactions, setTransactions] =
    useState<Transaction[]>(
      INITIAL_TRANSACTIONS
    );

  // ==========================================================
  // CHANGED: Loading state
  // ==========================================================

  const [loading, setLoading] =
    useState(true);

  // ==========================================================
  // CHANGED:
  // Load wallet data from localStorage
  // ==========================================================

  useEffect(() => {
    const loadWallet = () => {
      try {
        // ----------------------------------------------------
        // 1. Load saved wallet balance
        // ----------------------------------------------------

        const savedBalance =
          localStorage.getItem(
            "infurnusWalletBalance"
          );

        if (savedBalance !== null) {
          const parsedBalance =
            Number(savedBalance);

          if (
            !Number.isNaN(parsedBalance)
          ) {
            setBalance(parsedBalance);
          }
        } else {
          localStorage.setItem(
            "infurnusWalletBalance",
            String(INITIAL_BALANCE)
          );

          setBalance(INITIAL_BALANCE);
        }

        // ----------------------------------------------------
        // 2. Load saved transactions
        // ----------------------------------------------------

        const savedTransactions =
          localStorage.getItem(
            "infurnusWalletTransactions"
          );

        if (savedTransactions) {
          const parsedTransactions =
            JSON.parse(
              savedTransactions
            ) as Transaction[];

          setTransactions(
            parsedTransactions
          );
        } else {
          localStorage.setItem(
            "infurnusWalletTransactions",
            JSON.stringify(
              INITIAL_TRANSACTIONS
            )
          );

          setTransactions(
            INITIAL_TRANSACTIONS
          );
        }

        // ----------------------------------------------------
        // 3. Process completed rides
        // ----------------------------------------------------

        processCompletedBookings();
      } catch (error) {
        console.error(
          "Unable to load wallet:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadWallet();

    // ========================================================
    // CHANGED:
    // Listen for provider trip completion
    // ========================================================

    window.addEventListener(
      "infurnusBookingUpdated",
      loadWallet
    );

    window.addEventListener(
      "storage",
      loadWallet
    );

    return () => {
      window.removeEventListener(
        "infurnusBookingUpdated",
        loadWallet
      );

      window.removeEventListener(
        "storage",
        loadWallet
      );
    };
  }, []);

  // ==========================================================
  // CHANGED:
  // Process completed bookings
  // ==========================================================

  const processCompletedBookings = () => {
    try {
      const completedData =
        localStorage.getItem(
          "providerCompletedTrips"
        );

      if (!completedData) {
        return;
      }

      const completedBookings =
        JSON.parse(
          completedData
        ) as CompletedBooking[];

      const savedTransactions =
        localStorage.getItem(
          "infurnusWalletTransactions"
        );

      const existingTransactions: Transaction[] =
        savedTransactions
          ? JSON.parse(savedTransactions)
          : INITIAL_TRANSACTIONS;

      let currentBalance =
        Number(
          localStorage.getItem(
            "infurnusWalletBalance"
          ) ?? INITIAL_BALANCE
        );

      let updatedTransactions = [
        ...existingTransactions,
      ];

      let hasChanges = false;

      completedBookings.forEach(
        (booking) => {
          // Only completed bookings should become
          // wallet debit transactions.
          if (
            booking.status !== "Completed"
          ) {
            return;
          }

          // --------------------------------------------------
          // IMPORTANT:
          // Prevent the same ride from being charged twice.
          // --------------------------------------------------

          const alreadyCharged =
            updatedTransactions.some(
              (transaction) =>
                transaction.bookingId ===
                booking.id
            );

          if (alreadyCharged) {
            return;
          }

          const transactionDate =
            booking.completedAt ||
            booking.createdAt ||
            new Date().toISOString();

          const newTransaction: Transaction = {
            id: `ride-${booking.id}`,
            title:
              booking.service ===
              "Passenger"
                ? "Ride Payment"
                : `${booking.service} Payment`,
            date:
              formatTransactionDate(
                transactionDate
              ),
            amount:
              booking.estimatedFare,
            type: "debit",
            bookingId: booking.id,
          };

          updatedTransactions = [
            newTransaction,
            ...updatedTransactions,
          ];

          currentBalance =
            Math.max(
              0,
              currentBalance -
                booking.estimatedFare
            );

          hasChanges = true;
        }
      );

      if (hasChanges) {
        localStorage.setItem(
          "infurnusWalletBalance",
          String(currentBalance)
        );

        localStorage.setItem(
          "infurnusWalletTransactions",
          JSON.stringify(
            updatedTransactions
          )
        );

        setBalance(currentBalance);

        setTransactions(
          updatedTransactions
        );
      }
    } catch (error) {
      console.error(
        "Unable to process completed bookings:",
        error
      );
    }
  };

  // ==========================================================
  // CHANGED:
  // Add money to wallet
  // ==========================================================

  const handleAddMoney = () => {
    const numericAmount =
      Number(amount);

    if (
      !amount ||
      Number.isNaN(numericAmount) ||
      numericAmount <= 0
    ) {
      return;
    }

    const now =
      new Date().toISOString();

    const newTransaction: Transaction = {
      id: `topup-${Date.now()}`,
      title: "Wallet Top-up",
      date:
        formatTransactionDate(now),
      amount: numericAmount,
      type: "credit",
    };

    const newBalance =
      balance + numericAmount;

    const updatedTransactions = [
      newTransaction,
      ...transactions,
    ];

    // Save balance
    localStorage.setItem(
      "infurnusWalletBalance",
      String(newBalance)
    );

    // Save transaction
    localStorage.setItem(
      "infurnusWalletTransactions",
      JSON.stringify(
        updatedTransactions
      )
    );

    // Update UI
    setBalance(newBalance);
    setTransactions(
      updatedTransactions
    );

    // Reset modal
    setAmount("");
    setShowAddMoney(false);
  };

  // ==========================================================
  // CHANGED:
  // Quick amount selection
  // ==========================================================

  const handleQuickAmount = (
    value: number
  ) => {
    setAmount(String(value));
    setShowAddMoney(true);
  };

  // ==========================================================
  // Loading screen
  // ==========================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#E0E5EC] p-4 text-[#3D4852]">
        <div className="neu-extruded p-10 rounded-[32px] text-center space-y-4">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#A3B1C6] border-t-[#000000]" />
          <p className="text-sm font-bold text-[#6B7280]">Loading wallet & payment records...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-8 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8">
          <div className="space-y-1">
            <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
              CUSTOMER WALLET & PAYMENTS
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
              Digital Wallet & Balance
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
              Instant top-ups, transaction history, and payment gateway options.
            </p>
          </div>

          <Link
            href="/customer"
            className="neu-btn px-4 py-3 text-xs font-bold flex items-center gap-2 w-fit"
          >
            <ArrowLeft size={16} />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* ====================================================
            CHANGED: Dynamic Wallet Balance
        ==================================================== */}

        <section className="mt-8 overflow-hidden rounded-3xl bg-slate-950 p-6 text-white md:p-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Wallet size={18} />
                Infurnus Wallet
              </div>

              {/* CHANGED */}
              <p className="mt-4 text-4xl font-bold">
                ₹
                {balance.toLocaleString(
                  "en-IN"
                )}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Available balance
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
              <Wallet size={23} />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() =>
                setShowAddMoney(true)
              }
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white hover:bg-blue-700"
            >
              <Plus size={18} />
              Add Money
            </button>

            {/* CHANGED */}
            <button
              onClick={() =>
                document
                  .getElementById(
                    "transactions"
                  )
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-white hover:bg-slate-900"
            >
              Transaction History
            </button>
          </div>
        </section>

        {/* Quick Amount */}
        <section className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
          {[100, 200, 500, 1000, 2000, 5000].map(
            (value) => (
              <button
                key={value}
                onClick={() =>
                  handleQuickAmount(value)
                }
                className="rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
              >
                +₹{value}
              </button>
            )
          )}
        </section>

        {/* Payment Methods */}
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Payment Methods
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your saved payment options
              </p>
            </div>

            <button className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <Plus size={17} />
              Add New
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {paymentMethods.map(
              (method) => {
                const Icon =
                  method.icon;

                return (
                  <div
                    key={method.name}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={20} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">
                        {method.type}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {method.name}
                      </p>
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                      Active
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* ====================================================
            CHANGED: Dynamic Transactions
        ==================================================== */}

        <section
          id="transactions"
          className="mt-10 pb-10"
        >
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Recent Transactions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your latest wallet activity
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {transactions.length === 0 ? (
              <div className="p-10 text-center">
                <Wallet
                  size={28}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-3 font-semibold text-slate-900">
                  No transactions yet
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Your wallet activity will appear here.
                </p>
              </div>
            ) : (
              transactions.map(
                (transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center gap-4 border-b border-slate-100 p-5 last:border-0"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        transaction.type ===
                        "credit"
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {transaction.type ===
                      "credit" ? (
                        <ArrowDownLeft
                          size={20}
                        />
                      ) : (
                        <ArrowUpRight
                          size={20}
                        />
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {transaction.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        {transaction.date}
                      </p>

                      {transaction.bookingId && (
                        <p className="mt-1 text-xs text-slate-400">
                          Booking ID:{" "}
                          {transaction.bookingId}
                        </p>
                      )}
                    </div>

                    <span
                      className={`font-bold ${
                        transaction.type ===
                        "credit"
                          ? "text-green-600"
                          : "text-slate-900"
                      }`}
                    >
                      {transaction.type ===
                      "credit"
                        ? "+"
                        : "-"}
                      ₹
                      {transaction.amount.toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </div>
                )
              )
            )}
          </div>
        </section>

        {/* Security */}
        <div className="mb-10 flex items-start gap-4 rounded-2xl border border-green-100 bg-green-50 p-5">
          <ShieldCheck
            size={22}
            className="mt-0.5 shrink-0 text-green-600"
          />

          <div>
            <h3 className="font-semibold text-slate-900">
              Secure Payments
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Your payment information is securely handled. Never
              share your OTP, PIN or banking password with anyone.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          CHANGED: Add Money Modal
      ====================================================== */}

      {showAddMoney && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Add Money
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Add funds to your Infurnus wallet.
                </p>
              </div>

              <button
                onClick={() => {
                  setShowAddMoney(false);
                  setAmount("");
                }}
                className="rounded-full p-2 hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <label className="mt-7 block text-sm font-semibold text-slate-700">
              Amount
            </label>

            <div className="mt-2 flex items-center rounded-xl border border-slate-200 px-4">
              <span className="text-lg font-semibold text-slate-500">
                ₹
              </span>

              <input
                value={amount}
                onChange={(e) =>
                  setAmount(
                    e.target.value
                  )
                }
                type="number"
                min="1"
                placeholder="Enter amount"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[100, 500, 1000].map(
                (value) => (
                  <button
                    key={value}
                    onClick={() =>
                      setAmount(
                        String(value)
                      )
                    }
                    className="rounded-lg border border-slate-200 py-2 text-sm font-semibold hover:border-blue-400 hover:bg-blue-50"
                  >
                    ₹{value}
                  </button>
                )
              )}
            </div>

            {/* CHANGED:
                This now actually adds money.
                Previously it only closed the modal.
            */}

            <button
              onClick={handleAddMoney}
              disabled={
                !amount ||
                Number(amount) <= 0
              }
              className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700 disabled:bg-slate-300"
            >
              Add ₹
              {amount || "0"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}