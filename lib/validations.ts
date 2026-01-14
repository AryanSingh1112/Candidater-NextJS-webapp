import { z } from "zod";

export const candidateSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  role: z
    .string()
    .min(2, "Role must be at least 2 characters")
    .max(50, "Role must be less than 50 characters"),
});
