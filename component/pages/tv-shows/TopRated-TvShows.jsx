import ShowScrolling from "@/utils/Show-Scrolling";
import { Box, Typography } from "@mui/material";
import classes from "../movies/Style-TopTrend";

const TopRatedTvShows = ({ tvShows }) => {
    return (
        <Box sx={classes.boxParent}>
            {tvShows.length >= 1 && tvShows.message === undefined &&
                <>
                    <Typography variant="h5" component={"h3"} sx={classes.titleTrendTop}>Best All Time</Typography>
                    <ShowScrolling movies={tvShows} type={"tvSeries"} />
                </>
            }
        </Box>
    );
}

export default TopRatedTvShows;