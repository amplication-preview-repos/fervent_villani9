import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Shape } from "../shape/Shape";

export type Image = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  file: JsonValue;
  id: string;
  shapes?: Array<Shape>;
  title: string | null;
  updatedAt: Date;
};
