import { WorkerUpdateManyWithoutCompaniesInput } from "./WorkerUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  isBigTech?: boolean | null;
  name?: string | null;
  workers?: WorkerUpdateManyWithoutCompaniesInput;
};
