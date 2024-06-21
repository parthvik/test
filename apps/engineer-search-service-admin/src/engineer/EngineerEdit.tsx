import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { BudgetTitle } from "../budget/BudgetTitle";
import { EducationTitle } from "../education/EducationTitle";
import { ExperienceTitle } from "../experience/ExperienceTitle";

export const EngineerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="budget.id" reference="Budget" label="budget">
          <SelectInput optionText={BudgetTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="educations"
          reference="Education"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="experiences"
          reference="Experience"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperienceTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isFullTime" source="isFullTime" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
