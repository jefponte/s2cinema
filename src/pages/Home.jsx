import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";

const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 92, 3, 4, 5, 6, 7, 8, 98, 92, 3, 4, 5, 6, 7, 8, 98,
  92, 3, 4, 5, 6, 7, 8, 9,
];
function Home() {
  return (
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 3,
          pb: 6,
        }}
      >
        <Container sx={{ py: 8 }} maxWidth="lx">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xl={1} lg={2} md={3} sm={4} xs={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7xOb7DFXHit1G0lsbQ131rLScqg.jpg"
                    alt="random"
                  />
                  <CardActions>
                    <Button size="small">
                      <VisibilityIcon />
                    </Button>
                    <Button size="small">
                      <FavoriteIcon />
                    </Button>
                  </CardActions>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Taxi Driver
                    </Typography>
                    <Typography>1975</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}

export default Home;
