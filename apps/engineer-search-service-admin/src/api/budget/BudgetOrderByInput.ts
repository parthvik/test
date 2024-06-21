import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
