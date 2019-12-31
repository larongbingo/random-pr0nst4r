import { Injectable, Inject, Logger } from "@nestjs/common";
import { Op } from "sequelize";
import { IPornstar } from "random/interfaces";

import { PornstarProviderKey } from "./pornstar.model";
import { Pornstar } from "./pornstar.model";

@Injectable()
export class PornstarService {

  constructor(
    @Inject(PornstarProviderKey) private readonly pronstarRepository: typeof Pornstar,
  ) {}

  public async getRandomPronstarName(filters?: Partial<IPornstar>): Promise<Pornstar> {
    Object.keys(filters).forEach(key => typeof filters[key] === "undefined" ? delete filters[key] : "");
    const pornstars = await this.pronstarRepository.findAndCountAll({where: filters});
    const randomId = Math.floor(Math.random() * pornstars.count);
    return pornstars.rows[randomId];
  }
}
