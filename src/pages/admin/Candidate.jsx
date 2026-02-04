import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CandidateCard from "./CandidateCard";
import { moveStage } from "../../store/candidatesSlice"; 

export default function Candidate() {
  const { applicationId } = useParams();
  const dispatch = useDispatch();

  const candidates = useSelector(
    (state) => state.candidates.candidates
  );

  const candidate = candidates.find((c) => c.id === applicationId);

  if (!candidate) {
    return (
      <div className="p-4 text-sm text-gray-600">
        Candidate not found.
      </div>
    );
  }

  const handleMarkReviewed = () => {
    dispatch(
      moveStage({ id: candidate.id, stage: "Reviewed" })
    );
  };

  return (
    <div className="p-4 space-y-4">
      <CandidateCard candidate={candidate} />

      {candidate.stage !== "Reviewed" && (
        <button
          onClick={handleMarkReviewed}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Mark as Reviewed
        </button>
      )}

      {candidate.stage === "Reviewed" && (
        <span className="text-sm text-green-600 font-medium">
          Candidate already reviewed
        </span>
      )}
    </div>
  );
}
