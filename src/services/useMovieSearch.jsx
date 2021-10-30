import { useEffect, useState } from "react";
import axios from "axios";
import { apiTMDB } from "./api";

export default function useMovieSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pageMovies, setPageMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPageMovies([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    let params = { query, page: pageNumber };
    let url = `/3/search/movie`;
    if (query === "") {
      params = { page: pageNumber };
      url = `/3/movie/popular`;
    }
    apiTMDB
      .get(url, {
        params,
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPageMovies((prevBooks) => {
          return [...new Set([...prevBooks, res.data])];
        });
        setHasMore(res.data.total_pages > pageNumber);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, pageMovies, hasMore };
}
