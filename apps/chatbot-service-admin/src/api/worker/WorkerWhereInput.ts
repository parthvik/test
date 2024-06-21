import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmploymentStatusWhereUniqueInput } from "../employmentStatus/EmploymentStatusWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";

export type WorkerWhereInput = {
  budget?: FloatNullableFilter;
  company?: CompanyWhereUniqueInput;
  employmentStatus?: EmploymentStatusWhereUniqueInput;
  id?: StringFilter;
  isFullTime?: BooleanNullableFilter;
  name?: StringNullableFilter;
  skills?: SkillListRelationFilter;
};
