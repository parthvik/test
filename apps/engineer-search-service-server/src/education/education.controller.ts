import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EducationService } from "./education.service";
import { EducationControllerBase } from "./base/education.controller.base";

@swagger.ApiTags("educations")
@common.Controller("educations")
export class EducationController extends EducationControllerBase {
  constructor(protected readonly service: EducationService) {
    super(service);
  }
}
