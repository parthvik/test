import { EmploymentStatus as TEmploymentStatus } from "../api/employmentStatus/EmploymentStatus";

export const EMPLOYMENTSTATUS_TITLE_FIELD = "id";

export const EmploymentStatusTitle = (record: TEmploymentStatus): string => {
  return record.id?.toString() || String(record.id);
};
