import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useGetMovies = () => {
    const mostViewedURL = "https://l9r8bafvh6.execute-api.ap-southeast-1.amazonaws.com/test/movies/most-viewed";
    const topRatedURL = "https://l9r8bafvh6.execute-api.ap-southeast-1.amazonaws.com/test/movies/highest-rating";

    const { data: mostViewedMovies, error: mostViewedErr } = useSWR(mostViewedURL, fetcher);
    const { data, error } = useSWR(topRatedURL, fetcher);

    return {
        mostViewedMovies,
        isLoadingMostViewed: !mostViewedErr && !mostViewedMovies,
        isErrorMostViewed: mostViewedErr,
        topRatedMovies: data,
        isLoadingTopRated: !error && !data,
        isErrorTopRated: error,
    };
};

export default useGetMovies;
