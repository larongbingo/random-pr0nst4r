import { Module } from "@nestjs/common";

import { PornstarProvider } from "./pornstar.model";
import { PornstarController } from "./pornstar.controller";
import { PornstarService } from "./pornstar.service";
import { ValidGendersProvider } from "./constants/valid.genders";

@Module({
  providers: [
    PornstarProvider,
    PornstarService,
    ValidGendersProvider,
  ],
  controllers: [
    PornstarController,
  ],
  exports: [
    PornstarProvider,
    PornstarService,
    ValidGendersProvider,
  ],
})
export class PornstarModule {}
