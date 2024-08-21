import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShapeModuleBase } from "./base/shape.module.base";
import { ShapeService } from "./shape.service";
import { ShapeController } from "./shape.controller";
import { ShapeResolver } from "./shape.resolver";

@Module({
  imports: [ShapeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShapeController],
  providers: [ShapeService, ShapeResolver],
  exports: [ShapeService],
})
export class ShapeModule {}
