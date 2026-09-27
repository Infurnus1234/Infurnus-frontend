"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  ShieldCheck,
  Upload,
  XCircle,
} from "lucide-react";
import { useState } from "react";

const initialDocuments = [
  {
    id: 1,
    title: "Driving Licence",
    type: "Identity & Driving",
    number: "DL-XXXX-XXXX",
    status: "Verified",
    expiry: "12 Mar 2028",
  },
  {
    id: 2,
    title: "Aadhaar Card",
    type: "Identity",
    number: "XXXX XXXX 4521",
    status: "Verified",
    expiry: "No expiry",
  },
  {
    id: 3,
    title: "Vehicle RC",
    type: "Vehicle",
    number: "KA01AB1234",
    status: "Verified",
    expiry: "18 Aug 2039",
  },
  {
    id: 4,
    title: "Vehicle Insurance",
    type: "Vehicle",
    number: "INS-XXXX-4521",
    status: "Verified",
    expiry: "25 Nov 2026",
  },
  {
    id: 5,
    title: "PUC Certificate",
    type: "Vehicle",
    number: "PUC-XXXX-7821",
    status: "Pending",
    expiry: "10 Dec 2026",
  },
];

export default function DriverDocumentsPage() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [uploading, setUploading] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    setFileName(file.name);
  };

  const uploadDocument = () => {
    if (!selectedDocument || !fileName) return;

    setUploading(true);

    setTimeout(() => {
      setDocuments((prev) =>
        prev.map((doc) =>
          doc.title === selectedDocument
            ? { ...doc, status: "Pending" }
            : doc
        )
      );

      setUploading(false);
      setSelectedDocument("");
      setFileName("");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#E0E5EC] py-10 px-4 sm:px-6 lg:px-8 text-[#3D4852]">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Header Card */}
        <div className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="neu-inset-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#000000] inline-block">
              KYC & Compliance
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Driver Verification Vault
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-2xl">
              Manage your commercial driving permit, identity credentials, and vehicle compliance documents.
            </p>
          </div>

          <Link
            href="/driver"
            className="neu-btn px-6 py-3.5 rounded-2xl text-xs font-bold text-[#3D4852] inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <ArrowLeft size={16} />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* KYC Status Card */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="neu-inset-deep p-3 rounded-2xl text-[#000000]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-[#3D4852]">
                  KYC Compliance Status
                </h2>
                <p className="text-xs text-[#6B7280]">
                  Your driver profile is fully verified for commercial dispatch.
                </p>
              </div>
            </div>

            <span className="neu-inset-sm px-4 py-2 rounded-full text-xs font-extrabold text-[#000000] self-start sm:self-auto">
              100% VERIFIED
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-[#3D4852]">
              <span>Verification Index</span>
              <span>100% Complete</span>
            </div>

            <div className="neu-inset-deep h-3.5 p-0.5 rounded-full overflow-hidden">
              <div className="h-full bg-[#000000] rounded-full" style={{ width: "100%" }} />
            </div>
          </div>
        </section>

        {/* Documents List */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="font-display text-xl font-bold text-[#3D4852]">
              Active Driver Credentials
            </h2>
            <p className="text-xs text-[#6B7280]">
              Keep all digital permits updated to prevent dispatch holds.
            </p>
          </div>

          <div className="space-y-4">
            {documents.map((document) => (
              <div
                key={document.id}
                className="neu-inset-deep rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="neu-extruded p-3 rounded-xl text-[#000000]">
                    <FileText size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-[#3D4852]">
                      {document.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-0.5">
                      {document.type} • {document.number}
                    </p>
                    <p className="text-[11px] font-mono text-[#6B7280] mt-1">
                      Expiry: {document.expiry}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <DocumentBadge status={document.status} />

                  <button
                    onClick={() => {
                      setSelectedDocument(document.title);
                      setFileName("");
                    }}
                    className="neu-btn px-4 py-2 rounded-xl text-xs font-bold text-[#3D4852]"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upload Form */}
        <section className="neu-extruded rounded-[36px] bg-[#E0E5EC] p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="neu-inset-deep p-3 rounded-2xl text-[#000000]">
              <Upload size={24} />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#3D4852]">
                Upload New Document
              </h2>
              <p className="text-xs text-[#6B7280]">
                Submit high-resolution PDF or Image files for verification.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                Document Category
              </label>
              <select
                value={selectedDocument}
                onChange={(e) => {
                  setSelectedDocument(e.target.value);
                  setFileName("");
                }}
                className="neu-input w-full px-4 py-3.5 rounded-2xl text-xs font-bold text-[#3D4852] outline-none"
              >
                <option value="">Select Document...</option>
                <option value="Driving Licence">Driving Licence</option>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="Vehicle RC">Vehicle RC</option>
                <option value="Vehicle Insurance">Vehicle Insurance</option>
                <option value="PUC Certificate">PUC Certificate</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                Select File
              </label>

              <label className="neu-input flex cursor-pointer items-center justify-between px-4 py-3.5 rounded-2xl">
                <div className="flex items-center gap-3 truncate">
                  <Upload size={18} className="text-[#000000]" />
                  <span className="truncate text-xs font-bold text-[#3D4852]">
                    {fileName || "Choose document file..."}
                  </span>
                </div>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                />
              </label>
            </div>
          </div>

          <button
            onClick={uploadDocument}
            disabled={uploading || !selectedDocument || !fileName}
            className="neu-btn neu-btn-primary px-8 py-3.5 rounded-2xl text-xs font-bold disabled:opacity-50"
          >
            {uploading ? "Submitting File..." : "Submit Document for Verification"}
          </button>
        </section>

        {/* Requirements Cards */}
        <section className="grid gap-6 sm:grid-cols-3">
          <Requirement
            icon={<FileCheck2 size={20} />}
            title="High Visibility"
            text="Ensure document corners and text numbers are legible."
          />

          <Requirement
            icon={<Clock3 size={20} />}
            title="Active Validity"
            text="Submitting expired permits will pause automated trip dispatch."
          />

          <Requirement
            icon={<ShieldCheck size={20} />}
            title="Encrypted Verification"
            text="All documents undergo automated AI & manual compliance audits."
          />
        </section>
      </div>
    </main>
  );
}

function DocumentBadge({ status }: { status: string }) {
  if (status === "Verified") {
    return (
      <span className="neu-inset-sm px-3 py-1 rounded-full text-xs font-bold text-[#000000] inline-flex items-center gap-1.5">
        <CheckCircle2 size={14} />
        Verified
      </span>
    );
  }

  if (status === "Rejected") {
    return (
      <span className="neu-inset-sm px-3 py-1 rounded-full text-xs font-bold text-red-600 inline-flex items-center gap-1.5">
        <XCircle size={14} />
        Rejected
      </span>
    );
  }

  return (
    <span className="neu-inset-sm px-3 py-1 rounded-full text-xs font-bold text-[#6B7280] inline-flex items-center gap-1.5">
      <Clock3 size={14} />
      Pending
    </span>
  );
}

function Requirement({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="neu-extruded rounded-[28px] bg-[#E0E5EC] p-6 space-y-3">
      <div className="neu-inset-deep inline-flex p-3 rounded-xl text-[#000000]">
        {icon}
      </div>
      <h3 className="font-bold text-sm text-[#3D4852]">{title}</h3>
      <p className="text-xs text-[#6B7280] leading-relaxed">{text}</p>
    </div>
  );
}