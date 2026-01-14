import { candidateSchema } from "@/lib/validations";
import { CandidateFormData } from "@/types/candidates";

export function validateCandidateForm(data: CandidateFormData) {
  const result = candidateSchema.safeParse(data);

  if (!result.success) {
    const errors: Partial<CandidateFormData> = {};
    result.error.errors.forEach((err) => {
      const field = err.path[0] as keyof CandidateFormData;
      errors[field] = err.message;
    });
    return { isValid: false, errors };
  }

  return { isValid: true, errors: {} };
}

export function getInitialFormState(): CandidateFormData {
  return {
    name: "",
    email: "",
    role: "",
  };
}
