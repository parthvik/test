import { Budget as TBudget } from "../api/budget/Budget";

export const BUDGET_TITLE_FIELD = "id";

export const BudgetTitle = (record: TBudget): string => {
  return record.id?.toString() || String(record.id);
};
