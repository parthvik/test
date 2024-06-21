import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExperienceServiceBase } from "./base/experience.service.base";

@Injectable()
export class ExperienceService extends ExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
