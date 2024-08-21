import { Image } from "../image/Image";
import { User } from "../user/User";

export type Comment = {
  createdAt: Date;
  id: string;
  image?: Image | null;
  positionX: number | null;
  positionY: number | null;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
