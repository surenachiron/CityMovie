import ShowScrolling from "@/utils/Show-Scrolling";
import { Box, Typography } from "@mui/material";
import classes from "./Style-TopTrend";

const TopRatedMovie = ({ movies }) => {
  return (
    <Box sx={classes.boxParent}>
      {movies.results.length >= 1 && movies.message === undefined && (
        <>
          <Typography variant="h5" component={"h3"} sx={classes.titleTrendTop}>
            Best All Time
          </Typography>
          <ShowScrolling movies={movies} />
        </>
      )}
    </Box>
  );
};

export default TopRatedMovie;
