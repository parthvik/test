import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmploymentStatusServiceBase } from "./base/employmentStatus.service.base";

@Injectable()
export class EmploymentStatusService extends EmploymentStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
