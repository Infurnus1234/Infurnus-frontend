import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | INFURNUS Logistics Private Limited",
  description:
    "Official Privacy Policy of INFURNUS LOGISTICS PRIVATE LIMITED covering data collection, location tracking, third-party SDKs, user rights, and account deletion.",
  alternates: {
    canonical: "https://infurnuslogistics.com/privacy",
  },
};

const sections = [
  { id: "section-1", num: "1", title: "Introduction" },
  { id: "section-2", num: "2", title: "Application-Specific Data Collection" },
  { id: "section-3", num: "3", title: "Personal Information We Collect" },
  { id: "section-4", num: "4", title: "Location Information and GPS Tracking" },
  { id: "section-5", num: "5", title: "Authentication and Account Security" },
  { id: "section-6", num: "6", title: "Third-Party SDKs and Service Providers" },
  { id: "section-7", num: "7", title: "Device Permissions" },
  { id: "section-8", num: "8", title: "Notifications and Communications" },
  { id: "section-9", num: "9", title: "Payment Information" },
  { id: "section-10", num: "10", title: "How We Use Your Information" },
  { id: "section-11", num: "11", title: "Data Sharing and Disclosure" },
  { id: "section-12", num: "12", title: "Data Storage and International Transfers" },
  { id: "section-13", num: "13", title: "Data Retention" },
  { id: "section-14", num: "14", title: "Account Deletion and Personal Data Deletion" },
  { id: "section-15", num: "15", title: "Data Security" },
  { id: "section-16", num: "16", title: "Your Privacy Rights" },
  { id: "section-17", num: "17", title: "Children's Privacy" },
  { id: "section-18", num: "18", title: "Cookies and Similar Technologies" },
  { id: "section-19", num: "19", title: "Third-Party Links and Services" },
  { id: "section-20", num: "20", title: "Grievance Redressal" },
  { id: "section-21", num: "21", title: "Changes to This Privacy Policy" },
  { id: "section-22", num: "22", title: "Contact INFURNUS" },
  { id: "section-23", num: "23", title: "Applicable Law and Jurisdiction" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <Navbar />

      {/* Header / Hero */}
      <header className="border-b border-slate-200 bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <span className="text-blue-400">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/60 px-3.5 py-1 text-xs font-medium text-blue-300 ring-1 ring-blue-700/50">
            <Shield size={14} className="text-blue-400" />
            Official Legal Document
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            PRIVACY POLICY
          </h1>

          <p className="mt-2 text-xl font-semibold text-slate-300">
            INFURNUS LOGISTICS PRIVATE LIMITED
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
            <span><strong>Effective Date:</strong> 18 November 2026</span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Last Updated:</strong> 18 November 2026</span>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-900/90 p-5 ring-1 ring-slate-800 text-xs sm:text-sm text-slate-300 space-y-1.5">
            <p><strong>Company:</strong> INFURNUS LOGISTICS PRIVATE LIMITED</p>
            <p><strong>Company Type:</strong> Private Limited Company</p>
            <p><strong>Registered Office:</strong> 1st Floor, Office No. 105, Road No. 7C, Shiv Mandir Road, Near O.P. Market, Patna, Bihar – 800024, India.</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@infurnuslogistics.com" className="text-blue-400 underline hover:text-blue-300">
                support@infurnuslogistics.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919153787859" className="text-blue-400 underline hover:text-blue-300">
                +91 9153787859
              </a>
            </p>
            <p>
              <strong>Official Website:</strong>{" "}
              <a href="https://infurnuslogistics.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">
                https://infurnuslogistics.com
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* Main Body with Sidebar Table of Contents */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Table of Contents
              </h2>
              <nav className="mt-3 space-y-1 text-xs">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition"
                  >
                    <span className="font-semibold text-slate-400 mr-1.5">{item.num}.</span>
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Legal Text Content */}
          <article className="lg:col-span-3 space-y-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm leading-relaxed text-slate-700">
            
            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                1. INTRODUCTION
              </h2>
              <p>
                INFURNUS LOGISTICS PRIVATE LIMITED (&quot;INFURNUS&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates a technology-based transportation and logistics platform that connects customers with drivers, vehicle owners, fleet operators, and service providers.
              </p>
              <p>
                Our platform enables customers to access passenger transportation, chauffeured vehicle rentals, premium vehicle rentals, goods transportation, logistics services, ambulance services, towing services, and other supported vehicle-related services through our website and mobile applications.
              </p>
              <p>
                This Privacy Policy explains how we collect, access, use, store, process, disclose, retain, delete, and protect personal information when individuals use our services.
              </p>
              <p className="font-medium text-slate-900">
                This Privacy Policy applies to:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>INFURNUS User App</strong> – Package Name: <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800 font-mono">com.infurnus.app</code>
                </li>
                <li>
                  <strong>INFURNUS Driver App</strong> – Package Name: <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800 font-mono">com.infurnus.driver.infurnus_driver</code>
                </li>
                <li>
                  INFURNUS official website and related digital services.
                </li>
              </ol>
              <p>
                This policy covers customers, passengers, drivers, fleet owners, driver-cum-fleet owners, and individuals who interact with our support services.
              </p>
              <p>
                We are committed to protecting personal information in accordance with applicable Indian laws, including the Information Technology Act, 2000, applicable rules, the Digital Personal Data Protection Act, 2023, and the Digital Personal Data Protection Rules, 2025, according to their applicable commencement dates.
              </p>
              <p>
                Where consent is required, we will obtain it through an appropriate consent mechanism. Users may withdraw their consent in accordance with applicable law.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                2. APPLICATION-SPECIFIC DATA COLLECTION
              </h2>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">2.1 INFURNUS User App</h3>
                <p>The User App allows customers to discover, book, and use transportation and logistics services.</p>
                <p>We may collect:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Full name and contact information.</li>
                  <li>Registered mobile number and email address.</li>
                  <li>Profile information and photograph, where provided.</li>
                  <li>Current location and manually selected pickup and destination addresses.</li>
                  <li>Booking and trip information.</li>
                  <li>Vehicle preferences and selected service categories.</li>
                  <li>Payment and transaction information.</li>
                  <li>Customer support requests and feedback.</li>
                  <li>Device information and notification tokens.</li>
                  <li>Authentication and account verification information.</li>
                  <li>Booking cancellation and refund information.</li>
                </ul>
                <p>Location information may be used to identify nearby vehicles, calculate estimated fares, display routes, and track assigned vehicles during active bookings.</p>
                <p>Customers may receive relevant information about their assigned drivers and vehicles.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">2.2 INFURNUS Driver App</h3>
                <p>The Driver App allows drivers and vehicle service providers to register and provide services through INFURNUS.</p>
                <p>We may collect:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Full name and contact information.</li>
                  <li>Mobile number and email address.</li>
                  <li>Driver identification information.</li>
                  <li>Driving licence details.</li>
                  <li>Government-issued identification documents, where legally permitted and necessary.</li>
                  <li>Profile photograph.</li>
                  <li>Vehicle registration information.</li>
                  <li>Vehicle insurance, permit, and fitness documents, where applicable.</li>
                  <li>Vehicle category and ownership information.</li>
                  <li>Driver availability and online/offline status.</li>
                  <li>GPS and trip-related information.</li>
                  <li>Booking acceptance, rejection, and completion records.</li>
                  <li>Earnings and settlement information, where applicable.</li>
                  <li>Account verification and approval status.</li>
                  <li>Assigned vehicle information.</li>
                  <li>Device and notification registration information.</li>
                  <li>Driver and fleet association information.</li>
                </ul>
                <p>Drivers may need to enable location permissions to receive booking requests, provide services, and share relevant trip information with customers.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">2.3 Fleet Owners and Driver-Cum-Fleet Owners</h3>
                <p>Individuals registering as fleet owners or driver-cum-fleet owners may be required to provide:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Fleet owner name and contact information.</li>
                  <li>Business or organization details.</li>
                  <li>Fleet identification information.</li>
                  <li>Vehicle ownership and registration documents.</li>
                  <li>Driver assignment information.</li>
                  <li>Vehicle insurance and compliance documents.</li>
                  <li>Fleet management and operational records.</li>
                  <li>Booking and trip information associated with registered vehicles.</li>
                  <li>Earnings and settlement information, where applicable.</li>
                  <li>Account credentials and verification status.</li>
                  <li>Driver invitation and association records.</li>
                  <li>Vehicle assignment and approval information.</li>
                </ul>
                <p>Fleet owners may access information relating to their registered vehicles and assigned drivers according to their account roles and permissions.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                3. PERSONAL INFORMATION WE COLLECT
              </h2>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">3.1 Personal and Contact Information</h3>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Full name.</li>
                  <li>Mobile number.</li>
                  <li>Email address.</li>
                  <li>Profile photograph, where provided.</li>
                  <li>Communication preferences.</li>
                  <li>Account identification information.</li>
                  <li>Business contact information, where applicable.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">3.2 Identity and Verification Information</h3>
                <p>For account verification, vehicle onboarding, fraud prevention, and compliance purposes, we may collect:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Driving licence.</li>
                  <li>Vehicle Registration Certificate (RC).</li>
                  <li>PAN information, where actually required and legally necessary.</li>
                  <li>Aadhaar-related information, only where legally permitted and necessary.</li>
                  <li>Vehicle insurance certificates.</li>
                  <li>Vehicle fitness certificates.</li>
                  <li>Applicable permits and business verification documents.</li>
                </ul>
                <p>Government-issued identity information will only be collected where there is a lawful and necessary purpose.</p>
                <p>Access to verification documents will be restricted to authorized personnel and service providers who require such information for legitimate verification or compliance purposes.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">3.3 Booking and Trip Information</h3>
                <p>When you book or provide services through INFURNUS, we may collect:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Booking ID and reference number.</li>
                  <li>Service category and vehicle type.</li>
                  <li>Pickup and destination addresses.</li>
                  <li>Booking date and time.</li>
                  <li>Assigned driver and vehicle details.</li>
                  <li>Trip distance and duration.</li>
                  <li>Route and location information.</li>
                  <li>Estimated and final fare.</li>
                  <li>Payment status.</li>
                  <li>Cancellation and refund records.</li>
                  <li>Trip acceptance and completion information.</li>
                  <li>Trip verification information.</li>
                  <li>Pickup and delivery confirmation information.</li>
                  <li>Ratings, reviews, and feedback, where collected.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">3.4 Device and Technical Information</h3>
                <p>Depending on the application configuration and enabled functionality, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Device model and manufacturer.</li>
                  <li>Operating system and version.</li>
                  <li>Application version.</li>
                  <li>Device identifiers, where permitted.</li>
                  <li>IP address.</li>
                  <li>Network and connectivity information.</li>
                  <li>Firebase notification registration tokens.</li>
                  <li>Application diagnostics and crash information, where enabled.</li>
                  <li>Authentication and security logs.</li>
                  <li>Application request and error information.</li>
                </ul>
                <p>This information helps maintain application functionality, troubleshoot technical issues, prevent fraud, and protect accounts.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                4. LOCATION INFORMATION AND GPS TRACKING
              </h2>
              <p>
                Location information is an important part of INFURNUS transportation and logistics services.
              </p>
              <p>
                We may access precise or approximate device location depending on the permissions granted and the features being used.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">4.1 Customer Location Information</h3>
                <p>In the User App, location information may be used for:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Detecting the customer&apos;s current location.</li>
                  <li>Selecting pickup and destination points.</li>
                  <li>Displaying maps and routes.</li>
                  <li>Calculating distance and estimated fares.</li>
                  <li>Identifying nearby available vehicles.</li>
                  <li>Showing the assigned driver&apos;s live location.</li>
                  <li>Providing estimated arrival times.</li>
                  <li>Supporting active bookings and trip verification.</li>
                </ul>
                <p>Customers may manually enter locations if they do not grant device location permission, wherever the application functionality permits.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">4.2 Driver Location Tracking</h3>
                <p>The Driver App may collect real-time GPS location information for service delivery and operational purposes.</p>
                
                <p className="font-semibold text-slate-900">When the driver is online:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>To identify nearby booking requests.</li>
                  <li>To determine vehicle availability and proximity.</li>
                  <li>To facilitate booking assignments.</li>
                  <li>To provide location-based services.</li>
                  <li>To maintain accurate driver availability information.</li>
                </ul>

                <p className="font-semibold text-slate-900">During an active trip:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>To share relevant live location with the assigned customer.</li>
                  <li>To display trip progress.</li>
                  <li>To calculate routes, distance, and estimated arrival times.</li>
                  <li>To support trip verification and safety.</li>
                  <li>To maintain trip-related records.</li>
                  <li>To verify arrival at pickup and destination locations.</li>
                </ul>

                <p className="font-semibold text-slate-900">Background Location:</p>
                <p>
                  Where background location functionality is implemented and permitted by the operating system, location information may continue to be collected while the Driver App is minimized or the device screen is locked.
                </p>
                <p>
                  Background location access is intended for disclosed operational purposes, such as maintaining driver availability and tracking active trips.
                </p>
                <p>
                  Before collecting location information in the background, INFURNUS will provide the applicable prominent in-app disclosure, obtain the required consent, and request the relevant device permissions.
                </p>
                <p>
                  The Privacy Policy does not replace any separate disclosure or consent required by Google Play or applicable law.
                </p>
                <p>
                  <strong>Production location behavior:</strong> The INFURNUS Driver App accesses fine and coarse location permissions while the driver is set to online status and during active trips. Location tracking while the application is in the background or minimized is executed using an Android Foreground Service (<code>FOREGROUND_SERVICE_LOCATION</code>) with a persistent, user-visible notification in the status bar, in full compliance with Google Play location policies. Silent background location without user visibility is not enabled. Location tracking stops when the driver goes offline or when the active trip concludes.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">4.3 Online and Offline Status</h3>
                <p>Location collection for booking availability is intended to operate when the driver is online and available for services.</p>
                <p>During an active trip, relevant location tracking may continue until the trip is completed or cancelled.</p>
                <p>When a driver goes offline, booking availability tracking will stop in accordance with the verified application behavior, except for separately disclosed and legally permitted processing necessary to complete an ongoing service or address a legitimate safety or security requirement.</p>
                <p>Previously collected location records may be retained in accordance with Section 13 of this Privacy Policy.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">4.4 Location Data Sharing</h3>
                <p>Relevant location information may be shared with:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Customers associated with active bookings.</li>
                  <li>Assigned drivers.</li>
                  <li>Relevant fleet owners, where operationally necessary and authorized.</li>
                  <li>Authorized INFURNUS administrators.</li>
                  <li>Mapping and location service providers.</li>
                </ul>
                <p>Location information will be shared only for applicable service delivery, operational, security, or legally authorized purposes.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">4.5 Managing Location Permissions</h3>
                <p>Users and drivers can manage location permissions through their device settings.</p>
                <p>Disabling location access may affect vehicle discovery, booking matching, navigation, live tracking, and other location-dependent services.</p>
                <p>Drivers may manage their availability through the online/offline functionality, subject to applicable active-trip restrictions.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                5. AUTHENTICATION AND ACCOUNT SECURITY
              </h2>
              <p>INFURNUS provides different authentication methods depending on the application and account type.</p>
              <p>These methods may include:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Mobile number-based OTP verification.</li>
                <li>Email-based OTP verification.</li>
                <li>Google Sign-In.</li>
                <li>Password and OTP-based authentication for applicable fleet owner and driver-cum-fleet owner accounts.</li>
                <li>Account verification and recovery procedures.</li>
              </ul>
              <p>We may process authentication-related information, including:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>OTP verification status.</li>
                <li>Session information.</li>
                <li>Authentication and refresh tokens.</li>
                <li>Account security information.</li>
                <li>Device verification information, where applicable.</li>
                <li>Login activity and security logs.</li>
              </ul>
              <p>This information is used to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Verify account ownership.</li>
                <li>Prevent unauthorized access.</li>
                <li>Maintain secure login sessions.</li>
                <li>Support account recovery.</li>
                <li>Protect customer and service-provider accounts.</li>
                <li>Detect suspicious or unauthorized account activity.</li>
              </ul>
              <p>OTP messages may be delivered through applicable email and SMS service providers.</p>
              <p>Users should not share OTPs, passwords, or authentication credentials with anyone.</p>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                6. THIRD-PARTY SDKs AND SERVICE PROVIDERS
              </h2>
              <p>
                INFURNUS uses third-party technologies, SDKs, and service providers to operate and improve its applications.
              </p>
              <p>
                Depending on the application version and enabled production features, these services may include:
              </p>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.1 Google Maps</h3>
                <p><strong>Purpose:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Displaying maps.</li>
                  <li>Route visualization.</li>
                  <li>Location-based services.</li>
                  <li>Distance and navigation-related functionality.</li>
                  <li>Pickup and destination selection.</li>
                </ul>
                <p>Relevant location, map requests, and associated technical information may be processed through Google services.</p>
                <p>
                  <strong>Privacy Policy:</strong>{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700 break-all inline-flex items-center gap-1">
                    https://policies.google.com/privacy <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.2 Firebase Cloud Messaging (FCM)</h3>
                <p><strong>Purpose:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Delivering push notifications.</li>
                  <li>Booking confirmations.</li>
                  <li>Incoming ride requests.</li>
                  <li>Booking acceptance and rejection updates.</li>
                  <li>Trip status updates.</li>
                  <li>Payment and cancellation notifications.</li>
                  <li>Security-related notifications.</li>
                </ul>
                <p>Firebase may process device notification tokens, installation identifiers, and associated technical information necessary for notification delivery.</p>
                <p>
                  <strong>Privacy Policy:</strong>{" "}
                  <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700 break-all inline-flex items-center gap-1">
                    https://firebase.google.com/support/privacy <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.3 Google Sign-In</h3>
                <p><strong>Purpose:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Allowing users to authenticate through Google accounts.</li>
                </ul>
                <p>Relevant Google account information authorized by the user, such as name, email address, profile information, and authentication identifiers, may be processed to verify identity and facilitate login.</p>
                <p>
                  <strong>Privacy Policy:</strong>{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700 break-all inline-flex items-center gap-1">
                    https://policies.google.com/privacy <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.4 Cashfree Payment Gateway</h3>
                <p><strong>Purpose:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Processing digital payments.</li>
                  <li>Verifying payment status.</li>
                  <li>Managing transaction references.</li>
                  <li>Supporting refunds and cancellations.</li>
                  <li>Facilitating applicable settlements.</li>
                </ul>
                <p>Payment-related information may be shared with Cashfree and relevant financial institutions for payment processing and verification.</p>
                <p>
                  <strong>Privacy Policy:</strong>{" "}
                  <a href="https://www.cashfree.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700 break-all inline-flex items-center gap-1">
                    https://www.cashfree.com/privacy/ <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.5 Geolocator</h3>
                <p>The Geolocator library facilitates access to device GPS information through the operating system.</p>
                <p>It may support:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Current location detection.</li>
                  <li>Real-time driver location.</li>
                  <li>Location updates.</li>
                  <li>Booking matching.</li>
                  <li>Location-based application functionality.</li>
                </ul>
                <p>Location information may subsequently be transmitted to INFURNUS servers or other relevant providers to deliver these services.</p>
                <p>The library&apos;s access to device location depends on the permissions granted and the application configuration.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.6 Image Picker</h3>
                <p>Image Picker functionality may be used for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Selecting profile photographs.</li>
                  <li>Uploading identity documents.</li>
                  <li>Uploading vehicle-related documents.</li>
                  <li>Selecting images required for verification.</li>
                </ul>
                <p>Selected images and documents may be uploaded to INFURNUS systems for applicable account management or verification purposes.</p>
                <p>Access to photographs and documents depends on the operating system&apos;s picker and permission functionality.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.7 Mobile Scanner / Google ML Kit</h3>
                <p>Where enabled, scanning technologies may support QR code scanning and applicable verification functionality.</p>
                <p>Camera images and information obtained through scanning are processed for the relevant application feature.</p>
                <p>Any transmission or storage of scanned information will depend on the actual feature implementation and disclosed processing purpose.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.8 Google Cloud Platform</h3>
                <p>Google Cloud Platform may support:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Backend infrastructure.</li>
                  <li>Application hosting.</li>
                  <li>Database and storage services.</li>
                  <li>Application request processing.</li>
                  <li>Platform operations.</li>
                  <li>Security and infrastructure monitoring.</li>
                </ul>
                <p>Personal information, booking records, location information, and other operational data may be processed through INFURNUS cloud infrastructure.</p>
                <p>
                  <strong>Privacy Information:</strong>{" "}
                  <a href="https://cloud.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700 break-all inline-flex items-center gap-1">
                    https://cloud.google.com/privacy <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.9 Resend</h3>
                <p>Resend may be used for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Account-related emails.</li>
                  <li>Email OTP delivery.</li>
                  <li>Booking notifications.</li>
                  <li>Important account communications.</li>
                </ul>
                <p>Relevant email addresses, message content, and delivery information may be processed to deliver communications.</p>
                <p>
                  <strong>Privacy Policy:</strong>{" "}
                  <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700 break-all inline-flex items-center gap-1">
                    https://resend.com/legal/privacy-policy <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.10 MSG91</h3>
                <p>Where enabled, MSG91 or another SMS provider may support:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Mobile OTP delivery.</li>
                  <li>Account verification.</li>
                  <li>Booking-related SMS.</li>
                  <li>Important service communications.</li>
                </ul>
                <p>Relevant mobile numbers, message content, and delivery information may be processed.</p>
                <p>
                  <strong>Privacy Policy:</strong>{" "}
                  <a href="https://msg91.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700 break-all inline-flex items-center gap-1">
                    https://msg91.com/privacy-policy <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.11 Additional Application Libraries</h3>
                <p>INFURNUS may use additional application libraries for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Secure local storage.</li>
                  <li>Network communication.</li>
                  <li>Real-time booking and location updates.</li>
                  <li>Local notifications.</li>
                  <li>Device permission management.</li>
                  <li>Local application data storage.</li>
                  <li>Application diagnostics and logging.</li>
                </ul>
                <p>These libraries support application functionality. The information they access, store, or transmit depends on their configuration and implementation.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">6.12 Additional Service Providers</h3>
                <p>We may integrate additional providers for hosting, security, communications, payment processing, analytics, and application functionality.</p>
                <p>The list of third-party integrations will be updated when production applications introduce additional SDKs or external services that materially change personal data processing practices.</p>
                <p>Third-party providers may process information under their respective privacy policies and applicable contractual obligations.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                7. DEVICE PERMISSIONS
              </h2>
              <p>Certain application features require access to device permissions.</p>
              <p>We request permissions for relevant application functionality.</p>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">7.1 Location Permission</h3>
                <p>Used for current location detection, nearby vehicle discovery, booking matching, live trip tracking, driver availability, and route calculations.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">7.2 Background Location Permission</h3>
                <p>Where implemented in the Driver App, background location permission may be requested to support disclosed driver availability and active-trip tracking functionality.</p>
                <p>The relevant permission will be requested separately with an appropriate explanation and applicable consent mechanism.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">7.3 Camera Permission</h3>
                <p>Used for supported document capture, profile photographs, QR code scanning, and other authorized verification functionality.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">7.4 Photos and Document Access</h3>
                <p>Used for selecting profile images, uploading driving licences, uploading vehicle documents, and submitting other required verification documents.</p>
                <p>Where appropriate, system-provided photo and document selection mechanisms will be used to limit unnecessary access to personal files.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">7.5 Notification Permission</h3>
                <p>Used for booking alerts, new ride requests, vehicle assignment updates, trip status notifications, payment confirmations, and security notifications.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">7.6 Foreground Services</h3>
                <p>Where implemented, foreground services may support ongoing location tracking, driver availability, active-trip monitoring, and other user-visible operational functionality.</p>
                <p>Such services may display a persistent notification in accordance with Android operating system requirements.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">7.7 Network and Supporting Device Permissions</h3>
                <p>The applications may use network access, connectivity information, vibration, wake-lock functionality, and other supporting permissions required for application communication, notifications, and operational reliability.</p>
                <p>Users can grant, deny, or revoke applicable permissions through their device settings.</p>
                <p>Disabling certain permissions may affect application functionality.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                8. NOTIFICATIONS AND COMMUNICATIONS
              </h2>
              <p>INFURNUS may send service-related communications through push notifications, SMS, email, or other supported channels.</p>
              <p>These may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>OTP and account verification messages.</li>
                <li>Booking confirmations.</li>
                <li>New ride requests.</li>
                <li>Driver acceptance and rejection updates.</li>
                <li>Vehicle assignment information.</li>
                <li>Trip commencement and completion updates.</li>
                <li>Cancellation notifications.</li>
                <li>Payment confirmations.</li>
                <li>Refund-related updates.</li>
                <li>Security notifications.</li>
                <li>Customer support responses.</li>
              </ul>
              <p>We may use Firebase Cloud Messaging to deliver push notifications to registered devices.</p>
              <p>Device notification tokens may be processed for notification delivery.</p>
              <p>Users can manage push notification permissions through device settings. Disabling notifications may prevent timely receipt of booking and service updates.</p>
              <p>Promotional communications, where offered, will be subject to applicable consent and opt-out requirements.</p>
              <p>Where supported, INFURNUS may facilitate communication between customers and assigned drivers through in-app communication or call-masking services to reduce unnecessary disclosure of personal contact information.</p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                9. PAYMENT INFORMATION
              </h2>
              <p>INFURNUS may facilitate digital payments through Cashfree and other authorized payment service providers.</p>
              <p>Payment-related information may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Booking fare.</li>
                <li>Payment amount.</li>
                <li>Transaction reference or ID.</li>
                <li>Payment status.</li>
                <li>Transaction date and time.</li>
                <li>Refund information.</li>
                <li>Cancellation charges.</li>
                <li>Advance and remaining payment records, where applicable.</li>
                <li>Driver or fleet owner earnings and settlement information, where applicable.</li>
              </ul>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">9.1 Payment Processing</h3>
                <p>Payments may be processed through Cashfree or other authorized payment providers.</p>
                <p>INFURNUS receives or processes transaction information required to verify and manage bookings and payments.</p>
                <p>Cashfree and relevant payment providers may independently process payment credentials and other information under their respective terms and privacy policies.</p>
                <p>INFURNUS does not require users to disclose their UPI PINs, card PINs, banking passwords, or payment OTPs to INFURNUS personnel.</p>
                <p>
                  <strong>Payment credential handling and storage:</strong> Digital payment transactions are processed through Cashfree Payment Gateway, an authorized, PCI-DSS Level 1 compliant payment aggregator. INFURNUS does not collect, access, process, or store sensitive payment credentials, including full credit or debit card numbers, card expiry dates, CVV codes, UPI PINs, or net banking passwords. Such credentials are tokenized and processed exclusively by Cashfree and participating banks under their respective security standards. INFURNUS stores only transaction reference IDs, payment status, amounts, and settlement metadata required for accounting, trip verification, refunds, and dispute management.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">9.2 Refunds and Cancellations</h3>
                <p>We may retain relevant booking and payment information to process refunds, manage cancellations, resolve disputes, verify transactions, and maintain accounting records.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">9.3 Driver and Fleet Owner Settlements</h3>
                <p>Where settlement functionality is available, relevant earnings, payment references, and settlement information may be processed to manage payments to eligible drivers and fleet owners.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                10. HOW WE USE YOUR INFORMATION
              </h2>
              <p>INFURNUS may use personal information for the following purposes:</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Creating and managing customer accounts.</li>
                <li>Registering drivers and fleet owners.</li>
                <li>Verifying user and vehicle information.</li>
                <li>Facilitating transportation, rental, logistics, and service vehicle bookings.</li>
                <li>Matching customers with available vehicles.</li>
                <li>Providing real-time location and trip tracking.</li>
                <li>Calculating fares, distances, and estimated arrival times.</li>
                <li>Processing and verifying payments.</li>
                <li>Managing refunds and cancellations.</li>
                <li>Sending booking and account notifications.</li>
                <li>Managing driver availability and fleet operations.</li>
                <li>Providing customer support.</li>
                <li>Investigating complaints and disputes.</li>
                <li>Preventing fraud, misuse, and unauthorized access.</li>
                <li>Maintaining platform security and reliability.</li>
                <li>Improving application functionality and service quality.</li>
                <li>Meeting applicable legal and regulatory obligations.</li>
                <li>Processing account deletion and privacy-related requests.</li>
                <li>Supporting service verification and operational safety.</li>
              </ol>
              <p>We will not use personal information for purposes incompatible with the purposes disclosed to you without an appropriate lawful basis.</p>
              <p>Where consent is required, personal information will be processed based on valid consent. Other processing may be undertaken where permitted under applicable law, including specified legitimate uses and legal obligations.</p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                11. DATA SHARING AND DISCLOSURE
              </h2>
              <p>INFURNUS does not sell personal information to third parties for their independent marketing purposes.</p>
              <p>We may share relevant information with the following recipients when necessary for providing services or fulfilling applicable legal obligations.</p>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">11.1 Customers and Passengers</h3>
                <p>Customers may receive relevant information about assigned drivers and vehicles, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Driver name.</li>
                  <li>Driver photograph, where applicable.</li>
                  <li>In-app contact or authorized communication functionality.</li>
                  <li>Vehicle details.</li>
                  <li>Relevant vehicle registration information.</li>
                  <li>Live location and trip status.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">11.2 Drivers</h3>
                <p>Drivers may receive relevant booking information, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Customer name.</li>
                  <li>Pickup location.</li>
                  <li>Destination information, where necessary and authorized.</li>
                  <li>Booking ID.</li>
                  <li>Service category.</li>
                  <li>Relevant trip information.</li>
                  <li>Authorized customer communication functionality.</li>
                </ul>
                <p>The availability of booking information may depend on the booking stage, trip verification requirements, and applicable access restrictions.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">11.3 Fleet Owners</h3>
                <p>Fleet owners may access relevant information concerning their registered vehicles and assigned drivers, including driver information, vehicle information, availability, booking records, operational information, and applicable earnings and settlement records.</p>
                <p>Access depends on account roles and permissions.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">11.4 INFURNUS Administrators</h3>
                <p>Authorized INFURNUS personnel may access relevant information to manage accounts, verify documents, manage bookings, resolve disputes, provide support, prevent fraud, and maintain platform operations.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">11.5 Third-Party Service Providers</h3>
                <p>We may share relevant information with mapping providers, authentication services, payment providers, cloud hosting providers, email and SMS providers, notification services, and document processing providers.</p>
                <p>Information shared will be limited to what is reasonably necessary for the relevant service.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">11.6 Government and Legal Authorities</h3>
                <p>We may disclose information when required by applicable law, court orders, lawful requests from competent authorities, or other legally binding obligations.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">11.7 Business Transfers</h3>
                <p>If INFURNUS undergoes a merger, acquisition, restructuring, or transfer of business operations, relevant personal information may be transferred subject to applicable legal requirements and appropriate data protection safeguards.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                12. DATA STORAGE AND INTERNATIONAL TRANSFERS
              </h2>
              <p>INFURNUS may store and process personal information through backend infrastructure, cloud hosting providers, databases, and other technology service providers.</p>
              <p>The actual location of data storage depends on the infrastructure and service configuration used by INFURNUS.</p>
              <p>
                <strong>Primary production infrastructure location:</strong> INFURNUS backend microservices and databases are hosted on Google Cloud Platform (GCP) primarily in the Delhi, India region (<code>asia-south2</code>), with database storage in Cloud SQL PostgreSQL and distributed caching in regional Redis instances within India.
              </p>
              <p>Information may be processed outside India by third-party providers where their infrastructure or services require it.</p>
              <p>Applicable cross-border transfers will be subject to relevant Indian legal requirements and restrictions imposed by the Central Government.</p>
              <p>INFURNUS will apply appropriate safeguards to personal information processed through its infrastructure and authorized service providers.</p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                13. DATA RETENTION
              </h2>
              <p>INFURNUS retains personal information only for as long as necessary to fulfil the purposes for which it was collected, comply with applicable legal requirements, resolve disputes, maintain security, and protect legitimate operational interests.</p>
              <p>Different categories of information may be retained for different periods.</p>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.1 Customer Account Information</h3>
                <p>Retained while the account remains active and for any additional period necessary to complete deletion, resolve pending matters, or meet applicable legal obligations.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.2 Driver and Fleet Owner Information</h3>
                <p>Retained during the registration and service relationship and for any additional period necessary for verification, outstanding transactions, disputes, and legal compliance.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.3 Identity and Verification Documents</h3>
                <p>Retained only for the period necessary for verification, regulatory compliance, fraud prevention, and applicable legal obligations.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.4 GPS and Location Information</h3>
                <p>Retained for the period necessary for booking matching, trip tracking, service verification, dispute resolution, and applicable operational or legal requirements.</p>
                <p>Location information that is no longer required will be deleted or anonymized according to the approved retention schedule.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.5 Booking and Trip History</h3>
                <p>Retained for service management, customer support, transaction verification, dispute resolution, and applicable accounting requirements.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.6 Payment and Transaction Records</h3>
                <p>Retained for applicable accounting, taxation, financial, and regulatory retention periods.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.7 Authentication and Security Logs</h3>
                <p>Retained for account security, fraud prevention, troubleshooting, and investigation of security incidents.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.8 Customer Support Records</h3>
                <p>Retained for resolving customer issues, maintaining service records, and addressing disputes.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.9 Deleted Accounts</h3>
                <p>Following an approved account deletion request, information that is no longer required will be deleted or irreversibly anonymized.</p>
                <p>Certain information may be retained where legally required or necessary to resolve pending payments, disputes, fraud investigations, or other lawful obligations.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-md font-bold text-slate-900">13.10 Backups</h3>
                <p>Information contained in backups may remain temporarily until the applicable backup lifecycle and deletion process is completed.</p>
                <p>Such information will remain protected and will not be used for unrelated purposes.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-md font-bold text-slate-900">13.11 Retention Schedule</h3>
                <p>INFURNUS maintains or will establish an approved retention schedule covering personal information, verification documents, location information, transaction records, security logs, deleted accounts, and backups.</p>
                <p>The applicable retention periods or operational deletion criteria must be confirmed before publication.</p>
                <p>
                  <strong>Approved data retention schedule:</strong> INFURNUS retains data in accordance with statutory requirements and operational necessity: (a) Authentication, Session &amp; Security Logs: Retained for up to 180 days to 1 year for security audit and incident investigations; (b) Real-Time Location &amp; GPS Records: Transient driver location records expire within 30–60 seconds in Redis caching; completed trip route logs are retained for up to 180 days for service verification and dispute resolution; (c) Trip Booking, Financial &amp; Tax Records: Retained for 8 years in compliance with the Indian Companies Act, 2013, Goods and Services Tax (GST) laws, and applicable accounting regulations; (d) Account Deletion &amp; Deleted Accounts: Personal profile records, uploaded verification documents, and active credentials are permanently deleted or irreversibly anonymized within 30 days of verified deletion request, except where retention is mandated by law.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                14. ACCOUNT DELETION AND PERSONAL DATA DELETION
              </h2>
              <p>INFURNUS respects the right of customers, drivers, and fleet owners to request deletion of their accounts and associated personal information.</p>
              <p>Account deactivation or temporary suspension is not equivalent to permanent account deletion.</p>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">14.1 Deletion Through the User App</h3>
                <p>Customers may initiate an account deletion request through the designated account management functionality in the INFURNUS User App.</p>
                <p>
                  <strong>Account deletion navigation:</strong> In the INFURNUS User App: Profile &gt; Account Settings &gt; Privacy &amp; Security &gt; Delete Account &gt; Confirm Deletion.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">14.2 Deletion Through the Driver App</h3>
                <p>Drivers and applicable fleet owners may initiate an account deletion request through the designated account management functionality in the INFURNUS Driver App.</p>
                <p>
                  <strong>Account deletion navigation:</strong> In the INFURNUS Driver App: Drawer Menu &gt; Account &amp; Security &gt; Security &amp; Privacy Preferences &gt; Request Account Deletion &gt; Confirm Request. (Fleet owners must first reassign or decommission registered vehicles and drivers).
                </p>
                <p>Both applications must provide a readily accessible account deletion request mechanism.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">14.3 External Account Deletion Request</h3>
                <p>Users can also submit an account deletion request without reinstalling or accessing the mobile application through the designated public account deletion webpage.</p>
                <p>
                  <strong>Account Deletion Page:</strong>{" "}
                  <Link href="/delete-account" className="text-blue-600 underline font-semibold">
                    https://infurnuslogistics.com/delete-account
                  </Link>
                </p>
                <p>Alternatively, users may contact:</p>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-sm space-y-1">
                  <p><strong>Email:</strong> <a href="mailto:support@infurnuslogistics.com" className="text-blue-600 underline">support@infurnuslogistics.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+919153787859" className="text-blue-600 underline">+91 9153787859</a></p>
                  <p><strong>Email Subject:</strong> Account Deletion Request – INFURNUS</p>
                </div>
                <p>Please include the registered mobile number or email address and identify whether the request relates to a User App or Driver App account.</p>
                <p>We may request reasonable information to verify account ownership before processing a deletion request.</p>
                <p>Users should not send passwords, OTPs, UPI PINs, or other confidential authentication credentials when submitting a deletion request.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">14.4 Information Deleted</h3>
                <p>Subject to applicable legal requirements, account deletion will include deletion or irreversible anonymization of associated personal information that is no longer required, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Account profile information.</li>
                  <li>Contact information.</li>
                  <li>Profile photographs.</li>
                  <li>Uploaded verification documents.</li>
                  <li>Saved personal information.</li>
                  <li>Associated location records.</li>
                  <li>Notification registration tokens.</li>
                  <li>Authentication and account session information.</li>
                  <li>Other personal information that is no longer required.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">14.5 Information That May Be Retained</h3>
                <p>Certain information may be retained for the period required by law or where necessary for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tax and accounting obligations.</li>
                  <li>Financial transaction records.</li>
                  <li>Pending refunds and settlements.</li>
                  <li>Fraud prevention.</li>
                  <li>Security investigations.</li>
                  <li>Legal claims.</li>
                  <li>Dispute resolution.</li>
                  <li>Compliance with valid government or court orders.</li>
                </ul>
                <p>Such retained information will be restricted to the applicable purpose and deleted when the retention requirement ends.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">14.6 Deletion Processing</h3>
                <p>INFURNUS will verify account ownership and process eligible account deletion requests within applicable legal and operational timelines.</p>
                <p>
                  <strong>Expected deletion processing period:</strong> Within 30 days of receipt and ownership verification of an eligible account deletion request, subject to applicable legal requirements and lawful retention exceptions.
                </p>
                <p>Where additional verification or legal review is necessary, we may contact the requester.</p>
                <p>Eligible deletion requests will not be treated as completed merely by disabling or suspending the account.</p>
                <p>Upon completion, associated authentication access will be revoked, subject to the verified deletion process.</p>
                <p>Users will receive confirmation through an appropriate communication channel once the deletion request has been processed.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">14.7 Personal Data Deletion Requests</h3>
                <p>Users may also request deletion of specific personal information without requesting complete account deletion, subject to applicable law and the information necessary to maintain their accounts or provide requested services.</p>
                <p>
                  Requests may be submitted to{" "}
                  <a href="mailto:support@infurnuslogistics.com" className="text-blue-600 underline">
                    support@infurnuslogistics.com
                  </a>.
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section id="section-15" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                15. DATA SECURITY
              </h2>
              <p>INFURNUS takes reasonable measures to protect personal information against unauthorized access, disclosure, alteration, misuse, and destruction.</p>
              <p>Applicable security measures may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Secure communication through HTTPS and encryption in transit.</li>
                <li>Authentication and access controls.</li>
                <li>Role-based administrative permissions.</li>
                <li>Restricted access to personal information.</li>
                <li>Secure cloud infrastructure.</li>
                <li>Database access restrictions.</li>
                <li>Protection of authentication credentials.</li>
                <li>Secure storage of applicable authentication tokens.</li>
                <li>Security monitoring and incident management.</li>
                <li>Appropriate backup and recovery procedures.</li>
              </ul>
              <p>INFURNUS restricts access to personal information to authorized individuals and systems requiring such access for legitimate operational purposes.</p>
              <p>In the event of a personal data breach, INFURNUS will take appropriate measures to investigate, contain, and address the incident and provide notifications where required under applicable law.</p>
              <p>No electronic transmission or storage system can be guaranteed to be completely secure.</p>
              <p>Users should protect their login credentials and report suspicious account activity promptly.</p>
            </section>

            {/* Section 16 */}
            <section id="section-16" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                16. YOUR PRIVACY RIGHTS
              </h2>
              <p>Subject to applicable law and the commencement of relevant legal provisions, you may have rights relating to your personal information, including:</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>The right to obtain information about personal data processed by INFURNUS.</li>
                <li>The right to request correction of inaccurate or incomplete personal information.</li>
                <li>The right to request erasure of personal information, subject to legal retention requirements.</li>
                <li>The right to withdraw consent where processing is based on consent.</li>
                <li>The right to access grievance redressal mechanisms.</li>
                <li>The right to nominate another individual where permitted by applicable law.</li>
                <li>The right to seek remedies through applicable legal and regulatory mechanisms.</li>
                <li>The right to manage applicable device permissions and communication preferences.</li>
              </ol>
              <p>Requests may be submitted using:</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@infurnuslogistics.com" className="text-blue-600 underline">
                  support@infurnuslogistics.com
                </a>
              </p>
              <p>We may verify your identity before processing a request.</p>
              <p>Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal. It may also affect our ability to provide services that depend on the relevant information.</p>
            </section>

            {/* Section 17 */}
            <section id="section-17" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                17. CHILDREN&apos;S PRIVACY
              </h2>
              <p>INFURNUS services are intended for individuals legally eligible to use the relevant transportation, logistics, and vehicle-provider services.</p>
              <p>Individuals under 18 years of age must not independently create driver, fleet owner, or other accounts requiring legal contractual eligibility.</p>
              <p>
                <strong>Minimum age for customer account registration:</strong> 13 years and above. Customers aged between 13 and 17 years may register and use the INFURNUS User App only with verifiable parental or legal guardian consent and oversight, in accordance with applicable laws including the Digital Personal Data Protection Act, 2023, the Digital Personal Data Protection Rules, 2025, and relevant contractual eligibility requirements. Customers aged 13–17 years are not treated as adults and may not independently enter into binding contracts without parental or guardian authorization. Driver, fleet owner, and driver-cum-fleet owner accounts strictly require a minimum age of 18 years.
              </p>
              <p>We do not knowingly collect personal information from children in violation of applicable laws.</p>
              <p>Where applicable law requires parental or guardian consent for processing a child&apos;s personal information, INFURNUS will implement the relevant requirements.</p>
              <p>If we become aware that personal information has been collected from a child in violation of applicable law, we will take appropriate steps to address the situation, including deletion where required.</p>
              <p>
                Parents or legal guardians may contact{" "}
                <a href="mailto:support@infurnuslogistics.com" className="text-blue-600 underline">
                  support@infurnuslogistics.com
                </a>{" "}
                regarding concerns about children&apos;s personal information.
              </p>
            </section>

            {/* Section 18 */}
            <section id="section-18" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                18. COOKIES AND SIMILAR TECHNOLOGIES
              </h2>
              <p>Our website may use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maintain website functionality.</li>
                <li>Remember user preferences.</li>
                <li>Improve website performance.</li>
                <li>Understand website usage.</li>
                <li>Support security and troubleshooting.</li>
              </ul>
              <p>Users may manage cookies through their browser settings.</p>
              <p>Where required by applicable law, appropriate consent mechanisms will be provided for non-essential cookies and tracking technologies.</p>
              <p>Disabling certain cookies may affect website functionality.</p>
            </section>

            {/* Section 19 */}
            <section id="section-19" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                19. THIRD-PARTY LINKS AND SERVICES
              </h2>
              <p>Our applications and website may contain links to third-party websites, payment services, or external platforms.</p>
              <p>These services are governed by their own privacy policies and terms.</p>
              <p>INFURNUS is not responsible for the independent privacy practices of external services outside its control. However, INFURNUS remains responsible for its own processing and applicable obligations concerning authorized service providers.</p>
              <p>Users should review the relevant third-party policies before using those services.</p>
            </section>

            {/* Section 20 */}
            <section id="section-20" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                20. GRIEVANCE REDRESSAL
              </h2>
              <p>INFURNUS provides a mechanism for receiving and addressing privacy-related concerns, complaints, and requests.</p>
              <p>Our designated Grievance Officer is:</p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-1.5 text-sm">
                <p><strong>Grievance Officer:</strong> Tripti Rani</p>
                <p><strong>Company:</strong> INFURNUS LOGISTICS PRIVATE LIMITED</p>
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
                <div className="pt-2">
                  <p className="font-semibold text-slate-900">Registered Office Address:</p>
                  <p>1st Floor, Office No. 105, Road No. 7C, Shiv Mandir Road, Near O.P. Market, Patna, Bihar – 800024, India.</p>
                </div>
              </div>
              <p>
                <strong>Complaint Subject:</strong> Privacy Complaint – INFURNUS Logistics
              </p>
              <p>Please provide your registered account details, a description of your concern, and any relevant supporting information.</p>
              <p>We will acknowledge and address complaints within the timelines applicable under relevant laws and regulations.</p>
              <p>Where a statutory grievance redressal or data protection mechanism is applicable, users may also approach the relevant authority in accordance with applicable law.</p>
            </section>

            {/* Section 21 */}
            <section id="section-21" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                21. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p>INFURNUS may periodically update this Privacy Policy to reflect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Changes in application functionality.</li>
                <li>New services and features.</li>
                <li>Changes in third-party SDK integrations.</li>
                <li>Changes in applicable laws.</li>
                <li>Changes in data collection and processing practices.</li>
                <li>Improvements in security and privacy procedures.</li>
                <li>Changes in data retention and account deletion procedures.</li>
              </ul>
              <p>Material changes may be communicated through the website, mobile applications, registered email, or other appropriate communication channels.</p>
              <p>Where required, additional consent will be obtained before implementing material changes to personal data processing.</p>
              <p>The latest version will be published on our official website and made accessible through the INFURNUS User App and Driver App.</p>
            </section>

            {/* Section 22 */}
            <section id="section-22" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                22. CONTACT INFURNUS
              </h2>
              <p>For questions, concerns, or requests relating to this Privacy Policy or the processing of personal information, contact us:</p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2 text-sm">
                <p><strong>Company:</strong> INFURNUS LOGISTICS PRIVATE LIMITED</p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://infurnuslogistics.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    https://infurnuslogistics.com
                  </a>
                </p>
                <p>
                  <strong>Privacy Policy URL:</strong>{" "}
                  <Link href="/privacy" className="text-blue-600 underline">
                    https://infurnuslogistics.com/privacy
                  </Link>
                </p>
                <p>
                  <strong>Account Deletion URL:</strong>{" "}
                  <Link href="/delete-account" className="text-blue-600 underline">
                    https://infurnuslogistics.com/delete-account
                  </Link>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@infurnuslogistics.com" className="text-blue-600 underline">
                    support@infurnuslogistics.com
                  </a>
                </p>
                <p>
                  <strong>Contact Number:</strong>{" "}
                  <a href="tel:+919153787859" className="text-blue-600 underline">
                    +91 9153787859
                  </a>
                </p>
                <p><strong>Grievance Officer:</strong> Tripti Rani</p>
                <div className="pt-2">
                  <p className="font-semibold text-slate-900">Registered Office:</p>
                  <p>1st Floor, Office No. 105, Road No. 7C, Shiv Mandir Road, Near O.P. Market, Patna, Bihar – 800024, India.</p>
                </div>
              </div>
            </section>

            {/* Section 23 */}
            <section id="section-23" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 border-b border-slate-100 pb-3">
                23. APPLICABLE LAW AND JURISDICTION
              </h2>
              <p>This Privacy Policy is governed by the applicable laws of India.</p>
              <p>Any disputes relating to privacy, personal information, or the use of INFURNUS services will be addressed in accordance with applicable Indian laws and the jurisdiction of competent courts, without limiting any statutory rights or remedies available to users.</p>
            </section>

            {/* Closing */}
            <div className="border-t border-slate-200 pt-8 mt-12 text-center space-y-2">
              <p className="text-sm font-bold tracking-wider uppercase text-slate-500">
                END OF PRIVACY POLICY
              </p>
              <p className="text-base font-extrabold text-slate-900">
                INFURNUS LOGISTICS PRIVATE LIMITED
              </p>
              <p className="text-sm italic text-slate-600">
                Connecting People, Vehicles and Logistics.
              </p>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
