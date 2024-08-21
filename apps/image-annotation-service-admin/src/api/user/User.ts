import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Shape } from "../shape/Shape";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  shapes?: Array<Shape>;
  updatedAt: Date;
  username: string;
};
