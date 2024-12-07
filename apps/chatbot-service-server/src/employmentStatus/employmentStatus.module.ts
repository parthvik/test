import { Module } from "@nestjs/common";
import { EmploymentStatusModuleBase } from "./base/employmentStatus.module.base";
import { EmploymentStatusService } from "./employmentStatus.service";
import { EmploymentStatusController } from "./employmentStatus.controller";
import { EmploymentStatusResolver } from "./employmentStatus.resolver";

@Module({
  imports: [EmploymentStatusModuleBase],
  controllers: [EmploymentStatusController],
  providers: [EmploymentStatusService, EmploymentStatusResolver],
  exports: [EmploymentStatusService],
})
export class EmploymentStatusModule {}
