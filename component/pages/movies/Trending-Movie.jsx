import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { HoverImage } from "./styled-imagemovies";

const TrendingMovie = ({ movies }) => {

    return (
        <>
            {movies.length <= 1 ?
                <>
                    <Typography variant="h5" component={"h2"} sx={{ mb: "7px" }}>Trending Movies</Typography>
                    <Box sx={{ position: "relative" }}>
                        <Box sx={{
                            WebkitOverflowScrolling: "touch", overflowY: "hidden", overflowX: "scroll", whiteSpace: "normal", boxSizing: "border-box", pb: "10px", display: "flex"
                        }} >
                            {movies.message === undefined || movies.length <= 1 ? movies.map((movie) => (
                                <Box key={movie.id.slice(7, -1)} sx={{ width: "140px", minWidth: "140px", m: "10px", p: "0", display: "inline-block" }}>
                                    <Link href={`/movies/${movie.id.slice(7, -1)}`} style={{ width: "100%" }}>
                                        <Box sx={{
                                            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", width: "100%", height: "250px"
                                        }}>
                                            <Image
                                                src={movie.image.url}
                                                alt={movie.title}
                                                width={140}
                                                height={250}
                                                priority={true}
                                            />
                                            <HoverImage />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1">
                                                <bdi>{movie.title.length >= 13 ? movie.title.slice(0, 13) + "..." : movie.title}</bdi>
                                            </Typography>
                                        </Box>
                                    </Link>
                                </Box>
                            )) : ""}
                        </Box>
<<<<<<< HEAD
                    </Box >
                </>
                : ""
            }
=======
                    )) : ""}
                </Box>
            </Box >
>>>>>>> 4c2422df47b68fb0e03342d6dc15ac632a08dd9f
        </>
    );
}

export default TrendingMovie;
