import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";
import { PornstarService } from "./pornstar/pornstar.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pornstarService: PornstarService,
  ) {}

  @Get()
  @Render("pages/index")
  public async getHello() {
    return {
      title: "Random Pornstar",
      pornstar: await (await this.pornstarService.getRandomPronstarName()).name,
    };
  }
}
