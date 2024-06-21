/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  EmploymentStatus as PrismaEmploymentStatus,
  Worker as PrismaWorker,
} from "@prisma/client";

export class EmploymentStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmploymentStatusCountArgs, "select">
  ): Promise<number> {
    return this.prisma.employmentStatus.count(args);
  }

  async employmentStatuses(
    args: Prisma.EmploymentStatusFindManyArgs
  ): Promise<PrismaEmploymentStatus[]> {
    return this.prisma.employmentStatus.findMany(args);
  }
  async employmentStatus(
    args: Prisma.EmploymentStatusFindUniqueArgs
  ): Promise<PrismaEmploymentStatus | null> {
    return this.prisma.employmentStatus.findUnique(args);
  }
  async createEmploymentStatus(
    args: Prisma.EmploymentStatusCreateArgs
  ): Promise<PrismaEmploymentStatus> {
    return this.prisma.employmentStatus.create(args);
  }
  async updateEmploymentStatus(
    args: Prisma.EmploymentStatusUpdateArgs
  ): Promise<PrismaEmploymentStatus> {
    return this.prisma.employmentStatus.update(args);
  }
  async deleteEmploymentStatus(
    args: Prisma.EmploymentStatusDeleteArgs
  ): Promise<PrismaEmploymentStatus> {
    return this.prisma.employmentStatus.delete(args);
  }

  async findWorkers(
    parentId: string,
    args: Prisma.WorkerFindManyArgs
  ): Promise<PrismaWorker[]> {
    return this.prisma.employmentStatus
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .workers(args);
  }
}
