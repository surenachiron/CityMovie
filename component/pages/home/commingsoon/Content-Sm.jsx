import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import PlayTrailer from "../../movies/movie-detail/main-detail/Play-Trailer";

const ContentSm = ({ movie }) => {

    return (
        <Box sx={{ position: "absolute", bottom: "0", display: { xs: "flex", md: "none" }, width: "100%", justifyContent: "center", }}>
            <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "space-between", alignItems: "center", width: "85%", backgroundColor: "#00000070", backdropFilter: "blur(4px)", p: "10px", borderRadius: "10px", }}>
                <Box sx={{ textAlign: "start" }}>
                    <Typography variant='h5'>
                        {movie.title.title.length <= 22 ? movie.title.title : movie.title.title.slice(0, 20) + '...'}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <Typography variant='body1' sx={{ color: "#bbbbbb", my: "7px" }}>
                            {movie.releaseDate}
                        </Typography>
                        {movie.ratings ?
                            <Button variant='contained' color='warning' sx={{ width: "fit-content", minWidth: "auto", p: "0 4px", mx: "10px", cursor: "auto" }}>
                                {movie.ratings.rating}
                            </Button>
                            : ""}
                    </Box>
                    {movie.genres.length >= 4 ?
                        <>
                            {movie.genres.slice(0, 4).map((genre, item) => <Link href={`/category/${genre}`} key={item}><Typography variant="body1" sx={{ mr: "2px", display: "inline", color: "#bbbbbb" }}>{genre}{(item + 1) === 4 ? "" : ","}</Typography></Link>)}
                        </> :
                        <>
                            {movie.genres.map((genre, item) => <Link href={`/category/${genre}`} key={item}><Typography variant="body1" sx={{ mr: "2px", display: "inline", color: "#bbbbbb" }}>{genre}{(item + 1) === movie.genres.length ? "" : ","}</Typography></Link>)}
                        </>
                    }
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "end", height: "100%" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "start", height: "100%" }}>
                        {movie.title.image ?
                            <PlayTrailer image={movie.title.image.url} id={movie.title.id} />
                            : ""}
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "end", height: "100%" }}>
                        <Link href={`/movies/${movie.title.id.slice(7, -1)}`}>
                            <Button variant='text' color='inherit' sx={{ p: "4px", background: "red", backdropFilter: "blur(5px)", borderRadius: "25px" }}>More</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default ContentSm;