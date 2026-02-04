import ShareButton from "./ShareButton";
import Button from "./Button";

const JobCard = ({ job }) => {
  return (
    <div className="rounded-sm border p-4 hover:shadow-sm transition">
      <div className="flex items-start gap-4">
        <div className="h-28 w-28 flex items-center justify-center rounded border bg-gray-50 text-2xl font-semibold text-blue-600">
          {job.title.charAt(0)}
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.location}</p>
          <p className="mt-2 text-sm text-gray-700 line-clamp-2">
            {job.shortDescription}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <Button to={`/apply/${job.id}`} />
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 ml-auto">
          <span className="text-xs text-gray-400">
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
