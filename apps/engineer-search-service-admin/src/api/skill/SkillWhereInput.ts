import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
