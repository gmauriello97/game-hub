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
  Badge,
  HStack,
} from "@chakra-ui/react";
import PlatformIconsList from "../Icons/List";

import { Game } from "@/types/game";
import Score from "./Score";

interface Props {
  game: Game;
}

const Card = ({ game }: Props) => {
  return (
    <ChakraCard height="250px" borderRadius={10} overflow="hidden">
      <Image
        fit="cover"
        height={150}
        src={game.background_image.replace("/media/", "/media/crop/600/400/")}
        alt={game.name}
        borderRadius="lg"
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          ></PlatformIconsList>
          <Score score={game.metacritic}></Score>
        </HStack>
      </CardBody>
    </ChakraCard>
  );
};

export default Card;
