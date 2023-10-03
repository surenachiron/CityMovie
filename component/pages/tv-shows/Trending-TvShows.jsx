import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { HoverImage } from "../movies/styled-imagemovies";

const TrendingTvShows = ({ tvShows }) => {

    return (
        <>
            {tvShows.length <= 1 ?
                <>
                    <Typography variant="h5" component={"h2"} sx={{ mb: "7px" }}>Trending TV Shows</Typography>
                    <Box sx={{ position: "relative" }}>
                        <Box sx={{
                            WebkitOverflowScrolling: "touch", overflowY: "hidden", overflowX: "scroll", whiteSpace: "normal", boxSizing: "border-box", pb: "10px", display: "flex"
                        }} >
                            {tvShows.message === undefined || tvShows.length <= 1 ? tvShows.map((tvshow) => (
                                <Box key={tvshow.id.slice(7, -1)} sx={{ width: "140px", minWidth: "140px", m: "10px", p: "0", display: "inline-block" }}>
                                    <Link href={`/tv-shows/${tvshow.id.slice(7, -1)}`} style={{ width: "100%" }}>
                                        <Box sx={{
                                            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", width: "100%", height: "250px"
                                        }}>
                                            <Image
                                                src={tvshow.title.image.url}
                                                alt={tvshow.title.title}
                                                width={140}
                                                height={250}
                                                priority={true}
                                            />
                                            <HoverImage />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1">
                                                <bdi>{tvshow.title.title.length >= 13 ? tvshow.title.title.slice(0, 13) + "..." : tvshow.title.title}</bdi>
                                            </Typography>
                                        </Box>
                                    </Link>
                                </Box>
                            )) : ""}
                        </Box>
                    </Box >
                </>
                : ""}
        </>
    );
}

export default TrendingTvShows;