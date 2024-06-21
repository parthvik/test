import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EngineerTitle } from "../engineer/EngineerTitle";

export const EducationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="degree" source="degree" />
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput
          source="engineer.id"
          reference="Engineer"
          label="engineer"
        >
          <SelectInput optionText={EngineerTitle} />
        </ReferenceInput>
        <TextInput label="institution" source="institution" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
