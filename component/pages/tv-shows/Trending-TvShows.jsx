import { Box, Typography } from "@mui/material";
import ShowScrolling from "@/utils/Show-Scrolling";
import classes from "../movies/Style-TopTrend";

const TrendingTvShows = ({ tvShows }) => {
  return (
    <Box sx={classes.boxParent}>
      {tvShows.results.length >= 1 && tvShows.message === undefined && (
        <>
          <Typography variant="h5" component={"h3"} sx={classes.titleTrendTop}>
            Trending TV Shows
          </Typography>
          <ShowScrolling movies={tvShows} type={"tv"} />
        </>
      )}
    </Box>
  );
};

export default TrendingTvShows;
