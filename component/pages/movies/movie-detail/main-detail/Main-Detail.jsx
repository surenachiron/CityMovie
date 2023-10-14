import { useEffect } from 'react'
import Link from "next/link";
import { useDispatch } from 'react-redux';
import ImageMovie from "./Image-Movie";
import DurationExchange from "@/utils/DurationExchange";
import { setTrailer } from '@/redux/reducers/trailerMovie';
import Rating from "@/utils/Rating";
import PlayTrailer from "./Play-Trailer";
import BackgroundMovie from "./Background-Movie";
import { Box, Typography } from "@mui/material";
import { BeforeDot, classes } from './Style-MainDetail';

const MainDetail = ({ movie }) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTrailer([]))
    }, [])

    return (
        <>
            <BackgroundMovie movie={movie}>
                <Box sx={classes.boxMainParent}>
                    <ImageMovie image={movie.title.image.url} title={movie.title.title} />
                    <Box sx={classes.boxSubParent}>
                        <Box sx={classes.boxSpanTitle}>
                            <Typography variant="h4">{movie.title.title}  {" "} <span style={classes.spanYear}>({movie.title.year})</span></Typography>
                        </Box>
                        <Box sx={classes.boxMainDetails}>
                            <Box sx={classes.boxCertificates}>
                                {movie.certificates &&
                                    <>
                                        {movie.certificates.US[0] &&
                                            <span style={classes.spanCertificate}>
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
                                <BeforeDot>
                                    {movie.genres.length >= 4 ?
                                        <>
                                            <Typography variant='body1' display={classes.spanTypeMovie}>Episodes : </Typography>
                                            {movie.genres.slice(0, 4).map((genre, item) =>
                                                <Link href={`/category/${genre}`} key={item}>
                                                    <Typography variant="body1" sx={classes.spanLinkCategory}>
                                                        {genre}{(item + 1) === 4 ? "" : ","}
                                                    </Typography>
                                                </Link>
                                            )}
                                        </> :
                                        <>
                                            <Typography variant='body1' display={classes.spanTypeMovie}>Genres : </Typography>
                                            {movie.genres.map((genre, item) =>
                                                <Link href={`/category/${genre}`} key={item}>
                                                    <Typography variant="body1" sx={classes.spanLinkCategory}>
                                                        {genre}{(item + 1) === movie.genres.length ? "" : ","}</Typography>
                                                </Link>
                                            )}
                                        </>
                                    }
                                </BeforeDot>
                            }
                            {movie.title.titleType === "movie" ? <>
                                {movie.title.runningTimeInMinutes &&
                                    <BeforeDot>
                                        <Typography variant='body1' sx={classes.spanTitleEpisodes}>
                                            Duration :
                                        </Typography>
                                        <Typography variant='body1'>
                                        <DurationExchange duration={movie.title.runningTimeInMinutes} />
                                            <Box component={"span"} sx={classes.boxEpisodes}>
                                                Hour
                                            </Box>
                                        </Typography>
                                    </BeforeDot>
                                }
                            </> :
                                <>
                                    {movie.title.numberOfEpisodes &&
                                        <BeforeDot>
                                            <Typography variant='body1' sx={classes.spanTitleEpisodes}>
                                                Episodes :
                                            </Typography>
                                            <Typography variant='body1'>
                                                {movie.title.numberOfEpisodes}
                                                <Box component={"span"} sx={classes.boxEpisodes}>
                                                    Episodes
                                                </Box>
                                            </Typography>
                                        </BeforeDot>
                                    }
                                </>
                            }
                        </Box>
                        <Box sx={classes.boxRatingTrailer}>
                            {movie.ratings.rating &&
                                <Box sx={classes.boxRating}>
                                    <Rating rate={movie.ratings.rating * 10} />
                                    <Box sx={classes.boxTextRating}>
                                        <Typography variant="body2">User</Typography>
                                        <Typography variant="body2">Score</Typography>
                                    </Box>
                                </Box>
                            }
                            <PlayTrailer image={movie.title.image.url} id={movie.title.id} />
                        </Box>
                        <Box sx={classes.boxOverview}>
                            {movie.plotSummary ?
                                <>
                                    <Typography variant="h6">Overview</Typography>
                                    <Box>
                                        <Typography variant="body1" sx={classes.spanOverview}>
                                            {movie.plotSummary.text.split(".")[0].length >= 30 ? movie.plotSummary.text.split(".")[0] : <>{movie.plotSummary.text.split(".")[1] && movie.plotSummary.text.split(".")[1]}</>}
                                        </Typography>
                                    </Box>
                                </>
                                :
                                <>
                                    {movie.plotOutline &&
                                        <>
                                            <Typography variant="h6">Overview</Typography>
                                            <Box>
                                                <Typography variant="body1" sx={classes.spanOverview}>
                                                    {movie.plotOutline.text.split(".")[0].length >= 30 ? movie.plotOutline.text.split(".")[0] : <>{movie.plotOutline.text.split(".")[1] && movie.plotOutline.text.split(".")[1]}</>}
                                                </Typography>
                                            </Box>
                                        </>
                                    }
                                </>
                            }
                        </Box>
                    </Box>
                </Box>
            </BackgroundMovie>
        </>
    );
}

export default MainDetail;