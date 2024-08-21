import { Shape as TShape } from "../api/shape/Shape";

export const SHAPE_TITLE_FIELD = "id";

export const ShapeTitle = (record: TShape): string => {
  return record.id?.toString() || String(record.id);
};
