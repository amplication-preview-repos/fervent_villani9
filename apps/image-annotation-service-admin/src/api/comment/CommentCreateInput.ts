import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  image?: ImageWhereUniqueInput | null;
  positionX?: number | null;
  positionY?: number | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
