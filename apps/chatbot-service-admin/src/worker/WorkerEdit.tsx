import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EmploymentStatusTitle } from "../employmentStatus/EmploymentStatusTitle";
import { SkillTitle } from "../skill/SkillTitle";

export const WorkerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="budget" source="budget" />
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employmentStatus.id"
          reference="EmploymentStatus"
          label="employmentStatus"
        >
          <SelectInput optionText={EmploymentStatusTitle} />
        </ReferenceInput>
        <BooleanInput label="isFullTime" source="isFullTime" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="skills"
          reference="Skill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
