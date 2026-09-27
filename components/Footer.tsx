import Link from "next/link";
import Image from "next/image";

const services = [
  "Ride Booking",
  "Car Rentals",
  "Logistics",
  "Business Solutions",
];

const company = [
  "About Us",
  "Careers",
  "Contact",
  "Support",
];

const partners = [
  "Become a Driver",
  "Vehicle Owner",
  "Business Partner",
  "Partner Login",
];

export default function Footer() {
  return (
    <footer className="bg-[#E0E5EC] text-[#3D4852] pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="neu-inset-deep flex h-12 w-12 items-center justify-center rounded-2xl overflow-hidden p-1">
                <Image
                  src="/logo.png"
                  alt="Infurnus Logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <span className="font-display text-xl font-extrabold tracking-tight text-[#3D4852]">
                INFURNUS
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#6B7280] font-sans">
              Your complete tactile mobility and logistics platform for rides, rentals, deliveries and business transportation solutions.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="neu-btn h-11 w-11 p-0 flex items-center justify-center font-bold text-[#3D4852] text-sm">f</a>
              <a href="#" className="neu-btn h-11 w-11 p-0 flex items-center justify-center font-bold text-[#3D4852] text-sm">in</a>
              <a href="#" className="neu-btn h-11 w-11 p-0 flex items-center justify-center font-bold text-[#3D4852] text-sm">X</a>
              <a href="#" className="neu-btn h-11 w-11 p-0 flex items-center justify-center font-bold text-[#3D4852] text-sm">▶</a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#3D4852]">Services</h3>
            <ul className="mt-5 space-y-3 font-sans">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm font-medium text-[#6B7280] transition-colors duration-200 hover:text-[#000000]">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#3D4852]">Company</h3>
            <ul className="mt-5 space-y-3 font-sans">
              {company.map((item) => (
                <li key={item}>
                  <Link href="/about" className="text-sm font-medium text-[#6B7280] transition-colors duration-200 hover:text-[#000000]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#3D4852]">Partner With Us</h3>
            <ul className="mt-5 space-y-3 font-sans">
              {partners.map((partner) => (
                <li key={partner}>
                  <Link href="/business" className="text-sm font-medium text-[#6B7280] transition-colors duration-200 hover:text-[#000000]">
                    {partner}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 neu-extruded rounded-[32px] bg-[#E0E5EC] p-8 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-lg font-bold text-[#3D4852]">Get the Infurnus App</h3>
            <p className="mt-1 text-sm text-[#6B7280] font-sans">Book rides and manage your deliveries from anywhere.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-0">
            <button className="neu-btn neu-btn-primary px-6 py-3 text-sm font-bold"> App Store</button>
            <button className="neu-btn neu-btn-primary px-6 py-3 text-sm font-bold">▶ Google Play</button>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col gap-4 border-t border-[#A3B1C6]/30 text-sm font-medium text-[#6B7280] md:flex-row md:items-center md:justify-between font-sans">
          <p>© {new Date().getFullYear()} Infurnus. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-[#000000]">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-[#000000]">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
