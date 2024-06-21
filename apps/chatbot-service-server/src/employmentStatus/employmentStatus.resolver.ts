import * as graphql from "@nestjs/graphql";
import { EmploymentStatusResolverBase } from "./base/employmentStatus.resolver.base";
import { EmploymentStatus } from "./base/EmploymentStatus";
import { EmploymentStatusService } from "./employmentStatus.service";

@graphql.Resolver(() => EmploymentStatus)
export class EmploymentStatusResolver extends EmploymentStatusResolverBase {
  constructor(protected readonly service: EmploymentStatusService) {
    super(service);
  }
}
