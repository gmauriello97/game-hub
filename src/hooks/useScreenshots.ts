import {Game} from "@/types/game";
import useData from "./useData";

interface Screenshot{
    image: string;
}

const useScreenshots = (game:Game) => {
    return useData<Screenshot>("/games/"+game.id+"/screenshots", {}, []);
}

export default useScreenshots;