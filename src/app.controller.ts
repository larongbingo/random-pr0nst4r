import { Controller, Get, Render, Query, UsePipes } from "@nestjs/common";

import { PornstarService } from "./pornstar/pornstar.service";
import { ValidGenderPipe } from "./pornstar/pipes/valid.gender.pipe";
import { Gender } from "./pornstar/constants/valid.genders";

@Controller()
export class AppController {
  constructor(
    private readonly pornstarService: PornstarService,
  ) {}

  @Get()
  @Render("pages/index")
  @UsePipes(ValidGenderPipe)
  public async getHello(@Query("gender") gender: Gender) {
    return {
      title: "Random Pornstar",
      pornstar: await this.pornstarService.getRandomPronstarName({gender}),
    };
  }
}
