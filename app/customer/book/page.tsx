"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Bike,
  Car,
  Check,
  Clock3,
  MapPin,
  Navigation,
  ShieldCheck,
  Search,
  X,
} from "lucide-react";

const vehicles = [
  {
    id: "bike",
    name: "Bike",
    description: "Affordable & quick",
    time: "4 min",
    price: 95,
  },
  {
    id: "cab",
    name: "Cab",
    description: "Comfortable everyday ride",
    time: "6 min",
    price: 185,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Luxury & extra comfort",
    time: "8 min",
    price: 320,
  },
];

const locationSuggestions = [
  "Patna Junction",
  "Patna Airport",
  "Kankarbagh",
  "Boring Road",
  "Danapur",
  "Rajendra Nagar",
  "Bailey Road",
  "Gandhi Maidan",
  "Fraser Road",
  "Mithapur",
];

export default function BookRidePage() {
  const [selectedVehicle, setSelectedVehicle] = useState("cab");

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [activeLocation, setActiveLocation] = useState<
    "pickup" | "destination" | null
  >(null);

  const [rideType, setRideType] = useState<"now" | "schedule">("now");

  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);

  // 🟢 NEW: Store the actual created booking ID
  const [bookingId, setBookingId] = useState("");

  // 🟢 NEW: Store validation error
  const [bookingError, setBookingError] = useState("");

  const selected = vehicles.find(
    (vehicle) => vehicle.id === selectedVehicle
  );

  /*
   * =========================================================
   * 🔴 CHANGED:
   * Use trimmed values so spaces don't count as valid locations.
   * =========================================================
   */
  const pickupValue = pickup.trim();
  const destinationValue = destination.trim();

  /*
   * =========================================================
   * 🟢 NEW:
   * Central validation for Confirm & Book Ride button.
   * =========================================================
   */
  const canBook =
    pickupValue.length > 0 &&
    destinationValue.length > 0 &&
    pickupValue.toLowerCase() !== destinationValue.toLowerCase() &&
    !!selected &&
    (rideType === "now" ||
      (scheduledDate.length > 0 && scheduledTime.length > 0));

  /*
   * =========================================================
   * LOCATION SUGGESTIONS
   * =========================================================
   */
  const filteredSuggestions = locationSuggestions.filter((location) => {
    const searchValue =
      activeLocation === "pickup" ? pickup : destination;

    if (!searchValue.trim()) return true;

    return location
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  /*
   * =========================================================
   * SELECT LOCATION
   * =========================================================
   */
  const selectLocation = (location: string) => {
    if (activeLocation === "pickup") {
      setPickup(location);
    }

    if (activeLocation === "destination") {
      setDestination(location);
    }

    // 🔴 CHANGED:
    // Close suggestions immediately after selecting a location.
    setActiveLocation(null);

    // 🟢 NEW:
    // Clear any previous validation error.
    setBookingError("");
  };

  /*
   * =========================================================
   * 🔴 CHANGED:
   * COMPLETE BOOKING FUNCTION
   * =========================================================
   */
  const handleConfirmBooking = () => {
    setBookingError("");

    const cleanPickup = pickup.trim();
    const cleanDestination = destination.trim();

    /*
     * Validate pickup
     */
    if (!cleanPickup) {
      setBookingError("Please enter your pickup location.");
      setActiveLocation("pickup");
      return;
    }

    /*
     * Validate destination
     */
    if (!cleanDestination) {
      setBookingError("Please enter your destination.");
      setActiveLocation("destination");
      return;
    }

    /*
     * Validate same location
     */
    if (
      cleanPickup.toLowerCase() ===
      cleanDestination.toLowerCase()
    ) {
      setBookingError(
        "Pickup and destination cannot be the same."
      );
      return;
    }

    /*
     * Validate vehicle
     */
    if (!selected) {
      setBookingError("Please select a vehicle.");
      return;
    }

    /*
     * Validate scheduled ride
     */
    if (
      rideType === "schedule" &&
      (!scheduledDate || !scheduledTime)
    ) {
      setBookingError(
        "Please select the date and time for your scheduled ride."
      );
      return;
    }

    /*
     * =======================================================
     * 🟢 NEW:
     * Generate ONE booking ID and save that exact ID.
     * =======================================================
     */
    const newBookingId = `INF-${Date.now()}`;

    const booking = {
      id: newBookingId,

      customer: "Tripti Rani",

      service: "Passenger",

      pickup: cleanPickup,

      destination: cleanDestination,

      vehicleType: selected.name,

      vehicleId: selected.id,

      estimatedFare: selected.price,

      distance: "Estimated",

      estimatedTime: selected.time,

      rideType,

      scheduledDate:
        rideType === "schedule" ? scheduledDate : null,

      scheduledTime:
        rideType === "schedule" ? scheduledTime : null,

      /*
       * IMPORTANT:
       * Provider dashboard will look for "Requested".
       */
      status: "Requested",

      createdAt: new Date().toISOString(),
    };

    try {
      /*
       * =====================================================
       * 🔴 CHANGED:
       * Save booking to localStorage.
       * =====================================================
       */
      localStorage.setItem(
        "infurnusCurrentBooking",
        JSON.stringify(booking)
      );

      /*
       * 🟢 NEW:
       * Store exact ID for confirmation modal.
       */
      setBookingId(newBookingId);

      /*
       * 🟢 NEW:
       * Notify any page listening for booking updates.
       */
      window.dispatchEvent(
        new Event("infurnusBookingUpdated")
      );

      /*
       * Show success modal
       */
      setShowConfirm(true);
    } catch (error) {
      console.error("Failed to save booking:", error);

      setBookingError(
        "Unable to create booking. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =====================================================
          HEADER
          ===================================================== */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center px-6 py-4">
          <Link
            href="/customer"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={19} />
            Back to Dashboard
          </Link>

          <div className="ml-auto flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              I
            </div>

            <span className="hidden font-bold text-slate-900 sm:block">
              INFURNUS
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* =====================================================
            PAGE HEADING
            ===================================================== */}
        <div>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Ride Booking
          </span>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Book your ride
          </h1>

          <p className="mt-2 text-slate-500">
            Choose your pickup, destination and preferred vehicle.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* =====================================================
              MAP
              ===================================================== */}
          <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-slate-900 lg:col-span-3">
            <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_48%,rgba(255,255,255,0.08)_49%,rgba(255,255,255,0.08)_51%,transparent_52%),linear-gradient(120deg,transparent_48%,rgba(255,255,255,0.06)_49%,rgba(255,255,255,0.06)_51%,transparent_52%)] bg-[size:80px_80px]" />

            <div className="absolute left-0 right-0 top-1/2 h-8 -rotate-12 bg-slate-700/60" />

            <div className="absolute bottom-20 left-0 right-0 h-6 rotate-6 bg-slate-700/50" />

            <div className="absolute bottom-0 left-1/2 h-full w-7 -rotate-12 bg-slate-700/50" />

            {/* PICKUP MARKER */}
            {pickupValue && (
              <div className="absolute left-[28%] top-[32%] z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30">
                  <MapPin size={22} className="text-white" />
                </div>

                <div className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow">
                  {pickupValue}
                </div>
              </div>
            )}

            {/* DESTINATION MARKER */}
            {destinationValue && (
              <div className="absolute bottom-[25%] right-[25%] z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/30">
                  <Navigation size={20} className="text-white" />
                </div>

                <div className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow">
                  {destinationValue}
                </div>
              </div>
            )}

            {/* ROUTE */}
            {pickupValue && destinationValue && (
              <div className="absolute left-[31%] top-[39%] h-40 w-1 rotate-45 rounded-full border-l-4 border-dashed border-blue-400" />
            )}

            <div className="absolute bottom-5 left-5 rounded-xl bg-slate-950/80 px-4 py-3 text-sm text-white backdrop-blur">
              📍 Map preview

              <span className="ml-2 text-slate-400">
                Live map will appear here
              </span>
            </div>
          </div>

          {/* =====================================================
              BOOKING PANEL
              ===================================================== */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900">
              Where are you going?
            </h2>

            {/* =================================================
                PICKUP
                ================================================= */}
            <div className="relative mt-6">
              <div
                className={`rounded-2xl border p-4 ${
                  activeLocation === "pickup"
                    ? "border-blue-500 ring-1 ring-blue-500"
                    : "border-slate-200"
                }`}
              >
                <div className="flex gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                    <div className="h-2 w-2 rounded-full bg-green-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Search
                        size={16}
                        className="text-slate-400"
                      />

                      <input
                        value={pickup}
                        onFocus={() => {
                          setActiveLocation("pickup");
                          setBookingError("");
                        }}
                        onChange={(e) => {
                          setPickup(e.target.value);
                          setActiveLocation("pickup");
                          setBookingError("");
                        }}
                        placeholder="Pickup location"
                        className="w-full text-sm outline-none placeholder:text-slate-400"
                      />

                      {pickup && (
                        <button
                          type="button"
                          onClick={() => {
                            setPickup("");
                            setBookingError("");
                          }}
                          className="text-slate-400 hover:text-slate-700"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* PICKUP SUGGESTIONS */}
              {activeLocation === "pickup" && (
                <LocationSuggestions
                  suggestions={filteredSuggestions}
                  onSelect={selectLocation}
                />
              )}
            </div>

            {/* =================================================
                DESTINATION
                ================================================= */}
            <div className="relative mt-3">
              <div
                className={`rounded-2xl border p-4 ${
                  activeLocation === "destination"
                    ? "border-blue-500 ring-1 ring-blue-500"
                    : "border-slate-200"
                }`}
              >
                <div className="flex gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center">
                    <MapPin
                      size={19}
                      className="text-red-500"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Search
                        size={16}
                        className="text-slate-400"
                      />

                      <input
                        value={destination}
                        onFocus={() => {
                          setActiveLocation("destination");
                          setBookingError("");
                        }}
                        onChange={(e) => {
                          setDestination(e.target.value);
                          setActiveLocation("destination");
                          setBookingError("");
                        }}
                        placeholder="Where to?"
                        className="w-full text-sm outline-none placeholder:text-slate-400"
                      />

                      {destination && (
                        <button
                          type="button"
                          onClick={() => {
                            setDestination("");
                            setBookingError("");
                          }}
                          className="text-slate-400 hover:text-slate-700"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* DESTINATION SUGGESTIONS */}
              {activeLocation === "destination" && (
                <LocationSuggestions
                  suggestions={filteredSuggestions}
                  onSelect={selectLocation}
                />
              )}
            </div>

            {/* =================================================
                🟢 NEW:
                ERROR MESSAGE
                ================================================= */}
            {bookingError && (
              <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {bookingError}
              </div>
            )}

            {/* =================================================
                RIDE TYPE
                ================================================= */}
            <h3 className="mt-7 font-bold text-slate-900">
              When do you need the ride?
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {/* RIDE NOW */}
              <button
                type="button"
                onClick={() => {
                  setRideType("now");
                  setBookingError("");
                }}
                className={`rounded-xl border p-3 text-left ${
                  rideType === "now"
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200"
                }`}
              >
                <Clock3
                  size={19}
                  className="text-blue-600"
                />

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Ride now
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Pickup as soon as possible
                </p>
              </button>

              {/* SCHEDULE */}
              <button
                type="button"
                onClick={() => {
                  setRideType("schedule");
                  setBookingError("");
                }}
                className={`rounded-xl border p-3 text-left ${
                  rideType === "schedule"
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200"
                }`}
              >
                <Clock3
                  size={19}
                  className="text-blue-600"
                />

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Schedule
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Book for later
                </p>
              </button>
            </div>

            {/* =================================================
                SCHEDULE FIELDS
                ================================================= */}
            {rideType === "schedule" && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-600">
                    Date
                  </label>

                  <input
                    type="date"
                    value={scheduledDate}
                    min={new Date()
                      .toISOString()
                      .split("T")[0]}
                    onChange={(e) => {
                      setScheduledDate(e.target.value);
                      setBookingError("");
                    }}
                    className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-600">
                    Time
                  </label>

                  <input
                    type="time"
                    value={scheduledTime}
                    onChange={(e) => {
                      setScheduledTime(e.target.value);
                      setBookingError("");
                    }}
                    className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* =================================================
                VEHICLE
                ================================================= */}
            <h3 className="mt-7 font-bold text-slate-900">
              Choose a vehicle
            </h3>

            <div className="mt-3 space-y-3">
              {vehicles.map((vehicle) => {
                const Icon =
                  vehicle.id === "bike" ? Bike : Car;

                const active =
                  selectedVehicle === vehicle.id;

                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => {
                      setSelectedVehicle(vehicle.id);
                      setBookingError("");
                    }}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                        : "border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        active
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon size={23} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900">
                          {vehicle.name}
                        </h4>

                        <span className="font-bold text-slate-900">
                          ₹{vehicle.price}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-slate-500">
                        {vehicle.description}
                      </p>

                      <p className="mt-1 text-xs text-blue-600">
                        {vehicle.time} away
                      </p>
                    </div>

                    {active && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Check size={15} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* =================================================
                FARE
                ================================================= */}
            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Estimated fare
                </span>

                <span className="text-2xl font-bold text-slate-900">
                  ₹{selected?.price ?? 0}
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Final fare may vary based on distance and traffic.
              </p>
            </div>

            {/* =================================================
                🔴 CHANGED:
                CONFIRM BUTTON
                ================================================= */}
            <button
              type="button"
              onClick={handleConfirmBooking}
              disabled={!canBook}
              className={`mt-6 w-full rounded-xl py-4 font-semibold transition ${
                canBook
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "cursor-not-allowed bg-slate-300 text-white"
              }`}
            >
              Confirm & Book Ride
            </button>

            {/* 🟢 NEW: Helpful status text */}
            {!canBook && (
              <p className="mt-2 text-center text-xs text-slate-400">
                Enter pickup and destination to continue.
              </p>
            )}

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck
                size={15}
                className="text-green-600"
              />
              Verified drivers • Safe payments
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONFIRMATION MODAL
          ===================================================== */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <Check
                size={28}
                className="text-green-600"
              />
            </div>

            <h2 className="mt-5 text-center text-2xl font-bold text-slate-900">
              Ride Request Created
            </h2>

            <p className="mt-3 text-center text-sm leading-6 text-slate-500">
              Your ride request has been created. We&apos;re
              looking for a nearby{" "}
              {selected?.name.toLowerCase()} for you.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              {/* 🟢 CHANGED:
                  Show actual saved booking ID */}
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Booking ID
                </span>

                <span className="font-semibold text-slate-900">
                  {bookingId}
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">
                  Vehicle
                </span>

                <span className="font-semibold text-slate-900">
                  {selected?.name}
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">
                  Estimated Fare
                </span>

                <span className="font-semibold text-slate-900">
                  ₹{selected?.price}
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">
                  Pickup
                </span>

                <span className="max-w-[200px] text-right font-semibold text-slate-900">
                  {pickupValue}
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">
                  Destination
                </span>

                <span className="max-w-[200px] text-right font-semibold text-slate-900">
                  {destinationValue}
                </span>
              </div>

              {/* 🟢 NEW:
                  Show ride type */}
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">
                  Ride Type
                </span>

                <span className="font-semibold text-slate-900">
                  {rideType === "now"
                    ? "Ride Now"
                    : "Scheduled"}
                </span>
              </div>

              {/* 🟢 NEW:
                  Show schedule information */}
              {rideType === "schedule" && (
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-slate-500">
                    Scheduled
                  </span>

                  <span className="text-right font-semibold text-slate-900">
                    {scheduledDate} {scheduledTime}
                  </span>
                </div>
              )}

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">
                  Status
                </span>

                <span className="font-semibold text-blue-600">
                  Searching for driver
                </span>
              </div>
            </div>

            <Link
              href="/customer/tracking"
              className="mt-6 block w-full rounded-xl bg-blue-600 py-3.5 text-center font-semibold text-white hover:bg-blue-700"
            >
              Track My Ride
            </Link>

            <Link
              href="/customer"
              className="mt-3 block w-full rounded-xl border border-slate-200 py-3.5 text-center font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

/* =========================================================
   LOCATION SUGGESTIONS
   ========================================================= */

function LocationSuggestions({
  suggestions,
  onSelect,
}: {
  suggestions: string[];
  onSelect: (location: string) => void;
}) {
  return (
    <div className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Suggested locations
        </p>
      </div>

      {suggestions.length === 0 ? (
        <div className="px-4 py-5 text-sm text-slate-500">
          No matching location found.
        </div>
      ) : (
        <div className="max-h-64 overflow-y-auto">
          {suggestions.map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => onSelect(location)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                <MapPin
                  size={17}
                  className="text-blue-600"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {location}
                </p>

                <p className="text-xs text-slate-400">
                  Patna, Bihar
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}