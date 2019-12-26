import { Module } from "@nestjs/common";

import { PornstarProvider } from "./pornstar.model";
import { PornstarController } from "./pornstar.controller";
import { PornstarService } from "./pornstar.service";

@Module({
  providers: [
    PornstarProvider,
    PornstarService,
  ],
  controllers: [
    PornstarController,
  ],
  exports: [
    PornstarProvider,
    PornstarService,
  ],
})
export class PornstarModule {}
