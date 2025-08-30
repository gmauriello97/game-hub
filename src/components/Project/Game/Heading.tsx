import { GameQuery } from "@/types/gamequery";
import { Heading as ChakraHeading } from "@chakra-ui/react";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}

const Heading = ({ gameQuery }: Props) => {
  return (
    <ChakraHeading marginTop={2} marginBottom={7} size="2xl">
      {gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Games
    </ChakraHeading>
  );
};

export default Heading;
