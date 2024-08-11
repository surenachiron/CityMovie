import { Box, Typography } from "@mui/material";
import ShowScrolling from "@/utils/Show-Scrolling";
import classes from "./Style-TopTrend";

const TrendingMovie = ({ movies }) => {
  return (
    <Box sx={classes.boxParent}>
      {movies.results.length >= 1 && movies.message === undefined && (
        <>
          <Typography variant="h5" component={"h3"} sx={classes.titleTrendTop}>
            Trending Movies
          </Typography>
          <ShowScrolling movies={movies} />
        </>
      )}
    </Box>
  );
};

export default TrendingMovie;
