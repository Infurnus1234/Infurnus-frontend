import Link from "next/link";

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
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold">
                I
              </div>

              <span className="text-xl font-bold tracking-wide">
                INFURNUS
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Your complete mobility and logistics platform for rides,
              rentals, deliveries and business transportation solutions.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold transition hover:bg-blue-600"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold transition hover:bg-blue-600"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold transition hover:bg-blue-600"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold transition hover:bg-blue-600"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href="/about"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-white">Partner With Us</h3>

            <ul className="mt-5 space-y-3">
              {partners.map((partner) => (
                <li key={partner}>
                  <Link
                    href="/business"
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {partner}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* App Download */}
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="font-semibold">
              Get the Infurnus App
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Book rides and manage your deliveries from anywhere.
            </p>
          </div>

          <div className="mt-5 flex gap-3 md:mt-0">
            <button className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
               App Store
            </button>

            <button className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
              ▶ Google Play
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Infurnus. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}