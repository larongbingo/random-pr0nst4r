import { Module, Inject, OnModuleInit } from "@nestjs/common";
import { PornhubModule, PornhubService } from "random/pornhub";

import { PornstarProviderKey, Pornstar } from "./pornstar/pornstar.model";
import { AppController } from "./app.controller";
import { DatabaseModule } from "./database/database.module";
import { PornstarModule } from "./pornstar/pornstar.module";

@Module({
  imports: [DatabaseModule, PornstarModule, PornhubModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly pornhubService: PornhubService,
    @Inject(PornstarProviderKey) private readonly pornstarRepo: typeof Pornstar,
  ) {}

  public async onModuleInit() {
    await this.pornstarRepo.sync({force: true});
    const pornstars = await this.pornhubService.getDetailedStars();
    const promises = pornstars.map(async pornstar => await this.pornstarRepo.create(pornstar.star));
    await Promise.all(promises);
  }
}
