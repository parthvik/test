/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmploymentStatusService } from "../employmentStatus.service";
import { EmploymentStatusCreateInput } from "./EmploymentStatusCreateInput";
import { EmploymentStatus } from "./EmploymentStatus";
import { EmploymentStatusFindManyArgs } from "./EmploymentStatusFindManyArgs";
import { EmploymentStatusWhereUniqueInput } from "./EmploymentStatusWhereUniqueInput";
import { EmploymentStatusUpdateInput } from "./EmploymentStatusUpdateInput";
import { WorkerFindManyArgs } from "../../worker/base/WorkerFindManyArgs";
import { Worker } from "../../worker/base/Worker";
import { WorkerWhereUniqueInput } from "../../worker/base/WorkerWhereUniqueInput";

export class EmploymentStatusControllerBase {
  constructor(protected readonly service: EmploymentStatusService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmploymentStatus })
  async createEmploymentStatus(
    @common.Body() data: EmploymentStatusCreateInput
  ): Promise<EmploymentStatus> {
    return await this.service.createEmploymentStatus({
      data: data,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmploymentStatus] })
  @ApiNestedQuery(EmploymentStatusFindManyArgs)
  async employmentStatuses(
    @common.Req() request: Request
  ): Promise<EmploymentStatus[]> {
    const args = plainToClass(EmploymentStatusFindManyArgs, request.query);
    return this.service.employmentStatuses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmploymentStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async employmentStatus(
    @common.Param() params: EmploymentStatusWhereUniqueInput
  ): Promise<EmploymentStatus | null> {
    const result = await this.service.employmentStatus({
      where: params,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EmploymentStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmploymentStatus(
    @common.Param() params: EmploymentStatusWhereUniqueInput,
    @common.Body() data: EmploymentStatusUpdateInput
  ): Promise<EmploymentStatus | null> {
    try {
      return await this.service.updateEmploymentStatus({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EmploymentStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmploymentStatus(
    @common.Param() params: EmploymentStatusWhereUniqueInput
  ): Promise<EmploymentStatus | null> {
    try {
      return await this.service.deleteEmploymentStatus({
        where: params,
        select: {
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/workers")
  @ApiNestedQuery(WorkerFindManyArgs)
  async findWorkers(
    @common.Req() request: Request,
    @common.Param() params: EmploymentStatusWhereUniqueInput
  ): Promise<Worker[]> {
    const query = plainToClass(WorkerFindManyArgs, request.query);
    const results = await this.service.findWorkers(params.id, {
      ...query,
      select: {
        budget: true,

        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        employmentStatus: {
          select: {
            id: true,
          },
        },

        id: true,
        isFullTime: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workers")
  async connectWorkers(
    @common.Param() params: EmploymentStatusWhereUniqueInput,
    @common.Body() body: WorkerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workers: {
        connect: body,
      },
    };
    await this.service.updateEmploymentStatus({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workers")
  async updateWorkers(
    @common.Param() params: EmploymentStatusWhereUniqueInput,
    @common.Body() body: WorkerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workers: {
        set: body,
      },
    };
    await this.service.updateEmploymentStatus({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workers")
  async disconnectWorkers(
    @common.Param() params: EmploymentStatusWhereUniqueInput,
    @common.Body() body: WorkerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workers: {
        disconnect: body,
      },
    };
    await this.service.updateEmploymentStatus({
      where: params,
      data,
      select: { id: true },
    });
  }
}
