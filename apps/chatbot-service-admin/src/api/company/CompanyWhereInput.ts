import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorkerListRelationFilter } from "../worker/WorkerListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  isBigTech?: BooleanNullableFilter;
  name?: StringNullableFilter;
  workers?: WorkerListRelationFilter;
};
