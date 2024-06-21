import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";
import { EducationUpdateManyWithoutEngineersInput } from "./EducationUpdateManyWithoutEngineersInput";
import { ExperienceUpdateManyWithoutEngineersInput } from "./ExperienceUpdateManyWithoutEngineersInput";

export type EngineerUpdateInput = {
  budget?: BudgetWhereUniqueInput | null;
  educations?: EducationUpdateManyWithoutEngineersInput;
  experiences?: ExperienceUpdateManyWithoutEngineersInput;
  isFullTime?: boolean | null;
  name?: string | null;
};
