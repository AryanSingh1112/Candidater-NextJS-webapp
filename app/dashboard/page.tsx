"use client";

import { useCandidates } from "@/app/context/CandidateContext";
import CandidatesTable from "@/components/CandidatesTable";
import StatCard from "@/components/StatCard";
import { Users, CheckCircle2 } from "lucide-react";

export default function Dashboard() {
  const { candidates } = useCandidates();

  const addedCount = candidates.filter(
    (c) => c.status === "Added"
  ).length;

  return (
    <div className="min-h-screen bg-black px-6 py-10 border-2 border-red-500 rounded-lg m-4">
      <h1 className="text-4xl font-semibold mb-2">
        Candidate Dashboard
      </h1>
      <p className="text-gray-400 mb-10">
        Real candidates added from the form
      </p>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <StatCard
          title="Total Candidates"
          value={candidates.length}
          icon={<Users />}
        />
        <StatCard
          title="Added"
          value={addedCount}
          icon={<CheckCircle2 />}
        />
      </div>

      {/* Candidate List */}
      {candidates.length === 0 ? (
        <p className="text-gray-400">
          No candidates added yet. Add one to see it here.
        </p>
      ) : (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">
            All Candidates
          </h2>
          <CandidatesTable candidates={candidates} />
        </div>
      )}
    </div>
  );
}
