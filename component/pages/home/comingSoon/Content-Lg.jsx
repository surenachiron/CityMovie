import DurationExchange from "@/utils/DurationExchange";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import PlayTrailer from "../../movies/movie-detail/main-detail/Play-Trailer";
import classes from './Style-ContentLg'

const ContentLg = ({ movie }) => {

    return (
        <Box sx={classes.boxMainParent}>
            <Box sx={classes.boxSubParent}>
                <Box>
                    <Typography variant="h4">{movie.title.title.length <= 25 ? movie.title.title : movie.title.title.slice(0, 25) + "..."}</Typography>
                </Box>
                <Box sx={classes.mainDetails}>
                    <Box sx={classes.boxCertificatesReleaseDate}>
                        {movie.certificates &&
                            <>
                                {movie.certificates.US[0] &&
                                    <span style={classes.spanCertificates}>
                                        {movie.certificates.US[0].certificate}
                                    </span>
                                }
                            </>
                        }
                        <Typography variant="body1">
                            {movie.releaseDate.length !== 0 && movie.releaseDate !== undefined && <>{movie.releaseDate}</>}
                        </Typography>
                    </Box>
                    {movie.genres.length !== 0 && movie.genres !== undefined &&
                        <Box sx={classes.beforeDot}>
                            {movie.genres.length >= 4 ?
                                <>
                                    {movie.genres.slice(0, 4).map((genre, item) => <Link href={`/category/${genre}`} key={item}><Typography variant="body1" sx={classes.spanGenre}>{genre}{(item + 1) === 4 ? "" : ","}</Typography></Link>)}
                                </> :
                                <>
                                    {movie.genres.map((genre, item) => <Link href={`/category/${genre}`} key={item}><Typography variant="body1" sx={classes.spanGenre}>{genre}{(item + 1) === movie.genres.length ? "" : ","}</Typography></Link>)}
                                </>
                            }
                        </Box>
                    }
                    {movie.title.titleType === "movie" ? <>
                        {movie.title.runningTimeInMinutes &&
                            <Box sx={classes.beforeDot}>
                                <DurationExchange duration={movie.title.runningTimeInMinutes} />
                            </Box>
                        }
                    </> :
                        <>
                            {movie.title.numberOfEpisodes &&
                                <Box sx={classes.beforeDot}>
                                    <Typography variant='body1'>{movie.title.numberOfEpisodes}<Box component={"span"} sx={classes.spanEpisodes}>Episodes</Box></Typography>
                                </Box>
                            }
                        </>
                    }
                </Box>
                <Box sx={classes.boxOverview}>
                    {movie.plotSummary ?
                        <>
                            <Typography variant="h6">Overview</Typography>
                            <Box>
                                <Typography variant="body1" sx={classes.spanSummary}>{movie.plotSummary.text.split(".")[0]}</Typography>
                            </Box>
                        </>
                        :
                        <>
                            {movie.plotOutline &&
                                <>
                                    <Typography variant="h6">Overview</Typography>
                                    <Box>
                                        <Typography variant="body1" sx={classes.spanSummary}>{movie.plotOutline.text.split(".")[0]}</Typography>
                                    </Box>
                                </>
                            }
                        </>
                    }
                </Box>
                <Box sx={classes.boxTrailerMore}>
                    {movie.title.image &&
                        <Box sx={classes.ButtonTrailer}>
                            <PlayTrailer image={movie.title.image.url} id={movie.title.id} />
                        </Box>
                    }
                    <Link href={`/movies/${movie.title.id.slice(7, -1)}`}>
                        <Button variant='contained' color='error' sx={classes.buttonMore}>
                            More
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default ContentLg;