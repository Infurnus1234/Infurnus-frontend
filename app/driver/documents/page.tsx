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
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/driver"
            className="mr-4 rounded-xl p-2 text-slate-600 hover:bg-slate-100"
          >
            <ArrowLeft size={21} />
          </Link>

          <Link href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>

          <span className="ml-auto text-sm font-semibold text-slate-600">
            Documents & KYC
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6">
          <p className="text-sm text-slate-500">Driver account</p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            Documents & KYC
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your identity, driving and vehicle documents.
          </p>
        </div>

        {/* KYC Status */}
        <section className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <ShieldCheck size={25} />
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  KYC Verification
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your driver account is verified.
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700">
              VERIFIED
            </span>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs">
              <span className="font-medium text-slate-600">
                Verification Progress
              </span>

              <span className="font-semibold text-green-600">
                100%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-full rounded-full bg-green-500" />
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="mt-6 rounded-2xl bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="text-lg font-bold text-slate-950">
              My Documents
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep your documents valid and up to date.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {documents.map((document) => (
              <div
                key={document.id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FileText size={21} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {document.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {document.type} • {document.number}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Expiry: {document.expiry}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DocumentBadge status={document.status} />

                  <button
                    onClick={() => {
                      setSelectedDocument(document.title);
                      setFileName("");
                    }}
                    className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upload */}
        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Upload size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Upload Document
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Upload a clear PDF, JPG or PNG of your document.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Document Type
              </label>

              <select
                value={selectedDocument}
                onChange={(e) => {
                  setSelectedDocument(e.target.value);
                  setFileName("");
                }}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option value="">Select document</option>
                <option value="Driving Licence">
                  Driving Licence
                </option>
                <option value="Aadhaar Card">
                  Aadhaar Card
                </option>
                <option value="Vehicle RC">
                  Vehicle RC
                </option>
                <option value="Vehicle Insurance">
                  Vehicle Insurance
                </option>
                <option value="PUC Certificate">
                  PUC Certificate
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Choose File
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 px-4 py-3 hover:bg-slate-50">
                <Upload size={19} className="text-slate-400" />

                <span className="truncate text-sm text-slate-500">
                  {fileName || "Choose a file"}
                </span>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) =>
                    handleFile(e.target.files?.[0])
                  }
                />
              </label>
            </div>
          </div>

          <button
            onClick={uploadDocument}
            disabled={uploading || !selectedDocument || !fileName}
            className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {uploading ? "Uploading..." : "Upload for Verification"}
          </button>
        </section>

        {/* Requirements */}
        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          <Requirement
            icon={<FileCheck2 size={20} />}
            title="Clear Documents"
            text="Make sure all text and photos are clearly visible."
          />

          <Requirement
            icon={<Clock3 size={20} />}
            title="Valid Documents"
            text="Expired documents may affect your driver account."
          />

          <Requirement
            icon={<ShieldCheck size={20} />}
            title="Secure Verification"
            text="Documents are reviewed before approval."
          />
        </section>

        {/* Back */}
        <div className="mt-6">
          <Link
            href="/driver"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={16} />
            Back to Driver Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

function DocumentBadge({ status }: { status: string }) {
  if (status === "Verified") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-700">
        <CheckCircle2 size={14} />
        Verified
      </span>
    );
  }

  if (status === "Rejected") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-bold text-red-700">
        <XCircle size={14} />
        Rejected
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-orange-700">
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
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h3 className="mt-4 font-bold text-slate-950">{title}</h3>

      <p className="mt-1 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}