import axios from "axios";

export const apiTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/",
  params: {
    api_key: process.env.REACT_APP_TOKEN_API,
    language: navigator.language,
  },
});

export const getMovieTMDB = async (id, setMovie) => {
  const response = await apiTMDB.get(`3/movie/${id}`);
  setMovie(response.data);
};
export const getWatchProviders = async (id, setWatchProviders) => {
  const response = await apiTMDB.get(`3/movie/${id}/watch/providers`);
  setWatchProviders(response.data);
};
export const getCredits = async (id, setCredits) => {
  const response = await apiTMDB.get(`3/movie/${id}/credits`);
  setCredits(response.data);
};
export const getImages = async (id, setImages) => {
  const response = await apiTMDB.get(`3/movie/${id}/images`, {
    params: { language: null },
  });
  setImages(response.data);
};
export const getVideos = async (id, setVideos) => {
  const response = await apiTMDB.get(`3/movie/${id}/videos`);
  setVideos(response.data);
};
