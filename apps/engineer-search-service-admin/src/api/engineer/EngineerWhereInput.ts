import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";
import { EducationListRelationFilter } from "../education/EducationListRelationFilter";
import { ExperienceListRelationFilter } from "../experience/ExperienceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EngineerWhereInput = {
  budget?: BudgetWhereUniqueInput;
  educations?: EducationListRelationFilter;
  experiences?: ExperienceListRelationFilter;
  id?: StringFilter;
  isFullTime?: BooleanNullableFilter;
  name?: StringNullableFilter;
};
