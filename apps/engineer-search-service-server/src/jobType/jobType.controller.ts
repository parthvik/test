import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobTypeService } from "./jobType.service";
import { JobTypeControllerBase } from "./base/jobType.controller.base";

@swagger.ApiTags("jobTypes")
@common.Controller("jobTypes")
export class JobTypeController extends JobTypeControllerBase {
  constructor(protected readonly service: JobTypeService) {
    super(service);
  }
}
