import GameDetails from "@/hooks/GameDetails";
import useScreenshots from "@/hooks/useScreenshots";
import { Game } from "@/types/game";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Text,
  Skeleton,
  SimpleGrid,
  Show,
  SkeletonText,
  VStack,
  Flex,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  game: Game;
}

const GameModal = ({ isOpen, onClose, game }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(game);
  const {
    details,
    error: DetailsError,
    isLoading: loadingDetails,
  } = GameDetails(game);

  return (
    <>
      <Modal size="6xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{game.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={0}>
            <Flex paddingX={10}>
              {loadingDetails ? (
                <SkeletonText
                  noOfLines={10}
                  skeletonHeight="4"
                  style={{ width: "100%" }}
                >
                  {"LOADING"}
                </SkeletonText>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: details?.description || "",
                  }}
                ></div>
              )}
            </Flex>
            <SimpleGrid
              padding="10"
              spacing={2}
              columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
            >
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} height="250px" borderRadius="md" />
                  ))
                : screenshots.map((s) => (
                    <Image
                      height="250px"
                      width="100%"
                      objectFit={"cover"}
                      key={s.image}
                      src={s.image}
                      alt="screenshot"
                      borderRadius="md"
                    />
                  ))}
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GameModal;
