import { useEffect, useState } from "react";
import {Genre} from "@/types/genre";

const ManageSelectedGenre = () => {
    const [selectedGenre, setSelected] = useState<Genre | null>(null);

    return {selectedGenre, setSelected};
}

export default ManageSelectedGenre;