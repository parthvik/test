import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkerTitle } from "../worker/WorkerTitle";

export const SkillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="worker.id" reference="Worker" label="Worker">
          <SelectInput optionText={WorkerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
