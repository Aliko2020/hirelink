import { Link } from "react-router-dom";

const CandidateCard = ({ candidate }) => {
  return (
    <Link
      to={`/adminboard/candidate/${candidate.id}`}
      className=" block border border-gray-200 rounded-lg p-3 sm:p-4  bg-white transition hover:shadow-md  hover:border-gray-300 active:scale-[0.98]"
    >
      <p className="font-medium text-sm sm:text-base text-gray-900">
        {candidate.fullName}
      </p>

      {candidate.jobTitle && (
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
          {candidate.jobTitle}
        </p>
      )}

      <div className="mt-2 text-xs sm:text-sm text-gray-600">
        Experience: {candidate.experience} yrs
      </div>
    </Link>
  );
};

export default CandidateCard;
