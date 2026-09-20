"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // =========================================================
  // CHANGED: Close mobile menu whenever a navigation item
  // is clicked.
  // =========================================================
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-extrabold tracking-tight"
        >
          <span className="text-slate-950">INFUR</span>
          <span className="text-blue-600">NUS</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 md:flex">

          {/* CHANGED: Services now opens /services */}
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-blue-600" > Home </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Services
          </Link>

          {/* CHANGED: For Business now opens /business */}
          <Link
            href="/business"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            For Business
          </Link>

          {/* CHANGED: About now opens /about */}
          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            About
          </Link>

          {/* CHANGED: Support now opens /support */}
          <Link
            href="/support"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Support
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 md:flex">

          <Link
            href="/login"
            className="px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/provider/register"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Become a Provider
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-sm md:hidden">

          <nav className="flex flex-col gap-1">

            {/* Home */}
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              Home
            </Link>

            {/* CHANGED: Services */}
            <Link
              href="/services"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              Services
            </Link>

            {/* CHANGED: For Business */}
            <Link
              href="/business"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              For Business
            </Link>

            {/* CHANGED: About */}
            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              About
            </Link>

            {/* CHANGED: Support */}
            <Link
              href="/support"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              Support
            </Link>

            {/* ACTIONS */}
            <div className="mt-3 border-t border-slate-100 pt-3">

              <Link
                href="/login"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Login
              </Link>

              <Link
                href="/provider/register"
                onClick={closeMenu}
                className="mt-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Become a Provider
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}