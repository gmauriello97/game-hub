import api_client from "@/services/api-client";
import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import Card from "./Card";
import Skeleton from "./Skeleton";

const Grid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <SimpleGrid
        padding="10"
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      >
        {isLoading
          ? // Mostra 20 CardSkeleton
            Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : // Mostra le card dei giochi
            games && games.map((g) => <Card key={g.id} game={g} />)}
      </SimpleGrid>
    </>
  );
};

export default Grid;
