"use client";

import { CandidateForm } from "@/components/CandidateForm";
import { CandidateFormData } from "@/types/candidates";
import { useCandidates } from "@/app/context/CandidateContext";

export default function AddCandidatePage() {
  const { addCandidate } = useCandidates();

  async function handleSubmit(data: CandidateFormData) {
    addCandidate(data);
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <CandidateForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
