import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EngineerTitle } from "../engineer/EngineerTitle";

export const EducationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
