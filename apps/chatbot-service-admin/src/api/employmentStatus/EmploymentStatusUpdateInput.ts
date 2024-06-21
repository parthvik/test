import { WorkerUpdateManyWithoutEmploymentStatusesInput } from "./WorkerUpdateManyWithoutEmploymentStatusesInput";

export type EmploymentStatusUpdateInput = {
  status?: string | null;
  workers?: WorkerUpdateManyWithoutEmploymentStatusesInput;
};
