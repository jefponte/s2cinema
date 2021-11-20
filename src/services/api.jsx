import axios from "axios";

export const apiTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/",
  params: {
    api_key: process.env.REACT_APP_TOKEN_API,
    language: navigator.language,
  },
});



export const apiPopCorn = axios.create({
  baseURL: "https://popcorn-ru.tk/"
});


export const getMoviePopCorn = async (idIMDB, setMovie) => {
  const response = await apiTMDB.get(`/movie/${idIMDB}`);
  setMovie(response.data);
};

export const getMovieTMDB = async (id, setMovie) => {
  const response = await apiTMDB.get(`3/movie/${id}`);
  setMovie(response.data);
};

export const getTvTMDB = async (id, setTv) => {
  const response = await apiTMDB.get(`3/tv/${id}`);
  setTv(response.data);
};

export const getWatchProviders = async (id, setWatchProviders) => {
  const response = await apiTMDB.get(`3/movie/${id}/watch/providers`);
  setWatchProviders(response.data);
};

export const getWatchProvidersTv = async (id, setWatchProviders) => {
  const response = await apiTMDB.get(`3/tv/${id}/watch/providers`);
  setWatchProviders(response.data);
};
export const getCredits = async (id, setCredits, type="movie") => {
  
  const response = await apiTMDB.get(`3/${type}/${id}/credits`);
  setCredits(response.data);
};


export const getImages = async (id, setImages, type = "movie") => {
  const response = await apiTMDB.get(`3/${type}/${id}/images`, {
    params: { language: null },
  });
  setImages(response.data);
};

export const getPersonImages = async (id, setImages) => {
  const response = await apiTMDB.get(`3/movie/${id}/images`, {
    params: { language: null },
  });
  setImages(response.data);
};
export const getVideos = async (id, setVideos, type = "movie") => {

  const response = await apiTMDB.get(`3/${type}/${id}/videos`);
  const response2 = await apiTMDB.get(`3/${type}/${id}/videos`, {
    params: { language: null },
  });
  setVideos({results: [...response.data.results, ...response2.data.results]});
};



export const getPerson = async (id, setPerson) => {
  const response = await apiTMDB.get(`3/person/${id}`);
  setPerson(response.data);
};
/**
 * type = "movie_credits" || type = "tv_credits"
 */
export const getPersonCredits = async (id, setMovies, type = "movie_credits") => {
  const response = await apiTMDB.get(`3/person/${id}/${type}`);
  setMovies(response.data);
};


export const getEpisodes = async (id, episodes, setEpisodes, seasonNumber) => {
  const response = await apiTMDB.get(`3/tv/${id}/season/${seasonNumber}`);
  var lista = episodes;
  lista[seasonNumber] = response.data;
  setEpisodes(lista);

};
export const getCollection = async (idCollection, setCollection) => {
  const response = await apiTMDB.get(`3/collection/${idCollection}`);
  setCollection(response.data);
};
