import { Box, Typography } from "@mui/material";
import ShowScrolling from "@/utils/Show-Scrolling";

const TrendingMovie = ({ movies }) => {

    return (
        <Box sx={{ mt: "1rem" }}>
            {movies.length >= 1 && movies.message === undefined ?
                <>
                    <Typography variant="h5" component={"h3"} sx={{ mb: "7px" }}>Trending Movies</Typography>
                    <ShowScrolling movies={movies} />
                </>
                : ""
            }
        </Box>
    );
}

export default TrendingMovie;