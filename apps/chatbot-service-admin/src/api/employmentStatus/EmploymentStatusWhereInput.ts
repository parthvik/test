import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorkerListRelationFilter } from "../worker/WorkerListRelationFilter";

export type EmploymentStatusWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  workers?: WorkerListRelationFilter;
};
