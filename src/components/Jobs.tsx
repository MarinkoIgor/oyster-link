"use client";

import { FETCH_ERROR_MESSAGE } from "@/constants";
import { ErrorComponent } from "@/components/Error";
import { Loader } from "@/components/Loader";
import { useJobs } from "@/hooks/useJobs";
import { Tabs } from "@/components/Tabs";

export function Jobs() {
  const { isError, isLoading } = useJobs();

  if (isError) {
    return <ErrorComponent message={FETCH_ERROR_MESSAGE} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return <Tabs />;
}
