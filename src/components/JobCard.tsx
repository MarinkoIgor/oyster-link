import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

import { JobCardInterface } from "@/types";

import { formatSalaryRange, getEngagementTypeLabel } from "@/utils";
import {
  BUTTON_TEXT_APPLY,
  JOB_POSTED_TEXT_PREFIX,
  JOB_POSTED_TEXT_SUFFIX,
} from "@/constants";
import { ExpiredNote } from "@/components/ExpiredNote";

export const JobCard = ({ job }: JobCardInterface) => {
  const timeAgo = formatDistanceToNow(new Date(job.date_posted), {
    addSuffix: false,
  });

  const engagementTypeLabel = getEngagementTypeLabel(job.engagement_type);

  const salaryRange = formatSalaryRange(job.amount_min, job.amount_max);

  return (
    <div className="bg-white p-4 py-8 rounded-md shadow-md mb-4 flex relative">
      {job.expired && <ExpiredNote />}
      <div>
        <div className="flex mb-4">
          <div>
            <Image
              src={job.url}
              alt={job.title}
              width={150}
              height={75}
              className="rounded"
            />
          </div>
          <div className="flex flex-col pl-4">
            <p className="text-gray-500 mb-2 font-semibold">{job.company}</p>
            <h5 className="text-xl font-bold mb-2">{job.title}</h5>
            <p className="text-gray-500">
              {`${job.region}, ${job.postalZip} |`}
              <span className="capitalize font-semibold">{` ${job.type}`}</span>
            </p>
          </div>
        </div>
        <div className="flex">
          <span className="pill">{engagementTypeLabel}</span>
          <span className="pill">{salaryRange}</span>
        </div>
        <p className="text-gray-700 mb-2 mt-6">{job.summary}</p>
      </div>
      <div className="flex flex-col shrink-0 justify-between items-end">
        <a
          href={job.apply_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-3 rounded-md inline-block hover:bg-green-600"
        >
          {BUTTON_TEXT_APPLY}
        </a>
        <p className="text-gray-500 mb-2">
          {`${JOB_POSTED_TEXT_PREFIX} ${timeAgo} ${JOB_POSTED_TEXT_SUFFIX}`}
        </p>
      </div>
    </div>
  );
};
