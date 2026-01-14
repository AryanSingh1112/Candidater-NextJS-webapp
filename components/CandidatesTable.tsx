"use client";

import { Candidate } from "@/types/candidates";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { useCandidates } from "@/app/context/CandidateContext";

interface CandidatesTableProps {
  candidates: Candidate[];
}

export default function CandidatesTable({ candidates }: CandidatesTableProps) {
  const { deleteCandidate } = useCandidates();

  return (
    <div className="w-full rounded-lg border border-gray-700 bg-black overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800 bg-gray-900">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Role
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                Status
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="border-b border-gray-800 hover:bg-yellow-900 transition"
              >
                <td className="px-6 py-4 text-sm text-gray-100 font-medium">
                  {candidate.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">
                  {candidate.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">
                  {candidate.role}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Badge
                    variant="outline"
                    className={
                      candidate.status === "Added"
                        ? "border-green-500/40 bg-green-500/10 text-green-400"
                        : "border-red-500/40 bg-red-500/10 text-red-400"
                    }
                  >
                    {candidate.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => deleteCandidate(candidate.id)}
                    className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded transition"
                    title="Delete candidate"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
