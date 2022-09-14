import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useGetSingleMovie = (id) => {
    const getSingleMovieURL = "https://l9r8bafvh6.execute-api.ap-southeast-1.amazonaws.com/test/movie/" + id;

    const { data, error } = useSWR(getSingleMovieURL, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
};

export default useGetSingleMovie;
