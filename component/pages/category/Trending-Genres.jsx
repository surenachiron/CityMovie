import { Box, Typography } from "@mui/material";
import ShowScrolling from "@/utils/Show-Scrolling";
import { useRouter } from "next/router";
import { TrendingTitle } from "./Style-PreviewGenres";

const TrendingGenres = ({ movies }) => {

    const router = useRouter()
    const genreSelected = router.query.genre.slice(0, 1).toUpperCase() + router.query.genre.slice(1,)

    return (
        <Box sx={{ mt: "1rem" }}>
            {movies.length >= 1 && movies.message === undefined &&
                <>
                    <Typography variant="h5" component={"h3"} sx={TrendingTitle}>Trending {genreSelected} Movies</Typography>
                    <ShowScrolling movies={movies} />
                </>
            }
        </Box>
    );
}

export default TrendingGenres;