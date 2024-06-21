/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Education } from "./Education";
import { EducationCountArgs } from "./EducationCountArgs";
import { EducationFindManyArgs } from "./EducationFindManyArgs";
import { EducationFindUniqueArgs } from "./EducationFindUniqueArgs";
import { CreateEducationArgs } from "./CreateEducationArgs";
import { UpdateEducationArgs } from "./UpdateEducationArgs";
import { DeleteEducationArgs } from "./DeleteEducationArgs";
import { Engineer } from "../../engineer/base/Engineer";
import { EducationService } from "../education.service";
@graphql.Resolver(() => Education)
export class EducationResolverBase {
  constructor(protected readonly service: EducationService) {}

  async _educationsMeta(
    @graphql.Args() args: EducationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Education])
  async educations(
    @graphql.Args() args: EducationFindManyArgs
  ): Promise<Education[]> {
    return this.service.educations(args);
  }

  @graphql.Query(() => Education, { nullable: true })
  async education(
    @graphql.Args() args: EducationFindUniqueArgs
  ): Promise<Education | null> {
    const result = await this.service.education(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Education)
  async createEducation(
    @graphql.Args() args: CreateEducationArgs
  ): Promise<Education> {
    return await this.service.createEducation({
      ...args,
      data: {
        ...args.data,

        engineer: args.data.engineer
          ? {
              connect: args.data.engineer,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Education)
  async updateEducation(
    @graphql.Args() args: UpdateEducationArgs
  ): Promise<Education | null> {
    try {
      return await this.service.updateEducation({
        ...args,
        data: {
          ...args.data,

          engineer: args.data.engineer
            ? {
                connect: args.data.engineer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Education)
  async deleteEducation(
    @graphql.Args() args: DeleteEducationArgs
  ): Promise<Education | null> {
    try {
      return await this.service.deleteEducation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Engineer, {
    nullable: true,
    name: "engineer",
  })
  async getEngineer(
    @graphql.Parent() parent: Education
  ): Promise<Engineer | null> {
    const result = await this.service.getEngineer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
