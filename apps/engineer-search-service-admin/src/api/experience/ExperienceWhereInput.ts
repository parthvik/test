import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ExperienceWhereInput = {
  company?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  engineer?: EngineerWhereUniqueInput;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
