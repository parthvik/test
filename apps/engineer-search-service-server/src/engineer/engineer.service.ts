import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EngineerServiceBase } from "./base/engineer.service.base";

@Injectable()
export class EngineerService extends EngineerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
