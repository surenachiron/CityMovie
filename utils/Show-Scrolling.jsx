import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import classes from "@/utils/Style-ShowScrolling";

const ShowScrolling = ({ movies, type }) => {

    return (
        <Box sx={classes.boxMainParent}>
            <Box sx={classes.boxSubParent} >
                {(movies.message === undefined || movies.length >= 1) &&
                    movies.map((movie) => (
                        <>
                            {movie &&
                                <div key={movie.id}>
                                    <Box key={movie.id} sx={classes.boxData}>
                                        <Link href={type === "tvSeries" ? `/tv-shows/${movie.id.slice(7, -1)}` : `/movies/${movie.id.slice(7, -1)}`} style={classes.link}>
                                            <Box sx={classes.boxImage}>
                                                <Image
                                                    src={movie.image ? movie.image.url : "/images/blur-image-svg.svg"}
                                                    alt={movie.title}
                                                    width={140}
                                                    height={250}
                                                    priority={true}
                                                    style={classes.image}
                                                    placeholder="blur"
                                                    blurDataURL="/images/blur-image.jpg"
                                                />
                                                <Box sx={classes.boxHoverImage} />
                                            </Box>
                                            <Box sx={classes.boxTitle}>
                                                <Typography variant="subtitle1">
                                                    <bdi>{movie.title.length >= 13 ? movie.title.slice(0, 13) + "..." : movie.title}</bdi>
                                                </Typography>
                                            </Box>
                                        </Link>
                                    </Box>
                                </div>
                            }
                        </>
                    )
                    )}
            </Box>
        </Box >
    );
}

export default ShowScrolling;