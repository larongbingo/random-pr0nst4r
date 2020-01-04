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
  public async indexPage(@Query("gender") gender: Gender) {
    const details = await this.getPornstarAndMostViewedPorn(gender);
    return {
      title: "Random Pornstar",
      ...details,
    };
  }

  @Get("/pornstar")
  @UsePipes(ValidGenderPipe)
  public async getRandomPronstar(@Query("gender") gender: Gender) {
    return await this.getPornstarAndMostViewedPorn(gender);
  }

  private async getPornstarAndMostViewedPorn(gender: Gender) {
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
      pornstar,
      porn: pornList[0],
    };
  }
}
