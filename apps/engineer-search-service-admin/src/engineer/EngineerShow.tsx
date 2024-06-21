import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENGINEER_TITLE_FIELD } from "./EngineerTitle";
import { BUDGET_TITLE_FIELD } from "../budget/BudgetTitle";

export const EngineerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="budget" source="budget.id" reference="Budget">
          <TextField source={BUDGET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isFullTime" source="isFullTime" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Education"
          target="engineerId"
          label="Educations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="degree" source="degree" />
            <TextField label="endDate" source="endDate" />
            <ReferenceField
              label="engineer"
              source="engineer.id"
              reference="Engineer"
            >
              <TextField source={ENGINEER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="institution" source="institution" />
            <TextField label="startDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Experience"
          target="engineerId"
          label="Experiences"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
