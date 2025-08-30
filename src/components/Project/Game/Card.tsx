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
  useDisclosure,
} from "@chakra-ui/react";
import PlatformIconsList from "../Icons/List";

import { Game } from "@/types/game";
import Score from "./Score";
import GameModal from "./GameModal";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const Card = ({ game }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ChakraCard onClick={onOpen} className="game-card">
        <Image
          fit="cover"
          height={150}
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          borderRadius="lg"
        />
        <CardBody>
          <HStack justify="space-between" marginBottom={3}>
            <PlatformIconsList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            ></PlatformIconsList>
            <Score score={game.metacritic}></Score>
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </ChakraCard>
      {isOpen && (
        <GameModal
          onClose={() => onClose()}
          game={game}
          isOpen={isOpen}
        ></GameModal>
      )}
    </>
  );
};

export default Card;
