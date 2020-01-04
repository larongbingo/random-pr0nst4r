import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { PornhubModule } from "random/pornhub";

import { PornstarProviderKey, Pornstar } from "./pornstar/pornstar.model";
import { AppController } from "./app.controller";
import { DatabaseModule } from "./database/database.module";
import { PornstarModule } from "./pornstar/pornstar.module";

@Module({
  imports: [
    DatabaseModule,
    PornstarModule,
    PornhubModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
