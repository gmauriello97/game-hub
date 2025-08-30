import {
  Button,
  Heading,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Genre } from "@/types/genre";
import { ALL_GENRE } from "../Strings/strings";
import getCroppedImageUrl from "@/services/image-url";
import { FaBorderAll } from "react-icons/fa";
import useGenres from "@/hooks/useGenres";
interface Props {
  genre: Genre | null | undefined;
  onChange: (g: Genre | null) => void;
}

const Sidebar = ({ onChange, genre }: Props) => {
  const { data: genres, error: GenresError, isLoading: loading } = useGenres();
  if (loading)
    return (
      <HStack height="100vh" align="top" justify="center" paddingY="30px">
        <Stack align="center">
          <Spinner></Spinner>
          <Text>Loading Genres...</Text>
        </Stack>
      </HStack>
    );

  return (
    <>
      <Stack direction="column" spacing={0} align="flex-start" paddingY="18px">
        <Heading paddingX={4} marginBottom={5} fontSize="2xl">
          Genres
        </Heading>
        <Button
          width="100%"
          onClick={() => onChange(null)}
          colorScheme={genre?.id ? "white" : "yellow"}
          justifyContent={"flex-start"}
          variant={genre?.id ? "ghost" : "solid"}
        >
          <Text marginRight="5px">
            <FaBorderAll fontSize={"25px"} />
          </Text>
          {ALL_GENRE}
        </Button>

        {genres.map((g: Genre) => (
          <Button
            key={"sidebar_" + g.id}
            width="100%"
            justifyContent={"flex-start"}
            onClick={() => onChange(g)}
            colorScheme={g.id == genre?.id ? "yellow" : "white"}
            variant={g.id == genre?.id ? "solid" : "ghost"}
          >
            <Image
              src={getCroppedImageUrl(g.image_background)}
              width="20px"
              height="20px"
              marginRight="10px"
              borderRadius="5px"
              objectFit={"cover"}
            />
            {g.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;
