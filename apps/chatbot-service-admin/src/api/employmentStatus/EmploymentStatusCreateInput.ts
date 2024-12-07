import { WorkerCreateNestedManyWithoutEmploymentStatusesInput } from "./WorkerCreateNestedManyWithoutEmploymentStatusesInput";

export type EmploymentStatusCreateInput = {
  status?: string | null;
  workers?: WorkerCreateNestedManyWithoutEmploymentStatusesInput;
};
