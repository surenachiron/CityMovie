import ShowScrolling from "@/utils/Show-Scrolling";
import { Box, Typography } from "@mui/material";

const TopRatedMovie = ({ movies }) => {
    return (
        <Box sx={{ mt: "1rem" }}>
            {movies.length >= 1 && movies.message === undefined ?
                <>
                    <Typography variant="h5" component={"h3"} sx={{ mb: "7px" }}>Best All Time</Typography>
                    <ShowScrolling movies={movies} />
                </>
                : ""
            }
        </Box>
    );
}

export default TopRatedMovie;