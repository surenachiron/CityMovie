import ShowScrolling from "@/utils/Show-Scrolling";
import { Box, Typography } from "@mui/material";

const TopRatedTvShows = ({ tvShows }) => {
    return (
        <Box sx={{ mt: "1rem" }}>
            {tvShows.length >= 1 && tvShows.message === undefined ?
                <>
                    <Typography variant="h5" component={"h3"} sx={{ mb: "7px" }}>Best All Time</Typography>
                    <ShowScrolling movies={tvShows} type={"tvSeries"} />
                </>
                : ""
            }
        </Box>
    );
}

export default TopRatedTvShows;