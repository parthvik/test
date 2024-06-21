import { Budget } from "../budget/Budget";
import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";

export type Engineer = {
  budget?: Budget | null;
  createdAt: Date;
  educations?: Array<Education>;
  experiences?: Array<Experience>;
  id: string;
  isFullTime: boolean | null;
  name: string | null;
  updatedAt: Date;
};
