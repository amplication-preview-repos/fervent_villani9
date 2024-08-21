import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShapeCreateInput = {
  attributes?: InputJsonValue;
  image?: ImageWhereUniqueInput | null;
  positionX?: number | null;
  positionY?: number | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
