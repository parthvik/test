import { Engineer } from "../engineer/Engineer";

export type Experience = {
  company: string | null;
  createdAt: Date;
  endDate: Date | null;
  engineer?: Engineer | null;
  id: string;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
