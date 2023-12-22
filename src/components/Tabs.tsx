import React, { useState } from "react";

import { TAB_ALL_JOBS, TAB_ACTIVE_JOBS, TAB_EXPIRED_JOBS } from "@/constants";
import { useJobs } from "@/hooks/useJobs";
import { useSeparatedJobs } from "@/hooks/useSeparatedJobs";

import { JobsList } from "@/components/JobsList";

// Example with active and expired jobs as a test case. Current api returns only expired.
// import { data } from "@/mockedData";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const { jobs } = useJobs();

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const jobsSeparated = useSeparatedJobs(jobs);

  const allJobsLength = jobs?.length || 0;
  const activeJobsLength = jobsSeparated.active.length;
  const expiredJobsLength = jobsSeparated.expired.length;

  return (
    <div className="max-w-screen-xl mx-auto pt-10">
      <h2 className="text-2xl font-medium mb-4">Jobs</h2>
      <div className="flex border-b border-gray-300 mb-4">
        <button
          className={`${activeTab === 1 ? "tab-button-active" : "tab-button"}`}
          onClick={() => handleTabClick(1)}
        >
          {TAB_ALL_JOBS}
          <span className="item-count">{allJobsLength}</span>
        </button>
        <button
          className={`${activeTab === 2 ? "tab-button-active" : "tab-button"}`}
          onClick={() => handleTabClick(2)}
        >
          {TAB_ACTIVE_JOBS}
          <span className="item-count">{activeJobsLength}</span>
        </button>
        <button
          className={`${activeTab === 3 ? "tab-button-active" : "tab-button"}`}
          onClick={() => handleTabClick(3)}
        >
          {TAB_EXPIRED_JOBS}
          <span className="item-count">{expiredJobsLength}</span>
        </button>
      </div>

      <div>
        {activeTab === 1 && <JobsList jobs={jobs} />}
        {activeTab === 2 && <JobsList jobs={jobsSeparated.active} />}
        {activeTab === 3 && <JobsList jobs={jobsSeparated.expired} />}
      </div>
    </div>
  );
};
