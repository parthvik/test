import { WorkerWhereUniqueInput } from "../worker/WorkerWhereUniqueInput";

export type SkillCreateInput = {
  name?: string | null;
  worker?: WorkerWhereUniqueInput | null;
};
