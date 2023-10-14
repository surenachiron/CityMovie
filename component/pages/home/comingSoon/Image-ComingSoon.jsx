import Image from "next/image";
import { Box } from "@mui/material";
import classes from "./Style-ImageComingSoon";

const ImageComingSoon = ({ movie }) => {

    return (
        <Box sx={classes.boxImageComingSoon}>
            <Image
                src={movie.title.image ? movie.title.image.url : "/images/blur-image-svg.svg"}
                alt={movie.title ? movie.title.title : "image"}
                width={500}
                height={450}
                style={classes.imageComingSoon}
                placeholder="blur"
                blurDataURL="/images/blur-image.jpg"
            />
        </Box>
    );
}

export default ImageComingSoon;