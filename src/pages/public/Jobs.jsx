import Hero from "../../components/Hero";
import JobCard from "../../components/ui/Jobcard";
import { jobs } from "../../data/jobs";

const Jobs = () => {
  return (
    <div>
      <Hero
        title="Explore Jobs in Ghana"
        subtitle="Find your next opportunity in Accra, Kumasi, Tema, and beyond"
      />

      <div className="max-w-5xl mx-auto space-y-6 px-6 py-6">
        <h2 className="font-semibold text-lg">
          Open positions ({jobs.length})
        </h2>

        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
