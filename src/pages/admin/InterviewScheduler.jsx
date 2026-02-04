import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateCandidate } from "../../store/candidatesSlice";

export default function InterviewScheduler() {
  const { applicationId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const candidate = useSelector(state =>
    state.candidates.candidates.find(c => c.id === applicationId)
  );

  const [datetime, setDatetime] = useState(candidate?.interview?.datetime || "");

  if (!candidate) return <div>Candidate not found</div>;

  const handleSchedule = () => {
    dispatch(updateCandidate({
      id: candidate.id,
      updates: {
        interview: { datetime },
        stage: "Interview Scheduled"
      }
    }));
    navigate("/adminboard");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Schedule Interview: {candidate.fullName}</h2>

      <input
        type="datetime-local"
        value={datetime}
        onChange={e => setDatetime(e.target.value)}
        className="border p-2 w-full"
      />

      <button
        onClick={handleSchedule}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Confirm Interview
      </button>
    </div>
  );
}
