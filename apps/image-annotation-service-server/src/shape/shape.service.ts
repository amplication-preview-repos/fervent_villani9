import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShapeServiceBase } from "./base/shape.service.base";

@Injectable()
export class ShapeService extends ShapeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
