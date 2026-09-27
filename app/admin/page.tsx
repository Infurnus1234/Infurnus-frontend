import Link from "next/link";
import { ShieldAlert, Users, Car, Activity } from "lucide-react";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#E0E5EC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="neu-extruded rounded-[40px] bg-[#E0E5EC] p-10 md:p-16">
          <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full">
            ADMINISTRATOR PORTAL
          </span>

          <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold text-[#3D4852] sm:text-5xl">
            Infurnus System Administration
          </h1>

          <p className="font-sans mt-5 max-w-2xl text-lg text-[#6B7280]">
            Monitor system status, platform user management, vehicle dispatch operations, and financial reports.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/login?type=admin"
              className="neu-btn neu-btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold text-sm"
            >
              <span>Admin Secure Login</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {[
            { icon: Users, label: "Total Users", val: "560,420" },
            { icon: Car, label: "Active Drivers", val: "48,290" },
            { icon: Activity, label: "Live Trips", val: "1,420" },
            { icon: ShieldAlert, label: "System Health", val: "99.9%" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-8 text-center">
                <div className="neu-inset-deep mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-[#000000]">
                  <Icon size={26} />
                </div>
                <div className="font-display mt-4 text-3xl font-extrabold text-[#000000]">{stat.val}</div>
                <div className="font-sans mt-1 text-xs font-bold text-[#6B7280]">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
