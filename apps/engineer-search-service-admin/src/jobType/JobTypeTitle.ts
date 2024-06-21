import { JobType as TJobType } from "../api/jobType/JobType";

export const JOBTYPE_TITLE_FIELD = "id";

export const JobTypeTitle = (record: TJobType): string => {
  return record.id?.toString() || String(record.id);
};
