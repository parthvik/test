import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WorkerTitle } from "../worker/WorkerTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isBigTech" source="isBigTech" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="workers"
          reference="Worker"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
