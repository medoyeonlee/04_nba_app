export interface IArticle {
  id: number;
  team: number;
  title: string;
  image: string;
  body: string;
  date: string;
  author: string;
  tags: string[];
  url: string;
}

export interface IVideos {
  id: number;
  team: number;
  title: string;
  image: string;
  url: string;
  date: string;
  tags: string[];
}
export interface IStats {
  wins: number;
  defeats: number;
}
export interface ITeams {
  id: number;
  name: string;
  city: string;
  logo: string;
  poll: string;
  count: number;
  description: string;
  stats: IStats[];
}
