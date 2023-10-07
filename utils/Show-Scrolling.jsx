import { HoverImage } from "@/component/pages/movies/styled-imagemovies";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ShowScrolling = ({ movies,type }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Box sx={{
                WebkitOverflowScrolling: "touch", overflowY: "hidden", overflowX: "scroll", whiteSpace: "normal", boxSizing: "border-box", pb: "10px", display: "flex"
            }} >
                {movies.message === undefined || movies.length >= 1 ? movies.map((movie) => (
                    <>{movie ?
                        <div key={movie.id}>
                            <Box key={movie.id} sx={{ width: "140px", minWidth: "140px", m: "10px", p: "0", display: "inline-block" }}>
                                <Link href={type === "tvSeries" ? `/tv-shows/${movie.id.slice(7, -1)}` : `/movies/${movie.id.slice(7, -1)}`} style={{ width: "100%" }}>
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", width: "100%", height: "250px"
                                    }}>
                                        <Image
                                            src={movie.image ? movie.image.url : "/images/blur-image-svg.svg"}
                                            alt={movie.title}
                                            width={140}
                                            height={250}
                                            priority={true}
                                            style={{ borderRadius: "10px" }}
                                            placeholder="blur"
                                            blurDataURL="/images/blur-image.jpg"
                                        />
                                        <HoverImage />
                                    </Box>
                                    <Box sx={{ mt: "5px" }}>
                                        <Typography variant="subtitle1">
                                            <bdi>{movie.title.length >= 13 ? movie.title.slice(0, 13) + "..." : movie.title}</bdi>
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>
                        </div>
                        : ""}</>
                )) : ""}
            </Box>
        </Box >
    );
}

export default ShowScrolling;