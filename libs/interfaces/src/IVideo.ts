import { IThumb } from "./IThumb";
import { ITag } from "./ITag";
import { ICategory } from "./ICategory";
import { IPornstar } from "./IPornstar";

export interface IVideo {
  duration: string;
  views: number;
  video_id: string;
  rating: string;
  ratings: number;
  title: string;
  url: string;
  default_thumb: string;
  thumb: string;
  publish_date: Date;
  thumbs: IThumb[];
  tags: ITag[];
  pornstars: IPornstar[];
  categories: ICategory[];
  segment: string;
}
