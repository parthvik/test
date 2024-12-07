import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmploymentStatusWhereUniqueInput } from "../employmentStatus/EmploymentStatusWhereUniqueInput";
import { SkillUpdateManyWithoutWorkersInput } from "./SkillUpdateManyWithoutWorkersInput";

export type WorkerUpdateInput = {
  budget?: number | null;
  company?: CompanyWhereUniqueInput | null;
  employmentStatus?: EmploymentStatusWhereUniqueInput | null;
  isFullTime?: boolean | null;
  name?: string | null;
  skills?: SkillUpdateManyWithoutWorkersInput;
};
