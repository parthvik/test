import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";

export type EducationUpdateInput = {
  degree?: string | null;
  endDate?: Date | null;
  engineer?: EngineerWhereUniqueInput | null;
  institution?: string | null;
  startDate?: Date | null;
};
