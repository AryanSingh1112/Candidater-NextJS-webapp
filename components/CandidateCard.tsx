import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Candidate } from "@/types/candidates";
import { Mail, Briefcase, Trash2 } from "lucide-react";

interface CandidateCardProps {
  candidate: Candidate;
}

export default function CandidateCard({ candidate }: CandidateCardProps) {
  const isAdded = candidate.status === "Added";

  return (
    <Card className="bg-white/5 border border-/10 backdrop-blur text-white hover:border-blue-500/40 transition">
      <CardHeader className="flex flex-row items-start justify-between">
        <CardTitle className="text-lg">{candidate.name}</CardTitle>

        <Badge
          variant="outline"
          className={
            isAdded
              ? "border-green-500/40 text-green-400"
              : "border-red-500/40 text-red-400"
          }
        >
          {candidate.status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-3 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-gray-400" />
          {candidate.email}
        </div>

        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-gray-400" />
          {candidate.role}
        </div>

        <div className="pt-3 flex justify-end">
          <Trash2 className="h-4 w-4 cursor-pointer text-gray-500 hover:text-red-400 transition" />
        </div>
      </CardContent>
    </Card>
  );
}
