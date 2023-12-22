import { ExtendedJobInterface } from "@/types";

import { JobCard } from "@/components/JobCard";

interface JobsList {
  jobs?: ExtendedJobInterface[];
}

export const JobsList = ({ jobs = [] }: JobsList) => {
  return jobs?.map((job) => {
    return (
      <div key={job.id} className="w-full">
        <JobCard job={job} />
      </div>
    );
  });
};
