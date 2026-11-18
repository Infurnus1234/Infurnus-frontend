import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Trash2,
  ShieldAlert,
  Smartphone,
  Car,
  Mail,
  Clock,
  CheckCircle2,
  FileText,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Account Deletion | INFURNUS Logistics Private Limited",
  description:
    "Official account deletion instructions and request submission for INFURNUS User App and Driver App accounts.",
  alternates: {
    canonical: "https://infurnuslogistics.com/delete-account",
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <Navbar />

      {/* Hero Header */}
      <header className="border-b border-slate-200 bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <ChevronRight size={14} />
            <span className="text-red-400">Account Deletion</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-red-900/60 px-3.5 py-1 text-xs font-medium text-red-300 ring-1 ring-red-700/50">
            <Trash2 size={14} className="text-red-400" />
            Official Account Deletion & Data Erasure Portal
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            ACCOUNT DELETION & DATA ERASURE
          </h1>

          <p className="mt-2 text-xl font-semibold text-slate-300">
            INFURNUS LOGISTICS PRIVATE LIMITED
          </p>

          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed">
            INFURNUS respects your right to request deletion of your account and personal information. This page explains how customers, drivers, and fleet owners can delete their accounts directly in-app or submit an external deletion request.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 flex-1 w-full space-y-10">

        {/* Overview Banner */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Clock size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Deletion Processing Timeline</h2>
              <p className="text-sm text-slate-500">Approved timeline: Within 30 days of verified request</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Eligible deletion requests are processed <strong>within 30 days</strong> of account ownership verification, subject to applicable Indian legal requirements and lawful retention exceptions. Account deactivation or temporary logout is not equivalent to permanent account deletion. Upon processing, your account credentials, login sessions, and associated personal information will be permanently deleted or irreversibly anonymized.
          </p>
        </div>

        {/* Option 1: In-App Deletion */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            1. In-App Deletion Instructions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* User App */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <Smartphone size={16} />
                  INFURNUS User App (<code className="font-mono text-xs">com.infurnus.app</code>)
                </div>
                <h3 className="text-base font-bold text-slate-900">Customer Account Deletion</h3>
                <ol className="list-decimal pl-5 text-sm space-y-2 text-slate-600">
                  <li>Open the <strong>INFURNUS User App</strong> on your mobile device.</li>
                  <li>Ensure you are logged into the account you wish to delete.</li>
                  <li>Tap your <strong>Profile</strong> icon in the top header or navigation.</li>
                  <li>Navigate to <strong>Account Settings</strong>.</li>
                  <li>Select <strong>Privacy &amp; Security</strong>.</li>
                  <li>Tap <strong>Delete Account</strong> at the bottom of the security settings.</li>
                  <li>Review the consequences of deletion and tap <strong>Confirm Deletion</strong>.</li>
                </ol>
              </div>
              <div className="mt-6 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
                Your mobile session will be terminated immediately upon confirmation.
              </div>
            </div>

            {/* Driver App */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <Car size={16} />
                  INFURNUS Driver App (<code className="font-mono text-xs">com.infurnus.driver.infurnus_driver</code>)
                </div>
                <h3 className="text-base font-bold text-slate-900">Driver &amp; Fleet Owner Deletion</h3>
                <ol className="list-decimal pl-5 text-sm space-y-2 text-slate-600">
                  <li>Open the <strong>INFURNUS Driver App</strong>.</li>
                  <li>Open the main side menu (<strong>Drawer Navigation</strong>).</li>
                  <li>Select <strong>Account &amp; Security</strong>.</li>
                  <li>Select <strong>Security &amp; Privacy Preferences</strong>.</li>
                  <li>Tap <strong>Request Account Deletion</strong>.</li>
                  <li>Complete ownership verification and confirm your request.</li>
                </ol>
              </div>
              <div className="mt-6 rounded-xl bg-amber-50 p-3 text-xs text-amber-800 border border-amber-200">
                <strong>Fleet Owners:</strong> All assigned drivers and registered fleet vehicles must be decommissioned or reassigned before account deletion can be completed.
              </div>
            </div>

          </div>
        </section>

        {/* Option 2: External Request Mechanism */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            2. External Account Deletion Request (Without App Installation)
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            If you have uninstalled the application or cannot access your account, you can submit an account deletion request directly through our designated support channel.
          </p>

          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-blue-900">
              <Mail size={22} className="text-blue-600" />
              <h3 className="text-lg font-bold">Email-Based Request Submission</h3>
            </div>

            <div className="rounded-xl bg-white p-5 border border-blue-100 text-sm space-y-2 text-slate-700">
              <p>
                <strong>Recipient:</strong>{" "}
                <a href="mailto:support@infurnuslogistics.com" className="text-blue-600 font-semibold underline">
                  support@infurnuslogistics.com
                </a>
              </p>
              <p>
                <strong>Email Subject Line:</strong>{" "}
                <code className="rounded bg-slate-100 px-2 py-0.5 text-xs font-mono font-bold text-slate-800">
                  Account Deletion Request – INFURNUS
                </code>
              </p>
              <p className="pt-2 font-medium text-slate-900">Please provide the following details in your email:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Your <strong>Full Registered Name</strong>.</li>
                <li>Your <strong>Registered Mobile Number</strong> (with country code, e.g., +91).</li>
                <li>Your <strong>Registered Email Address</strong>.</li>
                <li>Your <strong>Account Type</strong> (User App customer, Driver, or Fleet Owner).</li>
                <li>A clear statement requesting permanent deletion of your INFURNUS account.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <ShieldAlert size={14} /> Security &amp; Ownership Verification Notice:
              </p>
              <p>
                To protect against unauthorized deletion, our verification team will contact you on your registered mobile number or email address to confirm ownership before proceeding with permanent deletion.
              </p>
              <p className="font-semibold text-amber-950">
                Do NOT send passwords, OTPs, UPI PINs, banking credentials, or unnecessary identity documents via email.
              </p>
            </div>
          </div>
        </section>

        {/* Data Handling Disclosures */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            3. What Happens to Your Data
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-emerald-700 flex items-center gap-2">
                <CheckCircle2 size={18} /> Information Deleted or Anonymized
              </h3>
              <p className="text-xs text-slate-500">Upon completion of the deletion process:</p>
              <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
                <li>Personal profile information (Name, email, phone).</li>
                <li>Profile photographs and avatars.</li>
                <li>Uploaded identity and onboarding verification documents.</li>
                <li>Saved addresses, places, and vehicle preferences.</li>
                <li>Device notification tokens and push registration keys.</li>
                <li>Active JWT tokens, refresh sessions, and cookies.</li>
                <li>Direct location tracking history no longer required for regulatory purposes.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText size={18} className="text-slate-500" /> Information Retained &amp; Lawful Grounds
              </h3>
              <p className="text-xs text-slate-500">Retained strictly for lawful and statutory compliance:</p>
              <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
                <li><strong>Tax and Accounting Records:</strong> Completed invoices, payments, and settlements are retained for statutory periods under Indian tax and corporate laws.</li>
                <li><strong>Fraud Prevention &amp; Safety:</strong> Security incident logs and records related to pending complaints or disputes are maintained to prevent abuse.</li>
                <li><strong>Legal Claims:</strong> Information required to respond to valid court orders, government requests, or active litigation.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Company & Grievance Information */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Company Contact &amp; Grievance Redressal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
            <div>
              <p><strong>Company:</strong> INFURNUS LOGISTICS PRIVATE LIMITED</p>
              <p><strong>Grievance Officer:</strong> Tripti Rani</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@infurnuslogistics.com" className="text-blue-600 underline">
                  support@infurnuslogistics.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919153787859" className="text-blue-600 underline">
                  +91 9153787859
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Registered Office:</p>
              <p>1st Floor, Office No. 105, Road No. 7C, Shiv Mandir Road, Near O.P. Market, Patna, Bihar – 800024, India.</p>
              <div className="mt-3">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 underline"
                >
                  View Complete INFURNUS Privacy Policy <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
