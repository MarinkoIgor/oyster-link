import useSWR from "swr";
import { useMemo } from "react";
import { useState, useEffect } from "react";
import { fetcher } from "@/utils/fetcher";
import { JobInterface, ExtendedJobInterface } from "@/types";
import { JOBS_PATH_SEGMENT } from "@/constants";

export const useJobs = () => {
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    setShouldFetch(true);
  }, []);

  const { data, error, isLoading } = useSWR<JobInterface[]>(
    shouldFetch ? JOBS_PATH_SEGMENT : null,
    fetcher
  );

  const modifiedData = useMemo(() => {
    if (data) {
      const currentDate = new Date();
      // Map over each job in 'data' and extend it with 'expired' property.
      const newData: ExtendedJobInterface[] = data.map((job: JobInterface) => ({
        ...job,
        // Set 'expired' to true if 'available_until' is in the past, otherwise false.
        expired: new Date(job.available_until) < currentDate,
      }));
      return newData;
    }
    return data;
  }, [data]);

  return {
    jobs: modifiedData,
    isLoading,
    isError: error,
  };
};
