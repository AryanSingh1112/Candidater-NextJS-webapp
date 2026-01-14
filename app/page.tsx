import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExploreBtn from "@/components/ui/Explorebtn";
import { candidates } from "@/types/candidates";

export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        The Management of Every candidate <br />
        Platform You Can't Miss
      </h1>

      <p className="text-center mt-5">
        Add, Delete and Dashboard, All in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Data</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {candidates.map((candidate) => (
            <Card key={candidate.id}  className="bg-white/5 border border-white/20 text-white">
              <CardHeader className="pb-2">
                <p className="font-semibold text-2xl">{candidate.name}</p>
                <p className="text-sm text-gray-500">
                  {candidate.email}
                </p>
              </CardHeader>

              <CardContent className="space-y-5 text-sm">
                <p>
                  <span className="font-medium text-yellow-400">Role:</span>{" "}
                  {candidate.role}
                </p>

                <Badge
                  variant={
                    candidate.status === "Added"
                      ? "default"
                      : "destructive"
                  }
                >
                  {candidate.status === "Added" ? "Added" : "Deleted"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
