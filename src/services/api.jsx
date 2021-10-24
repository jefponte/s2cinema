
import axios from "axios";


//Documentação: https://developers.themoviedb.org/3/movies/get-now-playing
//TheMovieDB Key
//api_key=34a4cf2512e61f46648b95e4b7a3ec9b

const TheMovieDB = axios.create({
  baseURL: "https://api.themoviedb.org/",
});

/*
const PopCornAPI = axios.create({
  baseURL: "https://api.themoviedb.org/",
});

const GetMovieListApi = axios.create({
  baseURL: "https://api.themoviedb.org/",
});
*/


export const getPlayingNow = async(setData) => { 
  const res = await TheMovieDB.get("3/movie/now_playing?api_key=34a4cf2512e61f46648b95e4b7a3ec9b&language=en-US&page=2");
  console.log(res);
  setData(res.data.results);

}


