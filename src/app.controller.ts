import { Controller, Get, Render, Query, UsePipes, Logger } from "@nestjs/common";
import { PornhubService } from "random/pornhub";

import { PornstarService } from "./pornstar/pornstar.service";
import { ValidGenderPipe } from "./pornstar/pipes/valid.gender.pipe";
import { Gender } from "./pornstar/constants/valid.genders";

@Controller()
export class AppController {
  constructor(
    private readonly pornstarService: PornstarService,
    private readonly pornhubService: PornhubService,
  ) {}

  @Get()
  @Render("pages/index")
  @UsePipes(ValidGenderPipe)
  public async getHello(@Query("gender") gender: Gender) {
    const pornstar = await this.pornstarService.getRandomPronstarName({
      gender,
    });
    const pornList = await this.pornhubService.searchVideos({
      thumbsize: "small",
      phrase: [pornstar.star_name],
      ordering: "mostviewed",
      period: "alltime",
    });
    return {
      title: "Random Pornstar",
      pornstar,
      porn: pornList ? pornList[0] : null,
    };
  }
}
