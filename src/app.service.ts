import { Cron } from "@nestjs/schedule";
import { Injectable, Inject } from "@nestjs/common";
import { PornhubService } from "random/pornhub";

import { PornstarProviderKey, Pornstar } from "./pornstar/pornstar.model";

@Injectable()
export class AppService {
  constructor(
    @Inject(PornstarProviderKey) private readonly pornstarRepo: typeof Pornstar,
    private readonly pornhubService: PornhubService,
  ) {}

  @Cron("* * * 1")
  private async fetchPornstars() {
    const pornstars = await this.pornhubService.getDetailedStars();
    const promises = pornstars.map(async pornstar => await this.pornstarRepo.create(pornstar));
    await Promise.all(promises);
  }
}
