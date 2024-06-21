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

export const ExperienceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="company" source="company" />
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceInput
          source="engineer.id"
          reference="Engineer"
          label="engineer"
        >
          <SelectInput optionText={EngineerTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
