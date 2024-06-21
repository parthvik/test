import { EngineerCreateNestedManyWithoutBudgetsInput } from "./EngineerCreateNestedManyWithoutBudgetsInput";

export type BudgetCreateInput = {
  amount?: number | null;
  engineers?: EngineerCreateNestedManyWithoutBudgetsInput;
};
