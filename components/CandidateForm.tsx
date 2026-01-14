"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CandidateFormData } from "@/types/candidates";
import {
  User,
  Mail,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import {
  getInitialFormState,
  validateCandidateForm,
} from "@/lib/candidate-actions";

interface CandidateFormProps {
  onSubmit: (data: CandidateFormData) => Promise<void>;
}

export function CandidateForm({ onSubmit }: CandidateFormProps) {
  const [formData, setFormData] = useState<CandidateFormData>(
    getInitialFormState()
  );
  const [errors, setErrors] = useState<Partial<CandidateFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { isValid, errors } = validateCandidateForm(formData);
    if (!isValid) {
      setErrors(errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      setFormData(getInitialFormState());
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2500);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="relative bg-black border-2 border-purple-400  backdrop-blur text-white  transition-all duration-300">
      

      <CardHeader className="pb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 shadow-lg">
            <Sparkles className="h-7 w-7 text-cyan-400 animate-pulse" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold bg-purple-500 bg-clip-text text-transparent">Add Candidate</CardTitle>
            <CardDescription className="text-cyan-200/70 text-sm mt-1">
              Enter candidate details 
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {showSuccess && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border-2 border-green-400 bg-linear-to-r from-green-500/20 to-emerald-500/20 p-4 shadow-lg">
            <CheckCircle2 className="h-6 w-6 text-green-400" />
            <p className="text-base font-semibold text-green-300">
              Candidate added successfully!
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-7">

          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-yellow-600 font-semibold">
              <User className="h-5 w-5 text-gray-500" />
              Full Name
            </Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-2 bg-black/50 border-2 border-blue-400/40 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all h-12 text-base"
            />
            {errors.name && (
              <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
                <AlertCircle className="h-3 w-3" />
                {errors.name}
              </p>
            )}
          </div>


          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-yellow-600 font-semibold">
              <Mail className="h-5 w-5 text-gray-500" />
              Email Address
            </Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="mt-2 bg-black/50 border-2 border-blue-400/40 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all h-12 text-base"
            />
            {errors.email && (
              <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>


          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-yellow-600 font-semibold">
              <Briefcase className="h-5 w-5 text-gray-500" />
              Job Role
            </Label>
            <Input
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Frontend Developer"
              className="mt-2 bg-black/50 border-2 border-blue-400/40 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all h-12 text-base"
            />
            {errors.role && (
              <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
                <AlertCircle className="h-3 w-3" />
                {errors.role}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-6 text-lg rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
          >
            {isSubmitting ? " Adding..." : "Add Candidate"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
