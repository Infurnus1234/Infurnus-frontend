"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#E0E5EC]/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="neu-inset-deep flex h-11 w-11 items-center justify-center rounded-2xl overflow-hidden p-1 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Infurnus Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <span className="font-display text-xl font-extrabold tracking-tight text-[#3D4852]">
            INFURNUS
          </span>
        </Link>

        {/* DESKTOP NAV LINKS CONTAINER */}
        <nav className="hidden md:flex items-center neu-inset-sm px-6 py-2 rounded-full space-x-6">
          <Link
            href="/"
            className="text-sm font-semibold text-[#3D4852] transition-colors duration-200 hover:text-[#000000]"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-semibold text-[#6B7280] transition-colors duration-200 hover:text-[#000000]"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold text-[#6B7280] transition-colors duration-200 hover:text-[#000000]"
          >
            About Us
          </Link>
          <Link
            href="/vendor"
            className="text-sm font-semibold text-[#6B7280] transition-colors duration-200 hover:text-[#000000]"
          >
            Business
          </Link>
          <Link
            href="/support"
            className="text-sm font-semibold text-[#6B7280] transition-colors duration-200 hover:text-[#000000]"
          >
            Support
          </Link>
        </nav>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="neu-btn px-5 py-2.5 text-xs font-bold text-[#3D4852]"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="neu-btn neu-btn-primary px-5 py-2.5 text-xs font-bold"
          >
            Become a Provider
          </Link>
        </div>

        {/* MOBILE MENU HAMBURGER BUTTON */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neu-btn p-2.5 text-[#3D4852] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden neu-extruded mx-4 mb-4 rounded-3xl bg-[#E0E5EC] p-6 space-y-4">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#3D4852] py-2 border-b border-[#A3B1C6]/20"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#6B7280] py-2 border-b border-[#A3B1C6]/20 hover:text-[#000000]"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#6B7280] py-2 border-b border-[#A3B1C6]/20 hover:text-[#000000]"
          >
            About Us
          </Link>
          <Link
            href="/vendor"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#6B7280] py-2 border-b border-[#A3B1C6]/20 hover:text-[#000000]"
          >
            Business
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#6B7280] py-2 hover:text-[#000000]"
          >
            Support
          </Link>

          <div className="pt-4 flex flex-col space-y-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="neu-btn w-full text-center py-3 text-sm font-bold text-[#3D4852]"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="neu-btn neu-btn-primary w-full text-center py-3 text-sm font-bold"
            >
              Book a Ride
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
