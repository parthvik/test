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
import { BudgetService } from "../budget.service";
import { BudgetCreateInput } from "./BudgetCreateInput";
import { Budget } from "./Budget";
import { BudgetFindManyArgs } from "./BudgetFindManyArgs";
import { BudgetWhereUniqueInput } from "./BudgetWhereUniqueInput";
import { BudgetUpdateInput } from "./BudgetUpdateInput";
import { EngineerFindManyArgs } from "../../engineer/base/EngineerFindManyArgs";
import { Engineer } from "../../engineer/base/Engineer";
import { EngineerWhereUniqueInput } from "../../engineer/base/EngineerWhereUniqueInput";

export class BudgetControllerBase {
  constructor(protected readonly service: BudgetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Budget })
  async createBudget(@common.Body() data: BudgetCreateInput): Promise<Budget> {
    return await this.service.createBudget({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Budget] })
  @ApiNestedQuery(BudgetFindManyArgs)
  async budgets(@common.Req() request: Request): Promise<Budget[]> {
    const args = plainToClass(BudgetFindManyArgs, request.query);
    return this.service.budgets({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Budget })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async budget(
    @common.Param() params: BudgetWhereUniqueInput
  ): Promise<Budget | null> {
    const result = await this.service.budget({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Budget })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBudget(
    @common.Param() params: BudgetWhereUniqueInput,
    @common.Body() data: BudgetUpdateInput
  ): Promise<Budget | null> {
    try {
      return await this.service.updateBudget({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Budget })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBudget(
    @common.Param() params: BudgetWhereUniqueInput
  ): Promise<Budget | null> {
    try {
      return await this.service.deleteBudget({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
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

  @common.Get("/:id/engineers")
  @ApiNestedQuery(EngineerFindManyArgs)
  async findEngineers(
    @common.Req() request: Request,
    @common.Param() params: BudgetWhereUniqueInput
  ): Promise<Engineer[]> {
    const query = plainToClass(EngineerFindManyArgs, request.query);
    const results = await this.service.findEngineers(params.id, {
      ...query,
      select: {
        budget: {
          select: {
            id: true,
          },
        },

        createdAt: true,
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

  @common.Post("/:id/engineers")
  async connectEngineers(
    @common.Param() params: BudgetWhereUniqueInput,
    @common.Body() body: EngineerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      engineers: {
        connect: body,
      },
    };
    await this.service.updateBudget({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/engineers")
  async updateEngineers(
    @common.Param() params: BudgetWhereUniqueInput,
    @common.Body() body: EngineerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      engineers: {
        set: body,
      },
    };
    await this.service.updateBudget({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/engineers")
  async disconnectEngineers(
    @common.Param() params: BudgetWhereUniqueInput,
    @common.Body() body: EngineerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      engineers: {
        disconnect: body,
      },
    };
    await this.service.updateBudget({
      where: params,
      data,
      select: { id: true },
    });
  }
}
