import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EngineerService } from "./engineer.service";
import { EngineerControllerBase } from "./base/engineer.controller.base";

@swagger.ApiTags("engineers")
@common.Controller("engineers")
export class EngineerController extends EngineerControllerBase {
  constructor(protected readonly service: EngineerService) {
    super(service);
  }
}
