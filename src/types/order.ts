export interface OrderObj {
  id: string;
  name: string;
}

export const options = [
    { id: "-added", name: "Date added" },
    { id: "name", name: "Name" },
    { id: "-released", name: "Release date" },
    { id: "-metacritic", name: "Popularity" },
    { id: "-rating", name: "Average rating" },
];