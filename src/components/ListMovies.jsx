// import FavoriteIcon from "@mui/icons-material/Favorite";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import styled from "styled-components";

// // const ButtonLike = styled(({ color, ...otherProps }) => (
// //   <FavoriteIcon {...otherProps} />
// // ))`
// //   color: red;
// // `;
// // const ButtonUnlike = styled(({ color, ...otherProps }) => (
// //   <FavoriteIcon {...otherProps} />
// // ))`
// //   color: black;
// // `;
// // const ButtonView = styled(({ color, ...otherProps }) => (
// //   <VisibilityIcon {...otherProps} />
// // ))`
// //   color: black;
// // `;

// // const ButtonUnview = styled(({ color, ...otherProps }) => (
// //   <VisibilityIcon {...otherProps} />
// // ))`
// //   color: black;
// // `;

// function ListMovies(props) {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     getPlayingNow(setList);
//   }, []);

// }

// export default ListMovies;

import {  useRef, useCallback } from "react";
import useMovieSearch from "../services/useMovieSearch";
import MovieItem from "./MovieItem";

export default function ListMovies(props) {
  const {query} = props;
  let {pageNumber, setPageNumber} = props;


  const { books, hasMore, loading, error } = useMovieSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );

  return (
    <>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <MovieItem key={book.id} movie={book} />;
        } else {
          return <MovieItem movie={book} key={book.id} />;
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div ref={lastBookElementRef}>...</div>
      <div>{error && "Error"}</div>
    </>
  );
}
