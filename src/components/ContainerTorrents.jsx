import * as React from "react";
import {
  Typography,
  Link,
  Card,
} from "@material-ui/core";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FileDownloadIcon from "@mui/icons-material/FileDownload";




export default function ContainerTorrents(props) {
  const { movie } = props;
  if (movie === null) {
    return <></>;
  }
  if (Object.keys(movie).length === 0) {
    return <></>;
  }
  if (movie.torrents === undefined) {
    return <></>;
  }

  return (
    <>
      {Object.keys(movie.torrents).map((element, index) => {
        return (
          <Card key={index}>
            <CardHeader title={`Watch Torrent [${element}]`} />

            <CardContent>
              {Object.keys(movie.torrents[element]).map((element2, index) => {
                return (
                  <>
                    <Typography variant="body2" color="text.secondary">
                      {element2}
                    </Typography>

                    <IconButton aria-label="Play Movie Now">
                      <Link
                        href={`https://webtor.io/#/show?magnet=${movie.torrents[element][element2].url}`}
                      >
                        <PlayCircleIcon />
                      </Link>
                    </IconButton>

                    <IconButton aria-label="share">
                      <Link href={`${movie.torrents[element][element2].url}`}>
                        <FileDownloadIcon />
                      </Link>
                    </IconButton>
                  </>
                );
              })}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
