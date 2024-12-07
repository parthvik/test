import { EmploymentStatus as TEmploymentStatus } from "../api/employmentStatus/EmploymentStatus";

export const EMPLOYMENTSTATUS_TITLE_FIELD = "status";

export const EmploymentStatusTitle = (record: TEmploymentStatus): string => {
  return record.status?.toString() || String(record.id);
};
