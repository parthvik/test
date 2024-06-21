import { SortOrder } from "../../util/SortOrder";

export type ExperienceOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  engineerId?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
