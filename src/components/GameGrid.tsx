import api_client from "@/services/api-client";
import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchedGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api_client
      .get<FetchedGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setError("");
      })
      .catch((e) => {
        setGames([]);
        setError(e.message);
      });
  }, []);

  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <ul>{games && games.map((g) => <li>{g.name}</li>)}</ul>
    </>
  );
};

export default GameGrid;
