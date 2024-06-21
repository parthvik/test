import { Engineer } from "../engineer/Engineer";

export type Education = {
  createdAt: Date;
  degree: string | null;
  endDate: Date | null;
  engineer?: Engineer | null;
  id: string;
  institution: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
