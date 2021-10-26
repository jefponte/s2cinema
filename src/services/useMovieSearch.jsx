import { useEffect, useState } from "react";
import axios from "axios";
import { apiTMDB } from "./api";

export default function useMovieSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    if (query === "") {
      apiTMDB
        .get(`/3/movie/now_playing`, {
          params: { page: pageNumber },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => {
          setMovies((prevMovies) => {
            return [
              ...new Set([...prevMovies, ...res.data.results.map((b) => b)]),
            ];
          });
          setHasMore(res.data.total_pages > pageNumber);
          setLoading(false);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setError(true);
        });
    } else {
      apiTMDB
        .get(`/3/search/movie`, {
          params: { query, page: pageNumber },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => {
          setMovies((prevMovies) => {
            return [
              ...new Set([...prevMovies, ...res.data.results.map((b) => b)]),
            ];
          });

          setHasMore(res.data.total_pages > pageNumber);
          setLoading(false);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setError(true);
        });
    }

    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, movies, hasMore };
}
