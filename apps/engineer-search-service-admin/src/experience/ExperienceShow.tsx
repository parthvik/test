import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ENGINEER_TITLE_FIELD } from "../engineer/EngineerTitle";

export const ExperienceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="endDate" source="endDate" />
        <ReferenceField
          label="engineer"
          source="engineer.id"
          reference="Engineer"
        >
          <TextField source={ENGINEER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="startDate" source="startDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
