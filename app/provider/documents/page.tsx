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
  const [documents, setDocuments] =
    useState<DocumentItem[]>(initialDocuments);

  const [uploadingId, setUploadingId] =
    useState<number | null>(null);

  const handleUpload = (id: number) => {
    setUploadingId(id);

    setTimeout(() => {
      setDocuments((current) =>
        current.map((document) =>
          document.id === id
            ? {
                ...document,
                status: "Pending",
              }
            : document
        )
      );

      setUploadingId(null);
    }, 700);
  };

  const verifiedCount = documents.filter(
    (document) => document.status === "Verified"
  ).length;

  const pendingCount = documents.filter(
    (document) => document.status === "Pending"
  ).length;

  const expiredCount = documents.filter(
    (document) => document.status === "Expired"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/provider"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            <ArrowLeft size={18} />
            Dashboard
          </Link>

          <Link
            href="/"
            className="ml-auto text-xl font-extrabold tracking-tight sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            <span className="text-slate-950">INFUR</span>
            <span className="text-blue-600">NUS</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div>
          <p className="text-sm font-semibold text-blue-600">
            PROVIDER
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950">
            Documents & KYC
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your verification documents and their validity.
          </p>
        </div>

        {/* VERIFICATION STATUS */}
        <section className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <ShieldCheck size={23} />
              </div>

              <div>
                <h2 className="font-bold text-green-900">
                  KYC Verification
                </h2>

                <p className="mt-1 text-sm text-green-700">
                  Your identity verification is currently active.
                </p>
              </div>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-700">
              Verified
            </span>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          <Summary
            title="Verified"
            value={verifiedCount.toString()}
            icon={CheckCircle2}
            type="success"
          />

          <Summary
            title="Pending"
            value={pendingCount.toString()}
            icon={Clock}
            type="pending"
          />

          <Summary
            title="Expired"
            value={expiredCount.toString()}
            icon={AlertCircle}
            type="danger"
          />
        </section>

        {/* DOCUMENTS */}
        <section className="mt-6">
          <div className="mb-4">
            <h2 className="font-bold text-slate-950">
              Your Documents
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep all required documents valid to continue
              receiving bookings.
            </p>
          </div>

          <div className="space-y-4">
            {documents.map((document) => (
              <DocumentCard
                key={document.id}
                document={document}
                uploading={uploadingId === document.id}
                onUpload={() => handleUpload(document.id)}
              />
            ))}
          </div>
        </section>

        {/* SECURITY */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-slate-950">
                Your documents are secure
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Documents uploaded to Infurnus are used for identity,
                vehicle and provider verification. This frontend is
                currently a demo and does not upload files to a
                production server.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Summary({
  title,
  value,
  icon: Icon,
  type,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  type: "success" | "pending" | "danger";
}) {
  const styles = {
    success: "bg-green-50 text-green-600",
    pending: "bg-amber-50 text-amber-600",
    danger: "bg-red-50 text-red-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${styles[type]}`}
        >
          <Icon size={18} />
        </div>
      </div>

      <p className="mt-3 text-2xl font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}

function DocumentCard({
  document,
  uploading,
  onUpload,
}: {
  document: DocumentItem;
  uploading: boolean;
  onUpload: () => void;
}) {
  const statusStyles = {
    Verified: "bg-green-50 text-green-700",
    Pending: "bg-amber-50 text-amber-700",
    Expired: "bg-red-50 text-red-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* DOCUMENT INFO */}
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FileText size={21} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-slate-950">
                {document.name}
              </h3>

              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[document.status]}`}
              >
                {document.status}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              {document.description}
            </p>

            <p className="mt-2 text-xs text-slate-400">
              {document.expiry === "No expiry"
                ? "No expiry"
                : `Valid until ${document.expiry}`}
            </p>
          </div>
        </div>

        {/* ACTION */}
        <button
          onClick={onUpload}
          disabled={uploading}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Upload size={17} />

          {uploading
            ? "Uploading..."
            : document.status === "Verified"
              ? "Update"
              : "Upload"}
        </button>
      </div>
    </div>
  );
}