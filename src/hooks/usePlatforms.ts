import platforms from "@/data/platforms";

const usePlatforms = () => {
    return {data: platforms, error: null, isLoading: false}
}

export default usePlatforms;