import { EngineerWhereUniqueInput } from "../engineer/EngineerWhereUniqueInput";

export type ExperienceUpdateInput = {
  company?: string | null;
  endDate?: Date | null;
  engineer?: EngineerWhereUniqueInput | null;
  startDate?: Date | null;
  title?: string | null;
};
