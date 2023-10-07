import { Box } from "@mui/material";
import Image from "next/image";

const ImageComminSoon = ({ movie }) => {

    return (
        <Box sx={{ width: { md: "60%", xs: "100%" }, height: "100%", position: "absolute", right: "0", }}>
            <Image
                src={movie.title.image ? movie.title.image.url : "/images/blur-image-svg.svg"}
                alt={movie.title ? movie.title.title : ""}
                width={500}
                height={450}
                style={{ width: "100%", height: "100%", borderRadius: "0 16px 16px 0" }}
                placeholder="blur"
                blurDataURL="/images/blur-image.jpg"
            />
        </Box>
    );
}

export default ImageComminSoon;