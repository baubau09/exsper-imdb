import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useGetAllMovies = () => {
    const searchURL = "https://l9r8bafvh6.execute-api.ap-southeast-1.amazonaws.com/test/movies";

    const { data, error } = useSWR(searchURL, fetcher);

    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
};

export default useGetAllMovies;
