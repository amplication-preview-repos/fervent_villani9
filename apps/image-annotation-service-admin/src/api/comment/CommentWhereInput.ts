import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  positionX?: IntNullableFilter;
  positionY?: IntNullableFilter;
  text?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
