import { useMemo } from "react";
import { ExtendedJobInterface, JobsSeparatedResult } from "@/types";

// Custom hook to categorize jobs into expired and active lists.
export const useSeparatedJobs = (
  jobs: ExtendedJobInterface[] | undefined
): JobsSeparatedResult => {
  return useMemo(() => {
    if (jobs && jobs.length) {
      return jobs.reduce(
        (acc, job) => {
          if (job.expired) {
            acc.expired.push(job);
          } else {
            acc.active.push(job);
          }
          return acc;
        },
        { active: [], expired: [] } as JobsSeparatedResult
      );
    }
    return { active: [], expired: [] };
  }, [jobs]);
};
