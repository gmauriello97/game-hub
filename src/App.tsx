import {
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/Project/Game/Grid";
import ManageSelectedGenre from "./hooks/ManageSelectedGenre";
import useGenres from "./hooks/useGenres";
import { Genre } from "./types/genre";
import Sidebar from "./components/Project/Sidebar/Sidebar";
import usePlatforms from "./hooks/usePlatforms";
import GenreSelector from "./components/Project/Genre/Selector";
import PlatformSelector from "./components/Project/Platform/Selector";
import ManageSelectedPlatform from "./hooks/ManageSelectedPlatform";
import { Platform } from "./types/platform";
import { FaSearch } from "react-icons/fa";
import Search from "./components/Project/Game/Search";
import { GameQuery } from "./types/gamequery";
import { OrderObj } from "./types/order";
import OrderingSelector from "./components/Project/OrderingSelector";
import Heading from "./components/Project/Game/Heading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr", // Solo una colonna a tutta larghezza
        lg: "270px 1fr", // Sidebar 200px + resto della larghezza
      }}
    >
      <GridItem area="nav" padding="8px 20px">
        <Navbar
          onSearch={(value) => setGameQuery({ ...gameQuery, search: value })}
        />
      </GridItem>

      <Show above="lg">
        <Sidebar
          genre={gameQuery.genre}
          onChange={(genre: Genre | null) =>
            setGameQuery({ ...gameQuery, genre })
          }
        />
      </Show>

      <GridItem area="main" padding="16px">
        <div className="game-grid">
          <Heading gameQuery={gameQuery}></Heading>
          <HStack
            justifyContent="space-between"
            className="action-bar"
            marginBottom={5}
          >
            <HStack>
              <PlatformSelector
                platform={gameQuery.platform}
                onChange={(platform: Platform | null) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <OrderingSelector
                sort={gameQuery.ordering}
                onChange={(ordering: OrderObj | null) =>
                  setGameQuery({ ...gameQuery, ordering: ordering?.id })
                }
              />
            </HStack>
          </HStack>
          <GameGrid query={gameQuery} />
        </div>
      </GridItem>
    </Grid>
  );
}

export default App;
