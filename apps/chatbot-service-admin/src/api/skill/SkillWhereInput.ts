import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorkerWhereUniqueInput } from "../worker/WorkerWhereUniqueInput";

export type SkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  worker?: WorkerWhereUniqueInput;
};
