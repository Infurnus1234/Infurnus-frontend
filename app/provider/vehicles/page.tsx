"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Car,
  Plus,
  Search,
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  MapPin,
  UserRound,
  Settings,
  Trash2,
  Power,
} from "lucide-react";
import { useEffect, useState } from "react";

// CHANGED: Added proper vehicle type.
type Vehicle = {
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
  createdAt?: string;
};

// CHANGED: Demo vehicles are used only on the first visit.
// After that, vehicles are stored in localStorage.
const initialVehicles: Vehicle[] = [
  {
    id: 1,
    model: "Maruti Suzuki Dzire",
    number: "BR01AB1234",
    category: "Passenger",
    fuel: "Petrol",
    driver: "Vikram Rao",
    status: "Active",
    location: "Patna Airport",
  },
  {
    id: 2,
    model: "Toyota Innova Crysta",
    number: "BR01CD5678",
    category: "Premium Vehicle",
    fuel: "Diesel",
    driver: "Rahul Kumar",
    status: "Active",
    location: "Boring Road",
  },
  {
    id: 3,
    model: "Tata Ace",
    number: "BR01EF9012",
    category: "Logistics",
    fuel: "Diesel",
    driver: "Sanjay Kumar",
    status: "Active",
    location: "Kankarbagh",
  },
  {
    id: 4,
    model: "Mahindra Thar",
    number: "BR01GH3456",
    category: "Premium Vehicle",
    fuel: "Petrol",
    driver: "Amit Kumar",
    status: "Offline",
    location: "Patna",
  },
];

const VEHICLES_STORAGE_KEY = "infurnusProviderVehicles";

export default function ProviderVehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  // CHANGED: State for vehicle action menu.
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  // CHANGED: Load vehicles from localStorage.
  useEffect(() => {
    try {
      const storedVehicles = localStorage.getItem(
        VEHICLES_STORAGE_KEY
      );

      if (storedVehicles) {
        const parsedVehicles = JSON.parse(storedVehicles);

        if (Array.isArray(parsedVehicles)) {
          setVehicles(parsedVehicles);
          return;
        }
      }

      // First visit → load demo vehicles.
      localStorage.setItem(
        VEHICLES_STORAGE_KEY,
        JSON.stringify(initialVehicles)
      );

      setVehicles(initialVehicles);
    } catch (error) {
      console.error("Failed to load provider vehicles:", error);
      setVehicles(initialVehicles);
    }
  }, []);

  // CHANGED: Save vehicle changes.
  const saveVehicles = (updatedVehicles: Vehicle[]) => {
    setVehicles(updatedVehicles);

    localStorage.setItem(
      VEHICLES_STORAGE_KEY,
      JSON.stringify(updatedVehicles)
    );

    // CHANGED: Notify other Infurnus pages.
    window.dispatchEvent(
      new Event("infurnusVehiclesUpdated")
    );
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    const searchTerm = search.toLowerCase().trim();

    return (
      vehicle.model.toLowerCase().includes(searchTerm) ||
      vehicle.number.toLowerCase().includes(searchTerm) ||
      vehicle.driver.toLowerCase().includes(searchTerm) ||
      vehicle.category.toLowerCase().includes(searchTerm)
    );
  });

  // CHANGED: Add and persist vehicle.
  const addVehicle = (
    vehicle: Omit<Vehicle, "id" | "createdAt">
  ) => {
    const newVehicle: Vehicle = {
      ...vehicle,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    saveVehicles([newVehicle, ...vehicles]);
    setShowAdd(false);
  };

 // CHANGED: Toggle vehicle Active / Offline.
const toggleVehicleStatus = (vehicleId: number) => {
  // CHANGED: Explicitly type the updated vehicle list
  const updatedVehicles: Vehicle[] = vehicles.map((vehicle) =>
    vehicle.id === vehicleId
      ? {
          ...vehicle,
          status:
            vehicle.status === "Active"
              ? "Offline"
              : "Active",
        }
      : vehicle
  );

  saveVehicles(updatedVehicles);
  setActiveMenu(null);
};

  // CHANGED: Delete vehicle.
  const deleteVehicle = (vehicleId: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this vehicle?"
    );

    if (!confirmed) return;

    const updatedVehicles = vehicles.filter(
      (vehicle) => vehicle.id !== vehicleId
    );

    saveVehicles(updatedVehicles);
    setActiveMenu(null);
  };

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-8 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* HEADER / TITLE */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8">
          <div className="space-y-1">
            <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
              PROVIDER DASHBOARD
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
              Vehicle Fleet Management
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
              Manage your registered vehicles and driver assignments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/provider"
              className="neu-btn px-4 py-3 text-xs font-bold flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </Link>
            <button
              onClick={() => setShowAdd(true)}
              className="neu-btn neu-btn-primary px-5 py-3 text-xs font-bold flex items-center gap-2"
            >
              <Plus size={16} />
              <span>Add Vehicle</span>
            </button>
          </div>
        </div>

        {/* SUMMARY */}
        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          <Summary
            title="Total Vehicles"
            value={vehicles.length.toString()}
            icon={Car}
          />

          <Summary
            title="Active"
            value={vehicles
              .filter(
                (vehicle) => vehicle.status === "Active"
              )
              .length.toString()}
            icon={CheckCircle2}
          />

          <Summary
            title="Offline"
            value={vehicles
              .filter(
                (vehicle) => vehicle.status === "Offline"
              )
              .length.toString()}
            icon={AlertCircle}
          />
        </section>

        {/* SEARCH */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vehicle, number or driver..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </section>

        {/* VEHICLES */}
        <section className="mt-5 grid gap-4 lg:grid-cols-2">
          {filteredVehicles.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center lg:col-span-2">
              <Car
                size={35}
                className="mx-auto text-slate-300"
              />

              <p className="mt-3 font-semibold text-slate-700">
                No vehicles found
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Add a vehicle or try another search.
              </p>
            </div>
          ) : (
            filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Car size={24} />
                    </div>

                    <div>
                      <h2 className="font-bold text-slate-950">
                        {vehicle.model}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        {vehicle.number}
                      </p>
                    </div>
                  </div>

                  {/* CHANGED: Working vehicle action menu */}
                  <div className="relative">
                    <button
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === vehicle.id
                            ? null
                            : vehicle.id
                        )
                      }
                      className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    >
                      <MoreVertical size={19} />
                    </button>

                    {activeMenu === vehicle.id && (
                      <div className="absolute right-0 top-10 z-20 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                        <button
                          onClick={() =>
                            toggleVehicleStatus(vehicle.id)
                          }
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                        >
                          <Power size={15} />

                          {vehicle.status === "Active"
                            ? "Set Offline"
                            : "Set Active"}
                        </button>

                        <button
                          onClick={() =>
                            deleteVehicle(vehicle.id)
                          }
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={15} />
                          Remove Vehicle
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Detail
                    label="Category"
                    value={vehicle.category}
                  />

                  <Detail
                    label="Fuel"
                    value={vehicle.fuel}
                  />
                </div>

                {/* DRIVER */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500">
                      <UserRound size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Assigned Driver
                      </p>

                      <p className="text-sm font-semibold text-slate-700">
                        {vehicle.driver}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      vehicle.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {vehicle.status}
                  </span>
                </div>

                {/* LOCATION */}
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin
                    size={16}
                    className="text-blue-600"
                  />
                  {vehicle.location}
                </div>

                {/* ACTIONS */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={() =>
                      alert(
                        `${vehicle.model}\n${vehicle.number}\n${vehicle.category}\n${vehicle.fuel}`
                      )
                    }
                    className="rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() =>
                      toggleVehicleStatus(vehicle.id)
                    }
                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    <Settings size={16} />

                    {vehicle.status === "Active"
                      ? "Set Offline"
                      : "Set Active"}
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>

      {/* ADD VEHICLE MODAL */}
      {showAdd && (
        <AddVehicleModal
          onClose={() => setShowAdd(false)}
          onAdd={addVehicle}
        />
      )}
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Summary({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
          {title}
        </p>
        <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
          <Icon size={20} />
        </div>
      </div>
      <p className="text-2xl font-extrabold text-[#3D4852]">
        {value}
      </p>
    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="neu-inset-deep p-3 rounded-xl">
      <p className="text-[11px] font-bold uppercase text-[#6B7280]">
        {label}
      </p>
      <p className="mt-0.5 text-xs font-bold text-[#3D4852]">
        {value}
      </p>
    </div>
  );
}

function AddVehicleModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (
    vehicle: Omit<Vehicle, "id" | "createdAt">
  ) => void;
}) {
  const [model, setModel] = useState("");
  const [number, setNumber] = useState("");
  const [category, setCategory] =
    useState<Vehicle["category"]>("Passenger");
  const [fuel, setFuel] = useState("Petrol");
  const [driver, setDriver] = useState("");
  const [location, setLocation] = useState("Not Available");

  // CHANGED: Form validation message.
  const [error, setError] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const cleanModel = model.trim();
    const cleanNumber = number
      .trim()
      .toUpperCase()
      .replace(/\s+/g, "");

    if (!cleanModel) {
      setError("Please enter the vehicle model.");
      return;
    }

    if (!cleanNumber) {
      setError("Please enter the vehicle number.");
      return;
    }

    onAdd({
      model: cleanModel,
      number: cleanNumber,
      category,
      fuel,
      driver: driver.trim() || "Not Assigned",
      status: "Offline",
      location: location.trim() || "Not Available",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Add Vehicle
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add a vehicle to your Infurnus account.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-slate-400 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          <Field
            label="Vehicle Model"
            placeholder="Example: Maruti Suzuki Dzire"
            value={model}
            onChange={(value) => {
              setModel(value);
              setError("");
            }}
            required
          />

          <Field
            label="Vehicle Number"
            placeholder="Example: BR01AB1234"
            value={number}
            onChange={(value) => {
              setNumber(value);
              setError("");
            }}
            required
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Vehicle Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value as Vehicle["category"]
                )
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
              <option value="Passenger">
                Passenger
              </option>

              <option value="Logistics">
                Logistics
              </option>

              <option value="Service Vehicle">
                Service Vehicle
              </option>

              <option value="Premium Vehicle">
                Premium Vehicle
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Fuel Type
            </label>

            <select
              value={fuel}
              onChange={(e) =>
                setFuel(e.target.value)
              }
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
              <option>Petrol</option>
              <option>Diesel</option>
              <option>CNG</option>
              <option>Electric</option>
              <option>Hybrid</option>
            </select>
          </div>

          <Field
            label="Assign Driver"
            placeholder="Example: Rahul Kumar"
            value={driver}
            onChange={(value) => {
              setDriver(value);
              setError("");
            }}
          />

          {/* CHANGED: Added vehicle location. */}
          <Field
            label="Current Location"
            placeholder="Example: Patna Airport"
            value={location}
            onChange={setLocation}
          />

          {error && (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-200 py-3 font-semibold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}