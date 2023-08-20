import axios from "axios";
import { useQuery } from "react-query";

export function useFetchJobs(searchTerm = "") {
  const query = useQuery(
    "jobs",
    async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}search?query=${searchTerm}`,
          {
            headers: {
              "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_XRAPIDAPI_KEY}`,
              "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_XRAPIDAPI_HOST}`,
            },
          }
        );
        return res.data;
      } catch (error) {
        throw new Error("Failed to fetch jobs");
      }
    },

    {
      cacheTime: 1000 * 60 * 10,
      staleTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
    }
  );

  return query;
}
