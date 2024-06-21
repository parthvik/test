import { EngineerUpdateManyWithoutBudgetsInput } from "./EngineerUpdateManyWithoutBudgetsInput";

export type BudgetUpdateInput = {
  amount?: number | null;
  engineers?: EngineerUpdateManyWithoutBudgetsInput;
};
