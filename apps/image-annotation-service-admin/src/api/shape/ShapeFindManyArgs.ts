import { ShapeWhereInput } from "./ShapeWhereInput";
import { ShapeOrderByInput } from "./ShapeOrderByInput";

export type ShapeFindManyArgs = {
  where?: ShapeWhereInput;
  orderBy?: Array<ShapeOrderByInput>;
  skip?: number;
  take?: number;
};
