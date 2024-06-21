import { Worker } from "../worker/Worker";

export type Skill = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  worker?: Worker | null;
};
