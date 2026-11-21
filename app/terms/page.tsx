"use client";

import Link from "next/link";
import { FileText, ChevronRight, ArrowLeft, Scale } from "lucide-react";

interface TermSection {
  id: number;
  title: string;
  content: string;
}

const sections: TermSection[] = [
  {
    id: 1,
    title: "Introduction and Acceptance of Terms",
    content: "These Terms & Conditions govern access to and use of the INFURNUS website, mobile applications, and associated services operated by INFURNUS LOGISTICS PRIVATE LIMITED, hereinafter referred to as “INFURNUS,” “Company,” “we,” “us,” or “our.” By accessing or using our platform, registering an account, or requesting a service, users agree to comply with these Terms & Conditions and applicable laws. Users who do not agree with these Terms should refrain from using the platform."
  },
  {
    id: 2,
    title: "Company Information",
    content: "INFURNUS LOGISTICS PRIVATE LIMITED operates a technology-enabled platform designed to facilitate logistics, transportation, chauffeured rental, premium transportation, and selected service vehicle bookings.\n\nRegistered Office:\n1st Floor, Office No. 105, Road No. 7C, Shiv Mandir Road, Near O.P. Market, Patna, Bihar – 800024, India.\n\nOfficial Website: https://infurnuslogistics.com\nEmail: support@infurnuslogistics.com\nContact Number: +91 9153787859"
  },
  {
    id: 3,
    title: "Definitions and Scope of Services",
    content: "For the purposes of these Terms: “Platform” refers to INFURNUS websites, mobile applications, and associated digital services. “Customer” refers to an individual or organization requesting transportation or related services. “Driver” refers to an eligible individual providing transportation services through the platform. “Fleet Owner” refers to an individual or business managing vehicles or associated drivers. “Booking” refers to a service request submitted through the platform. “Service Provider” refers to a driver, fleet owner, vehicle operator, or other authorized entity fulfilling a service request. Services may vary according to geographical availability, vehicle availability, regulatory requirements, and operational conditions."
  },
  {
    id: 4,
    title: "Eligibility and Age Requirements",
    content: "The minimum customer registration age stated in the INFURNUS Privacy Policy is 13 years. Individuals between 13 and 17 years of age may access eligible services only with the involvement and consent of a parent or legal guardian where required by applicable law. Where a legally binding agreement is required, the parent or legal guardian must undertake the relevant contractual responsibilities. Registration eligibility does not independently establish contractual capacity. Drivers and Fleet Owners must be at least 18 years of age and satisfy applicable licensing, documentation, and regulatory requirements. INFURNUS does not represent that a technical parental consent verification mechanism is operational unless such functionality has actually been implemented."
  },
  {
    id: 5,
    title: "Account Registration and Security",
    content: "Users must provide accurate and current information when registering and using the platform. Users are responsible for maintaining the confidentiality of their authentication credentials, verification codes, and account access. Users must promptly notify INFURNUS of suspected unauthorized access, identity misuse, or fraudulent account activity. Users must not impersonate another person or create accounts using unauthorized personal information."
  },
  {
    id: 6,
    title: "User Responsibilities",
    content: "Users are responsible for providing accurate booking information, pickup and destination details, cargo descriptions, contact information, and other information required to fulfill a service. Users must treat Drivers, Fleet Owners, Company representatives, and other platform participants respectfully. Users must comply with applicable transportation, safety, environmental, and legal requirements. The platform must not be used for fraudulent, unlawful, abusive, or unauthorized activities."
  },
  {
    id: 7,
    title: "Logistics and Goods Transportation Services",
    content: "INFURNUS facilitates logistics bookings for the transportation of eligible goods using available vehicle categories. Customers must provide accurate cargo dimensions, weight, nature of goods, pickup location, and destination details. The selected vehicle must be suitable for the goods being transported. Goods must be appropriately packaged and prepared for transportation. Customers must not misrepresent cargo weight, conceal prohibited items, or request transportation beyond applicable vehicle capacity or regulatory limits. Special handling requirements must be disclosed before transportation begins."
  },
  {
    id: 8,
    title: "Chauffeured Rental Services",
    content: "Chauffeured rental services facilitate bookings for available vehicles operated by eligible drivers. Rental charges may depend on the selected vehicle category, booking duration, applicable distance-based charges, fuel charges, and other clearly disclosed pricing components. Customers must use rented vehicles responsibly and comply with applicable passenger capacity and safety requirements. Service availability, vehicle allocation, and booking confirmation remain subject to operational conditions."
  },
  {
    id: 9,
    title: "Premium Transportation Services",
    content: "Premium transportation services facilitate bookings for eligible premium vehicle categories and associated transportation offerings. Premium bookings may be subject to vehicle availability, service-specific requirements, approved pricing, and applicable regulations. Charges may include hourly rental rates and applicable fuel or distance-based components disclosed through the booking process. Specialized transportation services are subject to the necessary operational and regulatory authorizations."
  },
  {
    id: 10,
    title: "Service Vehicles",
    content: "INFURNUS may facilitate access to available service vehicles, including Ambulances and Towing Vans. Availability depends on geographical coverage, eligible service providers, and operational conditions. Ambulance booking functionality is not a substitute for government emergency response systems or immediate medical assistance. In a life‑threatening emergency, users should contact the appropriate emergency services without relying exclusively on platform availability. Towing services are subject to vehicle suitability, safety requirements, and operational feasibility."
  },
  {
    id: 11,
    title: "Booking and Service Confirmation",
    content: "Submitting a booking request does not automatically guarantee that a vehicle or service provider has accepted the request. Bookings are subject to service provider availability, matching procedures, applicable service requirements, and confirmation through the platform. Users must verify booking details before submission. Relevant booking updates, confirmation information, and service status may be communicated through the platform and associated communication channels."
  },
  {
    id: 12,
    title: "Pricing, Fares, and Charges",
    content: "Service charges are determined according to the applicable pricing configuration, vehicle category, booking type, duration, distance, fuel charges, and other disclosed pricing components. The applicable fare or fare estimate will be displayed during the booking process where supported. Any applicable taxes, additional charges, or fare adjustments must be communicated in accordance with applicable legal requirements. Users should review the displayed pricing and service details before confirming a booking. Pricing must follow the approved business rules and must not include undisclosed or unauthorized charges."
  },
  {
    id: 13,
    title: "Payments and Payment Obligations",
    content: "Customers are responsible for paying the applicable charges associated with confirmed and completed services. Payment methods and payment schedules depend on the selected service category and available platform functionality. For applicable logistics bookings, the platform may require an upfront payment of 40% of the booking fare after acceptance, with the remaining 60% payable upon completion, according to the approved payment workflow. Where upfront payment is required, service commencement may depend on successful payment confirmation. Payment failures, duplicate transactions, or disputed charges should be reported through official support channels."
  },
  {
    id: 14,
    title: "Booking Cancellation and Refunds",
    content: "Customers may cancel eligible bookings before acceptance by a Driver or Service Provider. Under the currently approved standard booking cancellation workflow, customers may cancel within five minutes after acceptance. After this period, the standard cancellation option may no longer be available through the application. Users requiring assistance after the cancellation window should contact INFURNUS support. Refund eligibility, applicable deductions, and processing requirements depend on the circumstances of the booking, the approved refund policy, and applicable consumer protection laws. No unapproved cancellation charge, fixed refund timeline, or automatic forfeiture condition shall be introduced through these Terms. Statutory consumer rights remain unaffected."
  },
  {
    id: 15,
    title: "Driver and Fleet Owner Responsibilities",
    content: "Drivers and Fleet Owners must maintain valid and applicable driving licences, vehicle registrations, permits, insurance documentation, and other legally required records. They must ensure vehicles remain roadworthy and suitable for the requested service. Service Providers must operate responsibly, comply with applicable traffic and transportation laws, and provide accurate information through the platform. Drivers must not misuse customer information or engage in unauthorized, unsafe, or fraudulent activities. Fleet Owners are responsible for fulfilling their applicable legal and operational obligations concerning vehicles and associated drivers."
  },
  {
    id: 16,
    title: "Service Availability and Limitations",
    content: "Service availability may depend on geographical location, vehicle availability, driver eligibility, road conditions, network connectivity, and operational capacity. Estimated service times and matching updates are subject to actual circumstances. The platform must not represent an estimated arrival, matching time, or service availability as an unconditional guarantee unless such a guarantee has been expressly approved and communicated. Services may be temporarily unavailable due to maintenance, technical interruptions, regulatory restrictions, or circumstances beyond reasonable control."
  },
  {
    id: 17,
    title: "Restricted and Prohibited Goods",
    content: "Users must not request transportation of goods prohibited by applicable law. Restricted categories may include illegal substances, unlawful weapons, stolen property, unauthorized hazardous materials, and other goods whose transportation is prohibited or requires special authorization. Goods requiring special permits, documentation, handling, or transportation conditions must be disclosed in advance. Service Providers and INFURNUS may decline or discontinue transportation where a request violates applicable law or presents an unacceptable safety risk, subject to applicable legal requirements."
  },
  {
    id: 18,
    title: "Safety and Emergency Limitations",
    content: "Users and Service Providers must follow applicable road safety regulations, passenger capacity limits, cargo safety requirements, and reasonable safety instructions. Users should immediately report unsafe behavior, accidents, suspected criminal activity, or other serious incidents through appropriate official channels. INFURNUS support services do not replace police, fire, medical, or government emergency response services. In emergencies, users should contact the appropriate emergency authorities. Nothing in these Terms limits mandatory safety obligations imposed by applicable law."
  },
  {
    id: 19,
    title: "Location Services and Communications",
    content: "The platform may use location information to facilitate vehicle matching, pickup coordination, navigation, service tracking, operational support, and safety‑related functionality. Location access and processing are governed by the INFURNUS Privacy Policy and applicable permissions. Users may receive service‑related communications concerning bookings, account activity, payments, verification, safety, and operational updates. Personal information must not be collected or used beyond the purposes and legal grounds described in the applicable Privacy Policy."
  },
  {
    id: 20,
    title: "Intellectual Property Rights",
    content: "The INFURNUS platform, branding, logos, designs, software, website content, and other proprietary materials are owned by or licensed to INFURNUS or their respective rights holders. Users must not reproduce, distribute, misuse, or commercially exploit protected materials without appropriate authorization, except where permitted by law. Access to the platform does not transfer ownership of intellectual property rights to users. Third‑party trademarks and intellectual property remain the property of their respective owners."
  },
  {
    id: 21,
    title: "Privacy and Personal Data Protection",
    content: "INFURNUS processes personal information in accordance with its published Privacy Policy and applicable data protection requirements. Users are encouraged to review the Privacy Policy to understand how information is collected, used, shared, retained, and protected. Privacy Policy: https://infurnuslogistics.com/privacy Nothing in these Terms authorizes processing personal information beyond applicable legal requirements and the disclosed Privacy Policy."
  },
  {
    id: 22,
    title: "Account Suspension, Termination, and Deletion",
    content: "Accounts may be restricted or suspended where reasonably necessary to investigate suspected fraud, security incidents, unlawful conduct, serious policy violations, or regulatory requirements. Account‑related actions shall be subject to applicable legal obligations and appropriate procedural safeguards. Users may request account deletion through the available account deletion mechanism. Account deletion requests are processed according to the published Account Deletion Policy, which provides a processing period of up to 30 days, subject to applicable legal retention requirements. Account Deletion: https://infurnuslogistics.com/delete-account"
  },
  {
    id: 23,
    title: "Third‑Party Services and Integrations",
    content: "The INFURNUS platform may rely on third‑party services for payment processing, authentication, maps, communication, hosting, infrastructure, and operational functionality. Certain third‑party services may have their own applicable terms and privacy policies. Users may be required to comply with relevant third‑party terms when directly accessing those services. The use of third‑party services does not remove INFURNUS's own responsibilities under applicable law."
  },
  {
    id: 24,
    title: "Limitation of Liability",
    content: "The responsibilities and liabilities of INFURNUS, Customers, Drivers, Fleet Owners, and other Service Providers shall be determined in accordance with applicable law, their respective obligations, and the circumstances of each service. Technical interruptions, service delays, inaccurate user‑provided information, or other operational circumstances may affect service delivery. Nothing in these Terms excludes or restricts liability where such exclusion or restriction is prohibited by law. Nothing in these Terms limits statutory consumer rights, mandatory compensation rights, or legal remedies. Any additional contractual liability limitation or monetary liability cap requires separate legal approval before inclusion."
  },
  {
    id: 25,
    title: "Responsibility for Unlawful Conduct and Losses",
    content: "Users and Service Providers are responsible for their own unlawful conduct, fraudulent activity, deliberate misrepresentation, and breaches of applicable legal obligations. Responsibility for resulting losses or damages shall be determined according to applicable law and the circumstances of the incident. Any contractual indemnification obligation beyond applicable legal responsibilities must be separately reviewed and approved before inclusion."
  },
  {
    id: 26,
    title: "Force Majeure",
    content: "Service delivery may be affected by circumstances beyond reasonable control, including natural disasters, severe weather, road closures, government restrictions, widespread infrastructure failures, and other exceptional events. Where such circumstances affect a booking, INFURNUS and the relevant Service Providers should communicate available updates and take reasonable steps consistent with their applicable obligations. This provision does not remove statutory consumer rights or mandatory refund and compensation obligations."
  },
  {
    id: 27,
    title: "Consumer Rights and Statutory Protections",
    content: "Customers retain all applicable rights and protections under Indian consumer protection laws and other applicable legislation. Nothing in these Terms is intended to waive mandatory consumer rights, prevent legitimate complaints, or restrict access to lawful remedies. Users may raise concerns regarding service quality, pricing, payments, cancellations, safety, or other matters through official support and grievance channels. Users may also approach appropriate statutory authorities or competent consumer dispute resolution bodies where applicable."
  },
  {
    id: 28,
    title: "Governing Law and Dispute Resolution",
    content: "These Terms are governed by applicable laws of India. Users are encouraged to initially raise disputes or complaints through INFURNUS's official support and grievance redressal channels. Where a matter cannot be resolved through these channels, users retain the right to pursue remedies before competent courts, consumer commissions, regulatory authorities, or other legally authorized forums. No exclusive jurisdiction or mandatory arbitration provision shall be introduced without appropriate legal approval."
  },
  {
    id: 29,
    title: "Changes to These Terms",
    content: "INFURNUS may update these Terms to reflect changes in services, operational practices, legal requirements, or business policies. The current version shall be published on the official website with the applicable effective date and last updated date. Material changes shall be communicated where required by applicable law. Updated Terms shall apply in accordance with applicable legal requirements and any necessary consent or notification obligations."
  },
  {
    id: 30,
    title: "Grievance Redressal and Contact Information",
    content: "Users may contact INFURNUS regarding bookings, payments, service issues, account concerns, privacy matters, or complaints.\n\nCompany Name: INFURNUS LOGISTICS PRIVATE LIMITED\nGrievance Officer: Tripti Rani\nSupport Email: support@infurnuslogistics.com\nContact Number: +91 9153787859\nRegistered Office: 1st Floor, Office No. 105, Road No. 7C, Shiv Mandir Road, Near O.P. Market, Patna, Bihar – 800024, India.\nOfficial Website: https://infurnuslogistics.com\nComplaints shall be handled according to applicable legal requirements and approved grievance redressal procedures."
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#E0E5EC] py-12 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Navigation Top */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
          <Link href="/" className="hover:text-[#000000] flex items-center gap-1">
            <ArrowLeft size={14} /> Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#000000]">Terms of Service</span>
        </div>

        {/* Hero Section */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-4">
          <span className="inline-flex items-center gap-2 neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000]">
            <Scale size={14} /> Legal Agreement
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#3D4852]">
            INFURNUS Terms of Service
          </h1>
          <p className="font-sans text-sm text-[#6B7280]">
            Last updated: September 27, 2026 • Please read carefully before using our platform.
          </p>
        </div>

        {/* Content Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-12 space-y-10">
          {sections.map((sec) => (
            <section key={sec.id} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
                  <FileText size={20} />
                </div>
                <h2 className="font-display text-xl font-bold text-[#3D4852]">
                  {sec.id}. {sec.title}
                </h2>
              </div>
              <p className="font-sans text-sm text-[#6B7280] leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
