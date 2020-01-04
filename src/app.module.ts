import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { PornhubModule } from "random/pornhub";

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
})
export class AppModule {}
