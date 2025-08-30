import api_client from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import {Game} from "@/types/game";

interface GameDetailsResponse {
  id: number;
  name: string;
  description: string;
}

const GameDetails = (game:Game) => {
    const [details, setDetails] = useState<GameDetailsResponse | null>(null);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        api_client
        .get<GameDetailsResponse>("/games/"+game.id, {signal: controller.signal})
        .then((res) => {
                setDetails(res.data);
                setError("");
                setLoading(false);
            })
            .catch((e) => {
                if(e instanceof CanceledError) return;
                setDetails(null);
                setError(e.message);
                setLoading(false);
            });


        return () => controller.abort();
    }, []);

    return {details, error, isLoading};
}

export default GameDetails;