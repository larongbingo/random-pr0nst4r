import { Controller, Get, Inject, Query } from "@nestjs/common";

import { PornstarService } from "./pornstar.service";
import { Gender } from "./constants/valid.genders";

@Controller()
export class PornstarController {

  constructor(@Inject(PornstarService) private readonly pronstarService: PornstarService) {}

  @Get("/pornstar")
  public async getRandomPronstar(@Query("gender") gender?: Gender) {
    return {
      pornstar: await this.pronstarService.getRandomPronstarName({gender}),
    };
  }

}
