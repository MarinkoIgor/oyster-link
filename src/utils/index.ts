import { EngagementType } from "@/types";

export const formatSalaryRange = (min: number, max: number): string => {
  const formattedMin = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(min);
  const formattedMax = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(max);

  return `${formattedMin} - ${formattedMax}`;
};

const engagementTypeLabels: Record<EngagementType, string> = {
  FT: "Full-Time",
  PT: "Part-Time",
  HR: "For-Hour",
};

export const getEngagementTypeLabel = (
  engagementType: EngagementType
): string => {
  return engagementTypeLabels[engagementType] || engagementType;
};
