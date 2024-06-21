/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { WorkerWhereUniqueInput } from "../../worker/base/WorkerWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class SkillUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => WorkerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkerWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkerWhereUniqueInput, {
    nullable: true,
  })
  worker?: WorkerWhereUniqueInput | null;
}

export { SkillUpdateInput as SkillUpdateInput };
