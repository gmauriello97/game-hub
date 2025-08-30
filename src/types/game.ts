export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  parent_platforms: {platform: Platform}[]
}

export interface Platform{
    id: number;
    name: string;
    slug: string;
}