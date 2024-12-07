import { WorkerWhereUniqueInput } from "../worker/WorkerWhereUniqueInput";

export type SkillUpdateInput = {
  name?: string | null;
  worker?: WorkerWhereUniqueInput | null;
};
