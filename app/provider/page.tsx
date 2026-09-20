"use client";

import Link from "next/link";
import {
  Bell,
  Car,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  MapPin,
  Menu,
  Navigation,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type ProviderType = "driver" | "owner" | "driver-owner";

type Booking = {
  id: string;
  customer: string;
  service: string;
  pickup: string;
  destination: string;
  vehicleType: string;
  vehicleId: string;
  estimatedFare: number;
  distance: string;
  estimatedTime: string;
  rideType?: "now" | "schedule";
  scheduledDate?: string | null;
  scheduledTime?: string | null;
  status: string;
  createdAt: string;
  acceptedAt?: string;
  declinedAt?: string;
  completedAt?: string;
  provider?: string;

  // CHANGED: Actual driver and vehicle assigned to the booking
  driverId?: number | null;
  driverName?: string;
  assignedVehicleId?: number | null;
  vehicleNumber?: string;
};

// CHANGED: Driver data used when assigning a booking
type ProviderDriver = {
  id: number;
  name: string;
  phone: string;
  vehicle: string;
  vehicleNumber: string;
  vehicleId?: number | null;
  status: "Online" | "On Trip" | "Offline";
  location: string;
  earnings: string;
  rating: string;
};

// CHANGED: Vehicle data used when assigning a booking
type ProviderVehicle = {
  id: number;
  model: string;
  number: string;
  category:
    | "Passenger"
    | "Logistics"
    | "Service Vehicle"
    | "Premium Vehicle";
  fuel: string;
  driver: string;
  status: "Active" | "Offline";
  location: string;
};

export default function ProviderDashboard() {
  // Demo role.
  // Later this will come from the logged-in provider account.
  const [providerType] = useState<ProviderType>("driver-owner");

  const isDriver =
    providerType === "driver" || providerType === "driver-owner";

  const isOwner =
    providerType === "owner" || providerType === "driver-owner";

  const [online, setOnline] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // =========================================================
  // NEW: CUSTOMER BOOKING
  // Reads booking created from /customer/book
  // =========================================================
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const loadBooking = () => {
      const savedBooking = localStorage.getItem(
        "infurnusCurrentBooking"
      );

      if (!savedBooking) {
        setCurrentBooking(null);
        return;
      }

      try {
        const booking = JSON.parse(savedBooking);
        setCurrentBooking(booking);
      } catch (error) {
        console.error(
          "Failed to read customer booking:",
          error
        );
        setCurrentBooking(null);
      }
    };

    loadBooking();

    window.addEventListener("storage", loadBooking);
    window.addEventListener(
      "infurnusBookingUpdated",
      loadBooking
    );

    return () => {
      window.removeEventListener("storage", loadBooking);
      window.removeEventListener(
        "infurnusBookingUpdated",
        loadBooking
      );
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <button className="relative rounded-xl p-2 text-slate-600 hover:bg-slate-100">
              <Bell size={20} />

              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                VR
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Vikram Rao
                </p>

                <p className="text-xs text-slate-500">
                  Driver + Fleet Owner
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 text-slate-700 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white p-4 md:hidden">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                VR
              </div>

              <div>
                <p className="font-semibold text-slate-950">
                  Vikram Rao
                </p>

                <p className="text-xs text-slate-500">
                  Driver + Fleet Owner
                </p>
              </div>
            </div>

            <div className="grid gap-2">
              <MobileNavLink
                href="/provider"
                label="Dashboard"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="/provider/trips"
                label="My Trips"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="/provider/earnings"
                label="Earnings"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="/provider/vehicles"
                label="Vehicles"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="/provider/drivers"
                label="Drivers"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="/provider/documents"
                label="Documents & KYC"
                onClick={() => setMenuOpen(false)}
              />

              <MobileNavLink
                href="/provider/settings"
                label="Settings"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* DESKTOP PROVIDER NAVIGATION */}
        <nav className="mb-6 hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm md:block">
          <div className="flex gap-2 overflow-x-auto">
            <ProviderNavLink
              href="/provider"
              icon={Navigation}
              label="Dashboard"
              active
            />

            <ProviderNavLink
              href="/provider/trips"
              icon={Navigation}
              label="Trips"
            />

            <ProviderNavLink
              href="/provider/earnings"
              icon={Wallet}
              label="Earnings"
            />

            <ProviderNavLink
              href="/provider/vehicles"
              icon={Car}
              label="Vehicles"
            />

            <ProviderNavLink
              href="/provider/drivers"
              icon={Users}
              label="Drivers"
            />

            <ProviderNavLink
              href="/provider/documents"
              icon={FileText}
              label="Documents"
            />

            <ProviderNavLink
              href="/provider/settings"
              icon={Settings}
              label="Settings"
            />
          </div>
        </nav>

        {/* WELCOME */}
        <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-500">Good evening,</p>

            <h1 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
              Vikram Rao 👋
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your driving and fleet activities from one place.
            </p>
          </div>

          {/* ONLINE STATUS */}
          {isDriver && (
            <button
              onClick={() => setOnline(!online)}
              className={`flex items-center justify-center gap-3 rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                online
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-slate-200 bg-white text-slate-500"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  online ? "bg-green-500" : "bg-slate-400"
                }`}
              />

              {online ? "You're Online" : "You're Offline"}
            </button>
          )}
        </section>

        {/* DRIVER STATS */}
        {isDriver && (
          <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Today's Earnings"
              value="₹2,450"
              icon={CircleDollarSign}
              note="+12% from yesterday"
            />

            <StatCard
              title="Completed Trips"
              value="14"
              icon={CheckCircle2}
              note="Today"
            />

            <StatCard
              title="Rating"
              value="4.8"
              icon={Star}
              note="Based on 243 trips"
            />

            <StatCard
              title="Available Balance"
              value="₹6,250"
              icon={Wallet}
              note="Ready for payout"
            />
          </section>
        )}

        {/* OWNER STATS */}
        {isOwner && (
          <section className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Vehicles"
              value="12"
              icon={Car}
              note="10 active"
            />

            <StatCard
              title="Drivers"
              value="10"
              icon={Users}
              note="8 currently online"
            />

            <StatCard
              title="Fleet Revenue"
              value="₹12,850"
              icon={CircleDollarSign}
              note="Today's revenue"
            />

            <StatCard
              title="Pending Settlement"
              value="₹28,450"
              icon={Wallet}
              note="Awaiting settlement"
            />
          </section>
        )}

        {/* DRIVER SECTION */}
        {isDriver && (
          <section className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            {/* TRIP REQUESTS */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-slate-950">
                    Trip Requests
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    New requests available near you
                  </p>
                </div>

                {/* =====================================================
                    CHANGED: Dynamic request count
                   ===================================================== */}
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  {currentBooking?.status === "Requested" ? "1 New" : "0 New"}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {currentBooking?.status === "Requested" && (
                  <RequestCard
                    service={currentBooking.service}
                    customer={currentBooking.customer}
                    pickup={currentBooking.pickup}
                    destination={currentBooking.destination}
                    amount={`₹${currentBooking.estimatedFare}`}
                    distance={currentBooking.distance}
                    vehicleType={currentBooking.vehicleType}
                    bookingId={currentBooking.id}
                    isNew
                  />
                )}

                {!currentBooking && (
                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Navigation size={22} />
                    </div>
                    <p className="mt-3 font-semibold text-slate-800">
                      No new trip requests
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      New customer requests will appear here.
                    </p>
                  </div>
                )}

                {currentBooking && currentBooking.status !== "Requested" && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-green-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          No new requests
                        </p>
                        <p className="text-xs text-slate-500">
                          Current booking status: {currentBooking.status}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ACTIVE TRIP */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-slate-950">
                    Active Trip
                  </h2>

                  <p className="mt-1 text-sm text-green-600">
                    {currentBooking?.status === "Accepted"
                      ? "Driver heading to pickup"
                      : currentBooking?.status === "Arrived"
                        ? "Driver has arrived"
                        : currentBooking?.status === "Started"
                          ? "Trip in progress"
                          : "No active trip"}
                  </p>
                </div>

                <Navigation className="text-blue-600" size={22} />
              </div>

              <div className="mt-5 h-44 rounded-2xl bg-slate-100 p-4">
                <div className="relative h-full overflow-hidden rounded-xl bg-slate-200">
                  <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-blue-600" />

                  <div className="absolute bottom-8 right-8 h-3 w-3 rounded-full bg-green-600" />

                  <div className="absolute left-9 top-10 h-1 w-3/4 rotate-12 bg-blue-300" />

                  <div className="absolute bottom-12 left-1/4 h-1 w-1/2 -rotate-6 bg-blue-300" />

                  <div className="absolute bottom-3 left-3 rounded-lg bg-white px-2 py-1 text-[10px] font-semibold shadow-sm">
                    Live Map
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    {currentBooking?.customer || "No active customer"}
                  </p>

                  <p className="text-xs text-slate-500">
                    {currentBooking?.pickup
                      ? `Pickup: ${currentBooking.pickup}`
                      : "No active trip"}
                  </p>

                  {/* CHANGED: Show the assigned driver */}
                  {currentBooking?.driverName && (
                    <p className="mt-1 text-xs text-blue-600">
                      Driver: {currentBooking.driverName}
                    </p>
                  )}

                  {/* CHANGED: Show the assigned vehicle */}
                  {currentBooking?.vehicleNumber && (
                    <p className="text-xs text-slate-500">
                      Vehicle: {currentBooking.vehicleType} • {currentBooking.vehicleNumber}
                    </p>
                  )}
                </div>

                <Link
                  href="/provider/trips"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  View Trip
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* OWNER SECTION */}
        {isOwner && (
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-bold text-slate-950">
                  Fleet Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Monitor vehicles and drivers
                </p>
              </div>

              <Link
                href="/provider/vehicles"
                className="flex items-center gap-1 text-sm font-semibold text-blue-600"
              >
                Manage Fleet
                <ChevronRight size={17} />
              </Link>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
                    <th className="pb-3">Vehicle</th>
                    <th className="pb-3">Driver</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Location</th>
                    <th className="pb-3 text-right">
                      Today's Earnings
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <FleetRow
                    vehicle="Maruti Dzire"
                    number="BR01AB1234"
                    driver="Rahul Kumar"
                    status="On Trip"
                    location="Patna Airport"
                    earnings="₹1,250"
                  />

                  <FleetRow
                    vehicle="Toyota Innova"
                    number="BR01CD5678"
                    driver="Amit Kumar"
                    status="Online"
                    location="Boring Road"
                    earnings="₹1,850"
                  />

                  <FleetRow
                    vehicle="Tata Ace"
                    number="BR01EF9012"
                    driver="Sanjay Kumar"
                    status="Offline"
                    location="Kankarbagh"
                    earnings="₹950"
                  />
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* QUICK ACTIONS */}
        <section className="mt-6">
          <h2 className="font-bold text-slate-950">
            Quick Actions
          </h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* DRIVER QUICK ACTIONS */}
            {isDriver && (
              <>
                <QuickAction
                  href="/provider/earnings"
                  icon={Wallet}
                  title="Earnings"
                  description="View your income"
                />

                <QuickAction
                  href="/provider/trips"
                  icon={Navigation}
                  title="My Trips"
                  description="Trip history"
                />

                <QuickAction
                  href="/provider/vehicles"
                  icon={Car}
                  title="My Vehicle"
                  description="Vehicle details"
                />

                <QuickAction
                  href="/provider/documents"
                  icon={FileText}
                  title="Documents"
                  description="Manage KYC"
                />
              </>
            )}

            {/* OWNER QUICK ACTIONS */}
            {isOwner && (
              <>
                <QuickAction
                  href="/provider/vehicles"
                  icon={Car}
                  title="Vehicles"
                  description="Manage fleet"
                />

                <QuickAction
                  href="/provider/drivers"
                  icon={Users}
                  title="Drivers"
                  description="Manage drivers"
                />

                <QuickAction
                  href="/provider/earnings"
                  icon={CircleDollarSign}
                  title="Fleet Earnings"
                  description="View revenue"
                />

                <QuickAction
                  href="/provider/settings"
                  icon={Settings}
                  title="Provider Settings"
                  description="Profile & preferences"
                />
              </>
            )}
          </div>
        </section>

        {/* VEHICLE */}
        {isDriver && (
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Current Vehicle
                </p>

                <h2 className="mt-1 font-bold text-slate-950">
                  Maruti Suzuki Dzire
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  White • Sedan • BR01AB1234
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Car size={24} />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <StatusBadge
                icon={ShieldCheck}
                text="Vehicle Verified"
              />

              <StatusBadge
                icon={FileText}
                text="Documents Valid"
              />
            </div>
          </section>
        )}

        {/* FOOTER LINKS */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 pb-8 text-sm text-slate-500">
          <Link
            href="/provider/settings"
            className="hover:text-slate-950"
          >
            Profile & Settings
          </Link>

          <Link
            href="/provider/settings"
            className="hover:text-slate-950"
          >
            Support
          </Link>

          <Link
            href="/"
            className="hover:text-slate-950"
          >
            Logout
          </Link>
        </div>
      </div>
    </main>
  );
}

/* ---------------- Components ---------------- */

function ProviderNavLink({
  href,
  icon: Icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
      }`}
    >
      <Icon size={17} />
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
    >
      {label}
    </Link>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  note,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>

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

/* =========================================================
   UPDATED REQUEST CARD
   ========================================================= */

function RequestCard({
  service,
  customer,
  pickup,
  destination,
  amount,
  distance,
  vehicleType,
  bookingId,
  isNew = false,
}: {
  service: string;
  customer: string;
  pickup: string;
  destination: string;
  amount: string;
  distance: string;
  vehicleType: string;
  bookingId?: string;
  isNew?: boolean;
}) {
  // CHANGED: Accept booking and assign an available driver + vehicle
  const handleAccept = () => {
    if (!bookingId) {
      alert("Booking ID is missing.");
      return;
    }

    const savedBooking = localStorage.getItem(
      "infurnusCurrentBooking"
    );

    if (!savedBooking) {
      alert("Booking could not be found.");
      return;
    }

    try {
      const booking: Booking = JSON.parse(savedBooking);

      if (booking.id !== bookingId) {
        alert("This booking is no longer available.");
        return;
      }

      // =====================================================
      // CHANGED: Read registered drivers and vehicles
      // =====================================================
      const savedDrivers = localStorage.getItem(
        "infurnusProviderDrivers"
      );

      const savedVehicles = localStorage.getItem(
        "infurnusProviderVehicles"
      );

      const drivers: ProviderDriver[] = savedDrivers
        ? JSON.parse(savedDrivers)
        : [];

      const vehicles: ProviderVehicle[] = savedVehicles
        ? JSON.parse(savedVehicles)
        : [];

      // =====================================================
      // CHANGED: Find an Online driver whose vehicle is Active
      // =====================================================
      const availableDriver = drivers.find((driver) => {
        if (driver.status !== "Online") {
          return false;
        }

        if (!driver.vehicleId) {
          return false;
        }

        const vehicle = vehicles.find(
          (item) => item.id === driver.vehicleId
        );

        return vehicle?.status === "Active";
      });

      let assignedDriver: ProviderDriver | null =
        availableDriver || null;

      let assignedVehicle: ProviderVehicle | null = null;

      if (assignedDriver?.vehicleId) {
        assignedVehicle =
          vehicles.find(
            (vehicle) =>
              vehicle.id === assignedDriver?.vehicleId
          ) || null;
      }

      // =====================================================
      // CHANGED: Driver + Fleet Owner fallback
      // If no other driver is available, Vikram Rao can drive
      // his own active vehicle.
      // =====================================================
      if (!assignedDriver) {
        const providerVehicle = vehicles.find(
          (vehicle) =>
            vehicle.driver === "Vikram Rao" &&
            vehicle.status === "Active"
        );

        if (providerVehicle) {
          assignedVehicle = providerVehicle;

          assignedDriver = {
            id: 0,
            name: "Vikram Rao",
            phone: "",
            vehicle: providerVehicle.model,
            vehicleNumber: providerVehicle.number,
            vehicleId: providerVehicle.id,
            status: "Online",
            location: providerVehicle.location,
            earnings: "₹0",
            rating: "4.8",
          };
        }
      }

      // =====================================================
      // CHANGED: Do not accept without an available assignment
      // =====================================================
      if (!assignedDriver || !assignedVehicle) {
        alert(
          "No available driver and vehicle found. Please make sure a driver is Online and their vehicle is Active."
        );
        return;
      }

      // =====================================================
      // CHANGED: Mark the assigned driver as On Trip
      // =====================================================
      if (assignedDriver.id !== 0) {
        const updatedDrivers: ProviderDriver[] =
          drivers.map((driver) =>
            driver.id === assignedDriver?.id
              ? {
                  ...driver,
                  status: "On Trip" as const,
                }
              : driver
          );

        localStorage.setItem(
          "infurnusProviderDrivers",
          JSON.stringify(updatedDrivers)
        );

        window.dispatchEvent(
          new Event("infurnusDriversUpdated")
        );
      }

      // =====================================================
      // CHANGED: Store actual driver + vehicle assignment
      // =====================================================
      const acceptedBooking: Booking = {
        ...booking,
        status: "Accepted",
        acceptedAt: new Date().toISOString(),
        provider: "Vikram Rao",
        driverId:
          assignedDriver.id === 0
            ? null
            : assignedDriver.id,
        driverName: assignedDriver.name,
        assignedVehicleId: assignedVehicle.id,
        vehicleId: String(assignedVehicle.id),
        vehicleNumber: assignedVehicle.number,
        vehicleType: assignedVehicle.model,
      };

      // =====================================================
      // CHANGED: Save booking in both shared storage keys
      // =====================================================
      localStorage.setItem(
        "infurnusCurrentBooking",
        JSON.stringify(acceptedBooking)
      );

      localStorage.setItem(
        "infurnusAcceptedBooking",
        JSON.stringify(acceptedBooking)
      );

      window.dispatchEvent(
        new Event("infurnusBookingUpdated")
      );

      window.location.href = "/provider/trips/active";
    } catch (error) {
      console.error(
        "Failed to accept booking:",
        error
      );
      alert("Unable to accept this booking.");
    }
  };

  const handleDecline = () => {
    if (!bookingId) return;

    const savedBooking = localStorage.getItem(
      "infurnusCurrentBooking"
    );

    if (!savedBooking) return;

    try {
      const booking = JSON.parse(savedBooking);

      if (booking.id !== bookingId) return;

      const declinedBooking = {
        ...booking,
        status: "Declined",
        declinedAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "infurnusCurrentBooking",
        JSON.stringify(declinedBooking)
      );

      window.dispatchEvent(
        new Event("infurnusBookingUpdated")
      );
    } catch (error) {
      console.error(
        "Failed to decline booking:",
        error
      );
    }
  };

  return (
    <div
      className={`rounded-xl border p-4 ${
        isNew
          ? "border-blue-200 bg-blue-50/50 ring-1 ring-blue-100"
          : "border-slate-100 bg-slate-50"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
              {service}
            </span>

            {isNew && (
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                NEW REQUEST
              </span>
            )}
          </div>

          <p className="mt-2 text-xs font-semibold text-slate-500">
            Customer:{" "}
            <span className="text-slate-800">
              {customer}
            </span>
          </p>

          <div className="mt-3 flex items-start gap-2">
            <MapPin
              size={16}
              className="mt-0.5 flex-shrink-0 text-blue-600"
            />

            <div>
              <p className="text-sm font-semibold text-slate-800">
                {pickup}
              </p>

              <p className="my-1 text-xs text-slate-400">
                to
              </p>

              <p className="text-sm text-slate-600">
                {destination}
              </p>
            </div>
          </div>
        </div>

        <div className="text-right">
          <p className="font-bold text-slate-950">
            {amount}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {distance}
          </p>

          <p className="mt-1 text-xs font-medium text-blue-600">
            {vehicleType}
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={handleDecline}
          className="flex-1 rounded-lg border border-slate-200 bg-white py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100"
        >
          Decline
        </button>

        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

function FleetRow({
  vehicle,
  number,
  driver,
  status,
  location,
  earnings,
}: {
  vehicle: string;
  number: string;
  driver: string;
  status: string;
  location: string;
  earnings: string;
}) {
  return (
    <tr className="border-b border-slate-100 last:border-0">
      <td className="py-4">
        <p className="text-sm font-semibold text-slate-800">
          {vehicle}
        </p>

        <p className="text-xs text-slate-400">
          {number}
        </p>
      </td>

      <td className="py-4 text-sm text-slate-600">
        {driver}
      </td>

      <td className="py-4">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            status === "On Trip"
              ? "bg-blue-50 text-blue-600"
              : status === "Online"
                ? "bg-green-50 text-green-600"
                : "bg-slate-100 text-slate-500"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="py-4 text-sm text-slate-600">
        {location}
      </td>

      <td className="py-4 text-right text-sm font-semibold text-slate-800">
        {earnings}
      </td>
    </tr>
  );
}

function QuickAction({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={21} />
      </div>

      <div className="min-w-0">
        <p className="font-semibold text-slate-950">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      </div>

      <ChevronRight
        size={17}
        className="ml-auto text-slate-300 transition group-hover:text-blue-600"
      />
    </Link>
  );
}

function StatusBadge({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
      <Icon size={15} />
      {text}
    </span>
  );
}