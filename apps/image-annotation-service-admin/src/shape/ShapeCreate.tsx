import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ImageTitle } from "../image/ImageTitle";
import { UserTitle } from "../user/UserTitle";

export const ShapeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="image.id" reference="Image" label="Image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="positionX" source="positionX" />
        <NumberInput step={1} label="positionY" source="positionY" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};