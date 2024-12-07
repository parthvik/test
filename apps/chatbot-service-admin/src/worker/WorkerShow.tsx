import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WORKER_TITLE_FIELD } from "./WorkerTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EMPLOYMENTSTATUS_TITLE_FIELD } from "../employmentStatus/EmploymentStatusTitle";

export const WorkerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="budget" source="budget" />
        <ReferenceField label="company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="employmentStatus"
          source="employmentstatus.id"
          reference="EmploymentStatus"
        >
          <TextField source={EMPLOYMENTSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="isFullTime" source="isFullTime" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Skill" target="workerId" label="Skills">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Worker"
              source="worker.id"
              reference="Worker"
            >
              <TextField source={WORKER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
