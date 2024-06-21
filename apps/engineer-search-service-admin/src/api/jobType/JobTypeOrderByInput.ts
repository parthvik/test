import { SortOrder } from "../../util/SortOrder";

export type JobTypeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
