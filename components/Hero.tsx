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

  const changeService = (service: ServiceTab) => {
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
      )}&load=${encodeURIComponent(logisticsLoad)}`
    );
  };

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#E0E5EC] py-16 lg:py-24">

      {/* BACKGROUND IMAGE OVERLAY */}
      <picture className="pointer-events-none absolute inset-0 z-0  mix-blend-multiply">
        <Image
          src={heroPhone}
          alt=""
          fill
          priority
          className="object-cover lg:hidden"
        />
        <Image
          src={heroDesktop}
          alt=""
          fill
          priority
          className="hidden h-full w-full object-cover lg:block"
        />
      </picture>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* LEFT COLUMN */}
        <div className="relative z-50 w-full">

          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-[#E0E5EC] text-xs font-bold uppercase tracking-wider text-[#000000]">
            <span className="h-2 w-2 rounded-full bg-[#000000] animate-pulse"></span>
            All In One Mobility Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#3D4852] font-display md:text-7xl">
            Your City.
            <br />
            <span className="text-[#6c63ff]">
              Your Way.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B7280] font-medium">
            Rides, Rentals, Logistics — all in one unified platform.
            Move smarter, faster, and further with Infurnus.
          </p>

          {/* BOOKING CARD */}
          <div className="relative z-[100] mt-10 w-full max-w-xl p-8 bg-[#E0E5EC]  border rounded-[32px]">

            {/* TAB SELECTOR */}
            <div className="grid grid-cols-3 gap-2 p-1.5 neu-inset rounded-2xl">
              <button
                type="button"
                onClick={() => changeService("Ride")}
                className={`py-3 text-sm font-bold transition-all duration-300 rounded-xl ${activeTab === "Ride"
                  ? "neu-btn text-[#000000]"
                  : "text-[#6B7280] hover:text-[#3D4852]"
                  }`}
              >
                Ride
              </button>

              <button
                type="button"
                onClick={() => changeService("Rentals")}
                className={`py-3 text-sm font-bold transition-all duration-300 rounded-xl ${activeTab === "Rentals"
                  ? "neu-btn text-[#000000]"
                  : "text-[#6B7280] hover:text-[#3D4852]"
                  }`}
              >
                Rentals
              </button>

              <button
                type="button"
                onClick={() => changeService("Logistics")}
                className={`py-3 text-sm font-bold transition-all duration-300 rounded-xl ${activeTab === "Logistics"
                  ? "neu-btn text-[#000000]"
                  : "text-[#6B7280] hover:text-[#3D4852]"
                  }`}
              >
                Logistics
              </button>
            </div>

            {/* RIDE FORM */}
            {activeTab === "Ride" && (
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3 p-4 neu-inset rounded-2xl">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#000000] shadow-[0_0_8px_rgba(108,99,255,0.6)]" />
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup location"
                    className="w-full bg-transparent text-[#3D4852] font-semibold outline-none placeholder:text-[#A0AEC0]"
                  />
                </div>

                <div className="flex items-center gap-3 p-4 neu-inset rounded-2xl">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#38B2AC] shadow-[0_0_8px_rgba(56,178,172,0.6)]" />
                  <input
                    type="text"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    placeholder="Drop location"
                    className="w-full bg-transparent text-[#3D4852] font-semibold outline-none placeholder:text-[#A0AEC0]"
                  />
                </div>

                <select
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  className="w-full cursor-pointer p-4 neu-inset rounded-2xl text-[#3D4852] font-semibold outline-none"
                >
                  <option value="Now">Now</option>
                  <option value="Schedule for later">Schedule for later</option>
                </select>

                <button
                  type="button"
                  onClick={findRide}
                  className="w-full py-4 text-base font-bold neu-btn-primary shadow-lg active:scale-[0.99]"
                >
                  Find a Ride →
                </button>
              </div>
            )}

            {/* RENTALS FORM */}
            {activeTab === "Rentals" && (
              <div className="space-y-4 pt-6">
                <div className="p-4 neu-inset rounded-2xl bg-[#E0E5EC]">
                  <p className="text-sm font-bold text-[#3D4852]">
                    Rent a vehicle by the hour
                  </p>
                  <p className="mt-1 text-xs text-[#6B7280]">
                    Choose your vehicle and rental duration.
                  </p>
                </div>

                <select
                  value={rentalVehicle}
                  onChange={(e) => setRentalVehicle(e.target.value)}
                  className="w-full cursor-pointer p-4 neu-inset rounded-2xl text-[#3D4852] font-semibold outline-none"
                >
                  <option value="" disabled>
                    Select vehicle
                  </option>
                  <option value="fortuner">Toyota Fortuner</option>
                  <option value="thar">Mahindra Thar</option>
                  <option value="premium-suv">Premium SUV</option>
                </select>

                <div className="flex items-center gap-3 p-4 neu-inset rounded-2xl">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#000000]" />
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup location"
                    className="w-full bg-transparent text-[#3D4852] font-semibold outline-none placeholder:text-[#A0AEC0]"
                  />
                </div>

                <select
                  value={rentalHours}
                  onChange={(e) => setRentalHours(e.target.value)}
                  className="w-full cursor-pointer p-4 neu-inset rounded-2xl text-[#3D4852] font-semibold outline-none"
                >
                  <option value="2">2 Hours</option>
                  <option value="4">4 Hours</option>
                  <option value="6">6 Hours</option>
                  <option value="8">8 Hours</option>
                  <option value="12">12 Hours</option>
                </select>

                <button
                  type="button"
                  onClick={findRental}
                  className="w-full py-4 text-base font-bold neu-btn-primary shadow-lg active:scale-[0.99]"
                >
                  Find a Vehicle →
                </button>
              </div>
            )}

            {/* LOGISTICS FORM */}
            {activeTab === "Logistics" && (
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3 p-4 neu-inset rounded-2xl">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#000000]" />
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup location"
                    className="w-full bg-transparent text-[#3D4852] font-semibold outline-none placeholder:text-[#A0AEC0]"
                  />
                </div>

                <div className="flex items-center gap-3 p-4 neu-inset rounded-2xl">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#38B2AC]" />
                  <input
                    type="text"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    placeholder="Destination"
                    className="w-full bg-transparent text-[#3D4852] font-semibold outline-none placeholder:text-[#A0AEC0]"
                  />
                </div>

                <select
                  value={logisticsVehicle}
                  onChange={(e) => setLogisticsVehicle(e.target.value)}
                  className="w-full cursor-pointer p-4 neu-inset rounded-2xl text-[#3D4852] font-semibold outline-none"
                >
                  <option value="" disabled>
                    Select logistics vehicle
                  </option>
                  <option value="mini-truck">Mini Truck</option>
                  <option value="pickup">Pickup</option>
                  <option value="tata-ace">Tata Ace</option>
                  <option value="delivery-vehicle">Delivery Vehicle</option>
                  <option value="large-truck">Large Truck</option>
                </select>

                <select
                  value={logisticsLoad}
                  onChange={(e) => setLogisticsLoad(e.target.value)}
                  className="w-full cursor-pointer p-4 neu-inset rounded-2xl text-[#3D4852] font-semibold outline-none"
                >
                  <option value="" disabled>
                    Select approximate load
                  </option>
                  <option value="up-to-100">Up to 100 kg</option>
                  <option value="100-300">100 – 300 kg</option>
                  <option value="300-500">300 – 500 kg</option>
                  <option value="500-1000">500 – 1000 kg</option>
                  <option value="above-1000">Above 1000 kg</option>
                </select>

                <button
                  type="button"
                  onClick={bookLogistics}
                  className="w-full py-4 text-base font-bold neu-btn-primary shadow-lg active:scale-[0.99]"
                >
                  Book Logistics →
                </button>
              </div>
            )}
          </div>
        </div>



      </div>
    </section>
  );
}
