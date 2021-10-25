import axios from "axios";



export function getMovieTMDB(id, setMovie) {
  axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: {
      api_key: process.env.REACT_APP_TOKEN_API,
      language: navigator.language
    },
  })
    .then((res) => {
      setMovie(res.data);
    })
    .catch((e) => {
      console.log("Errou");
    });
}
