"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { KeyRound, ArrowLeft, Mail, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#E0E5EC] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md space-y-6">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="neu-inset-deep flex h-14 w-14 items-center justify-center rounded-2xl p-1 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Infurnus Logo"
                width={50}
                height={50}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </Link>
          <span className="font-display text-2xl font-extrabold tracking-wider text-[#3D4852]">
            INFURNUS
          </span>
        </div>

        {/* Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 space-y-6">
          
          {!submitted ? (
            <>
              <div className="text-center space-y-2">
                <div className="neu-inset-deep inline-flex p-4 rounded-2xl text-[#000000] mb-2">
                  <KeyRound size={28} />
                </div>
                <h1 className="font-display text-2xl font-extrabold text-[#3D4852]">
                  Forgot Password?
                </h1>
                <p className="font-sans text-xs text-[#6B7280] leading-relaxed">
                  No worries! Enter your registered phone or email address below and we'll send you a password reset verification link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4852] mb-2">
                    Email or Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com or +91 9876543210"
                      className="neu-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm text-[#3D4852] outline-none placeholder:text-[#9CA3AF] transition-all"
                    />
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="neu-btn neu-btn-primary w-full py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <span>Sending Instructions...</span>
                  ) : (
                    <span>Send Reset Link</span>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4 py-4">
              <div className="neu-inset-deep inline-flex p-4 rounded-2xl text-[#000000]">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="font-display text-2xl font-extrabold text-[#3D4852]">
                Reset Link Sent!
              </h2>
              <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
                We've sent password reset instructions to <strong className="text-[#3D4852]">{email}</strong>. Please check your inbox or SMS messages.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="neu-btn px-6 py-2.5 rounded-2xl text-xs font-bold text-[#3D4852] mt-4"
              >
                Try Another Contact
              </button>
            </div>
          )}

          {/* Back to Login Link */}
          <div className="pt-4 border-t border-black/5 text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#3D4852] hover:text-[#000000] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Sign In</span>
            </Link>
          </div>

        </div>

        {/* Security badge footer */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280] font-medium">
          <ShieldCheck size={16} className="text-[#000000]" />
          <span>256-bit Encrypted Security</span>
        </div>

      </div>
    </main>
  );
}
