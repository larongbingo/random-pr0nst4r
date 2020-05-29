import { Injectable } from "@nestjs/common";
import axios from "axios";
import { IPornstar, IVideo } from "random/interfaces";

import { ISearchOptions } from "./interfaces/ISearchOptions";

@Injectable()
export class PornhubService {
  public async getDetailedStars() {
    const response = await axios.get<{ stars: [{ star: IPornstar }] }>(
      "https://www.pornhub.com/webmasters/stars_detailed",
    );
    return response.data.stars;
  }

  public async searchVideos(options: ISearchOptions) {
    try {
      const response = await axios.get<{ videos: IVideo[] }>(
        "https://www.pornhub.com/webmasters/search",
        { params: options },
      );
      return response.data.videos;
    }
    catch(exception) {
      return [];
    }
  }
}
