import * as graphql from "@nestjs/graphql";
import { JobTypeResolverBase } from "./base/jobType.resolver.base";
import { JobType } from "./base/JobType";
import { JobTypeService } from "./jobType.service";

@graphql.Resolver(() => JobType)
export class JobTypeResolver extends JobTypeResolverBase {
  constructor(protected readonly service: JobTypeService) {
    super(service);
  }
}
