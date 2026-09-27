import Link from "next/link";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import {
  Car,
  Clock,
  Package,
  Ambulance,
  Building2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "City Rides & Auto",
      badge: "Instant Mobility",
      desc: "Fast, reliable daily commuting with cabs, bike taxis, and auto rickshaws at transparent non-surge fares.",
      icon: Car,
      link: "/customer/book?type=city",
    },
    {
      title: "Hourly Chauffeur Rental",
      badge: "Flexibility",
      desc: "Hire a vehicle and driver for 2 to 24 hours with multi-stop flexibility and free fuel included.",
      icon: Clock,
      link: "/customer/rental",
    },
    {
      title: "Logistics & Goods Cargo",
      badge: "Heavy Freight",
      desc: "From mini-trucks to 18-wheeler trailers. Live GPS tracking and proof of delivery for personal & enterprise cargo.",
      icon: Package,
      link: "/customer/logistics",
    },
    {
      title: "Emergency & Recovery Fleet",
      badge: "24/7 Priority",
      desc: "Dedicated ambulance dispatch, breakdown towing, and heavy lifting cranes dispatched in under 15 minutes.",
      icon: Ambulance,
      link: "/customer/service",
    },
    {
      title: "Enterprise Fleet Solutions",
      badge: "B2B Logistics",
      desc: "Dedicated logistics contracts, monthly vehicle leases, and API access for corporate transportation.",
      icon: Building2,
      link: "/business",
    },
    {
      title: "VIP & Premium Travel",
      badge: "Executive Class",
      desc: "Luxury sedans, SUV escorts, and airport transfers with top-tier verified chauffeurs.",
      icon: ShieldCheck,
      link: "/customer/premium",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E0E5EC] flex flex-col justify-between">
      <main className="py-16 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
        <div className="mx-auto max-w-7xl space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 neu-inset-sm px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
              <Sparkles size={14} />
              Infurnus Integrated Platform
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#3D4852] tracking-tight">
              Our Fleet & Mobility Services
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7280] leading-relaxed">
              Explore our comprehensive ecosystem built to power personal transit, parcel deliveries, hourly rentals, emergency medical care, and enterprise logistics.
            </p>
          </div>

          {/* Detailed Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="neu-extruded neu-extruded-hover rounded-[36px] bg-[#E0E5EC] p-8 flex flex-col justify-between space-y-6 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="neu-inset-deep p-4 rounded-2xl text-[#000000]">
                        <Icon size={32} />
                      </div>
                      <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl font-bold text-[#3D4852]">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <Link
                      href={service.link}
                      className="neu-btn neu-btn-primary w-full py-3.5 px-6 rounded-2xl text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Feature Component */}
          <div className="neu-extruded rounded-[40px] bg-[#E0E5EC] p-8 sm:p-12">
            <Services />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
