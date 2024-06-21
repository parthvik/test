import { SortOrder } from "../../util/SortOrder";

export type WorkerOrderByInput = {
  budget?: SortOrder;
  companyId?: SortOrder;
  createdAt?: SortOrder;
  employmentStatusId?: SortOrder;
  id?: SortOrder;
  isFullTime?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
