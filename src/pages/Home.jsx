import React, { useState } from "react";
import MovieSearch from "./MovieSearch";

export default function Home(props) {
  const [search, setSearch] = useState(false);

  return (
    <>
      <MovieSearch setSearch={setSearch} />
    </>
  );
}
