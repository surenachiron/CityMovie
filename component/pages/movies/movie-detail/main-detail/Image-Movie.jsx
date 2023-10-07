import Image from "next/image";
import { Box } from "@mui/material";

const ImageMovie = ({ image, title }) => {

    return (
        <Box sx={{ borderRadius: "20px", position: "relative", display: "block", width: { lg: "32%", md: "45%", sm: "50%", xs: "60%" }, height: { lg: "425px", xs: "350px" } }}>
            <Image
                src={image ? image : "/images/blur-image-svg.svg"}
                alt={title ? title : ""}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: "5px",
                }}
                placeholder="blur"
                blurDataURL="/images/blur-image.jpg"
                width={300}
                height={450}
            />
        </Box>
    );
}

export default ImageMovie;