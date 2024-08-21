import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShapeWhereInput = {
  attributes?: JsonFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  positionX?: IntNullableFilter;
  positionY?: IntNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
