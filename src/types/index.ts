export interface JobInterface {
  id: string;
  address: string;
  company: string;
  phone: string;
  postalZip: string;
  region: string;
  country: string;
  latlng: string;
  urgent_hire: boolean;
  available_until: string;
  title: string;
  summary: string;
  amount_min: number;
  amount_max: number;
  apply_url: string;
  type: string;
  level: string;
  engagement_type: EngagementType;
  date_posted: string;
  url: string;
}

export interface ExtendedJobInterface extends JobInterface {
  expired?: boolean;
}

export interface ErrorComponentProps {
  message: string;
}

export interface JobCardInterface {
  job: ExtendedJobInterface;
}

export type JobsSeparatedResult = {
  active: ExtendedJobInterface[];
  expired: ExtendedJobInterface[];
};

export type EngagementType = "FT" | "PT" | "HR";
