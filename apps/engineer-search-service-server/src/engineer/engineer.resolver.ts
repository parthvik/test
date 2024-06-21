import * as graphql from "@nestjs/graphql";
import { EngineerResolverBase } from "./base/engineer.resolver.base";
import { Engineer } from "./base/Engineer";
import { EngineerService } from "./engineer.service";

@graphql.Resolver(() => Engineer)
export class EngineerResolver extends EngineerResolverBase {
  constructor(protected readonly service: EngineerService) {
    super(service);
  }
}
