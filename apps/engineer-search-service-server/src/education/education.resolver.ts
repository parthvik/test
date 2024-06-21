import * as graphql from "@nestjs/graphql";
import { EducationResolverBase } from "./base/education.resolver.base";
import { Education } from "./base/Education";
import { EducationService } from "./education.service";

@graphql.Resolver(() => Education)
export class EducationResolver extends EducationResolverBase {
  constructor(protected readonly service: EducationService) {
    super(service);
  }
}
