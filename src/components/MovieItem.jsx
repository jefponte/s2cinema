import React from "react";
import ImageNoPoster from "../assets/images/noImage.png";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";


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



export default function MovieItem(props) {
  const data =((props.movie.release_date === null || props.movie.release_date === ""  || props.movie.release_date === undefined) ? "" : new Date(props.movie.release_date));
  let imagePath = ImageNoPoster;

  if (props.movie.poster_path !== null) {
    imagePath = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`;
  }
  return (
    <Grid item xl={2} lg={2} md={3} sm={4} xs={6}>
     

      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to={`/movie/${props.movie.id}`}>
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image={imagePath}
            alt="random"
          />
        </Link>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {props.movie.title}
          </Typography>
          <Typography>{data === "" ? "????" : data.getFullYear()}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
