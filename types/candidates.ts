// Candidate status used across cards, badges, and UI
export type CandidateStatus = "Added" | "Deleted";

// Main Candidate model (used for listing, cards, storage)
export interface Candidate {
  id: number;
  name: string;
  email: string;
  role: string;
  status: CandidateStatus;
}

// Form data type (used in CandidateForm + validation)
export interface CandidateFormData {
  name: string;
  email: string;
  role: string;
}

// Initial mock data (used for homepage cards / demo)
export const candidates: Candidate[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Frontend Developer",
    status: "Added",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Backend Developer",
    status: "Deleted",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Product Manager",
    status: "Added",
  },
];
