import Image from "next/image";
import { Box } from "@mui/material";
import classes from './Style-ImageMovie'

const ImageMovie = ({ image, title }) => {

    return (
        <Box sx={classes.boxImageMovie}>
            <Image
                src={image ? image : "/images/blur-image-svg.svg"}
                alt={title ? title : "image"}
                sizes="100vw"
                style={classes.image}
                placeholder="blur"
                blurDataURL="/images/blur-image.jpg"
                width={300}
                height={450}
            />
        </Box>
    );
}

export default ImageMovie;