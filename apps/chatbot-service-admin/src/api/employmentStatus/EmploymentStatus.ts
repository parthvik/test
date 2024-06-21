import { Worker } from "../worker/Worker";

export type EmploymentStatus = {
  createdAt: Date;
  id: string;
  status: string | null;
  updatedAt: Date;
  workers?: Array<Worker>;
};
