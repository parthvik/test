import { Module } from "@nestjs/common";
import { EducationModuleBase } from "./base/education.module.base";
import { EducationService } from "./education.service";
import { EducationController } from "./education.controller";
import { EducationResolver } from "./education.resolver";

@Module({
  imports: [EducationModuleBase],
  controllers: [EducationController],
  providers: [EducationService, EducationResolver],
  exports: [EducationService],
})
export class EducationModule {}
