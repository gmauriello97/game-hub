import api_client from "@/services/api-client";
import React, { useEffect, useState } from "react";
import { HStack, SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react";
import useGenres from "@/hooks/useGenres";
import Dropdown from "../UI/Dropdown";
import { Genre } from "@/types/genre";
import { ALL_GENRE } from "../Strings/strings";

interface Props {
  genre: Genre | null | undefined;
  genres: Genre[];
  onChange: (g: Genre | null) => void;
  isLoading: boolean;
}

const Selector = ({ genre, onChange, genres, isLoading }: Props) => {
  // Quando si seleziona un genere
  const selectedGenre = (g: Genre) => {
    onChange(g);
  };

  return (
    <>
      {isLoading ? (
        // Mostra 20 CardSkeleton
        <Skeleton width="180px" height="40px"></Skeleton>
      ) : (
        // Mostra le card dei giochi
        <Dropdown
          title={genre?.name}
          onChange={onChange}
          items={genres}
          defaultName={ALL_GENRE}
        />
      )}
    </>
  );
};

export default Selector;
