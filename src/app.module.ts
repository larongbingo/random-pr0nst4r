import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { DatabaseModule } from "./database/database.module";
import { PornstarModule } from "./pornstar/pornstar.module";

@Module({
  imports: [DatabaseModule, PornstarModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
