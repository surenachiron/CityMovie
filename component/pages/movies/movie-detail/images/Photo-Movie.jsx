import Image from "next/image";
import { Box, Typography } from "@mui/material";
import classes from "./Style-PhotoMovie";

const PhotoMovie = ({ photos }) => {

    return (
        <Box sx={classes.boxParent}>
            <Typography variant="h4" sx={classes.titlePhotos}>Photos</Typography>
            <Box sx={classes.boxMainParent}>
                <Box sx={classes.boxSubParent} >
                    {photos.map(photo => (
                        <>{photo.url ?
                            <Box sx={classes.boxImage} key={photo.url}>
                                <Image
                                    src={photo.url}
                                    alt={photo.caption ? photo.caption : "image"}
                                    sizes="100vw"
                                    style={classes.image}
                                    placeholder="blur"
                                    blurDataURL="/images/blur-image.jpg"
                                    width={300}
                                    height={300}
                                />
                            </Box>
                            : ""}</>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default PhotoMovie;