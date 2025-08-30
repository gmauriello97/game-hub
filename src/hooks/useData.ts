import api_client from "@/services/api-client";
import { CanceledError } from "axios";
import { DependencyList, useEffect, useState } from "react";

interface FetchedResponse<T>{
  count: number;
  results: T[];
}

 const useData = <T>(endpoint:string, params?: object, toWatch?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        api_client
            .get<FetchedResponse<T>>(endpoint, {signal: controller.signal, params})
            .then((res) => {
                setData(res.data.results);
                setError("");
                setLoading(false);
            })
            .catch((e) => {
                if(e instanceof CanceledError) return;
                setData([]);
                setError(e.message);
                setLoading(false);
            });


        return () => controller.abort();
    }, toWatch? [...toWatch]:[]);

    return {data, error, isLoading};
}

export default useData;