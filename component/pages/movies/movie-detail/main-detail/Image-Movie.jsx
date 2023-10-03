import { Box } from "@mui/material";
import Image from "next/image";

const ImageMovie = ({ image, title }) => {

    return (
        <Box sx={{ borderRadius: "20px", position: "relative", display: "block", width: { md: "32%", sm: "50%", xs: "80%" }, height: { lg: "450px", md: "350px", xs: "300px" } }}>
            <Image
                src={image}
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