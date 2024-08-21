import { CommentUpdateManyWithoutImagesInput } from "./CommentUpdateManyWithoutImagesInput";
import { InputJsonValue } from "../../types";
import { ShapeUpdateManyWithoutImagesInput } from "./ShapeUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  comments?: CommentUpdateManyWithoutImagesInput;
  description?: string | null;
  file?: InputJsonValue;
  shapes?: ShapeUpdateManyWithoutImagesInput;
  title?: string | null;
};
