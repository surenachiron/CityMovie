import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import classes from "./Style-ContentSm";

import PlayTrailer from "../../movies/movie-detail/main-detail/Play-Trailer";

const ContentSm = ({ movie }) => {

    return (
        <Box sx={classes.boxMainParent}>
            <Box sx={classes.boxSubParent}>
                <Box sx={classes.boxMainDetail}>
                    <Typography variant='h5'>
                        {movie.title.title.length <= 22 ? movie.title.title : movie.title.title.slice(0, 20) + '...'}
                    </Typography>
                    <Box sx={classes.boxReleaseDateRating}>
                        <Typography variant='body1' sx={classes.spanReleaseDate}>
                            {movie.releaseDate}
                        </Typography>
                        {movie.ratings &&
                            <Button variant='contained' color='warning' sx={classes.spanRating}>
                                {movie.ratings.rating}
                            </Button>
                        }
                    </Box>
                    {movie.genres.length >= 3 ?
                        <>
                            {movie.genres.slice(0,3).map((genre, item) =>
                                <Link href={`/category/${genre}`} key={item}><Typography variant="body1" sx={classes.spanGenre}>{genre}{(item + 1) !== 3 && ","}</Typography>
                                </Link>)}
                        </> :
                        <>
                            {movie.genres.map((genre, item) =>
                                <Link href={`/category/${genre}`} key={item}>
                                    <Typography variant="body1" sx={classes.spanGenre}>{genre}{(item + 1) !== movie.genres.length && ","}</Typography>
                                </Link>)
                            }
                        </>
                    }
                </Box>
                <Box sx={classes.boxPlayTrailerMore}>
                    <Box sx={classes.boxPlayTrailer}>
                        {movie.title.image &&
                            <PlayTrailer image={movie.title.image.url} id={movie.title.id} />
                        }
                    </Box>
                    <Box sx={classes.boxMore}>
                        <Link href={`/movies/${movie.title.id.slice(7, -1)}`}>
                            <Button variant='text' color='inherit' sx={classes.buttonMore}>More</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default ContentSm;