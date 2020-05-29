import { Module } from "@nestjs/common";
import { PornhubModule } from "random/pornhub";

import { AppController } from "./app.controller";
import { DatabaseModule } from "./database/database.module";
import { PornstarModule } from "./pornstar/pornstar.module";

@Module({
  imports: [DatabaseModule, PornstarModule, PornhubModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
