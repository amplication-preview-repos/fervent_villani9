import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShapeListRelationFilter } from "../shape/ShapeListRelationFilter";

export type ImageWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  shapes?: ShapeListRelationFilter;
  title?: StringNullableFilter;
};
