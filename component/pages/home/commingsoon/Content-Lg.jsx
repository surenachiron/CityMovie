import DurationExchange from "@/utils/DurationExchange";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import PlayTrailer from "../../movies/movie-detail/main-detail/Play-Trailer";

const ContentLg = ({ movie }) => {

    const beforeDot = {
        display: "flex", justifyContent: "center", alignItems: "center", ":before": {
            fontSize: "1em", lineHeight: '1', content: '"•"', width: "100%", height: "100%", display: "flex", mx: "6px"
        }
    }

    return (
        <Box sx={{ width: "100%", height: "100%", padding: '23px', position: "absolute", textAlign: "start", background: `linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 72%)`, borderRadius: "16px", display: { md: "flex", xs: "none" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", width: "100%" }}>
                <Box>
                    <Typography variant="h4">{movie.title.title.length <= 25 ? movie.title.title : movie.title.title.slice(0, 25) + "..."}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "start", alignItems: { lg: "center", xs: "start" }, flexDirection: "row", mt: "5px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {movie.certificates ?
                            <>
                                {movie.certificates.US[0] ?
                                    <span style={{ border: "1px solid gray", borderRadius: "5px", padding: "0 2px", marginRight: "6px", color: "gray" }}>
                                        {movie.certificates.US[0].certificate}
                                    </span>
                                    : ""}
                            </>
                            : ""}
                        <Typography variant="body1">
                            {movie.releaseDate.length !== 0 && movie.releaseDate !== undefined ? <>{movie.releaseDate}</> : ""}
                        </Typography>
                    </Box>
                    {movie.genres.length !== 0 && movie.genres !== undefined ?
                        <Box sx={beforeDot}>
                            {movie.genres.length >= 4 ?
                                <>
                                    {movie.genres.slice(0, 4).map((genre, item) => <Link href={`/category/${genre}`} key={item}><Typography variant="body1" sx={{ mx: "2px" }}>{genre}{(item + 1) === 4 ? "" : ","}</Typography></Link>)}
                                </> :
                                <>
                                    {movie.genres.map((genre, item) => <Link href={`/category/${genre}`} key={item}><Typography variant="body1" sx={{ mx: "2px" }}>{genre}{(item + 1) === movie.genres.length ? "" : ","}</Typography></Link>)}
                                </>
                            }
                        </Box>
                        : ""}
                    {movie.title.titleType === "movie" ? <>
                        {movie.title.runningTimeInMinutes ?
                            <Box sx={beforeDot}>
                                <DurationExchange duration={movie.title.runningTimeInMinutes} />
                            </Box>
                            : ""}
                    </> :
                        <>
                            {movie.title.numberOfEpisodes ?
                                <Box sx={beforeDot}>
                                    <Typography variant='body1'>{movie.title.numberOfEpisodes}<Box component={"span"} sx={{ ml: '5px' }}>Episodes</Box></Typography>
                                </Box>
                                : ""}
                        </>
                    }
                </Box>
                <Box sx={{ mt: "1rem", width: "50%" }}>
                    {movie.plotSummary ?
                        <>
                            <Typography variant="h6">Overview</Typography>
                            <Box>
                                <Typography variant="body1" sx={{ mt: "10px", color: "#c8c8c8", fontWeight: "400 !important", }}>{movie.plotSummary.text.split(".")[0]}</Typography>
                            </Box>
                        </>
                        :
                        <>
                            {movie.plotOutline ?
                                <>
                                    <Typography variant="h6">Overview</Typography>
                                    <Box>
                                        <Typography variant="body1" sx={{ mt: "10px", color: "#c8c8c8", fontWeight: "400 !important", }}>{movie.plotOutline.text.split(".")[0]}</Typography>
                                    </Box>
                                </>
                                : ""}
                        </>
                    }
                </Box>
                <Box sx={{ display: "flex", mt: "1rem", alignItems: "center", justifyContent: "center" }}>
                    {movie.title.image ?
                        <Box sx={{ mr: "1rem" }}>
                            <PlayTrailer image={movie.title.image.url} id={movie.title.id} />
                        </Box>
                        : ""}
                    <Link href={`/movies/${movie.title.id.slice(7, -1)}`}>
                        <Button variant='contained' color='error' sx={{ p: "4px", backdropFilter: "blur(5px)", }}>
                            More
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default ContentLg;