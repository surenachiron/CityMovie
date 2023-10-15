import Image from "next/image";
import { Box } from "@mui/material";
import classes from "./Style-Casts";

const ImageCast = ({ image, alt }) => {
    return (
        <Box sx={classes.boxImageCast} key={alt}>
            <Image
                src={image ? image : "/images/anonymous.png"}
                alt={alt ? alt : "image"}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="/images/blur-image.jpg"
                width={140}
                height={210}
            />
        </Box>
    );
}

export default ImageCast;