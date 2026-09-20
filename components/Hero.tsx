"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import heroDesktop from "./images/herodesktop.png";
import heroPhone from "./images/herophone.png";

type ServiceTab = "Ride" | "Rentals" | "Logistics";

export default function Hero() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<ServiceTab>("Ride");

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [schedule, setSchedule] = useState("Now");

  const [rentalVehicle, setRentalVehicle] = useState("");
  const [rentalHours, setRentalHours] = useState("4");

  const [logisticsVehicle, setLogisticsVehicle] = useState("");
  const [logisticsLoad, setLogisticsLoad] = useState("");

  // =========================================================
  // CHANGED: SERVICE TAB
  // =========================================================
  const changeService = (service: ServiceTab) => {
    console.log("SERVICE CLICKED:", service);

    setActiveTab(service);

    setPickup("");
    setDrop("");

    if (service === "Ride") {
      setSchedule("Now");
    }

    if (service === "Rentals") {
      setRentalVehicle("");
      setRentalHours("4");
    }

    if (service === "Logistics") {
      setLogisticsVehicle("");
      setLogisticsLoad("");
    }
  };

  // =========================================================
  // RIDE
  // =========================================================
  const findRide = () => {
    const cleanPickup = pickup.trim();
    const cleanDrop = drop.trim();

    if (!cleanPickup) {
      alert("Please enter your pickup location.");
      return;
    }

    if (!cleanDrop) {
      alert("Please enter your drop location.");
      return;
    }

    if (cleanPickup.toLowerCase() === cleanDrop.toLowerCase()) {
      alert("Pickup and drop locations cannot be the same.");
      return;
    }

    router.push(
      `/customer/book?pickup=${encodeURIComponent(
        cleanPickup
      )}&destination=${encodeURIComponent(
        cleanDrop
      )}&schedule=${encodeURIComponent(schedule)}`
    );
  };

  // =========================================================
  // RENTAL
  // =========================================================
  const findRental = () => {
    if (!rentalVehicle) {
      alert("Please select a vehicle.");
      return;
    }

    if (!pickup.trim()) {
      alert("Please enter your pickup location.");
      return;
    }

    router.push(
      `/customer/rental?vehicle=${encodeURIComponent(
        rentalVehicle
      )}&pickup=${encodeURIComponent(
        pickup.trim()
      )}&hours=${encodeURIComponent(rentalHours)}`
    );
  };

  // =========================================================
  // LOGISTICS
  // =========================================================
  const bookLogistics = () => {
    const cleanPickup = pickup.trim();
    const cleanDrop = drop.trim();

    if (!cleanPickup) {
      alert("Please enter your pickup location.");
      return;
    }

    if (!cleanDrop) {
      alert("Please enter your destination.");
      return;
    }

    if (!logisticsVehicle) {
      alert("Please select a logistics vehicle.");
      return;
    }

    if (!logisticsLoad) {
      alert("Please select the approximate load.");
      return;
    }

    if (cleanPickup.toLowerCase() === cleanDrop.toLowerCase()) {
      alert("Pickup and destination cannot be the same.");
      return;
    }

    router.push(
      `/customer/logistics?pickup=${encodeURIComponent(
        cleanPickup
      )}&destination=${encodeURIComponent(
        cleanDrop
      )}&vehicle=${encodeURIComponent(
        logisticsVehicle
      )}&load=${encodeURIComponent(
        logisticsLoad
      )}`
    );
  };

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden">

      {/* =====================================================
    CHANGED: RESPONSIVE HERO BACKGROUND IMAGE
====================================================== */}

<picture className="pointer-events-none absolute inset-0 z-0">

  {/* Mobile image */}
  {/* Phone / Tablet */}
  <Image
    src={heroPhone}
    alt=""
    fill
    priority
    className="object-cover lg:hidden"
  />

  {/* Laptop / Desktop image */}
  <Image
    src={heroDesktop}
    alt=""
    fill
    priority
    className="hidden h-full w-full object-cover lg:block"
  />

</picture>

{/* =====================================================
    CHANGED: DARK OVERLAY
====================================================== */}

<div className="pointer-events-none absolute inset-0 z-[1] bg-slate-950/60" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* =====================================================
            LEFT
        ====================================================== */}

        <div className="relative z-50 w-full">

          <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            All in one platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Your City.
            <br />

            <span className="text-blue-500">
              Your Way.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Rides, Rentals, Logistics — all in one platform.
            Move smarter, faster and further with Infurnus.
          </p>

          {/* =================================================
              BOOKING CARD
          ================================================== */}

          <div
            className="relative z-[100] mt-10 w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
          >

            {/* =================================================
                TABS
            ================================================== */}

            <div className="relative z-[110] grid grid-cols-3 border-b border-slate-200">

              {/* RIDE */}

              <button
                type="button"
                onClick={() => changeService("Ride")}
                className={`relative z-[120] block min-h-[55px] w-full cursor-pointer select-none py-4 text-sm font-semibold transition-all duration-200 ${
                  activeTab === "Ride"
                    ? "text-blue-600"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Ride

                {activeTab === "Ride" && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600" />
                )}
              </button>

              {/* RENTALS */}

              <button
                type="button"
                onClick={() => changeService("Rentals")}
                className={`relative z-[120] block min-h-[55px] w-full cursor-pointer select-none py-4 text-sm font-semibold transition-all duration-200 ${
                  activeTab === "Rentals"
                    ? "text-blue-600"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Rentals

                {activeTab === "Rentals" && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600" />
                )}
              </button>

              {/* LOGISTICS */}

              <button
                type="button"
                onClick={() => changeService("Logistics")}
                className={`relative z-[120] block min-h-[55px] w-full cursor-pointer select-none py-4 text-sm font-semibold transition-all duration-200 ${
                  activeTab === "Logistics"
                    ? "text-blue-600"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Logistics

                {activeTab === "Logistics" && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600" />
                )}
              </button>

            </div>

            {/* =================================================
                RIDE FORM
            ================================================== */}

            {activeTab === "Ride" && (
              <div className="relative z-[105] space-y-3 pt-5">

                <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">

                  <span className="h-3 w-3 shrink-0 rounded-full bg-blue-600" />

                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup location"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
                  />

                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">

                  <span className="h-3 w-3 shrink-0 rounded-full bg-red-500" />

                  <input
                    type="text"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    placeholder="Drop location"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
                  />

                </div>

                <select
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  className="w-full cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >
                  <option value="Now">
                    Now
                  </option>

                  <option value="Schedule for later">
                    Schedule for later
                  </option>
                </select>

                <button
                  type="button"
                  onClick={findRide}
                  className="relative z-[120] w-full cursor-pointer rounded-xl bg-slate-950 py-4 font-semibold text-white transition hover:bg-blue-600 active:scale-[0.99]"
                >
                  Find a Ride →
                </button>

              </div>
            )}

            {/* =================================================
                RENTALS FORM
            ================================================== */}

            {activeTab === "Rentals" && (
              <div className="relative z-[105] space-y-3 pt-5">

                <div className="rounded-xl bg-blue-50 p-4">

                  <p className="text-sm font-bold text-slate-900">
                    Rent a vehicle by the hour
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Choose your vehicle and rental duration.
                  </p>

                </div>

                <select
                  value={rentalVehicle}
                  onChange={(e) =>
                    setRentalVehicle(e.target.value)
                  }
                  className="w-full cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select vehicle
                  </option>

                  <option value="fortuner">
                    Toyota Fortuner
                  </option>

                  <option value="thar">
                    Mahindra Thar
                  </option>

                  <option value="premium-suv">
                    Premium SUV
                  </option>
                </select>

                <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">

                  <span className="h-3 w-3 shrink-0 rounded-full bg-blue-600" />

                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup location"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
                  />

                </div>

                <select
                  value={rentalHours}
                  onChange={(e) =>
                    setRentalHours(e.target.value)
                  }
                  className="w-full cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >
                  <option value="2">
                    2 Hours
                  </option>

                  <option value="4">
                    4 Hours
                  </option>

                  <option value="6">
                    6 Hours
                  </option>

                  <option value="8">
                    8 Hours
                  </option>

                  <option value="12">
                    12 Hours
                  </option>
                </select>

                <button
                  type="button"
                  onClick={findRental}
                  className="relative z-[120] w-full cursor-pointer rounded-xl bg-slate-950 py-4 font-semibold text-white transition hover:bg-blue-600 active:scale-[0.99]"
                >
                  Find a Vehicle →
                </button>

              </div>
            )}

            {/* =================================================
                LOGISTICS FORM
            ================================================== */}

            {activeTab === "Logistics" && (
              <div className="relative z-[105] space-y-3 pt-5">

                <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">

                  <span className="h-3 w-3 shrink-0 rounded-full bg-blue-600" />

                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup location"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
                  />

                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">

                  <span className="h-3 w-3 shrink-0 rounded-full bg-red-500" />

                  <input
                    type="text"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    placeholder="Destination"
                    className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
                  />

                </div>

                <select
                  value={logisticsVehicle}
                  onChange={(e) =>
                    setLogisticsVehicle(e.target.value)
                  }
                  className="w-full cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select logistics vehicle
                  </option>

                  <option value="mini-truck">
                    Mini Truck
                  </option>

                  <option value="pickup">
                    Pickup
                  </option>

                  <option value="tata-ace">
                    Tata Ace
                  </option>

                  <option value="delivery-vehicle">
                    Delivery Vehicle
                  </option>

                  <option value="large-truck">
                    Large Truck
                  </option>
                </select>

                <select
                  value={logisticsLoad}
                  onChange={(e) =>
                    setLogisticsLoad(e.target.value)
                  }
                  className="w-full cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select approximate load
                  </option>

                  <option value="up-to-100">
                    Up to 100 kg
                  </option>

                  <option value="100-300">
                    100 – 300 kg
                  </option>

                  <option value="300-500">
                    300 – 500 kg
                  </option>

                  <option value="500-1000">
                    500 – 1000 kg
                  </option>

                  <option value="above-1000">
                    Above 1000 kg
                  </option>
                </select>

                <button
                  type="button"
                  onClick={bookLogistics}
                  className="relative z-[120] w-full cursor-pointer rounded-xl bg-slate-950 py-4 font-semibold text-white transition hover:bg-blue-600 active:scale-[0.99]"
                >
                  Book Logistics →
                </button>

              </div>
            )}

          </div>
        </div>

        {/* =====================================================
            RIGHT VISUAL
            CHANGED: pointer-events-none
        ====================================================== */}

        

      </div>
    </section>
  );
}