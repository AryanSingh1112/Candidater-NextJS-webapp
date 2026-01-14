"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Candidate, CandidateFormData } from "@/types/candidates";

interface CandidateContextType {
  candidates: Candidate[];
  addCandidate: (data: CandidateFormData) => void;
  deleteCandidate: (id: number) => void;
}

const CandidateContext = createContext<CandidateContextType | undefined>(
  undefined
);

const STORAGE_KEY = "candidates";

export function CandidateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setCandidates(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(candidates));
    }
  }, [candidates, isLoaded]);

  function addCandidate(data: CandidateFormData) {
    const newCandidate: Candidate = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      role: data.role,
      status: "Added",
    };

    setCandidates((prev) => [newCandidate, ...prev]);
  }

  function deleteCandidate(id: number) {
    setCandidates((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <CandidateContext.Provider
      value={{ candidates, addCandidate, deleteCandidate }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidates() {
  const context = useContext(CandidateContext);
  if (!context) {
    throw new Error(
      "useCandidates must be used inside CandidateProvider"
    );
  }
  return context;
}
