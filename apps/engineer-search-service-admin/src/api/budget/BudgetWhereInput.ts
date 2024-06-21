import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EngineerListRelationFilter } from "../engineer/EngineerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BudgetWhereInput = {
  amount?: FloatNullableFilter;
  engineers?: EngineerListRelationFilter;
  id?: StringFilter;
};
