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
import styled from "styled-components";

const TitleMovie = styled(({ color, ...otherProps }) => (
  <Typography {...otherProps} />
))`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// // const ButtonLike = styled(({ color, ...otherProps }) => (
// //   <FavoriteIcon {...otherProps} />
// // ))`
// //   color: red;
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
  const {type} = props;
  var typeElement = "movie";
  if(type=== "tv"){
    typeElement = "tv";
  }
  var data = null;
  if(type=== "tv"){
    data = new Date(props.movie.first_air_date);
  }else{
    data = new Date(props.movie.release_date);
  }
  
  
  let imagePath = ImageNoPoster;

  if (props.movie.poster_path !== null) {
    imagePath = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`;
  }
  return (
    <Grid item xl={1} lg={2} md={3} sm={4} xs={6}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        
        <Link to={`/${typeElement}/${props.movie.id}`}>
          <CardMedia
            component="img"
            image={imagePath}
            alt="random"
          />
        </Link>
        <CardContent>
          <TitleMovie sx={{ fontSize: 14 }} gutterBottom>
            {type === "tv" ? props.movie.name : props.movie.title }
          </TitleMovie>
          <Typography>{data === "" ? "????" : data.getFullYear()}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
