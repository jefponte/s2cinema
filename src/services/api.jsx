
import axios from "axios";


//Documentação: https://developers.themoviedb.org/3/movies/get-now-playing
//TheMovieDB Key
//api_key=34a4cf2512e61f46648b95e4b7a3ec9b



//https://api.themoviedb.org/
/*
const PopCornAPI = axios.create({
  baseURL: "https://api.themoviedb.org/",
});

const GetMovieListApi = axios.create({
  baseURL: "https://api.themoviedb.org/",
});
*/

export function getMovieTMDB(id, setMovie){
  axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: {
      api_key: "34a4cf2512e61f46648b95e4b7a3ec9b",
    },
  })
    .then((res) => {
      setMovie(res.data);
    })
    .catch((e) => {
      console.log("Errou");
    });
}
