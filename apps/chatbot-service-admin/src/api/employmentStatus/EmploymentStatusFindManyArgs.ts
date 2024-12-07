import { EmploymentStatusWhereInput } from "./EmploymentStatusWhereInput";
import { EmploymentStatusOrderByInput } from "./EmploymentStatusOrderByInput";

export type EmploymentStatusFindManyArgs = {
  where?: EmploymentStatusWhereInput;
  orderBy?: Array<EmploymentStatusOrderByInput>;
  skip?: number;
  take?: number;
};
