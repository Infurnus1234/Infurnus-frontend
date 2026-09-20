"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  CheckCheck,
  ChevronRight,
  Gift,
  Info,
  MapPin,
  ShieldCheck,
  Tag,
  X,
} from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    type: "ride",
    title: "Ride confirmed",
    message: "Your cab ride from HSR Layout to Koramangala has been confirmed.",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "driver",
    title: "Driver is on the way",
    message: "Aarav Singh is heading towards your pickup location.",
    time: "18 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "offer",
    title: "Special offer for you",
    message: "Get ₹100 off on your next eligible Infurnus ride.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 4,
    type: "delivery",
    title: "Delivery completed",
    message: "Your parcel from Indiranagar to Whitefield was delivered successfully.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 5,
    type: "security",
    title: "Account security",
    message: "Your account security settings were successfully updated.",
    time: "2 days ago",
    unread: false,
  },
];

function NotificationIcon({ type }: { type: string }) {
  if (type === "ride") {
    return <MapPin size={20} />;
  }

  if (type === "driver") {
    return <Bell size={20} />;
  }

  if (type === "offer") {
    return <Gift size={20} />;
  }

  if (type === "delivery") {
    return <CheckCheck size={20} />;
  }

  return <ShieldCheck size={20} />;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const removeNotification = (id: number) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

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
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Updates
            </span>

            <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Notifications
            </h1>

            <p className="mt-2 text-slate-500">
              Stay updated about your rides, deliveries and account.
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              <CheckCheck size={18} />
              Mark all as read
            </button>
          )}

        </div>

        {/* Summary */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">
              Total notifications
            </p>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              {notifications.length}
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm text-blue-600">
              Unread
            </p>

            <p className="mt-2 text-2xl font-bold text-blue-700">
              {unreadCount}
            </p>
          </div>

        </div>

        {/* Notifications */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          {notifications.length === 0 ? (
            <div className="px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <Bell size={28} className="text-slate-400" />
              </div>

              <h2 className="mt-5 font-bold text-slate-900">
                You're all caught up
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                New Infurnus updates will appear here.
              </p>

            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`relative flex gap-4 p-5 transition hover:bg-slate-50 ${
                  notification.unread
                    ? "bg-blue-50/40"
                    : "bg-white"
                }`}
              >

                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    notification.type === "offer"
                      ? "bg-yellow-50 text-yellow-600"
                      : notification.type === "security"
                        ? "bg-green-50 text-green-600"
                        : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <NotificationIcon type={notification.type} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 pr-8">

                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">
                      {notification.title}
                    </h3>

                    {notification.unread && (
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                    )}
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {notification.message}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {notification.time}
                  </p>

                </div>

                {/* Delete */}
                <button
                  onClick={() =>
                    removeNotification(notification.id)
                  }
                  className="absolute right-5 top-5 rounded-full p-1.5 text-slate-300 hover:bg-slate-100 hover:text-slate-600"
                >
                  <X size={16} />
                </button>

              </div>
            ))
          )}

        </section>

        {/* Notification preferences */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Info size={20} />
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-slate-900">
                Notification Preferences
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Manage which updates you'd like to receive from Infurnus.
              </p>
            </div>

            <ChevronRight
              size={20}
              className="text-slate-300"
            />
          </div>

        </section>

      </div>
    </main>
  );
}