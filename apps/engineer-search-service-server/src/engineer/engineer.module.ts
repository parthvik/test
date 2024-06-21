import { Module } from "@nestjs/common";
import { EngineerModuleBase } from "./base/engineer.module.base";
import { EngineerService } from "./engineer.service";
import { EngineerController } from "./engineer.controller";
import { EngineerResolver } from "./engineer.resolver";

@Module({
  imports: [EngineerModuleBase],
  controllers: [EngineerController],
  providers: [EngineerService, EngineerResolver],
  exports: [EngineerService],
})
export class EngineerModule {}
