import { Controller, Get, Render, Query } from "@nestjs/common";

import { PornstarService } from "./pornstar/pornstar.service";

@Controller()
export class AppController {
  constructor(
    private readonly pornstarService: PornstarService,
  ) {}

  @Get()
  @Render("pages/index")
  public async getHello(@Query("gender") gender: string) {
    return {
      title: "Random Pornstar",
      pornstar: await this.pornstarService.getRandomPronstarName({gender}),
    };
  }
}
