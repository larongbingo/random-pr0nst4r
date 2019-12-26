import { Injectable, Inject, Logger } from "@nestjs/common";

import { PornstarProviderKey } from "./pornstar.model";
import { Pornstar } from "./pornstar.model";

@Injectable()
export class PornstarService {

  private pornstarCount = 1;

  constructor(
    @Inject(PornstarProviderKey) private readonly pronstarRepository: typeof Pornstar,
  ) {
    this.getPornstarCount();
  }

  private async getPornstarCount() {
    this.pornstarCount = await this.pronstarRepository.count();
  }

  public async getRandomPronstarName(): Promise<Pornstar> {
    const randomId = Math.floor(Math.random() * this.pornstarCount) + 1;
    const pornstar = this.pronstarRepository.findOne({where: {id: randomId}});
    return pornstar;
  }
}
