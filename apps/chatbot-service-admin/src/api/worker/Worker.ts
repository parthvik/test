import { Company } from "../company/Company";
import { EmploymentStatus } from "../employmentStatus/EmploymentStatus";
import { Skill } from "../skill/Skill";

export type Worker = {
  budget: number | null;
  company?: Company | null;
  createdAt: Date;
  employmentStatus?: EmploymentStatus | null;
  id: string;
  isFullTime: boolean | null;
  name: string | null;
  skills?: Array<Skill>;
  updatedAt: Date;
};
