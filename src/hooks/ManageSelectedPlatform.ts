import { useEffect, useState } from "react";
import {Platform} from "@/types/platform";

const ManageSelectedPlatform = () => {
    const [selectedPlatform, setSelected] = useState<Platform | null>(null);

    return {selectedPlatform, setSelected};
}

export default ManageSelectedPlatform;