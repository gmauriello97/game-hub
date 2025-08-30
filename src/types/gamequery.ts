import { Genre } from "./genre";
import { Platform } from "./platform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  search: string;
  ordering: string;
}