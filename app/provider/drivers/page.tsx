"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Search,
  UserRound,
  Car,
  MapPin,
  Phone,
  CheckCircle2,
  Clock,
  XCircle,
  MoreVertical,
  Trash2,
  Power,
} from "lucide-react";
import { useEffect, useState } from "react";

// CHANGED: Driver structure
type Driver = {
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
  createdAt?: string;
};

// CHANGED: Vehicle structure matching Provider Vehicles page
type Vehicle = {
  id: number;
  model: string;
  number: string;
  category: string;
  fuel: string;
  driver: string;
  status: "Active" | "Offline";
  location: string;
  createdAt?: string;
};

const DRIVERS_STORAGE_KEY = "infurnusProviderDrivers";
const VEHICLES_STORAGE_KEY = "infurnusProviderVehicles";

// CHANGED: Demo drivers used only on first visit.
const initialDrivers: Driver[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    phone: "+91 98765 43210",
    vehicle: "Toyota Innova Crysta",
    vehicleNumber: "BR01CD5678",
    vehicleId: 2,
    status: "On Trip",
    location: "Boring Road",
    earnings: "₹1,850",
    rating: "4.8",
  },
  {
    id: 2,
    name: "Amit Kumar",
    phone: "+91 91234 56789",
    vehicle: "Mahindra Thar",
    vehicleNumber: "BR01GH3456",
    vehicleId: 4,
    status: "Online",
    location: "Patna Airport",
    earnings: "₹1,450",
    rating: "4.7",
  },
  {
    id: 3,
    name: "Sanjay Kumar",
    phone: "+91 99887 66554",
    vehicle: "Tata Ace",
    vehicleNumber: "BR01EF9012",
    vehicleId: 3,
    status: "Offline",
    location: "Kankarbagh",
    earnings: "₹950",
    rating: "4.6",
  },
];

export default function ProviderDriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  // CHANGED: Action menu
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  // CHANGED: Load drivers and vehicles
  useEffect(() => {
    loadDrivers();
    loadVehicles();

    const handleVehiclesUpdated = () => {
      loadVehicles();
      loadDrivers();
    };

    const handleDriversUpdated = () => {
      loadDrivers();
    };

    window.addEventListener(
      "infurnusVehiclesUpdated",
      handleVehiclesUpdated
    );

    window.addEventListener(
      "infurnusDriversUpdated",
      handleDriversUpdated
    );

    return () => {
      window.removeEventListener(
        "infurnusVehiclesUpdated",
        handleVehiclesUpdated
      );

      window.removeEventListener(
        "infurnusDriversUpdated",
        handleDriversUpdated
      );
    };
  }, []);

  // CHANGED: Load persisted drivers
  const loadDrivers = () => {
    try {
      const stored = localStorage.getItem(
        DRIVERS_STORAGE_KEY
      );

      if (stored) {
        const parsed = JSON.parse(stored);

        if (Array.isArray(parsed)) {
          setDrivers(parsed);
          return;
        }
      }

      localStorage.setItem(
        DRIVERS_STORAGE_KEY,
        JSON.stringify(initialDrivers)
      );

      setDrivers(initialDrivers);
    } catch (error) {
      console.error(
        "Failed to load drivers:",
        error
      );

      setDrivers(initialDrivers);
    }
  };

  // CHANGED: Load persisted vehicles
  const loadVehicles = () => {
    try {
      const stored = localStorage.getItem(
        VEHICLES_STORAGE_KEY
      );

      if (!stored) {
        setVehicles([]);
        return;
      }

      const parsed = JSON.parse(stored);

      setVehicles(
        Array.isArray(parsed) ? parsed : []
      );
    } catch (error) {
      console.error(
        "Failed to load vehicles:",
        error
      );

      setVehicles([]);
    }
  };

  // CHANGED: Save drivers
  const saveDrivers = (updatedDrivers: Driver[]) => {
    setDrivers(updatedDrivers);

    localStorage.setItem(
      DRIVERS_STORAGE_KEY,
      JSON.stringify(updatedDrivers)
    );

    window.dispatchEvent(
      new Event("infurnusDriversUpdated")
    );
  };

  const filteredDrivers = drivers.filter(
    (driver) => {
      const searchTerm = search
        .toLowerCase()
        .trim();

      return (
        driver.name
          .toLowerCase()
          .includes(searchTerm) ||
        driver.phone
          .toLowerCase()
          .includes(searchTerm) ||
        driver.vehicle
          .toLowerCase()
          .includes(searchTerm) ||
        driver.vehicleNumber
          .toLowerCase()
          .includes(searchTerm)
      );
    }
  );

  // CHANGED: Add driver and persist it
  const addDriver = (
    driver: Omit<Driver, "id" | "createdAt">
  ) => {
    const newDriver: Driver = {
      ...driver,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    saveDrivers([newDriver, ...drivers]);

    // CHANGED: Update assigned vehicle
    if (driver.vehicleId) {
      assignDriverToVehicle(
        driver.vehicleId,
        driver.name
      );
    }

    setShowAdd(false);
  };

  // CHANGED: Keep vehicle's assigned driver synchronized
  const assignDriverToVehicle = (
    vehicleId: number,
    driverName: string
  ) => {
    try {
      const stored = localStorage.getItem(
        VEHICLES_STORAGE_KEY
      );

      if (!stored) return;

      const storedVehicles: Vehicle[] =
        JSON.parse(stored);

      const updatedVehicles =
        storedVehicles.map((vehicle) =>
          vehicle.id === vehicleId
            ? {
                ...vehicle,
                driver: driverName,
              }
            : vehicle
        );

      localStorage.setItem(
        VEHICLES_STORAGE_KEY,
        JSON.stringify(updatedVehicles)
      );

      setVehicles(updatedVehicles);

      window.dispatchEvent(
        new Event("infurnusVehiclesUpdated")
      );
    } catch (error) {
      console.error(
        "Failed to assign driver to vehicle:",
        error
      );
    }
  };

  // CHANGED: Toggle Online / Offline
  // CHANGED: Toggle Online / Offline
const toggleDriverStatus = (
  driverId: number
) => {
  // CHANGED: Explicitly type the updated driver list
  const updatedDrivers: Driver[] = drivers.map(
    (driver) => {
      if (driver.id !== driverId) return driver;

      if (driver.status === "On Trip") {
        return driver;
      }

      return {
        ...driver,
        status:
          driver.status === "Online"
            ? "Offline"
            : "Online",
      };
    }
  );

  saveDrivers(updatedDrivers);
  setActiveMenu(null);
};
 

  // CHANGED: Delete driver
  const deleteDriver = (driverId: number) => {
    const driver = drivers.find(
      (item) => item.id === driverId
    );

    if (!driver) return;

    const confirmed = window.confirm(
      `Remove ${driver.name} from your drivers?`
    );

    if (!confirmed) return;

    const updatedDrivers = drivers.filter(
      (item) => item.id !== driverId
    );

    saveDrivers(updatedDrivers);

    // CHANGED: Remove driver assignment from vehicle
    if (driver.vehicleId) {
      try {
        const stored = localStorage.getItem(
          VEHICLES_STORAGE_KEY
        );

        if (stored) {
          const storedVehicles: Vehicle[] =
            JSON.parse(stored);

          const updatedVehicles =
            storedVehicles.map((vehicle) =>
              vehicle.id === driver.vehicleId
                ? {
                    ...vehicle,
                    driver: "Not Assigned",
                  }
                : vehicle
            );

          localStorage.setItem(
            VEHICLES_STORAGE_KEY,
            JSON.stringify(updatedVehicles)
          );

          setVehicles(updatedVehicles);

          window.dispatchEvent(
            new Event("infurnusVehiclesUpdated")
          );
        }
      } catch (error) {
        console.error(
          "Failed to remove vehicle assignment:",
          error
        );
      }
    }

    setActiveMenu(null);
  };

  const onlineCount = drivers.filter(
    (driver) => driver.status === "Online"
  ).length;

  const tripCount = drivers.filter(
    (driver) => driver.status === "On Trip"
  ).length;

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-8 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8">
          <div className="space-y-1">
            <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
              PROVIDER DASHBOARD
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
              Driver Roster & Allocations
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
              Manage registered drivers, vehicle pairings, ratings, and active duty status.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/provider"
              className="neu-btn px-4 py-3 text-xs font-bold flex items-center gap-2 w-fit"
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </Link>
            <button
              onClick={() => setShowAdd(true)}
              className="neu-btn neu-btn-primary px-5 py-3 text-xs font-bold flex items-center gap-2"
            >
              <Plus size={16} />
              <span>Add Driver</span>
            </button>
          </div>
        </div>

        {/* SUMMARY */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Summary
            title="Total Drivers"
            value={drivers.length.toString()}
            icon={UserRound}
          />

          <Summary
            title="Online"
            value={onlineCount.toString()}
            icon={CheckCircle2}
          />

          <Summary
            title="On Trip"
            value={tripCount.toString()}
            icon={Car}
          />

          <Summary
            title="Offline"
            value={drivers
              .filter(
                (driver) =>
                  driver.status === "Offline"
              )
              .length.toString()}
            icon={XCircle}
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
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search driver or vehicle..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </section>

        {/* DRIVER CARDS */}
        <section className="mt-5 grid gap-4 lg:grid-cols-2">
          {filteredDrivers.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center lg:col-span-2">
              <UserRound
                size={36}
                className="mx-auto text-slate-300"
              />

              <p className="mt-3 font-semibold text-slate-700">
                No drivers found
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Add a driver or try another search.
              </p>
            </div>
          ) : (
            filteredDrivers.map((driver) => (
              <div
                key={driver.id}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                {/* DRIVER */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                      {driver.name
                        .split(" ")
                        .map(
                          (word) => word[0]
                        )
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>

                    <div>
                      <h2 className="font-bold text-slate-950">
                        {driver.name}
                      </h2>

                      <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                        <Phone size={14} />
                        {driver.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Status
                      status={driver.status}
                    />

                    {/* CHANGED: Driver action menu */}
                    <div className="relative">
                      <button
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === driver.id
                              ? null
                              : driver.id
                          )
                        }
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                      >
                        <MoreVertical
                          size={18}
                        />
                      </button>

                      {activeMenu ===
                        driver.id && (
                        <div className="absolute right-0 top-10 z-20 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                          <button
                            onClick={() =>
                              toggleDriverStatus(
                                driver.id
                              )
                            }
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                          >
                            <Power
                              size={15}
                            />

                            {driver.status ===
                            "Online"
                              ? "Set Offline"
                              : "Set Online"}
                          </button>

                          <button
                            onClick={() =>
                              deleteDriver(
                                driver.id
                              )
                            }
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                          >
                            <Trash2
                              size={15}
                            />
                            Remove Driver
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* VEHICLE */}
                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600">
                      <Car size={19} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Assigned Vehicle
                      </p>

                      <p className="text-sm font-semibold text-slate-800">
                        {driver.vehicle}
                      </p>

                      <p className="text-xs text-slate-500">
                        {driver.vehicleNumber}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 p-3">
                    <p className="text-xs text-slate-400">
                      Today's Earnings
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      {driver.earnings}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 p-3">
                    <p className="text-xs text-slate-400">
                      Rating
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      ⭐ {driver.rating}
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin
                    size={16}
                    className="text-blue-600"
                  />
                  {driver.location}
                </div>

                {/* ACTIONS */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={() =>
                      alert(
                        `${driver.name}\n${driver.phone}\n${driver.vehicle}\n${driver.vehicleNumber}`
                      )
                    }
                    className="rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    View Profile
                  </button>

                  <button
                    onClick={() =>
                      toggleDriverStatus(
                        driver.id
                      )
                    }
                    disabled={
                      driver.status === "On Trip"
                    }
                    className="rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    {driver.status === "Online"
                      ? "Set Offline"
                      : driver.status === "On Trip"
                      ? "On Trip"
                      : "Set Online"}
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>

      {/* ADD DRIVER MODAL */}
      {showAdd && (
        <AddDriverModal
          vehicles={vehicles}
          drivers={drivers}
          onClose={() =>
            setShowAdd(false)
          }
          onAdd={addDriver}
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

function Status({
  status,
}: {
  status: string;
}) {
  if (status === "Online") {
    return (
      <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#000000] inline-flex items-center gap-1">
        <CheckCircle2 size={13} />
        Online
      </span>
    );
  }

  if (status === "On Trip") {
    return (
      <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#000000] inline-flex items-center gap-1">
        <Clock size={13} />
        On Trip
      </span>
    );
  }

  return (
    <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#6B7280] inline-flex items-center gap-1">
      <XCircle size={13} />
      Offline
    </span>
  );
}

function AddDriverModal({
  onClose,
  onAdd,
  vehicles,
  drivers,
}: {
  onClose: () => void;
  onAdd: (
    driver: Omit<Driver, "id" | "createdAt">
  ) => void;
  vehicles: Vehicle[];
  drivers: Driver[];
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleId, setVehicleId] =
    useState<string>("");
  const [error, setError] = useState("");

  // CHANGED: Find selected vehicle.
  const selectedVehicle = vehicles.find(
    (vehicle) =>
      vehicle.id === Number(vehicleId)
  );

  // CHANGED: Vehicles already assigned to a driver
  // should not be selectable.
  const assignedVehicleIds = drivers
    .map((driver) => driver.vehicleId)
    .filter(Boolean);

  const availableVehicles = vehicles.filter(
    (vehicle) =>
      !assignedVehicleIds.includes(vehicle.id)
  );

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.trim();

    if (!cleanName) {
      setError(
        "Please enter the driver's name."
      );
      return;
    }

    if (!cleanPhone) {
      setError(
        "Please enter the driver's mobile number."
      );
      return;
    }

    if (!selectedVehicle) {
      setError(
        "Please select a vehicle for this driver."
      );
      return;
    }

    onAdd({
      name: cleanName,
      phone: cleanPhone,
      vehicle: selectedVehicle.model,
      vehicleNumber: selectedVehicle.number,
      vehicleId: selectedVehicle.id,
      status: "Offline",
      location:
        selectedVehicle.location ||
        "Not Available",
      earnings: "₹0",
      rating: "New",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950">
            Add Driver
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Add a driver and assign one of your
            registered vehicles.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          <Field
            label="Driver Name"
            placeholder="Example: Rahul Kumar"
            value={name}
            onChange={(value) => {
              setName(value);
              setError("");
            }}
            required
          />

          <Field
            label="Mobile Number"
            placeholder="Example: +91 98765 43210"
            value={phone}
            onChange={(value) => {
              setPhone(value);
              setError("");
            }}
            required
          />

          {/* CHANGED: Vehicle selection comes from
              Provider Vehicles instead of free text. */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Assign Vehicle
            </label>

            {availableVehicles.length === 0 ? (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700">
                No unassigned vehicles available.
                Add a vehicle first or remove an
                existing vehicle assignment.
              </div>
            ) : (
              <select
                value={vehicleId}
                onChange={(e) => {
                  setVehicleId(
                    e.target.value
                  );
                  setError("");
                }}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option value="">
                  Select a vehicle
                </option>

                {availableVehicles.map(
                  (vehicle) => (
                    <option
                      key={vehicle.id}
                      value={vehicle.id}
                    >
                      {vehicle.model} —{" "}
                      {vehicle.number}
                    </option>
                  )
                )}
              </select>
            )}
          </div>

          {/* CHANGED: Selected vehicle preview */}
          {selectedVehicle && (
            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-xs font-medium text-blue-600">
                Selected Vehicle
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                {selectedVehicle.model}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {selectedVehicle.number} •{" "}
                {selectedVehicle.category}
              </p>
            </div>
          )}

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
              disabled={
                availableVehicles.length === 0
              }
              className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Add Driver
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
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}