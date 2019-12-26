import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { PornstarModule } from "./pornstar/pornstar.module";

@Module({
  imports: [DatabaseModule, PornstarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
