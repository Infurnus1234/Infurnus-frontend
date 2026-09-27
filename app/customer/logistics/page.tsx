import Link from "next/link";
import { Package, ArrowRight } from "lucide-react";

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-[#E0E5EC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl neu-extruded rounded-[40px] bg-[#E0E5EC] p-10 md:p-16">
        <div className="neu-inset-deep flex h-16 w-16 items-center justify-center rounded-2xl text-[#000000]">
          <Package size={32} />
        </div>
        <span className="inline-block neu-inset-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] rounded-full mt-6">
          INFURNUS LOGISTICS
        </span>
        <h1 className="font-display mt-4 text-4xl font-extrabold text-[#3D4852] sm:text-5xl">
          Logistics & Parcel Delivery
        </h1>
        <p className="font-sans mt-5 text-lg text-[#6B7280] max-w-2xl leading-relaxed">
          Book commercial mini-trucks, Tata Ace, and heavy freight vehicles for safe, tracked goods movement.
        </p>

        <div className="mt-8">
          <Link href="/customer/book?type=logistics" className="neu-btn neu-btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold text-sm">
            <span>Book Logistics Vehicle</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
