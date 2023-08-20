import axios from "axios";
import { useQuery } from "react-query";

export function useFetchJobs() {
  const query = useQuery(
    "jobs",
    async () => {
      try {
        const res = await axios.get(
          "https://jsearch.p.rapidapi.com/search?query=java",
          {
            headers: {
              "X-RapidAPI-Key":
                "2f56c197d5mshf779d2fec591204p1bcbffjsn24d155b82ae2",
              "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
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
