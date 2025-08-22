import api_client from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import {Game} from "@/types/game";

interface FetchedGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        api_client
            .get<FetchedGamesResponse>("/games", {signal: controller.signal})
            .then((res) => {
                setGames(res.data.results);
                setError("");
                setLoading(false);
            })
            .catch((e) => {
                if(e instanceof CanceledError) return;
                setGames([]);
                setError(e.message);
                setLoading(false);
            });


        return () => controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames;