import React, { useState } from "react";
import MovieSearch from "./MovieSearch";

export default function Home(props) {
  const [, setSearch] = useState(false);
  const {type} = props;
  var typeElement = "movie";
  if(type !== null && type !== undefined) {
    if(type === "tv"){
      typeElement = "tv";
    }else{
      typeElement = "movie";
    }
  }
  return (
    <>
      <MovieSearch type={typeElement} setSearch={setSearch} />
    </>
  );
}
