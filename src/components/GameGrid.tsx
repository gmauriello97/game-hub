import api_client from "@/services/api-client";
import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <ul>{games && games.map((g) => <li key={g.id}>{g.name}</li>)}</ul>
    </>
  );
};

export default GameGrid;
