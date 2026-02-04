import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateCandidate } from "../../store/candidatesSlice";

export default function OfferDraft() {
  const { applicationId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const candidate = useSelector(state =>
    state.candidates.candidates.find(c => c.id === applicationId)
  );

  const [salary, setSalary] = useState(candidate?.offer?.salary || "");
  const [startDate, setStartDate] = useState(candidate?.offer?.startDate || "");

  if (!candidate) return <div>Candidate not found</div>;

  const handleDraftOffer = () => {
    const letter = `Dear ${candidate.fullName},\n\nWe are pleased to offer you the position at Digicoast.\nSalary: $${salary}\nStart Date: ${startDate}\n\nSincerely,\nRecruitment Team`;

    dispatch(updateCandidate({
      id: candidate.id,
      updates: {
        offer: { salary, startDate, letter },
        stage: "Offer Sent"
      }
    }));
    navigate("/adminboard");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Draft Offer: {candidate.fullName}</h2>

      <label className="block mb-1">Salary</label>
      <input
        type="number"
        value={salary}
        onChange={e => setSalary(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <label className="block mb-1">Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={handleDraftOffer}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
      >
        Draft Offer
      </button>

      {salary && startDate && (
        <pre className="mt-4 p-2 bg-gray-100 rounded">{`Preview:\n${`Dear ${candidate.fullName},\n\nWe are pleased to offer you the position at Digicoast.\nSalary: $${salary}\nStart Date: ${startDate}\n\nSincerely,\nRecruitment Team`}`}</pre>
      )}
    </div>
  );
}
