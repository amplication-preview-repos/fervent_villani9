import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShapeService } from "./shape.service";
import { ShapeControllerBase } from "./base/shape.controller.base";

@swagger.ApiTags("shapes")
@common.Controller("shapes")
export class ShapeController extends ShapeControllerBase {
  constructor(
    protected readonly service: ShapeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
