import useData from "./useData";
import { Game } from "@/types/game"; 
import { GameQuery } from "@/types/gamequery";
import { Genre } from "@/types/genre"; 
import { Platform } from "@/types/platform"; 

const useGames = (gameQuery:GameQuery) => {
    const platform = gameQuery?.platform;
    const genre = gameQuery?.genre;
    const search = gameQuery?.search;
    const ordering = gameQuery?.ordering;
    return useData<Game>('/games', {genres: genre?.id, parent_platforms: platform?.id, search: search, ordering: ordering}, [gameQuery]);
}

export default useGames;