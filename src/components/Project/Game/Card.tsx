import React from "react";
import {
  Card as ChakraCard,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";

import { Game } from "@/types/game";

interface Props {
  game: Game;
}

const Card = ({ game }: Props) => {
  return (
    <ChakraCard borderRadius={10} overflow="hidden">
      <Image
        fit="cover"
        height={150}
        src={game.background_image}
        alt={game.name}
        borderRadius="lg"
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </ChakraCard>
  );
};

export default Card;
