import { Engineer } from "../engineer/Engineer";

export type Budget = {
  amount: number | null;
  createdAt: Date;
  engineers?: Array<Engineer>;
  id: string;
  updatedAt: Date;
};
