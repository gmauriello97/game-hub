import api_client from "@/services/api-client";
import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import Card from "./Card";
import Skeleton from "./Skeleton";
import useGenres from "@/hooks/useGenres";
import ManageSelectedGenre from "@/hooks/ManageSelectedGenre";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";
import { GameQuery } from "@/types/gamequery";
import Heading from "./Heading";

interface Props {
  query: GameQuery;
}

const Grid = ({ query }: Props) => {
  const { data: games, error, isLoading } = useGames(query);

  if (error) return <Text color="tomato">{error}</Text>;

  return (
    <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      {isLoading
        ? // Mostra 20 CardSkeleton
          Array.from({ length: 20 }).map((_, index) => <Skeleton key={index} />)
        : // Mostra le card dei giochi
          games && games.map((g) => <Card key={g.id} game={g} />)}
    </SimpleGrid>
  );
};

export default Grid;
