import { useDispatch } from "react-redux";
import { setJob } from "../../store/applicationSlice"; 
import ShareButton from "./buttons/ShareButton";
import Button from "./buttons/Button";

const JobCard = ({ job }) => {
  const dispatch = useDispatch();

  const handleApplyClick = () => {
    dispatch(
      setJob({
        id: job.id,
        title: job.title,
        description: job.fullDescription || job.shortDescription,
      })
    );
  };

  return (
    <div className="p-4 mt-4 border-b">
      <div className="flex items-start gap-4">
        <div className="h-28 w-24 flex items-center justify-center rounded border bg-gray-50 text-2xl font-semibold">
          {job.title.charAt(0)}
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold">{job.title}</h3>
          <p className="text-sm">{job.location}</p>
          <p className="text-sm line-clamp-2">{job.shortDescription}</p>

          <div className="mt-1 flex items-center gap-3">
            <Button
              to={`/apply/${job.id}`}
              label="Apply"
              onClick={handleApplyClick} 
            />
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 ml-auto">
          <span className="text-xs">
            {new Date(job.datePosted).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <ShareButton jobLink={job.applyLink} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
