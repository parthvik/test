import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkerTitle } from "../worker/WorkerTitle";

export const SkillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="worker.id" reference="Worker" label="Worker">
          <SelectInput optionText={WorkerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
