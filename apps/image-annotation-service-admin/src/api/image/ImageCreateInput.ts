import { CommentCreateNestedManyWithoutImagesInput } from "./CommentCreateNestedManyWithoutImagesInput";
import { InputJsonValue } from "../../types";
import { ShapeCreateNestedManyWithoutImagesInput } from "./ShapeCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  comments?: CommentCreateNestedManyWithoutImagesInput;
  description?: string | null;
  file?: InputJsonValue;
  shapes?: ShapeCreateNestedManyWithoutImagesInput;
  title?: string | null;
};
