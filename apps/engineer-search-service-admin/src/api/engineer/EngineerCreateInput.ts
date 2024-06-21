import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";
import { EducationCreateNestedManyWithoutEngineersInput } from "./EducationCreateNestedManyWithoutEngineersInput";
import { ExperienceCreateNestedManyWithoutEngineersInput } from "./ExperienceCreateNestedManyWithoutEngineersInput";

export type EngineerCreateInput = {
  budget?: BudgetWhereUniqueInput | null;
  educations?: EducationCreateNestedManyWithoutEngineersInput;
  experiences?: ExperienceCreateNestedManyWithoutEngineersInput;
  isFullTime?: boolean | null;
  name?: string | null;
};
