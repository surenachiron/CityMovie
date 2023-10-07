import { Box, Typography } from "@mui/material";
import ShowScrolling from "@/utils/Show-Scrolling";

const TrendingTvShows = ({ tvShows }) => {

    return (
        <Box sx={{ mt: "1rem" }}>
            {tvShows.length >= 1 && tvShows.message === undefined ?
                <>
                    <Typography variant="h5" component={"h3"} sx={{ mb: "7px" }}>Trending TV Shows</Typography>
                    <ShowScrolling movies={tvShows} type={"tvSeries"} />
                </>
                : ""}
        </Box>
    );
}

export default TrendingTvShows;