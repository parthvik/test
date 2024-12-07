import { WorkerCreateNestedManyWithoutCompaniesInput } from "./WorkerCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  isBigTech?: boolean | null;
  name?: string | null;
  workers?: WorkerCreateNestedManyWithoutCompaniesInput;
};
