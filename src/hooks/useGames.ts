import api_client from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchedGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        api_client
            .get<FetchedGamesResponse>("/games", {signal: controller.signal})
            .then((res) => {
                setGames(res.data.results);
                setError("");
            })
            .catch((e) => {
                if(e instanceof CanceledError) return;
                setGames([]);
                setError(e.message);
            });


        return () => controller.abort();
    }, []);

    return {games, error};
}

export default useGames;