export interface ISearchOptions {
  category?: string;

  page?: number;

  search?: string;

  /**
   * Used as Pornstars filter
   */
  phrase?: string[];

  tags?: string[];

  ordering?: "featured" | "newest" | "mostviewed" | "rating";

  /**
   * Only works with ordering parameter
   */
  period?: "weekly" | "monthly" | "alltime";

  thumbsize:
    | "small"
    | "medium"
    | "large"
    | "small_hd"
    | "medium_hd"
    | "large_hd";
}
