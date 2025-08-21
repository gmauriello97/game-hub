import api_client from "@/services/api-client";
import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import Card from "./Card";

const Grid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <SimpleGrid
        padding="10"
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      >
        {games && games.map((g) => <Card key={g.id} game={g}></Card>)}
      </SimpleGrid>
    </>
  );
};

export default Grid;
