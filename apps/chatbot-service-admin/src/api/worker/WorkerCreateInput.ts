import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmploymentStatusWhereUniqueInput } from "../employmentStatus/EmploymentStatusWhereUniqueInput";
import { SkillCreateNestedManyWithoutWorkersInput } from "./SkillCreateNestedManyWithoutWorkersInput";

export type WorkerCreateInput = {
  budget?: number | null;
  company?: CompanyWhereUniqueInput | null;
  employmentStatus?: EmploymentStatusWhereUniqueInput | null;
  isFullTime?: boolean | null;
  name?: string | null;
  skills?: SkillCreateNestedManyWithoutWorkersInput;
};
