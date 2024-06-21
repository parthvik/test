import { Worker } from "../worker/Worker";

export type Company = {
  createdAt: Date;
  id: string;
  isBigTech: boolean | null;
  name: string | null;
  updatedAt: Date;
  workers?: Array<Worker>;
};
