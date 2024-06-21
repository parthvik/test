import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";

export type EducationCreateInput = {
  degree?: string | null;
  endDate?: Date | null;
  engineer?: EngineerWhereUniqueInput | null;
  institution?: string | null;
  startDate?: Date | null;
};
