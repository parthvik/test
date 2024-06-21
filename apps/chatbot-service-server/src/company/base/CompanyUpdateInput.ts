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
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { WorkerUpdateManyWithoutCompaniesInput } from "./WorkerUpdateManyWithoutCompaniesInput";
import { Type } from "class-transformer";

@InputType()
class CompanyUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isBigTech?: boolean | null;

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
    type: () => WorkerUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => WorkerUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => WorkerUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  workers?: WorkerUpdateManyWithoutCompaniesInput;
}

export { CompanyUpdateInput as CompanyUpdateInput };
