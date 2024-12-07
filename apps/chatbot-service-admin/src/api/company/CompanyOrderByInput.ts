import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isBigTech?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
