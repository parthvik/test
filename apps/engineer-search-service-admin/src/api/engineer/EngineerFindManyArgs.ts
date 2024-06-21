import { EngineerWhereInput } from "./EngineerWhereInput";
import { EngineerOrderByInput } from "./EngineerOrderByInput";

export type EngineerFindManyArgs = {
  where?: EngineerWhereInput;
  orderBy?: Array<EngineerOrderByInput>;
  skip?: number;
  take?: number;
};
