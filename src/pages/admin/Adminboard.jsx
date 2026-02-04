import { useSelector } from "react-redux";
import CandidateCard from "../admin/CandidateCard";

const stages = ["Applied", "Reviewed", "Interviews", "Offer Sent"];

export default function Adminboard() {
  const candidates = useSelector((state) => state.candidates.candidates);

  return (
    <div className="p-4 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage) => {
          const stageCandidates = candidates.filter(
            (c) => c.stage === stage
          );

          return (
            <div
              key={stage}
              className="rounded-md border p-3 bg-white"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase">
                  {stage}
                </h3>
              </div>

              <div className="space-y-3">
                {stageCandidates.length === 0 ? (
                  <p className="text-xs text-gray-500">No candidates</p>
                ) : (
                  stageCandidates.map((candidate) => (
                    <CandidateCard
                      key={candidate.id}
                      candidate={candidate}
                    />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
