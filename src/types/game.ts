export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
}

export interface Platform{
    id: number;
    name: string;
}