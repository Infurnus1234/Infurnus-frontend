"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Upload,
  FileText,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

type DocumentStatus = "Verified" | "Pending" | "Expired";

type DocumentItem = {
  id: number;
  name: string;
  description: string;
  status: DocumentStatus;
  expiry: string;
  required: boolean;
};

const initialDocuments: DocumentItem[] = [
  {
    id: 1,
    name: "Driving Licence",
    description: "Valid driving licence",
    status: "Verified",
    expiry: "14 Aug 2030",
    required: true,
  },
  {
    id: 2,
    name: "Aadhaar Card",
    description: "Identity verification",
    status: "Verified",
    expiry: "No expiry",
    required: true,
  },
  {
    id: 3,
    name: "PAN Card",
    description: "Tax identification",
    status: "Verified",
    expiry: "No expiry",
    required: true,
  },
  {
    id: 4,
    name: "Vehicle RC",
    description: "Vehicle registration certificate",
    status: "Verified",
    expiry: "21 Dec 2031",
    required: true,
  },
  {
    id: 5,
    name: "Vehicle Insurance",
    description: "Valid vehicle insurance",
    status: "Pending",
    expiry: "30 Nov 2026",
    required: true,
  },
  {
    id: 6,
    name: "PUC Certificate",
    description: "Pollution Under Control certificate",
    status: "Pending",
    expiry: "15 Jan 2027",
    required: true,
  },
];

export default function ProviderDocumentsPage() {
  const [documents, setDocuments] = useState<DocumentItem[]>(initialDocuments);
  const [uploadingId, setUploadingId] = useState<number | null>(null);

  const handleUpload = (id: number) => {
    setUploadingId(id);
    setTimeout(() => {
      setDocuments((current) =>
        current.map((document) =>
          document.id === id
            ? { ...document, status: "Pending" }
            : document
        )
      );
      setUploadingId(null);
    }, 700);
  };

  const verifiedCount = documents.filter((doc) => doc.status === "Verified").length;
  const pendingCount = documents.filter((doc) => doc.status === "Pending").length;
  const expiredCount = documents.filter((doc) => doc.status === "Expired").length;

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-8 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-6xl space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8">
          <div className="space-y-1">
            <span className="neu-inset-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#000000]">
              PROVIDER DASHBOARD
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#3D4852]">
              Documents & KYC Verification
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
              Manage identity documents, licenses, vehicle RCs, and compliance credentials.
            </p>
          </div>

          <Link
            href="/provider"
            className="neu-btn px-4 py-3 text-xs font-bold flex items-center gap-2 w-fit"
          >
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        {/* Status Banner */}
        <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-black/10">
          <div className="flex items-center gap-4">
            <div className="neu-inset-deep p-3 rounded-2xl text-[#000000]">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h2 className="font-bold text-base text-[#3D4852]">KYC Status: Active & Verified</h2>
              <p className="text-xs text-[#6B7280]">All mandatory identity and tax documents are verified.</p>
            </div>
          </div>
          <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#000000]">
            Verified Partner
          </span>
        </div>

        {/* Summary Grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Summary title="Verified" value={verifiedCount.toString()} icon={CheckCircle2} />
          <Summary title="Pending Approval" value={pendingCount.toString()} icon={Clock} />
          <Summary title="Expired" value={expiredCount.toString()} icon={AlertCircle} />
        </div>

        {/* Documents List */}
        <div className="space-y-4 pt-2">
          <h2 className="font-display text-xl font-bold text-[#3D4852]">Required Document Records</h2>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="neu-inset-deep p-3 rounded-2xl text-[#000000] flex-shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-[#3D4852]">{doc.name}</h3>
                      <span className="neu-inset-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#000000]">
                        {doc.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-1">{doc.description}</p>
                    <p className="text-[11px] text-[#6B7280] font-mono mt-1">
                      {doc.expiry === "No expiry" ? "Permanent Validity" : `Valid until: ${doc.expiry}`}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleUpload(doc.id)}
                  disabled={uploadingId === doc.id}
                  className="neu-btn px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2"
                >
                  <Upload size={15} />
                  <span>{uploadingId === doc.id ? "Uploading..." : doc.status === "Verified" ? "Update Document" : "Upload File"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

function Summary({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">{title}</p>
        <div className="neu-inset-deep p-2.5 rounded-xl text-[#000000]">
          <Icon size={20} />
        </div>
      </div>
      <p className="text-2xl font-extrabold text-[#3D4852]">{value}</p>
    </div>
  );
}