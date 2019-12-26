import { Controller, Get, Inject } from "@nestjs/common";

import { PornstarService } from "./pornstar.service";

@Controller()
export class PornstarController {

  constructor(@Inject(PornstarService) private readonly pronstarService: PornstarService) {}

  @Get("/pornstar")
  public async getRandomPronstar() {
    return {
      pornstar: await this.pronstarService.getRandomPronstarName(),
    };
  }

}
