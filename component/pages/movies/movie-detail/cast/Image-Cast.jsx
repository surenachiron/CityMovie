import { Box } from "@mui/material";
import Image from "next/image";

const ImageCast = ({ image, alt }) => {
    return (
        <Box sx={{ minHeight: "210px" }} key={alt}>
            <Image
                src={image ? image : "/images/ananymous.png"}
                alt={alt ? alt : ""}
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