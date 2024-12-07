import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmploymentStatusService } from "./employmentStatus.service";
import { EmploymentStatusControllerBase } from "./base/employmentStatus.controller.base";

@swagger.ApiTags("employmentStatuses")
@common.Controller("employmentStatuses")
export class EmploymentStatusController extends EmploymentStatusControllerBase {
  constructor(protected readonly service: EmploymentStatusService) {
    super(service);
  }
}
