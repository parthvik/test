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
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsBoolean,
  IsString,
} from "class-validator";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { Type } from "class-transformer";
import { EmploymentStatusWhereUniqueInput } from "../../employmentStatus/base/EmploymentStatusWhereUniqueInput";
import { SkillUpdateManyWithoutWorkersInput } from "./SkillUpdateManyWithoutWorkersInput";

@InputType()
class WorkerUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  budget?: number | null;

  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => EmploymentStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmploymentStatusWhereUniqueInput)
  @IsOptional()
  @Field(() => EmploymentStatusWhereUniqueInput, {
    nullable: true,
  })
  employmentStatus?: EmploymentStatusWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isFullTime?: boolean | null;

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
    type: () => SkillUpdateManyWithoutWorkersInput,
  })
  @ValidateNested()
  @Type(() => SkillUpdateManyWithoutWorkersInput)
  @IsOptional()
  @Field(() => SkillUpdateManyWithoutWorkersInput, {
    nullable: true,
  })
  skills?: SkillUpdateManyWithoutWorkersInput;
}

export { WorkerUpdateInput as WorkerUpdateInput };
