import { JsonValue } from "type-fest";
import { Image } from "../image/Image";
import { User } from "../user/User";

export type Shape = {
  attributes: JsonValue;
  createdAt: Date;
  id: string;
  image?: Image | null;
  positionX: number | null;
  positionY: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
